

// Exercise 2

/*let tree ="#"

for (let i = 0; i < 8; i++)
{
console.log(tree.repeat(i))
}*/

// Exercise 3

/*for (let i = 1; i <= 100; i++) {

if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz")
    
} else if (i % 3 === 0) {
    console.log("Fizz")
    
} else if (i % 5 === 0) {
    console.log("Buzz") 
    
} else {
    console.log(i)
    
}
}*/

// Exercise 4

/*function min(num,num2) {

    let smaller = num<num2 ? num : num2
    return smaller
}

console.log(min(0, 10))
console.log(min(0, -10))*/

//Exercise 5

/*function countBs(string) {
    let count = 0
    for (let i = 0; i < string.length; i++) {
        if (string[i] === "B") {
            count += 1
        }
        
    }
    return count
}

console.log(countBs("BBC"))

function countChar(string, char) {
    let count = 0
    for (let i = 0; i < string.length; i++) {
        if (string[i] === char) {
            count += 1
        }
        
    }
    return count
}
    
console.log(countChar("kakkerlak", "k"))*/

//Exercise 6

/*function range(num,num2) {
   const numbers = []
   for (let i = num; i <= num2; i++) {
       numbers.push(i)
   }
   return numbers
}

console.log(range(1,10))

function sum(numbers) {
    let total = 0
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i]
    }
    return total
}

console.log(sum(range(1, 10)))*/

function range2(num,num2,num3 =num < num2 ? 1 : -1) {
    const numbers = []
  if (num3 > 0) {
    for (let i = num; i <= num2; i += num3) {
      numbers.push(i)
    }
  } else {
    for (let i = num; i >= num2; i += num3) {
      numbers.push(i)
    }

}
return numbers
}
console.log(range2(1,10,2))
console.log(range2(5,2,-1))