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
