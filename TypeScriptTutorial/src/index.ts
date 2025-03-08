// -----------------------------------
// Intro to TypeScript
// -----------------------------------

// const firstName = 'mario'
// const age = 30
// let isFictionl: boolean

// isFictionl = true

// let myAge: number
// myAge = 30

// // myAge = '30'
// myAge = 30.5

// // age = 40

// let nullValue: null
// nullValue = null
// // nullValue = undefined

// let undefinedValue: undefined
// undefinedValue = undefined
// // undefinedValue = null

// console.log(firstName, age)
// console.log('hello World!!!');

// -----------------------------------
// Arrays
// -----------------------------------

// let names: string[] = ['mario', 'luigi', 'yoshi']
// let ages: number[] = [21, 20, 32]

// names.push('toad')
// ages.push(10)

// let fruits = ['apple', 'banana', 'orange']
// fruits.push('pear')

// const legend = names[1]

// let things = ['Pineapple', 30, true]

// const t = things[2]

// -----------------------------------
// Object Literals
// -----------------------------------

// let person: { name: string, age: number, isFictionl: boolean } 
//             = { name: 'mario', age: 30, isFictionl: true}

// person.name = 'luigi'

// // -----------------------------------
// // Type Inference from Object Literals
// // -----------------------------------

// let fighter = { name: 'Super-mario', score: 10}

// fighter.name = 'Super-luigi'
// fighter.score = 20

// // -----------------------------------
// // Functions
// // -----------------------------------

// function addNums(a: number, b: number) {
//     return a + b
// }

// const subtractNums = (a: number, b: number): number => {
//     return a - b
// }

// let sum = addNums(5, 10)
// let diff = subtractNums(10, 5)

// function addAllNums(items: number[]) {
//     return items.reduce((a, b) => a + b, 0)
// }
// let total = addAllNums([1, 2, 3, 4, 5])
// console.log(`total = ${total}`);

// const returnPoints = (player1: string, player2: string) => {
//     if(player1 === 'mario') {
//         return 10
//     } else if(player2 === 'luigi') {
//         return 20
//     }
//     return 'no points'
// }

// console.log(`points = ${returnPoints('honda', 'vespa')}`);

// const addTogather = (a: any): any => a + a

// console.log(`addTogather = ${addTogather(10)}`);
// console.log(`addTogather = ${addTogather('Hello')}`);

// -----------------------------------
// Tuple
// -----------------------------------

// let person: [string, number, boolean] = ['mario', 25, true]

// let xycord: [number, number]
// xycord = [94.01, 112.87]

// -----------------------------------
// Named Tuple
// -----------------------------------

// let player: [name: string, points: number]
// player = ['mario', 10]
// console.log(`player: ${player[0]} has ${player[1]} points`);

// -----------------------------------
// Interfaces
// -----------------------------------

// interface Author {
//     name: string,
//     avatar: string,
// }

// const authorOne: Author = {
//     name: 'mario',
//     avatar: './img/mario.png'
// }

// interface Post {
//     title: string,
//     body: string,
//     tags: string[],
//     created_on: Date,
//     author: Author
// }

// const postOne: Post = {
//     title: 'Post One',
//     body: 'This is post one body',
//     tags: ['tag1', 'tag2', 'tag3'],
//     created_on: new Date(),
//     author: authorOne
//     // author: {
//     //     name: 'luigi',
//     //     avatar: './img/luigi.png'
//     // }
// }

// const createPost = (post: Post): void => {
//     console.log(`created post is ${post.title} by ${post.author.name}`);
// }

// createPost(postOne)

// // -----------------------------------
// // Array of Interfaces
// // -----------------------------------

// let posts: Post[] = []

// posts.push(postOne)
// posts.push({
//     title: 'Post Two',
//     body: 'This is post two body',
//     tags: ['tagA', 'tagB', 'tagC'],
//     created_on: new Date(),
//     author: authorOne
// })

// posts.forEach((post, index) => {
//     console.log(`post[${index}] = ${post.title} by ${post.author.name} created on ${post.created_on}
//         tags: #${post.tags.join(', #')} avatar: ${post.author.avatar}`);
// });

// -----------------------------------
// Type Aliases
// -----------------------------------

// type Rgb = [number, number, number]

// const getRandomColor = (): Rgb => {
//     return [
//         Math.floor(Math.random() * 256),
//         Math.floor(Math.random() * 256),
//         Math.floor(Math.random() * 256)
//     ]
// }

// const colorOne: Rgb = getRandomColor()
// const colorTwo: Rgb = getRandomColor()

// console.log(`colorOne=${colorOne}, colorTwo=${colorTwo}`);

// // -----------------------------------
// // Type Aliases for Object Literals
// // -----------------------------------

// type User = {
//     name: string
//     score: number
// }

// const userOne: User = {
//     name: 'mario',
//     score: 30
// }

// const formatUser = (user: User): void => {
//     console.log(`name: ${user.name}, score: ${user.score}`);
// }

// formatUser(userOne)
// formatUser({ name: 'luigi', score: 40 })

// // -----------------------------------
// // Union Types
// // -----------------------------------

// let someId: string | number
// someId = '123'
// someId = 123

// let email: string | null
// email = null
// email = 'mario@anodiam.com'
// email = null

// // -----------------------------------
// // Union Types with Type Aliases
// // -----------------------------------

// type StringOrNumber = string | number

// let someValue: StringOrNumber
// someValue = '123'
// someValue = 123

// // -----------------------------------
// // Union Types and Type Guards (typeof)
// // -----------------------------------

// const printId = (id: string | number) => {
//     if(typeof id === 'string') {
//         return parseInt(id)
//     } else {
//         return id.toString()
//     }
// }

// const idOne = printId('123')
// const idTwo = printId(123)

// console.log(`idOne=${idOne}: ${typeof(idOne)}, idTwo=${idTwo}: ${typeof(idTwo)}`);

// // -----------------------------------
// // Type Guards (typeof)
// // -----------------------------------

// type Id = string | number

// const swapIdType = (id: Id) => {
//     if(typeof id === 'string') {
//         return parseInt(id)
//     } else {
//         return id.toString()
//     }
// }

// const idOne = swapIdType('123')
// const idTwo = swapIdType(123)

// console.log(`idOne=${idOne}: ${typeof(idOne)}, idTwo=${idTwo}: ${typeof(idTwo)}`);

// --------------------------------------------------------
// Type Guards with Interfaces (Tagged Interfaces)
// (typeof cannot be used with interfaces) 
// --------------------------------------------------------

// type Id = string | number

// interface User {
//     tYpe: 'user'
//     userName: string
//     email: string
//     id: Id
// }

// interface Person {
//     tYpe: 'person'
//     firstName: string
//     age: number
//     id: Id
// }

// const logDetails = (value: User | Person): void => {
//     if(value.tYpe === 'user') {
//         console.log(`${value.userName} is an ${value.tYpe} has ${value.id} id and email: ${value.email}`)
//     } else {
//         console.log(`${value.firstName} is a ${value.tYpe} has ${value.id} id and age: ${value.age}`)
//     }
// }

// const userOne: User = {
//     tYpe: 'user',
//     userName: 'mario',
//     email: 'dn@anodiam.com',
//     id: '123'
// }

// const personOne: Person = {
//     tYpe: 'person',
//     firstName: 'Sayan',
//     age: 30,
//     id: 123
// }

// logDetails(userOne)
// logDetails(personOne)