const btn = document.querySelector('.j-btn-request').addEventListener('click', useRequest);

function useRequest() {
  const value1 = document.querySelector('#input1').value;
  const value2 = document.querySelector('#input2').value;
  const resultNode = document.querySelector('.j-result');

  const numValue1 = Number(value1);
  const numValue2 = Number(value2);
  if (isNaN(numValue1) || isNaN(numValue2) || (numValue1 < 100 || numValue1 > 300) || (numValue2 < 100 || numValue2 > 300)) {
    resultNode.innerHTML = 'одно из чисел вне диапазона от 100 до 300';
  }
  else {
    fetch(`https://picsum.photos/${numValue1}/${numValue2}`)
      .then(response => response.blob())
      .then(image => {
        let outside = URL.createObjectURL(image)
        let img = document.createElement('IMG');
        img.src = outside
        resultNode.appendChild(img);
      })
  }
}






