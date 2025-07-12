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

const fixedRates = {
  INR: 1,
  USD: 0.012,
  EUR: 0.011,
  GBP: 0.0095
};

const currencySymbols = {
  INR: "₹",
  USD: "$",
  EUR: "€",
  GBP: "£"
};

function convertCurrency(selectElement, priceId) {
  const selectedCurrency = selectElement.value;
  const priceEl = document.getElementById(priceId);
  const inrValue = parseFloat(priceEl.getAttribute('data-inr'));

  const rate = fixedRates[selectedCurrency];
  const converted = (inrValue * rate).toFixed(2);
  const symbol = currencySymbols[selectedCurrency];

  priceEl.textContent = `${symbol}${converted}`;
}
