import type { FetchMarathonsParams } from '~/stores/marathon/types';

export type TagType = { label: string; value: any; param: keyof FetchMarathonsParams };
