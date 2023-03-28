// 1
// Заполните массив следующим образом: в первый элемент запишите '1',
//     во второй '22', в третий '333' и так далее.

const task1 = (end) => {
    const arr = []
    for (let i = 1; i <= end; i++) {
        const k = String(i)
        arr.push(k.repeat(i))
    }
    return arr
}

console.log('задача 1: ' + task1(5))

// 2
// Дан массив с числами. Узнайте сколько элементов с начала массива
// надо сложить, чтобы в сумме получилось больше 10-ти.

const task2 = (arr) => {
    let sum = 0
    let i = 0
    while (sum < 10) {
        sum += arr[i]
        i++
    }
    return i
}

console.log('задача 2: ' + task2([2,2,4,5,5,5]))

// 3
// Напишите функцию, которая очищает массив от нежелательных значений,
//     таких как false, undefined, пустые строки, ноль, null.
//     Ожидаемый результат:
//     [0, 1, false, 2, undefined, '', 3, null] => [1, 2, 3]

const task3 = (arr) => {
   return arr.filter(el => el)
}

console.log('задача 3: ' + task3([0, 1, false, 2, undefined, '', 3, null]))

// 4
// Напишите функцию, которая возвращает объект, составленный из
// значений вложенных массивов. Первое элемент массива - ключ,
// второй - зачение.
//     Ожидаемый результат: [['a', 1], ['b', 2]] => { a: 1, b: 2 }

const task4 = (arr) => {
    return arr.reduce((acc, el) => {
        acc[el[0]] = el[1]
        return acc
    }, {})
}

console.log('задача 4: ', task4([['a', 1], ['b', 2]]))

// 5
// Напишите функцию, возвращает новый массив без предоставленных значений.
//     Ожидаемый результат: [1, 2, 3, 1, 2] без 1, 2 => [3]

const task5 = (arr, a, b) => {
    return arr.filter(el => el !== a && el !== b)
}

console.log('задача 5: ', task5([1, 2, 3, 1, 2], 1, 2))

// 6
// Напишите функцию, которая убирает повторяющиеся значения.
//     Ожидаемый результат: [1, 2, 3, 1, 2] => [1, 2, 3]

const task6 = (arr) => {
    const newArr = []
    const obj = {}
    for (let i = 0; i < arr.length; i++) {
       if (!obj[arr[i]]) {
           obj[arr[i]] = 1
           newArr.push(arr[i])
       }
    }
    return newArr
}

console.log('задача 6: ', task6([1, 2, 3, 1, 2]))