const opacityToHex = (color: string, opacity: number) => {
  const decimal = `0${Math.round(255 * (opacity / 100)).toString(16)}`
    .slice(-2)
    .toUpperCase();
  return color.slice(0, 7) + decimal;
};

export default opacityToHex;
