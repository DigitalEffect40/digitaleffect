// script.js

const basePriceINR = 999;
const rates = {
  INR: 1,
  USD: 0.012,
  EUR: 0.011,
  GBP: 0.0095
};
const symbols = {
  INR: "₹",
  USD: "$",
  EUR: "€",
  GBP: "£"
};

function convertPrice() {
  const currency = document.getElementById("currency").value;
  const converted = (basePriceINR * rates[currency]).toFixed(2);
  const symbol = symbols[currency] || "";
  document.getElementById("price").innerText = `${symbol}${converted}`;
}

function zoomImage(src) {
  const modal = document.getElementById('zoomModal');
  const zoomImg = document.getElementById('zoomImg');
  zoomImg.src = src;
  modal.style.display = 'flex';
  // Focus on modal for accessibility
  modal.setAttribute('tabindex', '-1');
  modal.focus();
}

function closeZoom() {
  const modal = document.getElementById('zoomModal');
  modal.style.display = 'none';
  document.getElementById('zoomImg').src = '';
}

// Close zoom modal on ESC key press
document.addEventListener('keydown', function(event) {
  if (event.key === "Escape") {
    closeZoom();
  }
});
