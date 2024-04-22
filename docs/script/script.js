console.clear();

AOS.init();

function TopBarMenuSlide__init() {
  $(".top-bar-menu > ul > li").hover(
    function () {
      $(this).find("ul").stop(true, true).slideDown(400, "swing");
    },
    function () {
      $(this).find("ul").stop(true, true).slideUp(400, "swing");
    }
  );
}

TopBarMenuSlide__init();

//2번메뉴 스크롤 시 fixed 추가
const headerbar = document.querySelector("#headerbar"); //from HTML
const headerbarHeight = headerbar.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  //navbar의 높이가 현재까지 스크롤 된 Y값보다 작다면 navbar에 fixed라는 클래스를 넣어라.
  if (window.scrollY > headerbarHeight) {
    headerbar.classList.add("fixed");
  } else {
    headerbar.classList.remove("fixed");
  }
});

//main bg 스와이퍼
const MainBgSlider = new Swiper(".header-img .swiper", {
  loop: true, // 슬라이드 바녹 여부
  slidesPerView: 1, // 한 페이지에 보여질 슬라이드 개수
  spaceBetween: 0,
  speed: 1500, //슬라이드 전환속도
  effect: "fade",
  autoplay: {
    //슬라이드 자동재생
    delay: 4000,
  },
});

// 사이드 메뉴
function SideBarMenu__init() {
  $(".top-bar-right_btn").click(function () {
    SideBarMenu__show();
  });

  $(".tb-right-menu-close, .aside-menu-left").click(() => SideBarMenu__hide());
}

SideBarMenu__init();

function SideBarMenu__show() {
  $(".aside-menu").addClass("active");
}

function SideBarMenu__hide() {
  $(".aside-menu").removeClass("active");
}

// 사이드 메뉴 active 추가
function SideBarMenuList__init() {
  $(".tb-right-menu-list > ul > li").mouseenter(function () {
    $(this).children(".tb-right-menu-list ul ul").stop().slideDown(600);
  });

  $(".tb-right-menu-list > ul > li").mouseleave(function () {
    $(this).children(".tb-right-menu-list ul ul").stop().slideUp(600);
  });
}

SideBarMenuList__init();

// 메인뉴스 탭박스 구현
function MainNewsTabBox__init() {
  $(".news-tab-box-head > .tab-box-item").click(function () {
    let $this = $(this);
    let thisIndex = $this.index();

    $this.siblings(".active").removeClass("active");
    $this.addClass("active");

    let $TabBox1 = $this.closest(".news-tab-box-1");
    let $TabBoxBody = $TabBox1.find(".news-tab-box-body");

    $TabBoxBody.find(" > li").removeClass("active");
    $TabBoxBody.find(" > li").eq(thisIndex).addClass("active");
  });
}

MainNewsTabBox__init();

// 메인 뉴스 스와이퍼
function MainNewsSliderBox__init() {
  let swiper = new Swiper(".main-news .news-slider-box .swiper", {
    slidesPerView: "auto", // 한 페이지당 보여줄 개수
    loop: true, // 슬라이드 반복
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      768: {
        slidesPerView: "auto",
      },

      1024: {
        slidesPerView: 2,
        spaceBetween: 20, // 슬라이드 사이의 간격
      },
    },
  });
}

MainNewsSliderBox__init();

// 메인 뉴스 모달창 구현
function MainNewsPopup__init(no) {
  $(`.slider-${no} .swiper-slide`).click(function () {
    let $this = $(this);

    let $mainCon = $this.closest(".main-wrap");
    let $popup = $mainCon.next(".new-pop-up").find(`#popup-${no}`);

    $popup.addClass("active");
  });
}

MainNewsPopup__init(1);
MainNewsPopup__init(2);

function MainNewsPopupRemove__init(no) {
  $(".pop-btn").on("click", function () {
    $(`#popup-${no}`).removeClass("active");
  });
}

MainNewsPopupRemove__init(1);
MainNewsPopupRemove__init(2);

// 메인 뉴스 팝업 스와이퍼
function MainNewsSliderPopUpBox__init() {
  let swiper = new Swiper(".pop-up-section .news-slider-box .swiper", {
    slidesPerView: 1, // 한 페이지당 보여줄 개수
    spaceBetween: 20, // 슬라이던간의 간격
    loop: true, // 슬라이드 반복
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}

MainNewsSliderPopUpBox__init();

// 메인 굿즈 모바일 스와이퍼
function MainGoodsMBSlider__init() {
  let swiper = new Swiper(".main-goods-mb .main-goods-con .swiper", {
    slidesPerView: 1, // 한 페이지당 보여줄 개수
    loop: true, // 슬라이드 반복
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}

MainGoodsMBSlider__init();

// 2번 메뉴 메뉴 스와이퍼
const MenuSwiperSlide = new Swiper(".menu-sec-list .swiper", {
  loop: false,
  spaceBetween: 0,
  slidesPerView: 1,
  centeredSlides: true,
  speed: 800, //슬라이드 전환속도
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// 2번 메뉴 예약 스와이퍼
const TableSwiperSlide = new Swiper(".reservation-table-list .swiper", {
  loop: true,
  spaceBetween: 0,
  slidesPerView: 1,
  centeredSlides: true,
  speed: 800, //슬라이드 전환속도
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
