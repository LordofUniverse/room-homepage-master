var tit1 = 'Discover innovative ways to decorate';

var p1 = 'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.';

var tit2 =  'We are available all across the globe';
      
var p2 = "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.";

var tit3 = 'Manufactured with the best materials';
      
var p3 = 'Our modern furniture store provide a high level of quality. Our company has invested in advanced technologyto ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.';

var cur = 1;

var img1 = document.getElementsByClassName("beforelink")[0];
var img2 = document.getElementsByClassName("afterlink")[0];

var pr1 = '';
var pr2 = '';
var sho = '';

img1.addEventListener('click',function() {

    sho = document.getElementsByClassName("shojs")[0];
    sho.style.cssText = 'margin-top: 2rem;';

    cur -= 1;

    if (cur === 0){
        cur = 3
    };
    if (cur === 1){
        pr1 = document.getElementsByClassName("box12p1")[0];
        pr2 = document.getElementsByClassName("box12p2")[0];
        pr1.innerHTML = tit1
        pr2.innerHTML = p1
    };    
    if (cur === 2){
        pr1 = document.getElementsByClassName("box12p1")[0];
        pr2 = document.getElementsByClassName("box12p2")[0];
        pr1.innerHTML = tit2
        pr2.innerHTML = p2
    };    
    if (cur === 3){
        pr1 = document.getElementsByClassName("box12p1")[0];
        pr2 = document.getElementsByClassName("box12p2")[0];
        pr1.innerHTML = tit3
        pr2.innerHTML = p3
        sho = document.getElementsByClassName("shojs")[0];
        sho.style.cssText = 'margin-top: 1.1rem;';
    };    

});

img2.addEventListener('click', function(){

    sho = document.getElementsByClassName("shojs")[0];
    sho.style.cssText = 'margin-top: 2rem;';

    cur += 1;

    if (cur === 4){
        cur = 1
    };
    if (cur === 1){
        pr1 = document.getElementsByClassName("box12p1")[0];
        pr2 = document.getElementsByClassName("box12p2")[0];
        pr1.innerHTML = tit1
        pr2.innerHTML = p1
    };
    if (cur === 2){
        pr1 = document.getElementsByClassName("box12p1")[0];
        pr2 = document.getElementsByClassName("box12p2")[0];
        pr1.innerHTML = tit2
        pr2.innerHTML = p2
    };    
    if (cur === 3){
        pr1 = document.getElementsByClassName("box12p1")[0];
        pr2 = document.getElementsByClassName("box12p2")[0];
        pr1.innerHTML = tit3
        pr2.innerHTML = p3
        sho = document.getElementsByClassName("shojs")[0];
        sho.style.cssText = 'margin-top: 1.1rem;';
    };    
});

document.body.addEventListener('keydown', function(event) { 
    var key = event.key; 
    if (key === 'ArrowLeft'){
        sho = document.getElementsByClassName("shojs")[0];
        sho.style.cssText = 'margin-top: 2rem;';

        cur -= 1;

        if (cur === 0){
            cur = 3
        };
        if (cur === 1){
            pr1 = document.getElementsByClassName("box12p1")[0];
            pr2 = document.getElementsByClassName("box12p2")[0];
            pr1.innerHTML = tit1
            pr2.innerHTML = p1
        };    
        if (cur === 2){
            pr1 = document.getElementsByClassName("box12p1")[0];
            pr2 = document.getElementsByClassName("box12p2")[0];
            pr1.innerHTML = tit2
            pr2.innerHTML = p2
        };    
        if (cur === 3){
            pr1 = document.getElementsByClassName("box12p1")[0];
            pr2 = document.getElementsByClassName("box12p2")[0];
            pr1.innerHTML = tit3
            pr2.innerHTML = p3
            sho = document.getElementsByClassName("shojs")[0];
            sho.style.cssText = 'margin-top: 1.1rem;';
        };
    };
    if (key === 'ArrowRight'){
        sho = document.getElementsByClassName("shojs")[0];
        sho.style.cssText = 'margin-top: 2rem;';

        cur += 1;

        if (cur === 4){
            cur = 1
        };
        if (cur === 1){
            pr1 = document.getElementsByClassName("box12p1")[0];
            pr2 = document.getElementsByClassName("box12p2")[0];
            pr1.innerHTML = tit1
            pr2.innerHTML = p1
        };
        if (cur === 2){
            pr1 = document.getElementsByClassName("box12p1")[0];
            pr2 = document.getElementsByClassName("box12p2")[0];
            pr1.innerHTML = tit2
            pr2.innerHTML = p2
        };    
        if (cur === 3){
            pr1 = document.getElementsByClassName("box12p1")[0];
            pr2 = document.getElementsByClassName("box12p2")[0];
            pr1.innerHTML = tit3
            pr2.innerHTML = p3
            sho = document.getElementsByClassName("shojs")[0];
            sho.style.cssText = 'margin-top: 1.1rem;';
        };    
    };
});
