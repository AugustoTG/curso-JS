function fizzBuzz(num){
  if(num%3 === 0 && num%5 === 0){
    console.log('FizzBuzz')
  }else if(num%3 === 0 ){
    console.log('Fizz')
  } else if(num%5 === 0 ) {
    console.log('Buzz')
  } else if(num%5 !== 0 ) {
    console.log(num)
  }
}
fizzBuzz(25);