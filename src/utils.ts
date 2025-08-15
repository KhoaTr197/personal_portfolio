export function formatNumber(num: number, formatStr: string): string {
  if (!formatStr) return num.toString();

  const numStr = num.toString();
  let result = '';
  let digitIndex = numStr.length - 1; // Start from rightmost digit

  for (let i = formatStr.length - 1; i >= 0; i--) {
    const char = formatStr[i];

    if (char === 'd') {
      // Insert digit or pad with 0 if no more digits
      if (digitIndex >= 0) {
        result = numStr[digitIndex] + result;
        digitIndex--;
      } else {
        result = '0' + result;
      }
    }
  }

  // If there are remaining digits, prepend them
  while (digitIndex >= 0) {
    result = numStr[digitIndex] + result;
    digitIndex--;
  }

  return result;
}