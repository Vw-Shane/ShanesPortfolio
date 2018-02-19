$(document).ready(function() {
            var quantity = 0;

            $('#carouselExampleIndicators').carousel({
                pause: "hover",
                wrap: true,
                // transitin_duration: 5000
            })
            $('.f1_container').click(function() {
                $(this).toggleClass('active');
            });

            $(".fa-plus-square").on("click", function(event) {
                    //prevents card flip 
                    event.stopPropagation();
                    quantity += 1;
                    console.log(quantity);
                    console.log($(this).parent().parent().parent().attr("id") + $(this).parent().parent().attr("class") );
                    // if ($(this).parent().parent().attr('id') === "image1") {
                    //     // if ($(this).parent().parent().attr('id') === "4x6")  {
                    //     // 	console.log($(this).parent().children() );                      }
                    // };
                    $(".HereHere").html("How many you have selected " + quantity);

            });

            $(".fa-minus-square").on("click", function(event){
            	event.stopPropagation();
            	quantity -=1;
            	
            	if (quantity<0) {
            		quantity=0;
            	}
            	console.log(quantity);
            	$(".HereHere").html("How many you have selected " + quantity);
            })
});