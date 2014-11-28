// Always have the .ready function in js file
$(document).ready(function(){

  // $("#item-list").item("price")
  // $("#item-list").item("qty")
  // $("#items-list .item-price")[i]* $("#items-list .item-qty")[i]
  // $("#item-list").children('item-price') 
  // $("#item-list > item-price") 
      //   var caltotalPrice = function (for i=0; i < $("items-list").length; i++;) {
    //   var totalPrice += $("#items-list .item-price")[i]* $("#items-list .item-qty")[i]; 
    //   return totalPrice; 
    //   }

    $("#calc-prices-button").click(function(){
      // create a function (when you click, it calculate total price)
      var calcTotalPrice = function(){
        // do something
        var totalPrice = 0;
        
        // make a for loop
        for (var i=0; i < $("items-list.children.item-price").length; i++){
          // do sth
          // totalPrice += $("#items-list .item-price")[i]* $("#items-list .item-qty")[i]; 
          totalPrice += 1; 
          console.log(totalPrice);
        };
        // return totalPrice; 
        $("#calc-prices-button").css('background-color', 'red');
        console.log(totalPrice);
      };
      // call the function
      calcTotalPrice();
      // console.log(totalPrice);

    });
//closing .ready function 
});