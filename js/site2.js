//Display Main Block menu on left or second navbar at the top
$(window).scroll(function(){
    x = "#navMain.navbar";
    y = "#nav2.navbar";

    if($(window).scrollTop() > 100) {
        if(jQuery(window).width() > 769)
        {
            $(x).hide(300);
            $(y).show();
        }
    }
    if($(window).scrollTop() < 100) {
        if(jQuery(window).width() > 769) {
            $(x).show(300);
            $(y).hide();
        }
    }
    if($(window).scrollTop() < 100) {
        if(jQuery(window).width() < 769) {
            $(x).hide(300);
            $(y).show();
        }
    }
});
//If resized on laptop, if display is < 769 then hide Main Block menu on left and show second navbar at the top
$(window).resize(function () {
    x = "#navMain.navbar";
    y = "#nav2.navbar";
    if (jQuery(window).width() < 769) {
        $(x).hide(300);
        $(y).show();
    } else {
        $(x).show(300);
        $(y).hide();
    }

});

/*Slides the Multiple restaurant section out of view*/
function slide(){
        $("#dinerslidermulti").hide( "slide", { direction: "left"  }, 2000 );
}

/*Show the Multiple restaurant section with the map of Hamilton Road*/
function showMulti() {
    f = document.getElementById("iframeDefault");
    /*f.src = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d23352.021858605738!2d-81.19115881237627!3d42.97821608481709!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882ef2bc610051db%3A0x9ee450ff08d2bb1a!2sHamilton+Road%2C+London%2C+ON!5e0!3m2!1sen!2sca!4v1521647521250";*/
f.src = "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d23353.162965938463!2d-81.18994306894366!3d42.97521130918276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sca!4v1521649188820";
    $("#dinerslidermulti").show( 500 );
    //$("#dinerslidersingle").show( 500 );
    multiIn = document.getElementById("singleDish");
    multiIn.innerHTML = "";
}


/*Hide the Multiple restaurant section and show the choice of restaurant on the homepage*/
function hideMulti(num) {
    var f = "";
    var multiOut = "";
    //Restaurant image (restaurant1[0]), alt/title 1, name 2, summary 3, url 4, facebook 5, twitter 6, instagram 7, youtube 8, subpage link 9
    var restaurant1 = ["ResturantSection.jpg",
                        "King Of Pigs restaurant feature dish",
                        "KING OF PIGS",
                        "The name King of the Pigs is translated from Rei dos Leitoes in Portuguese, which actually means King of the Piglets. The Rei dos Leitoes name first became popular in Bairrada, Portugal. Where the main focus was to roast piglets, making the region well known for its unique style, Leitao a Bairrada. Amongst the Portuguese people this is considered the best way to roast piglets.",
                        "kingofthepigs.com",
                        "#", "#", "#", "#",
                        "/kingofpigs.php"];


    switch(num) {

        case 0:
            //KING OF PIGS
            //Load default Google Map address into id=iframeDefault
            f = document.getElementById("iframeDefault");
            f.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5837.954280925394!2d-81.20765489750987!3d42.97875517699193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882ef2884a348b4d%3A0x3198520311b69d08!2sKing+of+the+Pigs!5e0!3m2!1sen!2sca!4v1521059087622";

            //hide the multi restaurant display
            $("#dinerslidermulti").hide( 500 );
            //Load empty div id=singleDish innerHTML with single dish image (600 x 500) & text
            multiOut = document.getElementById("singleDish");
            multiOut.innerHTML = "<div onclick=\"showMulti()\" class=\"col-md-6 dinerpad sideImage\">\"" +
                //Restaurant image and image alt/title here
                "<img class=\"img-fluid cursor\" src=\"img/" + restaurant1[0] + "\" alt=\"" + restaurant1[1] + " title=\"" + restaurant1[1] + "></div>" +
                //Restaurant name/summary etc here
                "<div class=\"col-md-6 sliderSingleText upperBlock\">" +
                //Restaurant summary information here
                "<div class=\"cpl-top\"><h3>" + restaurant1[2] + "</h3><hr><p>" + restaurant1[3] + "</p></div>" +
                "<div class=\"col-md-12 cpl-mid\"><a href=\""+restaurant1[4]+"\">"+restaurant1[4]+"</a></div>" +
                "<div class=\"col-md-8 cpl-social\"><a href=\""+restaurant1[5]+"\"><i class=\"fab fa-facebook-square fa-2x\"></i></a><a href=\""+restaurant1[6]+"\"> <i class=\"fab fa-twitter-square fa-2x\"></i></a></div>" +
                "<div class=\"col-md-4 cpl-btm\"><a href=\""+restaurant1[9]+"\" class=\"button\">Specialty Dish</a></div>" +
                //Closing div
                "</div>";

            //multiOut.innerHTML = "<div onclick=\"showMulti()\" class=\"row\"><div class=\"col-md-6\"><img src=\"img/ResturantSection.jpg\" alt=\"Eat Hamilton Road Logo\" title=\"Eat Hamilton Road Logo\"</div><div class=\"col-md-6\"><img class=\"img-fluid\" src=\"img/ResturantSection.jpg\" alt=\"Eat Hamilton Road Logo\" title=\"Eat Hamilton Road Logo\"</div></div>";



            break;
        case 1:
            //INTERNATIONAL BAKERY
            //Load default Google Map address into id=iframeDefault
            var f = document.getElementById("iframeDefault");
            f.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2918.810687212413!2d-81.23157498483003!3d42.98226137914994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882ef26d365b754d%3A0xfdfd4b163edfdfb!2sInternational+Bakery!5e0!3m2!1sen!2sca!4v1521139657980";

            //hide the multi restaurant display
            $("#dinerslidermulti").hide( 500 );
            //Load empty div id=singleDish innerHTML with single dish image & text
            multiOut = document.getElementById("singleDish");
            multiOut.innerHTML = "<div onclick=\"showMulti()\" class=\"col-md-6 dinerpad\">\n" +
                "<img class=\"img-fluid cursor\" src=\"img/ResturantSection.jpg\" alt=\"King Of Pigs restaurant feature dish\" title=\"King Of Pigs restaurant feature dish\">\n" +
                "</div>\n" +
                "<div class=\"col-md-6 sliderSingleText\">\n" +
                "<h3>INTERNATIONAL BAKERY</h3><p>Praesent at ante imperdiet, eleifend nulla eget, accumsan orci. In egestas mi sed metus pellentesque porta.</p>" +
                "<p>Mauris eu imperdiet ante. Quisque maximus, enim et mollis ornare, nunc massa mattis elit, ac scelerisque turpis" +
                "libero convallis eros. Nam ultricies elit id elit posuere malesuada vel viverra lacus.</p> Nullam lacus diam, posuere" +
                "a pharetra at, faucibus id sapien. Donec ut velit posuere, sagittis odio non, lobortis purus." +
                "</div>";
            break;

        case 2:
            //INTERNATIONAL BAKERY
            //Load default Google Map address into id=iframeDefault
            var f = document.getElementById("iframeDefault");
            f.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2918.810687212413!2d-81.23157498483003!3d42.98226137914994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882ef26d365b754d%3A0xfdfd4b163edfdfb!2sInternational+Bakery!5e0!3m2!1sen!2sca!4v1521139657980";

            //hide the multi restaurant display
            $("#dinerslidermulti").hide( 500 );
            //Load empty div id=singleDish innerHTML with single dish image & text
            multiOut = document.getElementById("singleDish");
            multiOut.innerHTML = "<div onclick=\"showMulti()\" class=\"col-md-6 dinerpad\">" +
                "<img class=\"img-fluid cursor\" src=\"img/ResturantSection.jpg\" alt=\"King Of Pigs restaurant feature dish\" title=\"King Of Pigs restaurant feature dish\">" +
                "</div>" +
                "<div class=\"col-md-6 sliderSingleText\">" +
                "<div class=\"cpl-top\"><h3>JUST TRYING DIV</h3><p>Something starts here. In egestas mi sed metus pellentesque porta.</p>" +
            "<p>Mauris eu imperdiet ante. Quisque maximus, enim et mollis ornare, nunc massa mattis elit, ac scelerisque turpis" +
            "libero convallis eros. Nam ultricies elit id elit posuere malesuada vel viverra lacus.</p> Nullam lacus diam, posuere" +
            "a pharetra at, faucibus id sapien. Donec ut velit posuere and ends here.</div>" +
                "<div class=\"div1\"><p><a href=\"restarant.php\">RestaurantName.html</a></p></div>"+
                "<div class=\"col-md-6 div2\"><i class=\"fab fa-facebook-square fa-2x\"></i></a><a href=\"ref.php\"> <i class=\"fab fa-twitter-square fa-2x\"></i></a></div>" +
                "<div class=\"col-md-6 div4\"><a href=\"lvl2KOP.php\" class=\"button\">Specialty Dish</a></div>" +
                "</div>";

            break;

        default:
            document.write("not here")
            break;

    }
}



function iFrameChange() {
    document.getElementById("demo").style.color = "red";
}
function myFunction() {
document.getElementById("demo").style.color = "red";
}
