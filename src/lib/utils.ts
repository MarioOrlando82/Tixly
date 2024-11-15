import TicketEnum from '../enums/ActivityEnum';

export function formatToRupiah(value: number | string | undefined) {
  if (value === undefined) {
    return '0';
  }

  const numberValue =
    typeof value === 'string' ? convertToNumber(value) : value;

  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(numberValue);
}

function convertToNumber(x: string): number {
  const retVal = parseInt(x);
  return retVal;
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);

  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'long' });
  const year = date.getFullYear();
  const weekday = date.toLocaleString('default', { weekday: 'long' });

  const daySuffix = (day: number): string => {
    if (day > 3 && day < 21) return 'th';
    switch (day % 10) {
      case 1:
        return 'st';
      case 2:
        return 'nd';
      case 3:
        return 'rd';
      default:
        return 'th';
    }
  };

  return `${weekday}, ${day}${daySuffix(day)} ${month} ${year}`;
}

/*--
  Three functions below used for Notification Page.
  1. parseStrDate
  2. getTimeDifference
  3. isToday
--*/
function parseStrDate(strDate: string): Date {
  const cleanedDateStr = strDate.replace(/(\d{1,2})(st|nd|rd|th)/, '$1');

  const dateParts = cleanedDateStr.split(' | ');
  const [dayString, timeString] = dateParts;

  const formattedDate = dayString + ' ' + timeString.replace('.', ':');
  const parsedDate = new Date(formattedDate);

  if (isNaN(parsedDate.getTime())) {
    throw new Error('Invalid date format');
  }

  return parsedDate;
}

export function getTimeDifference(strDate: string): string {
  const targetDate = parseStrDate(strDate);
  const now = new Date();
  const diffInMs = now.getTime() - targetDate.getTime();

  const msInMinute = 60 * 1000;
  const msInHour = 60 * msInMinute;
  const msInDay = 24 * msInHour;
  const msInMonth = 30 * msInDay;
  const msInYear = 12 * msInMonth;

  if (diffInMs < msInHour) {
    const minutes = Math.floor(diffInMs / msInMinute);
    return `${minutes} minute${minutes === 1 ? '' : 's'} ago`;
  } else if (diffInMs < msInDay) {
    const hours = Math.floor(diffInMs / msInHour);
    return `${hours} hour${hours === 1 ? '' : 's'} ago`;
  } else if (diffInMs < msInMonth) {
    const days = Math.floor(diffInMs / msInDay);
    return `${days} day${days === 1 ? '' : 's'} ago`;
  } else if (diffInMs < msInYear) {
    const months = Math.floor(diffInMs / msInMonth);
    return `${months} month${months === 1 ? '' : 's'} ago`;
  } else {
    const years = Math.floor(diffInMs / msInYear);
    return `${years} year${years === 1 ? '' : 's'} ago`;
  }
}

export function isToday(strDate: string): boolean {
  const targetDate = parseStrDate(strDate);
  const now = new Date();

  return (
    targetDate.getDate() === now.getDate() &&
    targetDate.getMonth() === now.getMonth() &&
    targetDate.getFullYear() === now.getFullYear()
  );
}

export function getFilterLabel(filter: string) {
  switch (filter) {
    case 'All':
      return 'All';
    case TicketEnum.CONCERT:
      return 'Concert';
    case TicketEnum.MOVIE:
      return 'Movie';
    case TicketEnum.TOURIST_ATTRACTION:
      return 'Attraction';
    default:
      return filter;
  }
}

/*---


---*/
export function changeBlobToUrl(picture: File) {
  let url = '';
  if (picture) {
    let blob = new Blob([picture], {
      type: 'image/jpeg',
    });
    url = URL.createObjectURL(blob);
  }
  return url;
}

export const createBlobFromImage = async (imagePath: string): Promise<Blob> => {
  try {
    const response = await fetch(imagePath);
    const blob = await response.blob();
    return blob;
  } catch (error) {
    console.error('Error creating Blob from image:', error);
    throw error;
  }
};

export function normalizeId(id: bigint): number {
  const normalizedId = id.toString().replace('n', '');
  return Number(normalizedId);
}
