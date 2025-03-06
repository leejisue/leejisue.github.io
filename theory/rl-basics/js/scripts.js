// 헤더 드롭다운 기능
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    
    // 헤더 감지 영역 생성
    const headerSensor = document.createElement('div');
    headerSensor.className = 'header-sensor';
    document.body.appendChild(headerSensor);
    
    // 마우스가 감지 영역에 들어올 때 헤더 표시
    headerSensor.addEventListener('mouseenter', function() {
        header.style.top = '0';
    });
    
    // 마우스가 헤더에서 벗어날 때 헤더 숨기기
    header.addEventListener('mouseleave', function() {
        header.style.top = '-80px';
    });
    
    // 스크롤 시 헤더 숨기기
    document.addEventListener('scroll', function() {
        if (!headerSensor.matches(':hover') && !header.matches(':hover')) {
            header.style.top = '-80px';
        }
    });
    
    // 모바일 메뉴 토글 기능
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileNavToggle) {
        mobileNavToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }
});
