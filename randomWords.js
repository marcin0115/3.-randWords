// Stwórz funkcję, która jako pierwszy argument przyjmuje tablicę wyrazów, a jako drugą wartość/frazę, którą chcemy znaleźć w tej tablicy
// Jeżeli szukana przez nas fraza istnieje w tablicy to funkcja ma zwrócić jej wartość, a także indeks(pozycję) w tablicy.
// Jeżeli szukana fraza nie istnieje to funkcja ma zwrócić informację, że szukanej frazy nie ma w tablicy.

const words = [
  "Anna",
  "Ewa",
  "Magda",
  "Iwona",
  "Kasia",
  "Ola",
  "Maria",
  "Karolina",
  "Paweł",
  "Rafał",
  "Jacek",
  "Michał",
  "Janusz",
  "Łukasz",
  "Piotr",
];

const randomWords = (words, value) => {
  const index = words.indexOf(value);
  return words[index] ? [index, value] : `Brak "${value}" w tablicy.`;
};

// console.log(randomWords(words, "Ewa"));
randomWords(words, "Ewa");
