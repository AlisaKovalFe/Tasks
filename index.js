// Решение задач на объекты из CodeWars
// 1.
// var list = [
//     { firstName: 'Noah', lastName: 'M.', country: 'Switzerland',     continent: 'Europe', age: 19, language: 'JavaScript' },
//     { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Europe', age: 28, language: 'JavaScript' },
//     { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
//     { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
// ]

  // function countDevelopers(list) {
  //   let sum = 0
  //   for (let i=0; i < list.length; i++) {
  //     if (list[i].continent == 'Europe' && list[i].language == 'JavaScript') {
  //         sum += 1
  //     }
  //   } return sum
  // }
// function countDevelopers(list) {
//     return list.filter((n) => n.continent == 'Europe' && n.language == 'JavaScript').length
//     // console.log(list)
// }

// console.log(countDevelopers(list))

// 2.

// var list1 = [
//     { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
//     { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
//     { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
//   ];
  
  // function greetDevelopers(list) {
  //   for (let i =0; i < list.length; i++) {
  //     list[i].greeting = 'Hi ' + list[i].firstName + ', what do you like the most about ' + list[i].language + '?'
  //   } return list
  // }



// function greetDevelopers(list) {

  //  list.forEach((item) => { 
  //   item.greeting = 'Hi ' + item.firstName + ', what do you like the most about ' + item.language + '?'    
  //   })
  //   return list
    
    // list.map((n) => n.greeting = 'Hi ' + n.firstName + ', what do you like the most about ' + n.language + '?')
    // return list
  // }
  
  // console.log(greetDevelopers(list1))
  


// 3.

var list1 = [
  { firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', continent: 'Europe', age: 29, language: 'Ruby' },
  { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'Javascript' },
  { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, language: 'JavaScript' }
];

function isRubyComing(list) {
  for (let i = 0; i < list.length; i++) {
    if (list[i].language == 'Ruby') {
      return true
    }
  } return 

  // list.forEach((item) => {
  //   if (item.language === 'Ruby') {
  //    return 
  //     } 
  // }) 
  // return true


 // return list.some((n) => n.language == 'Ruby') 
}

console.log(isRubyComing(list1))