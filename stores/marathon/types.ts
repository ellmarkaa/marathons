export interface IMarathonState {
  sliderMarathons: ISliderMarathon[];
}

export interface ISliderMarathon {
  'id': number;
  'contact_id': null;
  'country': {
    scalar: '';
  };
  'end_date': string;
  'pictures': {
    scalar: '';
  };
  'title.en': string;
  'title.kz': string;
  'title.ru': string;
  'start_date': string;
  'marathon_url': string;
  'marathon_date': string;
}

export interface ISliderResponse {
  dictionary: {
    'id': number;
    'project_id': number;
    'user_id': null;
    'source': 'dictionary';
    'x-data-type': 'list';
    'utm': [];
    'Name': string;
    'fields': {
      'country': {
        key: 'country';
        type: 'object';
        title: 'Страна';
      };
      'end_date': {
        key: 'end_date';
        type: 'string';
        title: 'Дата и время окончания показа';
      };
      'pictures': {
        key: 'pictures';
        type: 'object';
        title: 'Изображения';
      };
      'title.en': {
        key: 'title.en';
        type: 'string';
        title: 'Title';
      };
      'title.kz': {
        key: 'title.kz';
        type: 'string';
        title: 'Аты';
      };
      'title.ru': {
        key: 'title.ru';
        type: 'string';
        title: 'Заголовок';
      };
      'start_date': {
        key: 'start_date';
        type: 'string';
        title: 'Дата и время начала показа';
      };
      'marathon_url': {
        key: 'marathon_url';
        type: 'string';
        title: 'Ссылка на марафон';
      };
      'marathon_date': {
        key: 'marathon_date';
        type: 'string';
        title: 'Дата марафона';
      };
    };
    'role': [];
    'created_at': '2024-12-24 20:37';
    'updated_at': '2024-12-24 20:37';
  };
  items: ISliderMarathon[];
}
