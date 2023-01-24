export type ColorHex = string;
export type ColorRGB = { r: number, g: number, b: number };

export const lightColor = "d0d2d4";
export const darckColor = "222222";

export const paletteHex = [
  "f94144",
  "f3722c",
  "f8961e",
  "f9844a",
  "f9c74f",
  "90be6d",
  "43aa8b",
  "4d908e",
  "577590",
  "277da1"
];

export const paletteSize = paletteHex.length;

export function hex2RGB(hexColor: ColorHex): ColorRGB {
  return {
    r: parseInt(hexColor.slice(0, 2), 16),
    g: parseInt(hexColor.slice(2, 4), 16),
    b: parseInt(hexColor.slice(4, 6), 16),
  };
}

export function calculateFgColor(hexColor: ColorHex): [clazz: string, value: ColorHex] {
  let {r, g, b} = hex2RGB(hexColor);
  var yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
  return (yiq >= 128) 
    ? ['light-bloc', darckColor] 
    : ['dark-bloc', lightColor];
}

export function pickColor(s: string): [index: number, value: string] {
  let index = Array.from(s)
    .reduce(
      (res: number, c:string) => res + c.charCodeAt(0), 
      0
    ) % paletteSize;
  return [index, paletteHex[index]];
}
