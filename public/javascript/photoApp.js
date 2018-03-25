$(document).ready(function() {
    var quantity = 0;
    var itemList = [];

    // slide show

    $('#carouselExampleIndicators').carousel({
        pause: "hover",
        wrap: true,
        // transitin_duration: 5000
    });

    //flip cards

    $('.f1_container').click(function() {
        $(this).toggleClass('active');
    });

    //+ sign logic

    $(".fa-plus-square").on("click", function(event) {
        //prevents card flip 
        event.stopPropagation();
        quantity += 1;
        console.log(quantity);
        itemList.push($(this).parent().parent().parent().attr("id") + $(this).parent().parent().attr("class"));
        console.log(itemList);
        $(".HereHere").html(" &nbsp; Items selected: " + quantity);


    });
    //this is dummy code for future database logic 
    $(".fa-plus-square").on("click", function(event) {
        $.getJSON("/all", function(data) {
            console.log(data);
        });
    });

    $(".fa-minus-square").on("click", function(event) {
        event.stopPropagation();
        var subtractMe = $(this).parent().parent().parent().attr("id") + $(this).parent().parent().attr("class");

        if ($.inArray(subtractMe, itemList) != -1) {
            quantity -= 1;
            for (var i = itemList.length - 1; i >= 0; i--) {
                if (itemList[i] === subtractMe) {
                    itemList.splice(i, 1);
                    break;       //<-- Uncomment  if only the first term has to be removed
                }
            }
        } else {
            console.log("item not selected");
        }

        if (quantity < 0) {
            quantity = 0;
        }
        console.log(subtractMe);
        $(".HereHere").html(" &nbsp; Items selected: " + quantity);
    });






});