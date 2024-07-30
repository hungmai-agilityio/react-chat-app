import { memo, ReactNode } from 'react';
import { clsx } from 'clsx';

// FontAwesome
import {
  IconDefinition,
  faArrowLeft,
  faTimes
} from '@fortawesome/free-solid-svg-icons';

// Constants
import { SIZE, TYPE } from '@/constants';

// Component
import Icon from '@/components/Button/Icon';
import Button from '@/components/Button';

export interface ModalProps {
  isOpen: boolean;
  onCloseModal?: () => void;
  title?: string;
  btnPrimary?: string;
  onClick?: () => void;
  icon?: IconDefinition;
  children?: ReactNode;
  onReturn?: () => void;
  styles?: string;
}

const Modal = ({
  isOpen,
  title,
  btnPrimary,
  onCloseModal,
  onClick,
  icon,
  children,
  onReturn,
  styles
}: ModalProps) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-fog bg-opacity-50">
          <div
            className={clsx('bg-white w-modal h-modal shadow-modal', styles)}
          >
            <div className="border-b border-gray-300">
              <div className="flex justify-between items-center relative m-1">
                {onReturn ? (
                  <Icon icon={faArrowLeft} onClick={onReturn} />
                ) : (
                  <Icon icon={faTimes} onClick={onCloseModal} />
                )}
                <p className="absolute left-1/2 transform -translate-x-1/2 font-semibold text-dark w-40 truncate text-center">
                  {title}
                </p>
                <div className="flex items-center">
                  {btnPrimary && (
                    <Button
                      name={btnPrimary}
                      onClick={onClick!}
                      size={SIZE.SMALL}
                      variant={TYPE.PRIMARY}
                    />
                  )}
                  {icon && <Icon icon={icon} onClick={onClick} />}
                </div>
              </div>
            </div>
            {children}
          </div>
        </div>
      )}
    </>
  );
};
const MemoizedModal = memo(Modal);
export default MemoizedModal;
