function zoomImage(src) {
  document.getElementById('zoomImg').src = src;
  document.getElementById('zoomModal').style.display = 'flex';
}

function closeZoom() {
  document.getElementById('zoomModal').style.display = 'none';
}

function toggleLike(el) {
  let countSpan = el.querySelector('span');
  let count = parseInt(countSpan.textContent);
  count++;
  countSpan.textContent = count;
}

function convertCurrency(select) {
  let price = 599;
  const rate = {
    INR: 1,
    USD: 0.012,
    EUR: 0.011,
    GBP: 0.0095
  };
  const selected = select.value;
  const parent = select.closest('.product-info');
  const priceElement = parent.querySelector('.product-price');
  const symbol = { INR: \"₹\", USD: \"$\", EUR: \"€\", GBP: \"£\" };
  priceElement.innerHTML = `${symbol[selected]}${(price * rate[selected]).toFixed(2)}`;
}
