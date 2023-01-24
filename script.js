let overlay = document.querySelector('.overlay');
let aside = document.querySelector('.aside')
overlay.addEventListener('click' , function(){
 aside.classList.add('active');
});

let X = document.querySelector('.X');
X.addEventListener('click' , function(){
 aside.classList.remove('active');
});

let btn1 = document.querySelector('.btn1');

btn1.addEventListener('mouseover' , function(){
document.querySelector('.slide1>ul').style.transform = 'translate(0)'
});

let btn2 = document.querySelector('.btn2');

btn2.addEventListener('mouseover' , function(){
document.querySelector('.slide1>ul').style.transform = 'translate(-100vw)'
});

let btn3 = document.querySelector('.btn3');

btn3.addEventListener('mouseover' , function(){
document.querySelector('.slide1>ul').style.transform = 'translate(-200vw)'
});

let btn4 = document.querySelector('.btn4');

btn4.addEventListener('mouseover' , function(){
document.querySelector('.slide1>ul').style.transform = 'translate(-300vw)'
});

let btn5 = document.querySelector('.btn5');

btn5.addEventListener('mouseover' , function(){
document.querySelector('.slide1>ul').style.transform = 'translate(-400vw)'
});

let btn6 = document.querySelector('.btn6');

btn6.addEventListener('mouseover' , function(){
document.querySelector('.slide1>ul').style.transform = 'translate(-500vw)'
});

let btn7 = document.querySelector('.btn7');

btn7.addEventListener('mouseover' , function(){
document.querySelector('.slide1>ul').style.transform = 'translate(-600vw)'
});

let btn8 = document.querySelector('.btn8');

btn8.addEventListener('mouseover' , function(){
document.querySelector('.slide1>ul').style.transform = 'translate(-700vw)'
});

let btn9 = document.querySelector('.btn9');

btn9.addEventListener('mouseover' , function(){
document.querySelector('.slide1>ul').style.transform = 'translate(-800vw)'
});

let btn10 = document.querySelector('.btn10');

btn10.addEventListener('mouseover' , function(){
document.querySelector('.slide1>ul').style.transform = 'translate(-900vw)'
});


























let btn11 = document.querySelector('.btn11');

btn11.addEventListener('mouseover' , function(){
document.querySelector('.slide2>ul').style.transform = 'translate(0)'
});

let btn12 = document.querySelector('.btn12');

btn12.addEventListener('mouseover' , function(){
document.querySelector('.slide2>ul').style.transform = 'translate(-100vw)'
});

let btn13 = document.querySelector('.btn13');

btn13.addEventListener('mouseover' , function(){
document.querySelector('.slide2>ul').style.transform = 'translate(-200vw)'
});

let btn14 = document.querySelector('.btn14');

btn14.addEventListener('mouseover' , function(){
document.querySelector('.slide2>ul').style.transform = 'translate(-300vw)'
});

let btn15 = document.querySelector('.btn15');

btn15.addEventListener('mouseover' , function(){
document.querySelector('.slide2>ul').style.transform = 'translate(-400vw)'
});

let btn16 = document.querySelector('.btn16');

btn16.addEventListener('mouseover' , function(){
document.querySelector('.slide2>ul').style.transform = 'translate(-500vw)'
});

let btn17 = document.querySelector('.btn17');

btn17.addEventListener('mouseover' , function(){
document.querySelector('.slide2>ul').style.transform = 'translate(-600vw)'
});

let btn18 = document.querySelector('.btn18');

btn18.addEventListener('mouseover' , function(){
document.querySelector('.slide2>ul').style.transform = 'translate(-700vw)'
});

let btn19 = document.querySelector('.btn19');

btn19.addEventListener('mouseover' , function(){
document.querySelector('.slide2>ul').style.transform = 'translate(-800vw)'
});

let btn20 = document.querySelector('.btn20');

btn20.addEventListener('mouseover' , function(){
document.querySelector('.slide2>ul').style.transform = 'translate(-900vw)'
});





let ham = document.querySelector('.ham');
ham.addEventListener('click' , function(){
  document.querySelector('.overlay').style = 'background-color:rgba(161, 248, 10,.9)'
});

let overX = document.querySelector('.overX');
overX.addEventListener('click', function(){
  document.querySelector('.overlay').style.opacity = '0'
})




$('.sub1-down').hover(function(){
  $(this).find('.sub1').stop().slideDown(500);
}, function(){
  $(this).find('.sub1').stop().slideUp(500);
})


$('.slide-down2').hover(function(){
  $(this).find('.sub2').stop().slideDown(500);
}, function(){
  $(this).find('.sub2').stop().slideUp(500);
})

