export type PaddingType = {
  left?: number;
  right?: number;
  top?: number;
  bottom?: number;
};

const paddingDictionary: Record<keyof PaddingType, string> = {
  bottom: 'pb',
  left: 'pl',
  top: 'pt',
  right: 'pr'
};

export const paddingToClass = (paddings: PaddingType): string => {
  let paddingString = '';

  for (const [key, value] of Object.entries(paddings)) {
    paddingString = paddingString + `${paddingDictionary[key as keyof PaddingType]}-${value} `;
  }

  return paddingString.trim();
};
