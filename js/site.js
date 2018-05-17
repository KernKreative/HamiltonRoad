/*Hide the Multiple restaurant section and show the choice of restaurant on the homepage*/
function hideMulti(num) {
    var f = "";
    var multiOut = "";
    //Restaurant name 0 (restaurant[0][0]), image 1, alt/title 2, summary 3, url 4, facebook 5, twitter 6, instagram 7, youtube 8, subpage link 9, Google maps 10
    var restaurant = new Array(11);

    restaurant[0] = ["CASA CUBANA",
        "img/rest/CasaCubana/CasaCubana.jpg",
        "Image of Casa Cubana restaurant",
        "Casa Cubana has plenty of Platos Latinos - Latin Dishes! Caribbean, Latin American, Mexican food.<br>Casa Cubana means literally 'private house'.<br>Casa Cubana offers Cuban cuisine, a blend of Spanish and African influences unique in the world kitchen. There's no denying that Cuban food is a favourite.",
        "",
        "https://www.facebook.com/Casa-Cubana-495849783894895/", "no-tw", "no-in", "no-yt",
        "/HamiltonRoad/casacubana.php",
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11675.578277212791!2d-81.2202902!3d42.9804945!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe37c6a22bc635bd0!2sCasa+Cubana+Restaurant!5e0!3m2!1sen!2sca!4v1525191672363"
    ];

    restaurant[1] = ["KING OF PIGS",
        "img/rest/KingOfPigs/KOP.jpg",
        "Image of King Of Pigs restaurant",
        "King of Pigs is translated from Rei dos Leitoes in Portuguese, which actually means King of the Piglets. The Rei dos Leitoes name first became popular in Bairrada, Portugal. Where the main focus was to roast piglets, making the region well known for its unique style, Leitao a Bairrada. Amongst the Portuguese people this is considered the best way to roast piglets.",
        "http://kingofthepigs.com",
        "https://www.facebook.com/Rei-Dos-Leitoes-King-of-the-Pigs-Restaurant-253099131524444/", "no-tw", "no-in", "no-yt",
        "kingofpigs.html",
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5837.954280925394!2d-81.20765489750987!3d42.97875517699193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882ef2884a348b4d%3A0x3198520311b69d08!2sKing+of+the+Pigs!5e0!3m2!1sen!2sca!4v1521059087622"
    ];

    restaurant[2] = ["LO NESTRO",
        "img/rest/LoNuestro/LoNuestro.jpg",
        "Image of Lo Nuestro restaurant",
        "Lo Nuestro has authentic Latin, Mexican, Salvadorian food - Ada Guzman is the proud owner and proud of her Latin roots.<br>Lo Nuestro Latin Restaurant is London, Ontario's Best Keep Secret for Latin food and a place doesn't get such a high rating on Urbanspoon by accident.<br>El Salvador's most notable dish is the pupusa, a thick handmade corn flour or rice flour tortilla stuffed with cheese, chicharrón (cooked pork meat ground to a paste) and refried beans or loroco - a vine flower bud native to Central America. Come try one today at Lo Nuestro!",
        "http://www.lonuestrolatinrestaurant.com",
        "https://www.facebook.com/lonuestrolatin/", "no-tw", "no-in", "no-yt",
        "/HamiltonRoad/lonuestro.php",
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11675.848267371346!2d-81.2033228!3d42.9790727!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3fb468f296f68ced!2sLo+Nuestro+Latin+Restaurant!5e0!3m2!1sen!2sca!4v1525191619421"
    ];

    restaurant[3] = ["SU CASA",
        "img/rest/SuCasa/SuCasa.jpg",
        "Image of Su Casa restaurant",
        "Su Casa is a Latin restaurant with many tasty 'platillos' to try.<br>Su Casa means 'your house', so come and enjoy the cuisine within.<br>Enjoy the many Spanish influenced dished at Su Casa where service is as important as the food.",
        "",
        "https://www.facebook.com/Su-Casa-Restaurant-441426775924835/", "no-tw", "no-in", "no-yt",
        "/HamiltonRoad/kingofpigs.php",
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11675.346848641615!2d-81.2205136!3d42.9817132!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6f991eca4a201ba1!2sSu+Casa!5e0!3m2!1sen!2sca!4v1525191735571"
    ];

    restaurant[4] = ["TASCA PIRI PIRI",
        "img/rest/TascaPiriPrri/TascaPiriPiri.jpg",
        "Image of Tasca Piri Piri restaurant",
        "" +
        "Tasca Piri Piri is authentic Portuguese, European cuisine.<br>Piri Piri is a hot sauce, of Portuguese colonial origin, made from red chilli peppers. Ever tried chicken piri piri??<br>Tasca Piri Piri serves many tasty dishes!",
        "",
        "no-fb", "no-tw", "no-in", "no-yt",
        "/HamiltonRoad/kingofpigs.php",
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11675.68127408959!2d-81.21444552812497!3d42.979952110772885!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa89169b49bbfa0cf!2sTasca+Piri+Piri!5e0!3m2!1sen!2sca!4v1525192143409"
    ];

    restaurant[5] = ["INTERNATIONAL BAKERY",
            "img/ResturantSection.jpg",
            "Image of placeholder restaurant",
            "A beginning. . . pharetra at, faucibus id sapien. Donec ut velit posuere, sagittis odio non, lobortis purus. Mauris eu imperdiet ante. Quisque maximus, enim et mollis ornare, nunc massa mattis elit, ac scelerisque turpis. Praesent at ante imperdiet, eleifend nulla eget, accumsan orci. In egestas mi sed metus pellentesqu. . .end",
            "ibakery.ca",
            "no-fb", "no-tw", "no-in", "no-yt",
            "/HamiltonRoad/kingofpigs.html",
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2918.810687212413!2d-81.23157498483003!3d42.98226137914994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882ef26d365b754d%3A0xfdfd4b163edfdfb!2sInternational+Bakery!5e0!3m2!1sen!2sca!4v1521139657980"
            ];


    //DO NOT ALTER ANYTHING BELOW!
    //SINGLE RESTAURANT DIV
    //Load default Google Map address into id=iframeDefault
    f = document.getElementById("iframeDefault");
    f.src = restaurant[num][10];

    //Load social media icons if there are any links
    if(restaurant[num][5] === "no-fb") {
        iconFB = " ";
    } else {
        iconFB = "<a href=\""+restaurant[num][5]+"\" target=\"_blank\"><i class=\"fab fa-facebook-f socialIcons si-inverted\"></i></a>";
    }
    if(restaurant[num][6] === "no-tw") {
        iconTW = " ";
    } else {
        iconTW = "<a href=\""+restaurant[num][6]+"\" target=\"_blank\"><i class=\"fab fa-twitter socialIcons si-inverted\"></i></a>";
    }
    if(restaurant[num][7] === "no-in") {
        iconIN = " ";
    } else {
        iconIN = "<a href=\""+restaurant[num][7]+"\" target=\"_blank\"><i class=\"fab fa-instagram socialIcons si-inverted\"></i></a>";
    }
    if(restaurant[num][8] === "no-yt") {
        iconYT = " ";
    } else {
        iconYT = "<a href=\""+restaurant[num][8]+"\" target=\"_blank\"><i class=\"fab fa-youtube socialIcons si-inverted\"></i></a>";
    }

    //hide the multi restaurant display
    $("#dinerslidermulti").hide( 500 );
    //Load empty div id=singleDish innerHTML with single dish image (600 x 500) & text
    multiOut = document.getElementById("singleDish");
    multiOut.innerHTML = "<div onclick=\"showMulti()\" class=\"col-md-6 dinerpad sideImage\">\"" +
        //Restaurant name 0 (restaurant[0][0]), image 1, alt/title 2, summary 3, url 4, facebook 5, twitter 6, instagram 7, youtube 8, subpage link 9, Google maps 10
        //Restaurant image and image alt/title here
        "<img class=\"img-fluid cursor\" src=\"" + restaurant[num][1] + "\" alt=\"" + restaurant[num][2] + " title=\"" + restaurant[num][2] + "></div>" +
        //Restaurant name/summary etc here
        "<div class=\"col-md-6 sliderSingleText upperBlock\">" +
        //Restaurant summary information here
        "<div class=\"cpl-top\"><h3>" + restaurant[num][0] + "</h3><hr><p>" + restaurant[num][3] + "</p></div>" +
        "<div class=\"col-md-12 cpl-mid\"><a href=\""+restaurant[num][4]+"\"  target=\"_blank\">"+restaurant[num][4]+"</a></div>" +
        "<div class=\"col-md-8 cpl-social\">" + iconFB + iconTW + iconIN + iconYT + "</div>" +
        "<div class=\"col-md-4 cpl-btm\"><a href=\""+restaurant[num][9]+"\" class=\"button\">Restaurant</a></div>" +
        //Closing div
        "</div>";
    window.location.href = "#docTheRoad";

}  //end of hideMulti function


/*Re-Show the Multiple restaurant section with the map of Hamilton Road*/
function showMulti() {
    f = document.getElementById("iframeDefault");
    /*f.src = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d23352.021858605738!2d-81.19115881237627!3d42.97821608481709!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882ef2bc610051db%3A0x9ee450ff08d2bb1a!2sHamilton+Road%2C+London%2C+ON!5e0!3m2!1sen!2sca!4v1521647521250";*/
    f.src = "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d23353.162965938463!2d-81.18994306894366!3d42.97521130918276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sca!4v1521649188820";
    $("#dinerslidermulti").show( 500 );
    //$("#dinerslidersingle").show( 500 );
    multiIn = document.getElementById("singleDish");
    multiIn.innerHTML = "";
    window.location.href = "#docTheRoad";
}  //end of showMulti function

//Windows scroll function - Display Main Block menu on left or second navbar at the top
$(window).scroll(function(){
    x = "#navMain.navbar";
    y = "#nav2.navbar";

    //if scrolled more than 100px from top, hide x (side menu) and show y (top menu)
    if($(window).scrollTop() > 100) {
        if(jQuery(window).width() > 769)
        {
            $(x).hide(300);
            $(y).show();
        }
    }
    //if scrolled less than 100px from top AND bigger than 769px, show x (side menu) and hide y (top menu)
    if($(window).scrollTop() < 100) {
        if(jQuery(window).width() > 769) {
            $(x).show(300);
            $(y).hide();
        }
    }
    //if scrolled less than 100px from top AND smaller than 769px, keep mobile menu displayed
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

});  //end of Windows scroll function


//not used . . .
/*Slides the Multiple restaurant section out of view*/
function slide(){
    $("#dinerslidermulti").hide( "slide", { direction: "left"  }, 2000 );
}
//not used . . .
function myFunction() {
document.getElementById("demo").style.color = "red";
}

function showPara() {
    var para = document.getElementById("paraHidden");
    var txt = document.getElementById("moreLess");
    if (para.style.display === "none") {
        para.style.display = "block";
        txt.innerHTML = "Less. . . ";
    } else {
        para.style.display = "none";
        txt.innerHTML = "More. . . ";
    }
}
