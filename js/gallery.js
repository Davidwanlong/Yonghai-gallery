// 获取按钮和视频元素
const video1Btn = document.getElementById('video1-btn');
const video2Btn = document.getElementById('video2-btn');
const video1 = document.getElementById('video1');
const video2 = document.getElementById('video2');

// 添加按钮点击事件
video1Btn.addEventListener('click', () => {
    video1.style.display = 'block';
    video2.style.display = 'none';
    video1Btn.classList.add('active');
    video2Btn.classList.remove('active');
    video1.play(); // 播放当前视频
    video2.pause(); // 暂停另一个视频
});

video2Btn.addEventListener('click', () => {
    video1.style.display = 'none';
    video2.style.display = 'block';
    video2Btn.classList.add('active');
    video1Btn.classList.remove('active');
    video2.play(); // 播放当前视频
    video1.pause(); // 暂停另一个视频
});


// 右侧电梯功能
// 获取元素
const elevator = document.querySelector('.elevator')
// 1. 当页面滚动大于300像素，就显示 电梯导航
// 2.给页面添加滚动事件
window.addEventListener('scroll', function(){
    // 被卷去的头部大于 300
    const n = document.documentElement.scrollTop
    if(n >= 300){
        elevator.style.opacity = 1
    } else {
        elevator.style.opacity = 0
    }
})

// 轮播图功能
    // 初始数据
    const sliderData = [
        { url: './images/banner/wyh_wall.jpg', title: '“Wall carving in Longxing Temple”by Wang Yonghai'},
        { url: './images/banner/nyg_1.jpg', title: 'Golden Age -2 by Niu Yungong' },
        { url: './images/fz/fz001.jpg', title: '"Girl" by Fei Zheng'},
        { url: './images/hjt/jt-lamb-a.jpg', title: ' "Lamb" by Huang Jitian'},
        { url: './images/banner/patea_hepherd.jpg', title: '"Patea_hepherd" by Yan Qinglu'},
        { url: './images/banner/wgz_dawn.jpg', title: '"Weishan Lake at dawn" by Wu Guangzhong'},
        { url: './images/fz/lantern_festival.jpg', title: '“Lantern Festival at night” by Fei Zheng'},
        { url: './images/wyh/025.jpg', title: 'Village by Wang Yonghai'},
        { url: './images/zss/zss_flower.jpg', title: 'Longxing Temple wall carving'},
        { url: './images/banner/wqk_sce.jpg', title: 'Lakeside color'},
        { url: './images/wzj/wzj_village.jpg', title: 'Early autumn mountain village'},
        
       ]
       // 获取元素
       const img = document.querySelector('.slider-wrapper img')
       const p = document.querySelector('.slider-footer p')
       const footer = document.querySelector('.slider-footer')
       // 1. 右按钮业务
       // 1.1 获取右侧按钮
       const bnext = document.querySelector('.b-next')
       let i = 0 // 信号量 控制播放图片张数
       // 1.2 注册点击事件
       bnext.addEventListener('click', function(){
        i++
        // 1.6 判断条件 如果大于10 就复原为0
       //  if(i >= sliderData.length) {
       //     i=0
       //  }
       i = i >= sliderData.length ? 0 : i
        // 1.3 得到对应的对象
       //  console.log(sliderData[i]);
       // 调用函数
       toggle()
       })

       // 2. 左侧按钮业务
       //2.1 获取左侧按钮
       const bprev = document.querySelector('.b-prev')
       // 2.2 注册点击事件
       // 1.2 注册点击事件
       bprev.addEventListener('click', function(){
        i--
        // 1.6 判断条件 如果小于0 就爬到最后一张图片 索引号是9
       //  if(i < 0) {
       //     i = 9
       //  }
       i = i < 0 ? sliderData.length - 1 : i
        // 1.3 得到对应的对象
       //  console.log(sliderData[i]);
       // 调用函数
       toggle()
       })
       
       // 声明一个渲染的函数作为复用
       function toggle(){
       // 1.4 渲染对应的数据
       img.src = sliderData[i].url
       p.innerHTML = sliderData[i].title
       footer.style.backgroundColor = sliderData[i].color
       // 1.5 更换小圆点  先移除原来的类名， 当前li再添加 这个 类名
       document.querySelector('.slider-indicator .active').classList.remove('active')
       document.querySelector(`.slider-indicator li:nth-child(${i + 1})`).classList.add('active')
       }


       // 3. 自动轮播
       let timerId = setInterval(function(){
         bnext.click()
       }, 2000)

       // 4.鼠标经过大盒子，停止定时器
       const slider = document.querySelector('.slider')
       // 注册事件
       slider.addEventListener('mouseenter', function(){
           //停止定时器
           clearInterval(timerId)
       })

       // 4.鼠标离开大盒子，开启定时器
       // 注册事件
       slider.addEventListener('mouseleave', function(){
           //停止定时器
           clearInterval(timerId)                
           //开启定时器
           timerId = setInterval(function(){
         bnext.click()
       }, 2000)
       })



//cards内轮播功能start
// Get elements
const cards = document.querySelectorAll('.cards .card');
const carouselOverlay = document.querySelector('.carousel-overlay');
const carouselImage = document.querySelector('.carousel-image');
const dateText = document.querySelector('.date');
const materialText = document.querySelector('.material');
const sizeText = document.querySelector('.size');
const artistText = document.querySelector('.artist');
const inquireButton = document.querySelector('.inquire');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

const slides = [
    { image: './images/nyg/golden-age.jpg', date: '2021', material: 'Oil on canvas', size: '50x60 cm', artist: 'Wang Yonghai' },
    { image: './images/fz/fz001.jpg', date: '2021', material: 'Oil on canvas', size: '50x60 cm', artist: 'Fei Zheng' },
    { image: './images/jxg/loess-space.jpg', date: '2021', material: 'Oil on canvas', size: '50x60 cm', artist: 'Niu Yungong' },
    { image: './images/shepherd.jpg', date: '2021', material: 'Oil on canvas', size: '50x60 cm', artist: 'Lu Shukai' },
    { image: './images/hjt/jt-lamb-a.jpg', date: '2021', material: 'Oil on canvas', size: '50x60 cm', artist: 'Jia Xiangguo' },
    { image: './images/wt/dragon-robe.jpg', date: '2021', material: 'Oil on canvas', size: '50x60 cm', artist: 'Zhang Shisheng' },
    { image: './images/fz/lantern_festival.jpg', date: '2021', material: 'Oil on canvas', size: '50x60 cm', artist: 'Wang Tao' },
    { image: './images/wyh/039.jpg', date: '2021', material: 'Oil on canvas', size: '50x60 cm', artist: 'Wei Zejia' },
    { image: './images/wyh/051.jpg', date: '2021', material: 'Oil on canvas', size: '50x60 cm', artist: 'Unknown' },
    { image: './images/wyh/hillslope.jpg', date: '2021', material: 'Watercolor on paper', size: '50x60 cm', artist: 'Gong Liuchao' },
    { image: './images/wyh/027.jpg', date: '2021', material: 'Paper', size: '50x60 cm', artist: 'Unknown author' },
    { image: './images/wyh/030.jpg', date: '2021', material: 'Oil on canvas', size: '50x60 cm', artist: 'Unknown author' },
    { image: './images/ex-20.png', date: '2021', material: 'Oil on canvas', size: '50x60 cm', artist: 'Wang Qikang' },
    { image: './images/zss/zss_flower.jpg', date: '2021', material: 'Oil on canvas', size: '50x60 cm', artist: 'Unknown author' },
    { image: './images/ex-3.png', date: '2021', material: 'Oil on canvas', size: '50x60 cm', artist: 'Huang Jitian' },
    { image: './images/ex-4.png', date: '2021', material: 'Oil on canvas', size: '50x60 cm', artist: 'Huang Jitian' },
    { image: './images/ex-5.png', date: '2021', material: 'Oil on canvas', size: '50x60 cm', artist: 'Huang Jitian' },
    { image: './images/lithograph.jpg', date: '2021', material: 'Oil on canvas', size: '50x60 cm', artist: 'Huang Jitian' },
    { image: './images/ex-7.png', date: '2021', material: 'Oil on canvas', size: '50x60 cm', artist: 'Huang Jitian' },
    { image: './images/ex-17.png', date: '2021', material: 'Oil on canvas', size: '50x60 cm', artist: 'Huang Jitian' },
    { image: './images/ex-9.png', date: '2021', material: 'Oil on canvas', size: '50x60 cm', artist: 'Huang Jitian' },
    { image: './images/ex-10.png', date: '2021', material: 'Oil on canvas', size: '50x60 cm', artist: 'Huang Jitian' },
    { image: './images/ex-11.png', date: '2021', material: 'Oil on canvas', size: '50x60 cm', artist: 'Huang Jitian' },
    { image: './images/ex-12.png', date: '2021', material: 'Oil on canvas', size: '50x60 cm', artist: 'Huang Jitian' },
    { image: './images/wqk/forest-ref.jpg', date: '2021', material: 'Oil on canvas', size: '50x60 cm', artist: 'Huang Jitian' },
    { image: './images/ex-14.png', date: '2021', material: 'Oil on canvas', size: '50x60 cm', artist: 'Huang Jitian' },
    { image: './images/ex-2.png', date: '2021', material: 'Oil on canvas', size: '50x60 cm', artist: 'Huang Jitian' },
    { image: './images/snow-village.jpg', date: '2021', material: 'Oil on canvas', size: '50x60 cm', artist: 'Huang Jitian' },
    { image: './images/w_forest.jpg', date: '2021', material: 'Oil on canvas', size: '50x60 cm', artist: 'Huang Jitian' },
    { image: './images/ex-18.png', date: '2021', material: 'Oil on canvas', size: '50x60 cm', artist: 'Huang Jitian' },
    { image: './images/ex-19.png', date: '2021', material: 'Oil on canvas', size: '50x60 cm', artist: 'Huang Jitian' },
    { image: './images/ex-1.png', date: '2021', material: 'Oil on canvas', size: '50x60 cm', artist: 'Huang Jitian' },
    { image: './images/xihu.jpg', date: '2021', material: 'Oil on canvas', size: '50x60 cm', artist: 'Huang Jitian' },
    { image: './images/zyc-a.jpg', date: '2021', material: 'Oil on canvas', size: '50x60 cm', artist: 'Huang Jitian' },
    { image: './images/un_wa.jpg', date: '2021', material: 'Oil on canvas', size: '50x60 cm', artist: 'Huang Jitian' },
    { image: './images/woodcut.jpg', date: '2021', material: 'Oil on canvas', size: '50x60 cm', artist: 'Huang Jitian' }
    // Add more slide objects corresponding to each artist
];

let currentSlideIndex = 0;

// Function to show the carousel
function showCarousel(index) {
    currentSlideIndex = index;
    updateCarouselContent();
    carouselOverlay.classList.add('active');
}

// Function to hide the carousel
function hideCarousel() {
    carouselOverlay.classList.remove('active');
}

// Function to update carousel content
function updateCarouselContent() {
    const slide = slides[currentSlideIndex];
    carouselImage.src = slide.image;
    dateText.textContent = `Date: ${slide.date}`;
    materialText.textContent = `Material: ${slide.material}`;
    sizeText.textContent = `Size: ${slide.size}`;
    artistText.textContent = `Artist: ${slide.artist}`;
}

// Add click event to each div in f-art to open carousel
cards.forEach((div, index) => {
    div.addEventListener('click', () => showCarousel(index));
});

// Hide carousel when clicking outside
carouselOverlay.addEventListener('click', (e) => {
    if (e.target === carouselOverlay) {
        hideCarousel();
    }
});

// Function to slide to the next content with an animation
function slideToNext() {
   const carouselContent = document.querySelector('.carousel-content');
   carouselContent.style.transform = 'translateX(-100%)'; // Slide current content to the left
   
   // Wait for the animation to complete before updating content
   setTimeout(() => {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    updateCarouselContent();
    carouselContent.style.transition = 'none'; // Disable transition for instant reset
    carouselContent.style.transform = 'translateX(100%)';  // Reset position to the right
    
    // Re-enable transition  and slide in the new content from the right
    setTimeout(() => {
        carouselContent.style.transition = 'transform 0.5s ease';
        carouselContent.style.transform = 'translateX(0)';
    },20);

   }, 500); // Match the duration of the transition
}

// Function to slide to the previous content with an animation
function slideToPrev() {
   const carouselContent = document.querySelector('.carousel-content');
   carouselContent.style.transform = 'translateX(100%)'; // Slide current content to the right

   // Wait for the animation to complete before updating content
   setTimeout(() => {
    currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
    updateCarouselContent();
    carouselContent.style.transition = 'none'; // Disable transition for instant reset
    carouselContent.style.transform = 'translateX(-100%)';  // Reset position to the left

    // Re-enable transition and slide in the new content from the left
    setTimeout(() => {
        carouselContent.style.transition = 'transform 0.5s ease';
        carouselContent.style.transform = 'translateX(0)';
    }, 20);
   }, 500 ); // Match the duration of the transition
}

// Add event listeners for next and prev buttons
nextButton.addEventListener('click', slideToNext);
prevButton.addEventListener('click', slideToPrev);


// cards内轮播功能end



