class Worker{
 constructor(firstName , secondName, rate, days){
    this.name = firstName  ;
    this.sname = secondName ;
    this.rate = rate ;
    this.days = days ;
 }
get getSelary(){
  return this.rate * this.days
}
}
const worker1 = new Worker('ivan','oleg', 22, 7)
const worker2 = new Worker('oleg','ivan', 18, 6)
console.log(worker1.name)
console.log(worker1.sname)
console.log(worker1.rate)
console.log(worker1.days)
console.log(worker1.getSelary)


console.log(worker2.name)
console.log(worker2.sname)
console.log(worker2.rate)
console.log(worker2.days)
console.log(worker2.getSelary)

console.log(worker1.getSelary + worker2.getSelary)
 

class MyString{
  // constructor(YourString){
  //  this.YourString = YourString ;
  // }
  reverse(YourString){
    this.YourString = YourString;
      
    //  newString  +=  YourString[YourString.length-1]
    //  console.log('herestart',YourString[YourString.length-1])
    //  console.log('herestart', newString )
    let newString  = '' ;
    for(   let i = YourString.length    ;  newString.length <= this.YourString.length ;      ){
      
      i--
      newString  +=  YourString[i]
      
      console.log(newString.indexOf('undefined') )
      if(newString.indexOf('undefined') >= 0){
     let f =  newString.slice(  YourString.length ,  -1);
     
      console.log('here f', f)
    }
      console.log(`${newString}`)
    }
   
  }
  usFirst(YourString){
    this.YourString = YourString;
     
return (`${this.YourString[0].toUpperCase()}${this.YourString.slice(1, -1)}`)
  }
  usWords(YourString){
    this.YourString = YourString;
    return YourString.split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join(' ')
    // +1).toUpperCase()
 
// }
}
}
// const mystring = new MyString('')
 const str = new  MyString();
console.log(str.usFirst('dasdasa'))
console.log(str.reverse('1234567890'))
console.log(str.usWords('hello hi hi hello hi'))