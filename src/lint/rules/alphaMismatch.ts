import { isColorWithStates } from '../../build/helpers/cssHelpers.ts';
import type { ColorDescriptionStatic } from '../../interfaces/general/colors/index.ts';

function isAlphaColor(color: ColorDescriptionStatic): boolean {
  if (isColorWithStates(color)) {
    return isAlphaColor(color.normal) && isAlphaColor(color.hover) && isAlphaColor(color.active);
  }

  return color === 'transparent' || /^rgba\(/i.test(color);
}

export function checkAlphaMismatch(
  token: string,
  value: ColorDescriptionStatic,
  emit: (message: string) => void,
): void {
  if (!/color/i.test(token)) {
    return;
  }

  const isAlphaName = /Alpha|Overlay|Transparent/i.test(token);
  const isAlphaValue = isAlphaColor(value);

  if (isAlphaName !== isAlphaValue) {
    emit(
      `Color token type mismatch: ${isAlphaName ? 'alpha' : 'opaque'} token name but ${
        isAlphaValue ? 'alpha' : 'opaque'
      } value`,
    );
  }
}
