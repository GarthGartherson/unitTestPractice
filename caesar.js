function caesar(string, shift) {
  let alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  const newString = string
    .toLowerCase()
    .split("")
    .map((char) => {
      if (alphabet.indexOf(char) !== -1) {
        let index = (alphabet.indexOf(char) + shift) % 26;
        return alphabet[index];
      }
      return char;
    })
    .join("");
  return newString;
}

caesar("xyz", 3);

module.exports = caesar;
