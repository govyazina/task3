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

