/**
 * Методы массивов
 */

const myName = `Иван Иванов`;

console.log(myName.includes("Иван"));
console.log(myName.startsWith("Ив"));
console.log(myName.endsWith("во"));

const filePath = [
  "controller/users.controller.ts",
  "controller/auth.controller.ts",
  "controller/auth.controller.js",
  "service/auth.controller.js",
  "service/auth.controller.js",
  "controller/auth.controller.js",
  "controller/auth.controller.py",
  "controller/proxy.controller.ts",
];

const filteredTsPath = filePath.filter((el) => el.endsWith(".ts"));
const filteredServices = filePath.filter((el) => el.startsWith("service"));

console.log(myName.toUpperCase());
console.log(myName.toLowerCase());

/**
 *
 * [users]
 * username
 * Вася Мишкин
 * Вася ГРИШИН
 * Вася АААААА
 * васек ВВВВВ
 */

const myInputForm = "  myLoginAnd.   PAsss.      ";

const users = ["ВасЯ", "ВаСя", "ВАСЯ", "вася", "Вааааа", "Андрей"];

const NAME = "Вася";
const filtedVasya = users.filter(
  (username) => username.toLowerCase() === NAME.toLowerCase(),
);

const FULL_NAME = "Вася_Ванин_AKA_Vasya_AAA";

/** Пример регулярного выражения
 * /^((http|https|ftp):\/\/)?(([A-Z0-10][A-Z0-9_-]*)(\.[A-Z0-10][A-Z0-9_-]*)+)/i
 */

console.log(FULL_NAME.replace("_", "+"));

console.log(FULL_NAME.replace(/_/g, "+"));

console.log(FULL_NAME.replaceAll("_", "+"));
