let words = ['рыба', 'программист', 'тигр', 'автомобиль', 'синхрофазатрон']; //создаем массив слов
let word = words[Math.floor(Math.random() * words.length)]; // сохраняем в переменную word слово из массива words
let answerArry = []; // создаем итоговый массив в котором будет размещено слово для отгадывание в виде подчеркиваний 


for (let i = 0; i < word.length; i++) { //по завершению этого цикла длинна answerArry будет такой же, как длина слова
    answerArry[i] = '_';                // еслы было выбрано слово рыба, answerArry примет вид ['_', '_', '_', '_']
}
//
//
let remainingLatters = word.length; 
// приравниваем переменную к длине загаданного слова. Каждый раз когда игрок отгадывает букву мы ее будем декрементировать.
while (remainingLatters > 0) {
    alert(answerArry.join(' ')); // объединяем массив answerArry и добавляем пробел между подчеркиваниями (буквами)
    let guess = prompt ('Угадай букву или нажми Отмена для выхода из игры!'); //окно ввода буквы 
    if (guess === null) {
        break; //можно использовать для немедленного выхода из любого цикла
    }else if (guess.length !==1) { //проверяем, что ввели одну букву
        alert('Можно ввести только одну букву.'); // если ввели больше одной буквы выводит alert
    } else {
        for (let j = 0; j < word.length; j++) {
            if (word[j] === guess) { //слово сравнивается с буквой которую мы ввели
                answerArry[j] = guess; //если есть совпадение, буква заносится на свое место (т.к. переменная j одинакова для word и answerArry)
                remainingLatters--; // декремент переменной
            }
        }
    }

}
alert("Отлично! Было загадано слово " + word + '!');