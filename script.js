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

function convertCurrency(selectElement) {
  const rates = {
    INR: 1,
    USD: 0.012,  // Example rate: 1 INR = 0.012 USD
    EUR: 0.011,  // Example rate: 1 INR = 0.011 EUR
    GBP: 0.0095  // Example rate: 1 INR = 0.0095 GBP
  };

  const card = selectElement.closest(".product-card");
  const priceElement = card.querySelector(".product-price");
  const inrValue = parseFloat(priceElement.dataset.inr); // use data-inr attribute

  const selectedCurrency = selectElement.value;
  const converted = (inrValue * rates[selectedCurrency]).toFixed(2);

  let symbol = "₹";
  if (selectedCurrency === "USD") symbol = "$";
  if (selectedCurrency === "EUR") symbol = "€";
  if (selectedCurrency === "GBP") symbol = "£";

  priceElement.innerText = `${symbol}${converted}`;
}
