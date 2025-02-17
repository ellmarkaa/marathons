import type { CSSProperties } from 'vue';
import type { IField } from '~/stores/marathon/types';

export type ButtonTypes = 'filled' | 'outlined' | 'tonal';

export interface IDropdownItems {
  label: string;
  value: any;
}

export type ClassProp = string | string[] | Record<string, boolean>;

export type IconPropsType = {
  class?: ClassProp;
  style?: CSSProperties;
  width?: number;
  height?: number;
};

export interface IField {
  key: string;
  type: string;
  title: string;
}

export interface IDictionaryResponse<T> {
  dictionary: {
    'id': number;
    'project_id': number;
    'user_id': null;
    'source': 'dictionary';
    'x-data-type': 'list';
    'utm': [];
    'Name': string;
    'fields': Record<keyof T, IField>;
    'role': [];
    'created_at': string;
    'updated_at': string;
  };
  items: T[];
}
