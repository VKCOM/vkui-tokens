import type { TokenItemValue } from '../../../src/shared/types';

export function isExist(obj: unknown, key: string): boolean {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

export function isColor(content: TokenItemValue): boolean {
  const s = new Option().style;
  s.color = String(content);
  return s.color !== '';
}
