const SHOP = (function () {

  let _bank = 1000;
  let amount = {
    _beerCount: 100,
    _beerPrice: 40,
    _vineCount: 50,
    _winePrice: 80,
    _pepsiCount: 80,
    _pepsiPrice: 20,
  }


  function sell(countB, countV, countP) {
    amount._beerCount -= countB;
    _bank += amount._beerPrice * countB;
    amount._vineCount -= countV;
    _bank += amount._beerPrice * countV;
    amount._pepsiCount -= countP;
    _bank += amount._beerPrice * countP;
  }

  function getStorage() {
    return _bank;

  }

  return {
    _bank : _bank ,
    _beerCount: amount._beerCount,
    _vineCount: amount._vineCount,
    _pepsiCount: amount._pepsiCount,
    getStorage: getStorage,
    sell: sell,
  }
}());

// // console.log('Bank' , SHOP.getBank() )
// console.log('Storage', SHOP.getStorage())

// SHOP.sell(20, 10, 0)
// // console.log('Bank' , SHOP.getBank() )

// console.log('Bank', SHOP.getStorage())
export {SHOP}