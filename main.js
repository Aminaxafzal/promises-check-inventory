const {checkInventory, processPayment, shipOrder} = require('./library.js');

const order = {
    items: [['sunglasses', 1], ['bags', 2]],
    giftcardBalance: 79.82
  };


const handleSuccess = (resolve) => {
  console.log(resolve);

};

const handleFailure = (rejection) => {
  console.log(rejection);
};

checkInventory(order).then(handleSuccess,handleFailure); 


checkInventory(order)
.then((resolvedValueArray) => {
 return processPayment(resolvedValueArray);
})
.then((resolvedValueArray) => {
  return shipOrder(resolvedValueArray)
  
})
.then((successMessage) => {
  console.log(successMessage);
})
.catch((errorMessage) => {
  console.log(errorMessage);
});


// Promise.all

const onFulfill = (itemsArray) => {
    console.log(`Items checked: ${itemsArray}`);
    console.log(`Every item was available from the distributor. Placing order now.`);
  };
  
  const onReject = (rejectionReason) => {
      console.log(rejectionReason);
  };
  
  // Write your code below:
  
  
  const checkSunglasses = checkAvailability('sunglasses', 'Favorite Supply Co.');
  
  const checkPants = checkAvailability('pants', 'Favorite Supply Co.');
  
  const checkBags  = checkAvailability('bags' ,'Favorite Supply Co.' );
  
  Promise.all([checkSunglasses, checkPants, checkBags])
  .then(onFulfill)
  .catch(onReject); 