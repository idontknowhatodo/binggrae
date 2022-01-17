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

//slide1


//slide2 product


//slide3 pr
const elUl = document.querySelector('.slide_wrap');

function move(){
    let imgIndex = 0;

    setInterval(function(){
        elUl.style.transition = '0.5s';
        elUl.style.transform = "translate(-"+275*(imgIndex+1)+"px,0px)";

        imgIndex++;

        if(imgIndex === 4){
            imgIndex = -1;
        }
    },2000);
}
document.addEventListener("DOMContentLoaded",function(){
    move();
});


