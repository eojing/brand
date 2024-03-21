// 아래화살표 클릭시 스크롤 다운
const down_arrow = document.querySelector('.down_arrow');
const cont = document.querySelectorAll('.cont');

down_arrow.addEventListener('click',function(e){
    e.preventDefault();
    window.scrollTo({top : cont[1].offsetTop , behavior: 'smooth'});
})


// 공유하기
const shareBtn = document.querySelectorAll('.share');

for(let i = 0; i < shareBtn.length; i++){
    shareBtn[i].addEventListener('click',function(e){
        e.preventDefault();
        window.navigator.share({
            title: '보물썸', // 공유될 제목
            text: '보물썸이벤트', // 공유될 설명
            url: '', // 공유될 URL
          });
    });
}


// 탑버튼
const topScrollBtn = document.querySelector('.top_scroll_btn');


window.addEventListener('scroll',function(){
    if(this.scrollY >= cont[1].offsetTop){
        topScrollBtn.classList.add('top_scroll_btn_on');
    }else{
        topScrollBtn.classList.remove('top_scroll_btn_on');
    }

});

topScrollBtn.addEventListener('click',function(e){
    e.preventDefault()
    window.scrollTo({top : 0, behavior:'smooth'});

});
