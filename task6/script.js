const pageInput = document.getElementById('pageInput');
const limitInput = document.getElementById('limitInput');
const requestBtn = document.getElementById('requestBtn');
const imagesList = document.getElementById('imagesList');

requestBtn.addEventListener('click', () => {
    const page = parseInt(pageInput.value);
    const limit = parseInt(limitInput.value);

    if (isNaN(page) || page < 1 || page > 10 || isNaN(limit) || limit < 1 || limit > 10) {
        alert('Номер страницы и/или лимит вне диапазона от 1 до 10');
    } else {
        fetch(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`)
            .then(response => response.json())
            .then(data => {
                localStorage.setItem('lastRequest', JSON.stringify(data));

                imagesList.innerHTML = '';
                data.forEach(item => {
                    const imageElement = document.createElement('img');
                    imageElement.src = item.download_url;
                    imageElement.classList.add('image');
                    imagesList.appendChild(imageElement);
                });
            })
            .catch(error => console.error('Ошибка запроса:', error));
    }
});

window.onload = () => {
    const lastRequestData = localStorage.getItem('lastRequest');
    if (lastRequestData) {
        const images = JSON.parse(lastRequestData);
        imagesList.innerHTML = '';
        images.forEach(item => {
            const imageElement = document.createElement('img');
            imageElement.src = item.download_url;
            imageElement.classList.add('image');
            imagesList.appendChild(imageElement);
        });
    }
};