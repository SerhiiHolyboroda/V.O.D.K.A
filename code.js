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
 
 
