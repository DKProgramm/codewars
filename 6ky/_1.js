/**
 * Строка считается заглавной, если каждое слово в строке либо (а) написано заглавной буквой (то есть только первая буква слова в верхнем регистре), либо (б) считается исключением и полностью помещается в строчными буквами, если только это не первое слово, которое всегда пишется с большой буквы.

Напишите функцию, которая преобразует строку в заглавный регистр, учитывая необязательный список исключений (второстепенные слова). Список второстепенных слов будет представлен в виде строки, где каждое слово отделено пробелом. Ваша функция должна игнорировать регистр строки второстепенных слов — она должна вести себя так же, даже если регистр строки второстепенных слов изменен.

Аргументы (Хаскель)
Первый аргумент : список второстепенных слов, разделенных пробелами, которые всегда должны быть в нижнем регистре, за исключением первого слова в строке.
Второй аргумент : исходная строка для преобразования.
Аргументы (другие языки)
Первый аргумент (обязательный) : исходная строка для преобразования.
Второй аргумент (необязательный) : список второстепенных слов, разделенных пробелами, которые всегда должны быть в нижнем регистре, за исключением первого слова в строке. Тесты JavaScript/CoffeeScript будут пройдены, undefinedесли этот аргумент не используется.
Пример
titleCase('a clash of KINGS', 'a an the of') // should return: 'A Clash of Kings'
titleCase('THE WIND IN THE WILLOWS', 'The In') // should return: 'The Wind in the Willows'
titleCase('the quick brown fox') // should return: 'The Quick Brown Fo
 */

function titleCase(title = "", minorWords = "") {
  let arrTitle = title.split(" ");
  //let minorWords = minorWords.toLocaleLowerCase();


  let resString = "";
  for (let i = 0; i < arrTitle.length; i++) {
    let tempArrWord = [];

    if (i == 0) {
      tempArrWord = arrTitle[i].split("");
      tempArrWord[0] = tempArrWord[0].toUpperCase();
      resString += tempArrWord.join("");
      continue;
    }
    console.log(minorWords.toLocaleLowerCase().split(" "));
    if (minorWords.toLocaleLowerCase().split(" ").includes(arrTitle[i])) {
      resString = resString + " " + arrTitle[i];
      console.log('')
    } else {
      tempArrWord = arrTitle[i].split("");
      tempArrWord[0] = tempArrWord[0].toUpperCase();
      resString = resString + " " + tempArrWord.join("");
    }
  }
  return resString;
}
console.log(titleCase("миру мир", "пир тир Мир"));
