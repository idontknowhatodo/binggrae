// $('body')
// .prepend('<header></header>')
// .append('<footer></footer>');

// $('header').load('inc.html header .headerall');
// $('footer').load('inc.html footer .inner');


const elBtnshow = document.querySelector('.head .btn_show');
const elBtnhidden = document.querySelector('.top .btn_hidden');
const elBurgermenu = document.querySelector('.burgermenu');

//버거메뉴 show, hidden
elBtnshow.onclick = function(){
    elBurgermenu.classList.add('active');
}
elBtnhidden.onclick = function(){
    elBurgermenu.classList.remove('active');
}







//slide3 pr
// const elUl = document.querySelector('.slide_wrap');
// const elLi = document.querySelectorAll('.slide_wrap li');
// let imgIndex = 0; //0,1,2,3,4
// //console.log(elLi[0].offsetWidth);
// function move(){
//     setInterval(function(){
//         elUl.style.transition = '0.5s';
//         elUl.style.transform = "translate(-"+(elLi[0].offsetWidth*(imgIndex+1)+60)+"px,0px)";
//         imgIndex++;
//         if(imgIndex === 4){
//             imgIndex = -1;
//         }
//     },2000);
// }
// document.addEventListener("DOMContentLoaded",function(){
//     move();
// });


