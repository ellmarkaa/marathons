export enum CitizenValue {
  Kazakhstan = 'Kazakhstan',
  Uzbekistan = 'Uzbekistan',
  Russia = 'Russia',
}

export type CitizenshipType = {
  name_en: CitizenValue;
  name_kz: string;
  name_ru: string;
};

export const citizenshipList: CitizenshipType[] = [
  {
    name_en: CitizenValue.Kazakhstan,
    name_ru: 'Казахстан',
    name_kz: 'Қазақстан',
  },
  {
    name_en: CitizenValue.Uzbekistan,
    name_ru: 'Узбекистан',
    name_kz: 'Өзбекстан',
  },
  {
    name_en: CitizenValue.Russia,
    name_ru: 'Россия',
    name_kz: 'Россия',
  },
];

export const countryCodes = [
  {
    label: '+7',
    value: '+997', // Это для отличия кода России и Казахстана. Но в будущем Кз хочет перейти на этот код
    avatar: {
      src: '/imgs/circle-kazakhstan.jpg',
      alt: 'Kazakhstan',
    },
  },
  {
    label: '+998',
    value: '+998',
    avatar: {
      src: '/imgs/circle-uzbekistan.jpg',
      alt: 'Uzbekistan',
    },
  },
  {
    label: '+7',
    value: '+7',
    avatar: {
      src: '/imgs/circle-russia.png',
      alt: 'Russia',
    },
  },
];

export const tShirtSizes = ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL', '4XL'];
