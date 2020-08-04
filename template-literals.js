const person = {
    firstName: 'Chuck',
    lastName: 'Norris',
    age: 80,
    note: 'bad ass'
};

let result = person.firstName + " " + person.lastName + " is " + person.age + " years old and is a " + person.note + "."

let betterResult = `${person.firstName} ${person.lastName} is ${person.age} years old and is a ${person.note}.`

let htmlElement = `
<div>
    <div>
        <div>
        </div
    </div>
</div>
    `

console.log(result)
console.log(betterResult)

console.log('result 1', result)
console.log('result 2', betterResult)
console.log(htmlElement)