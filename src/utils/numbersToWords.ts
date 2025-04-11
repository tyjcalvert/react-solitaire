export function numberToWords(num: number): string {
  if (num === 0) return "zero";

  const belowTwenty: string[] = [
    "",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ];

  const tens: string[] = [
    "",
    "",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];

  function helper(n: number): string {
    if (n < 20) return belowTwenty[n];
    if (n < 100)
      return (
        tens[Math.floor(n / 10)] + (n % 10 ? "-" + belowTwenty[n % 10] : "")
      );
    if (n < 1000)
      return (
        belowTwenty[Math.floor(n / 100)] +
        " hundred" +
        (n % 100 ? " " + helper(n % 100) : "")
      );
    if (n < 1_000_000)
      return (
        helper(Math.floor(n / 1000)) +
        " thousand" +
        (n % 1000 ? " " + helper(n % 1000) : "")
      );
    return ""; // For now, we’re limiting it to < 1 million
  }

  return helper(num);
}
