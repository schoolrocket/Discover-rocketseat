// for...in

let person = {
    name: 'Vug',
    age: 25,
    weight: 62.6
}

for(let property in person) {
    console.log(property)
    console.log(person[property])
}