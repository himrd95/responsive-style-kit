export const scaleValue = (
    value: number,
    scale: number,
    precision = 2
  ): number => {
    return parseFloat((value * scale).toFixed(precision));
  };
  