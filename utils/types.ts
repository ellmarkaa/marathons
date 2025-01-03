import type {CSSProperties} from "vue";

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
}
