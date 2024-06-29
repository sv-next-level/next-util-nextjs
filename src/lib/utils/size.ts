export function pixelTOPercentage(pixels: number, screen: number) {
  return (pixels / (screen || 1)) * 100;
}
