



// start loading page




$(window).on("load",function(){
    $(".load").hide()
    $(".contentPage").show()
    
  })
  
  // end loading page










// start navbar all width device

$(".collapseBtn").click(function() {
    $(".navWidthSmall").animate({"right":"0"},500)
 })
 
 $(".closeNavMobile").click(function() {
     $(".navWidthSmall").animate({"right":"-600"},500)
 })
 
 
 
 
 $(".toggle-icon").click(function() {
 
     if($(this).attr("toggleIcon") === "0") {
     $(".sub-menu:eq("+ $(".toggle-icon").index(this) +")").slideDown()
     $(this).children().attr("class","las la-minus")
         $(this).attr("toggleIcon","1")
     } else {
         $(".sub-menu:eq("+ $(".toggle-icon").index(this) +")").slideUp()
         $(this).children().attr("class","las la-plus")
             $(this).attr("toggleIcon","0")
     }
 
 })
 
 
 
 
 
 $(".toggle-inside-icon").click(function() {
 
     if($(this).attr("toggleInsideIcon") === "0") {
        $(".sub-menu-shopGrid:eq("+ $(".toggle-inside-icon").index(this) +")").slideDown()
        $(this).children().attr("class","las la-minus")
        $(this).attr("toggleInsideIcon","1")
     } else {
        $(".sub-menu-shopGrid:eq("+ $(".toggle-inside-icon").index(this) +")").slideUp()
        $(this).children().attr("class","las la-plus")
        $(this).attr("toggleInsideIcon","0")
     }
 
    
 })
 
 
 
 $(".item-nav-home").hover(function() {
     $(".iTemsDropdownHome").fadeToggle(500)
 })
 
 
 
 $(".item-nav-pages").hover(function() {
     $(".iTemsDropdownPages").fadeToggle()
 })
 
 $(".item-nav-blog").hover(function() {
     $(".iTemsDropdownBlog").fadeToggle()
 })
 
 
 $(".searchAreaBtn").click(function() {
     $(this).siblings().focus();
 })
 // end navbar all width device


 

// start increment and decrement product
var x = 1;
var priceProduct1 = parseFloat($(".multiplacion0 span").text());
var priceProduct2 = parseFloat($(".multiplacion1 span").text());
var priceProduct3 = parseFloat($(".multiplacion2 span").text());
var priceProduct4 = parseFloat($(".multiplacion3 span").text());



// console.log(priceProduct3);

// console.log(priceProduct2);


$(".dec-quan").click(function() {
    $(".inpu").text(Number($(".inpu").text()) - x)
    $(".tot:eq(0)").text(Number($(".inpu").text()) * priceProduct1); 
    if ($(".inpu").text() === "0") {
        $(".inpu").text(x)
    $(".tot:eq(0)").text(Number($(".inpu").text()) * priceProduct1); 
    }

})

$(".inc-quan").click(function() {
    $(".inpu").text(Number($(".inpu").text()) + x) 
    $(".tot:eq(0)").text(Number($(".inpu").text()) * priceProduct1); 

    if ( $(".inpu").text() == "6") {
        $(".inpu").text(x)
    $(".tot:eq(0)").text(Number($(".inpu").text()) * priceProduct1); 
    }        
})


$(".dec-quan1").click(function() {
    
    $(".inpu1").text(Number($(".inpu1").text()) - x)
    $(".tot:eq(1)").text(Number($(".inpu1").text() * priceProduct2))
   if ($(".inpu1").text() == "0") {
        $(".inpu1").text(x)
        $(".tot:eq(1)").text(Number($(".inpu1").text() * priceProduct2))
   }
})

$(".inc-quan1").click(function() {  


    $(".inpu1").text(Number($(".inpu1").text()) + x);

   $(".tot:eq(1)").text(Number($(".inpu1").text() * priceProduct2))

    if($(".inpu1").text() == "8") {
     $(".inpu1").text(x)
     $(".tot:eq(1)").text(Number($(".inpu1").text() * priceProduct2))

}
 })

 $(".dec-quan2").click(function() {
   $(".inpu2").text(Number($(".inpu2").text()) - x)
    $(".tot:eq(2)").text(Number($(".inpu2").text() * priceProduct3))
   if ($(".inpu2").text() == "0") {
        $(".inpu2").text(x)
     $(".tot:eq(2)").text(Number($(".inpu2").text() * priceProduct3))

   }
})

$(".inc-quan2").click(function() {
   $(".inpu2").text(Number($(".inpu2").text()) + x);
    $(".tot:eq(2)").text(Number($(".inpu2").text()) * priceProduct3);
        if( $(".inpu2").text() == "7") {
           $(".inpu2").text(x)
            $(".tot:eq(2)").text(Number($(".inpu2").text()) * priceProduct3);
        }
 })


 $(".dec-quan3").click(function() {
    
    $(".inpu3").text(Number($(".inpu3").text()) - x);
    
    $(".tot:eq(3)").text(Number($(".inpu3").text()) * priceProduct4)

    if ($(".inpu3").text() === "0") {
         $(".inpu3").text(x)
           $(".tot:eq(3)").text(Number($(".inpu3").text()) * priceProduct4)
    }
 })
 
 $(".inc-quan3").click(function() {
  
    $(".inpu3").text(Number($(".inpu3").text()) + x);
    
    $(".tot:eq(3)").text(Number($(".inpu3").text()) * priceProduct4)

    if ($(".inpu3").text() === "11") {
         $(".inpu3").text(x)
           $(".tot:eq(3)").text(Number($(".inpu3").text()) * priceProduct4)
    }
  })


$(".nUm").click(function() {
  var resultMinus = [];
  for (var ind = 0; ind < $(".tot").length; ind++) {
    resultMinus[ind] = Number($(".tot:eq("+[ind]+")").text())
  }
  $(".subToTal").text(resultMinus.reduce((num,elements) => num + elements).toFixed(2));
  $(".totalValue").text(resultMinus.reduce((num,elements) => num + elements).toFixed(2));
})



$(".sUm").click(function() {
    var resultPlus = [];
    for(var i = 0; i < $(".tot").length; i++ ) {        
        resultPlus[i] = Number($(".tot:eq("+[i]+")").text())
    }
        $(".subToTal").text( resultPlus.reduce((oldsum,element) => oldsum + element).toFixed(2));
         $(".totalValue").text( resultPlus.reduce((num,elements) => num + elements).toFixed(2));
    })


    // start remove product and discount total
    $(".remove-product").click(removeRow);

       
    

    function  removeRow()
{
                $(".alert-smooth").fadeIn(400);
                $(".contentPage").css({"opacity":"0.2"})

                var rEmOveIndeX = $(".tot:eq("+ $(".remove-product").index(this) +")").text();
                var toTaLSubResUlt = $(".subToTal");    
                var finAlResUlt = $(".totalValue");
                var texttoTaLResUlt = parseFloat(toTaLSubResUlt.text()) - parseFloat(rEmOveIndeX);
                var textfinAlResUlt = parseFloat(finAlResUlt.text() - parseFloat(rEmOveIndeX));
                var hiDERow = $(this).parent().parent();
                
                $(".alert-smooth button:eq(0)").click(function() {
                    toTaLSubResUlt.text(texttoTaLResUlt.toFixed(2));
                    finAlResUlt.text(textfinAlResUlt.toFixed(2))
                    $(".alert-smooth").fadeOut(100);
                    $(".contentPage").css({"opacity":"1"})
                    hiDERow.hide(1000)
                })       
                $(window).on("keydown",function(){
                    var  e = event.which;
                    if(e === 13) {
                        toTaLSubResUlt.text(texttoTaLResUlt.toFixed(2));
                        finAlResUlt.text(textfinAlResUlt.toFixed(2))
                        $(".alert-smooth").fadeOut(100);
                        $(".contentPage").css({"opacity":"1"})
                        hiDERow.hide(1000)
                    }
                    else if (e === 27) {
                        $(".alert-smooth").fadeOut(100);
                        $(".contentPage").css({"opacity":"1"})
                    }
                    })
}
        

    $(".alert-smooth i:eq(0),.alert-smooth button:eq(1)").click(closeAlert);
    $(window).on("mousedown",closeAlert);

    function closeAlert() {
        $(".alert-smooth").fadeOut(400);
        $(".contentPage").css({"opacity":"1"});
    }

     // end remove product and discount total
    



$(".nice-select").click(function() {
    if($(this).attr("tr") === "0") {
        $(".listcountry").slideDown();;
        $(this).attr("tr","1")
    $(".icon-transform i").css("transform","rotate(180deg)");

    } else {
        $(".listcountry").slideUp()
        $(this).attr("tr","0")
        $(".icon-transform i").css("transform","rotate(360deg)");
    }

})

var item = document.querySelectorAll(".list li");
var itemCurr = document.querySelectorAll(".list-curr li");


for (var i = 0; i < item.length; i++) {
    $(".list li").click(function(i) {
        $(".current").text($(this).text())
        $(".current").css("font-weight", "bold")
        $(".list li").removeClass("bold")
        $(this).addClass("bold");   

       $(".validate").attr("value",$(this).text())

    $(".listcountry").slideUp()   
    $(".icon-transform i").css({"transform":"rotate(360deg)"},3000)

    })
}



// start currncy

    $(".nice-select-curr").click(function() {
       


        if($(this).attr("tr") === "0") {
            $(".listcurrency").slideDown();;
            $(this).attr("tr","1")
        $(".icon-transform-1 i").css("transform","rotate(180deg)");
    
        } else {
            $(".listcurrency").slideUp()
            $(this).attr("tr","0")
            $(".icon-transform-1 i").css("transform","rotate(360deg)");
        }

    })


// end currency

for (var ind = 0; ind < itemCurr.length; ind++) {
    $(".list-curr li").click(function(ind) {
        $(".current-crr").text($(this).text())
        $(".list-curr li").removeClass("bold")
        $(this).addClass("bold")
        $(".current-crr").css("font-weight","bold")
        $(".validateCrr").attr("value",$(this).text() )
        $(".listcurrency").slideUp()
        $(".icon-transform-1 i").css("transform","rotate(360deg)");

    })
}

// end calculator dropdown item with currncy



