function useRequest(url, callback) {
  const value = document.querySelector('input').value;

  const xhr = new XMLHttpRequest();
  if (1 > value || value > 10) {
    resultNode.innerHTML = "число вне диапазона от 1 до 10"
  }
  else {
    url += value;
    xhr.open('GET', url, true);
    xhr.onload = function () {
      if (xhr.status != 200) {
        console.log('Статус ответа: ', xhr.status);
      } else {
        const result = JSON.parse(xhr.response);
        if (callback) {
          callback(result);
        }
      }
    }

  };
  xhr.onerror = function () {
    console.log('Ошибка', xhr.status);
  };
  xhr.send();
};

const resultNode = document.querySelector('.j-result');
const btnNode = document.querySelector('.j-btn-request');

function displayResult(apiData) {
  let cards = '';
  console.log(apiData + ' apiData');
  apiData.forEach(item => {
    const cardBlock = `
    <div class="card">
      <img
        src="${item.download_url}"
        class="card-image"
      />
    </div>
  `;
    cards = cards + cardBlock;
  });

  resultNode.innerHTML = cards;
}

btnNode.addEventListener('click', () => {
  useRequest('https://picsum.photos/v2/list/?limit=', displayResult);
})