const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const lowerCaseLetters = [
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
const upperCaseLetters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const specialCharacters = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "}",
  "[",
  "]",
  "|",
  "\\",
  ":",
  ";",
  "'",
  '"',
  ",",
  ".",
  "<",
  ">",
  "/",
  "?",
  "`",
  "~",
];

export function generatePassword(MAX_PASSWORD_LENGTH: number = 12,) {
  const allCharacters = [];
  const isNumbers = false;
  const isLowerCase = true;
  const isUpperCase = true;
  const isSpecialCharacters = true;

  if (isNumbers) allCharacters.push(...numbers);
  if (isLowerCase) allCharacters.push(...lowerCaseLetters);
  if (isUpperCase) allCharacters.push(...upperCaseLetters);
  if (isSpecialCharacters) allCharacters.push(...specialCharacters);

  allCharacters.sort(() => Math.random() - 0.5);
  const generatedPassword = allCharacters
    .slice(0, MAX_PASSWORD_LENGTH)
    .join("");

  return generatedPassword;
}

function init() {
  const password = generatePassword();
  console.log("password = ", password);
}

window.addEventListener("load", init);
