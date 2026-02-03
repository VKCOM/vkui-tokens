import type { Font, TypographyBaseProps } from '../../../interfaces/general/typography/index.ts';
import { helpers } from '../helpers/index.ts';

const { sizeBase } = helpers;

// базовые параметры шрифта
export const fontFamily: TypographyBaseProps['fontFamilyBase'] = 'Helvetica, Arial, sans-serif';
export const fontFamilyAccent: TypographyBaseProps['fontFamilyAccent'] =
  'MailSans, Helvetica, Arial, sans-serif';
export const fontWeight: TypographyBaseProps['fontWeightBase1'] = 400;
export const fontWeightBold: TypographyBaseProps['fontWeightAccent1'] = 700;
export const fontWeightAccent: TypographyBaseProps['fontWeightAccent2'] = 400;
export const fontWeightAccentBold: TypographyBaseProps['fontWeightAccent3'] = 500;

// шрифтовая шкала
const fontSize1: Font = {
  fontSize: 11,
  lineHeight: `${sizeBase * 3}px`,
  fontWeight,
  fontFamily,
};

const fontSize2: Font = {
  fontSize: 13,
  lineHeight: `${sizeBase * 5}px`,
  fontWeight,
  fontFamily,
};

const fontSize3: Font = {
  fontSize: 15,
  lineHeight: `${sizeBase * 5}px`,
  fontWeight,
  fontFamily,
};

const fontSize4: Font = {
  fontSize: 17,
  lineHeight: `${sizeBase * 6}px`,
  fontWeight,
  fontFamily,
};

const fontSize5: Font = {
  fontSize: 20,
  lineHeight: `${sizeBase * 7}px`,
  fontWeight,
  fontFamily,
};

const fontSize6: Font = {
  fontSize: 24,
  lineHeight: `${sizeBase * 8}px`,
  fontWeight,
  fontFamily,
};

const fontSize7: Font = {
  fontSize: 32,
  lineHeight: `${sizeBase * 10}px`,
  fontWeight,
  fontFamily,
};

const fontSize8: Font = {
  fontSize: 44,
  lineHeight: `${sizeBase * 13}px`,
  fontWeight,
  fontFamily,
};

export const fontSizes: {
  fontSize1: Font;
  fontSize2: Font;
  fontSize3: Font;
  fontSize4: Font;
  fontSize5: Font;
  fontSize6: Font;
  fontSize7: Font;
  fontSize8: Font;
} = {
  fontSize1,
  fontSize2,
  fontSize3,
  fontSize4,
  fontSize5,
  fontSize6,
  fontSize7,
  fontSize8,
};
