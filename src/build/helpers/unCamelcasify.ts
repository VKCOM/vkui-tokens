import { SIZE_SUB_GROUP } from './convertCamelToSnake.ts';

// 2Xs, 3Xs, 4S
const REPLACE_REGEXP = new RegExp(`(?:^\\w|${SIZE_SUB_GROUP}|[A-Z]|\\b\\w)`, 'g');

export function unCamelcasify(str: string, delimeter = '-'): string {
  return str
    .replace(REPLACE_REGEXP, (letter) => `${delimeter}${letter.toLowerCase()}`)
    .replace(new RegExp(`^${delimeter}`), '');
}
