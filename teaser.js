const down_arrow = document.querySelector('.arrow_click');
const cont = document.querySelectorAll('.cont');

down_arrow.addEventListener('click',function(){
    window.scrollTo({top : cont[1].offsetTop , behavior: 'smooth'});
})



const shareBtn = document.querySelector('.share');

shareBtn.addEventListener('click',function(){
    window.navigator.share({
        title: '보물썸', // 공유될 제목
        text: '보물썸이벤트', // 공유될 설명
        url: '', // 공유될 URL
      });

});
