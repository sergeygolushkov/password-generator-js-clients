function getRandomFromString(letters: string): string {
  return letters.charAt(Math.floor(Math.random() * letters.length));
}

export function getRandomNumber(): string {
  const chars = '0123456789';
  return getRandomFromString(chars);
  // return Math.floor(Math.random() * 10).toString();
}

export function getRandomUpperCaseLetter(): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return getRandomFromString(chars);
}

export function getRandomLowerCaseLetter(): string {
  const chars = 'abcdefghijklmnopqrstuvwxyz';
  return getRandomFromString(chars);
}

export function getRandomSpecialLetter(): string {
  const chars = '!"#$%&\'()*+,.-_/;:<>=?@[]\\^`{}|~';
  return getRandomFromString(chars);
}

export function getRandomArray(
  length: number,
  randomFunction: () => string
): string[] {
  const arr = [];
  for (let i = 0; i < length; i++) {
    arr.push(randomFunction());
  }
  return arr;
}
