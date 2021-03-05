const btn = document.querySelector('.j-btn-request').addEventListener('click', useRequest);
let image = localStorage.getItem('dataStorage')
displayResult(JSON.parse(image))
// () => {
//   useRequest('https://picsum.photos/v2/list/?limit=', displayResult
function useRequest(e) {
  e.preventDefault();
  const value1 = document.querySelector('#input1').value;
  const value2 = document.querySelector('#input2').value;
  const resultNode = document.querySelector('.j-result');

  const numValue1 = Number(value1);
  const numValue2 = Number(value2);

  if ((numValue1 < 1 || numValue1 > 10) && (numValue2 < 1 || numValue2 > 10)) {
    resultNode.innerHTML = 'Номер страницы и лимит вне диапазона от 1 до 10';
  }
  else if (numValue1 < 1 || numValue1 > 10) {
    resultNode.innerHTML = 'Номер страницы вне диапазона от 1 до 10';
  }
  else if (numValue2 < 1 || numValue2 > 10) {
    resultNode.innerHTML = 'Лимит вне диапазона от 1 до 10';
  }
  else {
    fetch(`https://picsum.photos/v2/list?page=${numValue1}&limit=${numValue2}`)
      .then(response => response.json())
      .then(image => {
        localStorage.setItem('dataStorage', JSON.stringify(image))
        displayResult(image)

      })
  }
}


function displayResult(image) {
  if (image) {
    const resultNode = document.querySelector('.j-result');
    let cards = '';
    image.forEach(item => {
      const cardBlock = `
    <div class="card">
      <img
        src="${item.download_url}"
        class="card-image"
        width="300px"
        height="200px"
      />
    </div>
  `;
      cards = cards + cardBlock;
    });

    resultNode.innerHTML = cards;
  }

}