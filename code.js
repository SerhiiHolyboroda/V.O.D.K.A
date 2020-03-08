import {SHOP} from './shop.js' ;
 document.querySelector(".Menu__stats__Balance").innerHTML = `${SHOP.getStorage()}`;
 document.querySelector(".Menu__stats__Beer" ).innerHTML = `${SHOP._beerCount}`;
 document.querySelector(".Menu__stats__Vine").innerHTML = `${SHOP._vineCount}`;
 document.querySelector(".Menu__stats__Pepsi" ).innerHTML = `${SHOP._pepsiCount}`;


  
 
 let buttonPreview = document.querySelector('.Menu__buy__buttonPreview')
 buttonPreview.addEventListener('click', function(){
   
    let amountOf = document.querySelector('.Menu__buy__amountOf')
    let drinks=document.getElementsByName('drinks');
    for (let i=0;i<drinks.length; i++) {
        if (drinks[i].checked) {
          if(drinks[i].value == 'Beer' && SHOP._beerCount >= amountOf.value ){
              document.querySelector('.Menu__buy__preview').innerHTML += `<div>  ${drinks[i].value} ${amountOf.value} </div>`
             SHOP.sell(amountOf.value , 0, 0)
             document.querySelector(".Menu__stats__Balance").innerHTML = `${SHOP.getStorage()}`;
             document.querySelector(".Menu__stats__Beer" ).innerHTML = `${SHOP._beerCount-amountOf.value}`;
             

          } 
          if(drinks[i].value == 'Vine' && SHOP._vineCount >= amountOf.value ){
            document.querySelector('.Menu__buy__preview').innerHTML += `<div>  ${drinks[i].value} ${amountOf.value} </div>`
            SHOP.sell(0 , amountOf.value, 0)
            document.querySelector(".Menu__stats__Balance").innerHTML = `${SHOP.getStorage()}`;
            document.querySelector(".Menu__stats__Vine").innerHTML  =  ` ${SHOP._vineCount-amountOf.value}`  ;



 
          } 
         if(drinks[i].value == 'Pepsi' && SHOP._pepsiCount >= amountOf.value ){
          document.querySelector('.Menu__buy__preview').innerHTML += `<div> ${drinks[i].value} ${amountOf.value} </div>`;
           SHOP.sell(0 , amountOf.value, 0)
           document.querySelector(".Menu__stats__Balance").innerHTML = `${SHOP.getStorage()}`;
           document.querySelector(".Menu__stats__Pepsi" ).innerHTML  =   `${SHOP._pepsiCount-amountOf.value} ` ;
          } 
        
               
    }
     
   
}
// return{ 
//   _name: drinks[i].value ,
//   _amount: amountOf.value
// }
 
 })
 
document.querySelector('.Menu__buy__buttonBuy').addEventListener('click', function(){
  document.querySelector('.Menu__count').innerHTML =  document.querySelector('.Menu__buy__preview').innerHTML
})
 
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
 
