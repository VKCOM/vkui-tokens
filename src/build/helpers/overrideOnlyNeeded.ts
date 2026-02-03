export function overrideOnlyNeeded<T extends Record<string, any> = Record<string, any>>(
  targetObject: T,
  overrideObject: Record<string, any>,
): T {
  const targetCopy = JSON.parse(JSON.stringify(targetObject));
  return Object.keys(targetObject).reduce((acc, key) => {
    if (key in overrideObject) {
      acc[key] = overrideObject[key];
    }

    return acc;
  }, targetCopy);
}
