export const getOnlyColors = (theme: Record<string, any>): any => {
  return Object.keys(theme).reduce<Record<string, any>>((acc, key) => {
    const value = theme[key];
    if (typeof value === 'object' && 'normal' in value) {
      acc[key] = value;
    }
    return acc;
  }, {});
};
