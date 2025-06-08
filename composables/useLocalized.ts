import { useI18n } from 'vue-i18n';

export function useLocalized() {
  const { locale } = useI18n();

  const get = <T extends Record<string, any>>(obj: T, baseKey: string): string => {
    const suffix = locale.value;
    const key = `${baseKey}_${suffix}`;
    return obj[key] || obj[`${baseKey}_ru`] || '';
  };

  return { get };
}
