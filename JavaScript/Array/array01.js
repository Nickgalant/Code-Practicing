let num = [5, 8, 2, 9, 3]
num[5]= 6 
num.push(7, 1)
let pos = num.indexOf(2)
if(pos < 0) {
    console.log('O valor não foi encontrado.')
} else {
    console.log(`O valor está na posição ${pos}`)
}
num.sort()
for (let p in num) {
    console.log(num[p])
}