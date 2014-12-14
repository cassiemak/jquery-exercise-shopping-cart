// Always have the .ready function in js file
$(document).ready(function(){

    // Function that calculate the subtotal
    var calTotal = function(fprice,fquantity){
        var total = fprice * fquantity;
        return total;
    };
    // Function that checks whether input is a quantity 
    var checkNumber = function (robot){
          if ($.isNumeric(robot) === true){
              console.log("it's a number");
            }
            else if (robot === "") {
              console.log("it's blank");
            }
            else {
              alert("Please enter a valid number!");
            }
    }
    // The event and/or Function that triggers to calculate subtotal
    $("body").on("blur", ".quantity", function(){
      var indPrice = $(this).parent().parent().children(".item-price").text().replace("$", "");
      var indQty = $(this).val();
      var total = calTotal(indPrice, indQty);
      $(this).parent().parent().children(".subtotal").text("$" + total);
      console.log(total);
      calcTotalPrice();
    });
    // calculate total price function with a loop 
    var calcTotalPrice = function(){
      console.log("running.....");
      // do something
      var totalPrice = 0;
      // make a for loop
      for (var i=0; i < $("#items-list .item-price").length; i++){
        // do sth
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
        // check whether this is a number
        checkNumber(numQuantity); 
        console.log(numQuantity);
        //get totalPrice 
        console.log(totalPrice);
        totalPrice += (price * numQuantity);
        console.log(totalPrice);
      };
      // $("#calc-prices-button").css('background-color', 'red');

      // replacing the total price column with the total price; 
      $("#total-price").text("$ " + totalPrice);
    };
    // The button that trigers calculating total (delete the calculation button)
    $("#calc-prices-button").click(function(){
      // call the function, when you click, it calculate total price
      calcTotalPrice();
    });
    // The Remove button remove the entire item
    // $(".remove-button").bind("click",function(){
    $("body").on("click", ".remove-button", function(){
      // $(this).remove(); --> remove the clicked button only
      // $("#items-list.row").remove(); --> remove the whole page
      $(this).parent().parent().remove(); 
      calcTotalPrice();
      console.log("removed something");
    });

    // the function of adding new line/ item to the shopping cart
    var addNewitem = function(newItemName, newItemPrice){
      newItemPrice = parseInt(newItemPrice).toFixed(2);
      var whatToAdd; 
      whatToAdd = '\
      <div class="row">\
        <div class="item-name col-xs-2">\
          ' + newItemName + '\
        </div>\
        <div class="item-price col-xs-2">\
        $' + newItemPrice + '</div>\
        <div class="item-qty col-xs-4">\
          <label type="number" class="qty col-xs-6">QTY</label>\
          <input class="col-xs-6 quantity" placeholder="0">\
        </div>\
        <div class="subtotal col-xs-2">$0</div>\
        <div class="col-xs-2">\
        <button type="button" class="btn btn-sm btn-danger btn-sm remove-button">\
          REMOVE\
        </button>\
        </div>\
      </div>';
      $(".addNewHere").append(whatToAdd);
    };

    // the event the traggers adding a new item
    $(".addNew").click(function(){
      var itemName = $(".newItemName").val();
      var itemPrice = $(".newItemPrice").val();

      if ($.isNumeric(itemPrice) === true){
        addNewitem(itemName, itemPrice);
        $(".newItemName").val("");
        $(".newItemPrice").val("");
      } else {
        alert("This is not a valid number");
      };
      // console.log($(".newItemName").val());
      // console.log($(".newItemPrice").val());
      //reset value = nothing
    });

//closing .ready function 
});
