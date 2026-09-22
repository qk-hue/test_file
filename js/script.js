//아이콘 라이브러리 실행
lucide.createIcons()

//이미지 슬라이드
new Swiper('.gallery-swiper', {
  slidesPerView: 1.15,
  spaceBetween: 16,
  loop: true,
  navigation: { nextEl: '.gallery-next', prevEl: '.gallery-prev' },
  pagination: { el: '.swiper-pagination', clickable: true },
  breakpoints: {
    640: { slidesPerView: 2, spaceBetween: 20 },
    900: { slidesPerView: 3, spaceBetween: 24 },
  },
})

const $btn = document.getElementById("introButton")
$btn.addEventListener("click", function() {
Swal.fire({
    title: '박사의 말',
    text: '앞으로도 상세한 정보를 제공하겠습니다.',
    icon: 'info',
    confirmButtonText: '확인',
    confirmButtonColor: '#ef876d',
    background: '#f7f8f4',
    color: '#17232c',
  })
})