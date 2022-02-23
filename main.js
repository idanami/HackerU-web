var course_name_bool=[];
var benefit_bool=[];
var process_bool=false;
var course_names_anima =document.querySelectorAll(".course-names__animation")
var benefit_animation =document.querySelectorAll(".benefit-animation")
var check_position =document.querySelector(".main-nav__banner");
var close =document.querySelector(".close-item");
var log_in =document.querySelector(".log-in");

var toggle_button =document.querySelector(".toggle-button");
var toggle_button__first =document.querySelectorAll(".toggle-button__bar");
var toggle_button__second =document.querySelector(".toggle-button__bar-onclick");

var mobile_nav_onclick =document.querySelectorAll(".mobile-nav__item");
var mobile_nav_description =document.querySelectorAll(".mobile-nav__item__row-description__list");

var main_nav_description =document.querySelectorAll(".main-nav__item__row-descriptions");
var main_nav_onclick =document.querySelectorAll(".main-nav__item__a");

var process_anima =document.querySelectorAll(".process");
var backdrop =document.querySelector(".backdrop");
var domRectCNA = [];
var topCNA = [];
var domRectBA = [];
var topBA = [];
var domRectP;
var topP;

toggle_button.addEventListener('click', function() {
    if(mobile_nav_onclick[0].style.display != 'block'){
            for(i=0;i<mobile_nav_onclick.length;i++)
                mobile_nav_onclick[i].style.display = "block";
            for(i=0;i<toggle_button__first.length;i++)
                toggle_button__first[i].style.display = "none";
                toggle_button__second.style.display = "block";
        
        }else{
            for(i=0;i<mobile_nav_onclick.length;i++)
                mobile_nav_onclick[i].style.display = "none";
            for(i=0;i<toggle_button__first.length;i++)
                toggle_button__first[i].style.display = "block";
            toggle_button__second.style.display = "none";
}
})

for (i = 0; i < mobile_nav_onclick.length; i++) {
  (function(i) {
         mobile_nav_onclick[i].addEventListener('click', function() {
             if(mobile_nav_description[i].style.display == "none")
                    mobile_nav_description[i].style.display = "block";  
             else mobile_nav_description[i].style.display = "none";
    });
  })(i);
}

arrayDefine();
startAnimation();

function arrayDefine(){  
for (i = 0; i < course_names_anima.length; i++){
    domRectCNA[i]=  course_names_anima[i].getBoundingClientRect();
    topCNA[i] = domRectCNA[i].top;
    course_name_bool[i] = false;
}
for (i = 0; i < benefit_animation.length; i++){
    domRectBA[i]=  benefit_animation[i].getBoundingClientRect();
        topBA[i] = domRectBA[i].top;
    benefit_bool[i] = false;
}
        domRectP=  process_anima[0].getBoundingClientRect();
        topP = domRectP.top;
}
function startAnimation(){
    for (i = 0; i < course_names_anima.length; i++){
        if((topCNA[i]<930 && topCNA[i]>40)&& !course_name_bool[i]){
            course_names_anima[i].style.animation = "bottomTOtop 2s ease-in-out";
            course_name_bool[i]=true;}
    }
    for (i = 0; i < benefit_animation.length; i++){
        if((topBA[i]<930 && topBA[i]>40)&& !benefit_bool[i]){
            benefit_animation[i].style.animation = "bottomTOtop 2s ease-in-out";
            benefit_bool[i]=true;}
    }
    if((topP<930 && topP>40)&& !process_bool){
    for (i = 0; i < process_anima.length; i++){
        process_anima[i].style.animation = "rightToleft 2s ease-in-out";
        process_bool=true;
    }
    }
}

$(document).ready(function(){
    log_in.style.display = "block"
    backdrop.style.display = "block";  
    $(window).scroll(function(){
        var positionOnTop=$(document).scrollTop();
        arrayDefine();
        startAnimation();          
    })
})

for (i = 0; i < main_nav_onclick.length; i++) {
  (function(i) {
    main_nav_onclick[i].addEventListener('click', function() {
        main_nav_description[i].style.display = "flex";  
        backdrop.style.display = "block";  
        backdrop.style.background = "none";  
        setTimeout(function() {
            backdrop.classList.add("open");
        }, 10);
    });
  })(i);
}
backdrop.addEventListener("click", function() {
    if(log_in.style.display == "none"){
    for (i = 0; i < main_nav_description.length; i++) 
        main_nav_description[i].style.display = "none";  
    backdrop.classList.remove("open");
    setTimeout(function() {
    backdrop.style.display = "none";
    }, 200);
    }   
    })
close.addEventListener("click",function(){
    log_in.style.display = "none";
    backdrop.style.background = "none";  
    setTimeout(function() {
        backdrop.classList.add("open");
    }, 10);
})
