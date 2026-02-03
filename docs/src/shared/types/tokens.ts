export type ValueType = 'regular' | 'compact';

export type RegularCompactObj = {
  regular?: string | number;
  compact?: string | number;
};

type TokenItemValueObject = {
  [key: string]: string | number | RegularCompactObj;
};

export type TokenItemValue = string | number | TokenItemValueObject;

export type Description =
  | {
      type: 'text';
      text: string;
    }
  | {
      type: 'link';
      url: string;
      text: string;
    };

export type TokenItem = {
  tags: Array<string>;
  desc: Description[];
  value: TokenItemValue;
};

export type Tokens = {
  [key: string]: TokenItem;
};

type ChipValue = string | number;

export interface ChipOption {
  value?: ChipValue;
  label?: string;
  [otherProp: string]: any;
}
