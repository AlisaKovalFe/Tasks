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

// function countDevelopers(list) {
//   let sum = 0
//   list.forEach((n) => {
//     if (n.continent == 'Europe' && n.language == 'JavaScript') {
//       sum++
//     }
//   }) 
//   return sum
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

// var list1 = [
//   { firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', continent: 'Europe', age: 29, language: 'Ruby' },
//   { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'Javascript' },
//   { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, language: 'JavaScript' }
// ];

// function isRubyComing(list) {
//    for (let i=0; i< list.length; i++) {
//     if (list[i].language == 'Ruby') {
//        return true
//     }
//   }
//  return false

// let q = false
// list.forEach((n) => {
//   if (n.language == 'Ruby') {
//       q = true
//   }
// }) 
// return q


// return list.some((n) => n.language == 'Ruby') 
// }

// console.log(isRubyComing(list1))

//4.

// var list1 = [
//   { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
//   { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
//   { firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' }
// ];

// function getFirstPython(list) {
// for (let i = 0; i < list.length; i++) {
//   if (list[i].language == 'Python') {
//       return `${list[i].firstName}, ${list[i].country}`
//   }   
// }  return 'There will be no Python developers'


// let dev = 'There will be no Python developers'

//   list.forEach((n) => {
//    if (n.language == 'Python') {
//       dev = n.firstName + ', ' + n.country
//     }  
//   })
//   return dev

// let lang = list.find((n) => n.language == 'Python')
// return (lang)? lang.firstName + ', ' + lang.country : 'There will be no Python developers'

// console.log(getFirstPython(list1))


//5.
// var list1 = [
//   { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
//   { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },
//   { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
//   { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C' },
// ];

// function countLanguages(list) {
//   let result = {}
//     for (i = 0; i < list.length; i++) {
//       let key = list[i].language

//       if (!result[key]) {
//         result[key] = 1
//       } else {
//         result[key]++
//       }
//     } return result


// list.forEach((item, index) => {
//   let key = item.language
//   if (!result[key]) {
//       result[key] = 1
//     } else {
//       result[key]++
//     }
// })
// return result



// let result = {}

//   list.forEach((item) => result[item.language] = (result[item.language] || 0) + 1
//   )
//   return result


// let a = list.reduce((acc, cur) => (!acc[cur.language] ? acc[cur.language] = 1 : acc[cur.language]++, acc) , {})
//   return a

//   }




// console.log(countLanguages(list1))


//6.

// var list1 = [
//   { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'JavaScript' },
//   { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'JavaScript' },
//   { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 65, language: 'JavaScript' },
// ];

// function isSameLanguage(list) {

// for (var i = 0; i < list.length; i++){
//   if (list[i].language !== list[0].language){
//   return false;
//   }
// }
// return true;


//   return list.every((n) => n.language == 'JavaScript')

// }


// let answer = true
//   list.forEach((n, index) => {

//      if (n.language != 'JavaScript' ) {
//       answer =  false
//     }    
//   })
//   return answer

// let answer = true
//   let lang = list[0].language
//   list.forEach((n) => {
//      if (n.language != list[0].language) {
//       answer =  false
//     }    
//   })
//   return answer

// console.log(isSameLanguage(list1))


//7. 

// var list1 = [
//   { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
//   { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 50, language: 'Python' },
//   { firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python' },
//   { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
// ];

// function findSenior(list) {
//   let arr = []
//   let oldestDev = list[0].age

// for (let i = 0; i < list.length; i++) {
//   if (list[i].age == oldestDev) {
//       arr.push(list[i])
//   } else if (list[i].age > oldestDev) {
//       oldestDev = list[i].age
//       arr = []
//       arr.push(list[i])
//   }
// } return arr



// let arr = []
// let old = list[0].age
// list.forEach((n) => {
//   if (n.age == old) {
//     arr.push(n)
//   } else if (n.age > old) {
//     old = n.age

//     arr = []
//     arr.push(n)
//   }
// })
// return arr

// let arr = []
// list.sort(function(o1, o2){
//   return o1.age - o2.age})  
// list.reverse()  

// oldest = list[0].age
// return list.filter((n) => (n.age == oldest))

// }
// console.log(findSenior(list1))


//8. 
// var list1 = [
// { firstName: 'Fatima', lastName: 'A.', country: 'Algeria', continent: 'Africa', age: 25, language: 'JavaScript' },
// { firstName: 'Agustín', lastName: 'M.', country: 'Chile', continent: 'Americas', age: 37, language: 'C' },
// { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
// { firstName: 'Laia', lastName: 'P.', country: 'Andorra', continent: 'Europe', age: 55, language: 'Ruby' },
// { firstName: 'Oliver', lastName: 'Q.', country: 'Australia', continent: 'Africa', age: 65, language: 'PHP' },
// { firstName: 'Fatima', lastName: 'A.', country: 'Algeria', continent: 'Africa', age: 25, language: 'JavaScript' },
// ];

// function allContinents(list) {

//   let arr = []
//   for (let i = 0; i < list.length; i++) {
//     arr.push(list[i].continent)
//   }

//   let uniq = new Set(arr)


//   return uniq.size === 5 ? true : false
// }


// let arr = []
//   list.forEach((n) => {
//     arr.push(n.continent)
//   })
//   let uniq = new Set(arr)

//   return uniq.size === 5 ? true : false


// let uniq = new Set(list.map((n) => n.continent)) 
// return uniq.size === 5 ? true : false


// let arr = []
//   for (let i = 0; i < list.length; i++) {
//     arr.push(list[i].continent)
//   }
//   console.log(arr)

//   return arr.includes('Africa' && 'Americas' && 'Asia' && 'Europe' && 'Oceania')


// let result = {}
//   let key 

//   for (let object in list) {
//      key = list[object].continent
//       result[key] = 1    
//   }

//   let arrKeys = Object.keys(result)  
//   if (arrKeys.length === 5) {
//     return true
//   } else {
//     return false
//   }


// через some every???

// console.log(allContinents(list1))

const longestString = (arr) => {
  /* Тут код*/
  if (arr.length === 0) return null
  console.log(arr)

  let max = 0
  let element = ''
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > max) {
      max = arr[i].length
      element = arr[i]
    }
  }
  return element

}





console.log(longestString(['kk', 'lll', 'j', 'gggg', 'g']));