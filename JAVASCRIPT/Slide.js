var swiper = new Swiper(".mySwiper", {
    initialSlide: 0,
    slidesPerView: 1,
    centeredSlides: true,
    autoplay: {
    delay: 6000,
    disableOnInteraction: false,
    waitForTransition: true,
    pauseOnMouseEnter: true
    },
    spaceBetween: 30,
    pagination: {
    el: ".swiper-pagination",
    type: "fraction",
    },
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
    allowTouchMove: true // thêm option này để cho phép cầm kéo slider để chuyển slide
});


// Đây là đoạn mã sử dụng thư viện Swiper để tạo ra một carousel với các thuộc tính sau:

// mySwiper là tên của đối tượng swiper container.
// slidesPerView là số lượng slide được hiển thị trên màn hình cùng lúc.
// centeredSlides để giữ cho slide hiển thị trung tâm trên màn hình.
// autoplay để tự động chuyển slide và có thời gian chuyển là 2000ms.
// spaceBetween là khoảng cách giữa các slide.
// pagination để tạo nút điều hướng slide dưới dạng phân số.
// navigation để tạo nút điều hướng trước và sau.
