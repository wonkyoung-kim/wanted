

// lnb리스트 불러오기
fetch('./assets/data/menu.json')
.then((response) => response.json())
.then((json) => {
  data = json.items;
  console.log(data)
  let html = '';

  data.forEach(el => {
    let html2 = '';
    if(el.children != null) {
      el.children.forEach(sub => {
        // console.log(sub)
        html2+=`<li class="sub-item"><a href="/sub/${sub.id}">${sub.name}</a></li>`
      });
      child =`<ul class="sub-list">${html2}</ul>`;
    } else {
      child = '';
    }
    html+=`<li class="lnb-item"><a href="/sub/${el.id}">${el.name}</a>${child}</li>`
  });
  $('.lnb-list').html(html);

  
  $('.btn-lnb').mouseover(function(e){
    e.preventDefault();
    $('.group-lnb').addClass('active');
    $('.lnb-item').find('.sub-list').hide();  
    $('body').css({overflow: 'hidden'})
  })
  $('.lnb-list').mouseleave(function(e){
    e.preventDefault();
    $('.group-lnb').removeClass('active');
    $('body').css({overflow: 'auto'})
  });
  $('.lnb-item').mouseover(function(e){
    e.preventDefault();
    $('.lnb-item').find('.sub-list').hide();  
    $(this).find('.sub-list').show();  
    $('body').css({overflow: 'hidden'})
  });
});


//메인슬라이드
var swiper = new Swiper(".main-slide", {
  slidesPerView: "auto",
  centeredSlides: true,
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
  breakpoints: {
    768: {
      spaceBetween: 20, 
    }
  }
});

//턉슬라이드
var swiper = new Swiper(".tab-slide", {
  slidesPerView: "auto",
  slidesPerGroup: 3,
  spaceBetween: 8,
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
});


$('.sc-career-insite .swiper-slide a').click(function(e){
  e.preventDefault();
  cate = $(this).data('cate');
  // console.log(cate)
  fetch('./assets/data/insite.json')
  .then((response) => response.json())
  .then((json) => {
      data = json.items;
      // console.log(data)

      var result = data.filter(function (parm) {return parm.category == cate})

      let html = '';

      result.forEach(el => {
        html+=`
        <li class="career-item">
        <a href="">
          <div class="img-box">
            <img src="${el.thumbUrl}" alt="${el.title}">
          </div>
          <div class="txt-box">
            <strong class="title">${el.title}</strong>
            <p class="desc">${el.desc}</p>
            <div class="profile">
              <img src="${el.writer.img}" alt="${el.writer.media}">
              <span class="name">${el.writer.name}</span>
            </div>
          </div>
        </a>
      </li>`
      });

      $('.career-list').html(html);
  })
})

$('.sc-career-insite .swiper-slide a').first().trigger('click')

$('.tab-slide .swiper-slide').click(function(){
  $(this).addClass('active').siblings().removeClass('active');
})




//article슬라이드
var swiper = new Swiper(".article-slide", {
  slidesPerView: "2",
  spaceBetween: 20,
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
  breakpoints: {
    1025: {
      slidesPerView: "4",
    }
  }
});


//vod슬라이드
var swiper = new Swiper(".vod-slide", {
  slidesPerView: "2",
  spaceBetween: 20,
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
  breakpoints: {
    1025: {
      slidesPerView: "4",
    }
  }
});
//이벤트슬라이드
var swiper = new Swiper(".event-slide", {
  slidesPerView: "1",
  spaceBetween: 16,
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
  breakpoints: {
    768: {
      slidesPerView: "2",
    },
  }
});


