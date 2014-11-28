// Always have the .ready function in js file
$(document).ready(function(){

    // The button that trigers calculating total
    $("#calc-prices-button").click(function(){
      // create & define a function 
      var calcTotalPrice = function(){
        // do something
        var totalPrice = 0;
        // make a for loop
        for (var i=0; i < $("#items-list .item-price").length; i++){
          // do sth
          // this is wrong - totalPrice += $("#items-list .item-price")[i].text * $("#items-list .item-qty")[i].text; 
          // totalPrice += 1; 
          // get price with respective i
          var price = $("#items-list .item-price")[i];
          price = $(price).text();
          console.log(price);
          price = price.replace ("$"," ");
          price = Number(price);
          console.log(price);
          // get quantity with respective i
          var numQuantity = $("#items-list .item-qty .quantity ")[i];
          numQuantity = $(numQuantity).val();
          // if ($.isNumeric("354") === true) {}
          if ($.isNumeric(numQuantity) === true){
              console.log("it's a number");
            }
            else if (numQuantity === "") {
              console.log("it's blank");
            }
            else {
              alert("Please enter a valid number!");
            }
          console.log(numQuantity);

          //get totalPrice 
          console.log(totalPrice);
          totalPrice += (price * numQuantity);
          console.log(totalPrice);
        };
        $("#calc-prices-button").css('background-color', 'red');
        console.log(totalPrice);
        // replacing the total price column with the total price; 
        $("#total-price").text("$ " + totalPrice);
      };
      // call the function, when you click, it calculate total price
      calcTotalPrice();
    });
    
    $(".remove-button").bind("click",function(){
      // $(this).remove(); --> remove the clicked button only
      // $("#items-list.row").remove(); --> remove the whole page
      console.log("remove something");
    });
//closing .ready function 
});
