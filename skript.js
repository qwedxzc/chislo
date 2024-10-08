console.log("Я загадал число от 1 до 10. Угадай его!")

let secretNumber = Math.floor(Math.random() * 10) + 1;
let poptki = 3

while (poptki > 0){
    let userNumber = Number(prompt('Введите число:'));


    if(userNumber < secretNumber){
        console.log("Секретное число больше");
        poptki = poptki - 1
    } else if (userNumber === secretNumber){
        console.log("Вы выйграли!")
        break
        
    }else{
        console.log("Секретное число меньше");
        poptki = poptki - 1
}
    console.log("У вас осталось попыток:", poptki);

}