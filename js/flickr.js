const apiKey = '834c36f745871be9910e8214be3d5e00';
const expButton = document.getElementById('exp'); 
const impButton = document.getElementById('imp');
const posButton = document.getElementById('pos');
const claButton = document.getElementById('cla');
const romButton = document.getElementById('rom');
const symButton = document.getElementById('sym');
const archivesContainer = document.querySelector('.archives-container');

// 默认情况下隐藏 archives-container 的内容
archivesContainer.style.display = 'none';

// 通用 fetch 函数
function fetchPhotos(query) {
  archivesContainer.style.display = 'flex';

  // 执行 fetch 请求
  fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=${query}&per_page=4&format=json&nojsoncallback=1`)
    .then(response => response.json())
    .then(data => {
      const photos = data.photos.photo;
      
      // 清空之前的内容（如果已经有内容）
      archivesContainer.innerHTML = '';

      photos.forEach(photo => {
        const imageUrl = `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_b.jpg`;
        
        // 创建图片元素
        const imgElement = document.createElement('img');
        imgElement.src = imageUrl;
        imgElement.alt = photo.title;

        // 创建一个包裹图片的 div
        const photoWrapper = document.createElement('div');
        photoWrapper.classList.add('photo-wrapper');
        photoWrapper.appendChild(imgElement);

        // 将图片添加到 archives-container
        archivesContainer.appendChild(photoWrapper);
      });
    })
    .catch(error => console.error('Error fetching data:', error));
}

// 添加点击事件监听器
expButton.addEventListener('click', () => fetchPhotos('expressionism painting'));
impButton.addEventListener('click', () => fetchPhotos('impressionism painting'));
posButton.addEventListener('click', () => fetchPhotos('post-impressionism painting'));
claButton.addEventListener('click', () => fetchPhotos('classicism painting'));
romButton.addEventListener('click', () => fetchPhotos('romanticism painting'));
symButton.addEventListener('click', () => fetchPhotos('symbolism painting'));
