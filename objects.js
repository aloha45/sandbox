const game = {
    title: 'Guess the number!',
    biggestNum: 10,
    smallestNum: 1,
    numGuesses: 0,
    secretNumber: null,
    play: function(){
        this.secretNumber = Math.floor(Math.random() * (this.biggestNum -
        this.smallestNum + 1) + this.smallestNum);
        return this.secretNumber
    }
}



// iterate over keys and values

// for (let key in game) {
//     console.log(`the value of the ${key} property is ${game[key]}`)
// }

// Object.values(game).forEach(function(val){
//     console.log(val)
// })

// const keys = Object.keys(game)

// keys.forEach(function(key){
//     console.log(key)
// })

// game.play = function(){

// }

// console.log(game)

// const obj = {
//     something: 'What is up with you'
//     anotherThing: 'Here it is'
// }

// if (obj.something) {
//     console.log('ok cool')
// }
// if (obj.anotherThing){
//     console.log('Nada!')
// }else{
//     console.log('Nope not that')
// }

// const adventurer = {
//     name: 'Timothy',
//     hitpoints: 10,
//     belongings: ['sword', 'potion', 'Tums'],
//     companion: {
//         name: 'Velma',
//         type: 'Bat',
//         companion: {
//             name: 'Tim',
//             type: 'Parasite',
//         }
//     }
// }

// console.log(adventurer.belongings[2])

// for (let i = 0, i < adventurer.belongings.length; i++){
//     console.log(adventurer.belongings[i])
// }

// console.log(adventurer.companion.companion.name)