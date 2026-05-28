// 모바일 메뉴 토글 기능
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

// 메뉴 토글 버튼 클릭 시 메뉴 표시/숨김
menuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// 모바일 메뉴 링크 클릭 시 메뉴 닫기
const mobileMenuLinks = mobileMenu.querySelectorAll('a');
mobileMenuLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
  });
});

// 스크롤 시 활성 섹션 하이라이트
window.addEventListener('scroll', () => {
  updateActiveSection();
});

// 현재 스크롤 위치에 따라 활성 네비게이션 업데이트
function updateActiveSection() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('nav a[href^="#"]');

  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (window.pageYOffset >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });

  // 활성 링크 업데이트
  navLinks.forEach(link => {
    link.classList.remove('text-blue-600');
    link.classList.add('hover:text-blue-600');

    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('text-blue-600');
    }
  });
}

// 부드러운 스크롤 (앵커 링크)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));

    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// 페이지 로드 시 활성 섹션 업데이트
window.addEventListener('load', () => {
  updateActiveSection();
});
