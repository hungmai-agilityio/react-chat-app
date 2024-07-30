
/**
 * Function convert date time to string
 * @param {string} time_stamp
 * @returns {string}
 */
export const timeStampConversion = (time_stamp: string): string => {

  const date = new Date(time_stamp);
  const today = new Date();

  const isToday =
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear();

  //Format date time
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();

  if (isToday) {
    return `${hours}:${minutes}`;
  }
  return `${day}.${month}.${year}`;
};

/**
 * Convert file image to base64
 * @param {Blob} file
 * @returns Promise of result
 */
export const convertBase64 = (file: Blob) => {

  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  })
};