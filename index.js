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