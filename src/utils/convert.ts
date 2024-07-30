
/**
 * Function format date
 * @param {Date} day
 * @param {Date} timeline
 */
const formatDate = (day: Date, timeline: Date) => {
  return (
    day.getDate() === timeline.getDate() &&
    day.getMonth() === timeline.getMonth() &&
    day.getFullYear() === timeline.getFullYear()
  );
};

/**
 * Function convert date time to string
 * @param {string} time_stamp
 * @returns {string}
 */
export const timeStampConversion = (time_stamp: string): string => {

  const date = new Date(time_stamp);
  const today = new Date();

  const isToday = formatDate(date, today)

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

/** Function to format dates
 * @param {Date} date
 *
 * @returns {string}
 **/
export const DateConversion = (date: Date): string => {
  const today = new Date();
  const yesterday = new Date();
  yesterday.setDate(today.getDate() - 1);

  if (formatDate(date, today)) {
    return 'Today';
  }

  if (formatDate(date, yesterday)) {
    return 'Yesterday';
  }

  return date.toDateString();
};