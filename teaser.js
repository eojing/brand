const down_arrow = document.querySelector('.arrow_click');
const cont = document.querySelectorAll('.cont');

down_arrow.addEventListener('click',function(){
    window.scrollTo({top : cont[1].offsetTop , behavior: 'smooth'});
})