import { CalendarDate, DateFormatter } from '@internationalized/date';

export const weekNames = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
export const monthNames = ['Янв', 'Фев', 'Март', 'Апр', 'Май', 'Июнь', 'Июль', 'Авг', 'Сен', 'Окт', 'Нояб', 'Дек'];

export const getDateTitle = (start: string, end: string) => {
  const startDate = new Date(start);
  const endDate = new Date(end);

  const month =
    startDate.getMonth() === endDate.getMonth()
      ? monthNames[startDate.getMonth()]
      : `${monthNames[startDate.getMonth()]} - ${monthNames[endDate.getMonth()]}`;

  return `${startDate.getDate()}-${endDate.getDate()} ${month}, ${startDate.getFullYear()} (${weekNames[startDate.getDay()]} - ${weekNames[endDate.getDay()]})`;
};

export function isoToCalendarDate(iso: string): CalendarDate {
  const d = new Date(iso);
  return new CalendarDate(d.getFullYear(), d.getMonth() + 1, d.getDate());
}

export const df = new DateFormatter('ru', {
  day: '2-digit',
  month: '2-digit',
  year: 'numeric',
});


export function formatRuMonthDay(date: string | undefined): string {
  if (!date) return '';

  const jsDate = new Date(date);

  const formatter = new Intl.DateTimeFormat('ru-RU', {
    month: 'long',
    day: 'numeric',
  });

  const [day, month] = formatter.format(jsDate).split(' ');
  let capitalizedMonth = '';

  if (month) capitalizedMonth = month.charAt(0).toUpperCase() + month.slice(1);

  return `${capitalizedMonth} ${day}`;
}

export const getYear = (date: string | undefined) => {
  if (!date) return '';
  const jsDate = new Date(date);
  return jsDate.getFullYear();
};
