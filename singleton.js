/* SINGLETON */

let mySingleton = (() => {
  // Instance stores a reference to the Singleton
  let instance;
  
  function init() {
    // Singleton
    // Private methods and variables - access in singleton instance, not outside
    function privateMethod() {
      console.log('I am private');
    }
    
    let privateVariable = 'I am also private';
    let privateRandomNumber = Math.random();
    
    return {
      // Public methods and variables
      publicMethod: () => {
        console.log('The public can see me!');
      },
      publicProperty: 'I am also public',
      getRandomNumber: () => {
        return privateRandomNumber;
      }
    }
  }
  return {
    // Get the Singleton instance if one exists or create one if it doesn't
    getInstance: () => {
      if (!instance) {
        instance = init();
      }
      return instance;
    }
  }
})();

let singleA = mySingleton.getInstance();
let singleB = mySingleton.getInstance();

singleA.publicMethod();

console.log(singleA.publicProperty);

let rndA = singleA.getRandomNumber();
let rndB = singleB.getRandomNumber(); // same instance of singleton like A
console.log(rndA === rndB);
console.log(rndA, '===', rndB);
