export const getFullNumber = (code: string, phone: string) => {
  return `${code} ${phone}`;
};

export const getDaysDifference = (date1: string | Date | number, date2: string | Date | number): number => {
  const d1 = new Date(date1);
  const d2 = new Date(date2);

  // Вычисляем разницу в миллисекундах
  const diffMs = Math.abs(d2.getTime() - d1.getTime());

  // Переводим в дни
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  return diffDays;
};
