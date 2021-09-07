function calcValues(a, b) {
    return [
        a + b,
        undefined,
        a * b,
        a / b
               
    ]
}
//!const result = calcValues(42, 10)
/*
const sum = result[0]// обращаемся к первому элементу массива(a+b) 
const sub = result[1]//обращаемся ко второму элементу массива(a-b) 
*/
//!const [sum, sub] = result// тоже самое что и строки 10 11
// todo от строчки 13 можно избавиться и записать в таком виде
const [sum, sub='Вычетания нет', zz, xx] = calcValues(42, 10)//sum это сумма, sub вычетание, zz умножение,xx деление, а числа 41 и 10 это параметры для массива calcValues
const[,,,l]=calcValues(2,4)//? запятые это место дл параметров которые мы не написали, то есть сложение, вычетание и умножение не будут выполнены, будет рабоатть только деление

const [...all] = calcValues(4,6)//создание нового массива который вывдете все значения


console.log(sum, sub, zz, xx)
console.log(l)
console.log(all)// вывод массива всех значений
console.log(...all)// вывод элементов  массива в строку


//! Строка 17
//  на ней мы задали значение по умолчанию для вычетания, оно будет использовано в том случае, если вычетание выполнить не удастся

//* Objects
const person = {
    name: 'Ivan',
    man:'Yes, I am man',
    age: 22,
    address: {
        country: 'Russia',
        city:'Moscow'
    }
}
const { name: firstName,
    age,
    car = 'Машины нет',
    address: {
    city : homeTown,// теперь вывод города проживания доступен по имени homeTown
        country }
} = person//todo идентично    const name = person.name; const age = person.age, а вот про машину не уверен что мы смогли бы так сделать в видео не было про это
console.log(firstName, age, car, homeTown, country)
const {name,...info}=person// с поомщью rest мы выведем только имя, всю остальную информацию засунем в info
console.log(name, info)
function logPerson({name:firstName='1111',man='Man better,heheeheh'}) {// на вход получаем объект, добавим имени значение по умолчание если оно не определено, и добавим значение мен как гендерное не равенство
    console.log(firstName+' '+age+' '+man)// выведет имя и возраст, и не надо указывать per.name достаточно просто name, так как работа идёт с объектами
    
}
logPerson(person)// передадим в функцию logPerson данные из объекта person

