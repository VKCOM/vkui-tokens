type MapReplace = {
  [Key: string]: any;
};

export function replacePropDeep<T extends Record<string, any>>(
  object: T,
  mapReplace: MapReplace,
): T {
  return Object.entries(object).reduce((acc, [key, value]: [keyof T, any]) => {
    if (typeof value === 'object' && !(key in mapReplace)) {
      acc[key] = replacePropDeep<any>(value, mapReplace);
      return acc;
    }

    if (key in mapReplace) {
      acc[key] = mapReplace[key as any];
    } else {
      acc[key] = value;
    }
    return acc;
  }, {} as T);
}
