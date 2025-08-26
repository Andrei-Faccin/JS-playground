const form = document.getElementById("converterForm");
const amount = document.getElementById("amount");
const fromCurrency = document.getElementById("fromCurrency");
const convertedAmount = document.getElementById("convertedAmount");
const toCurrency = document.getElementById("toCurrency");
const loading = document.querySelector(".loading");
const result = document.querySelector(".result");
const error = document.querySelector(".error");
const button = document.querySelector("button");

const API_URL = "https://api.exchangerate-api.com/v4/latest/";

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function convertMoney() {
  loading.style.display = "block";
  error.style.display = "none";
  result.style.display = "none";
  button.style.display = "none";

  //console.log(API_URL + fromCurrency.value);
  try {
    await wait(5000);
    const response = await fetch(API_URL + fromCurrency.value);
    const data = await response.json();

    const rate = data.rates[toCurrency.value];
    const convertedValue = (amount.value * rate).toFixed(2);
    //console.log(data);

    convertedAmount.value = convertedValue;
    result.style.display = "block";

    result.innerHTML = `
        <div style = "font-size: 1.4rem;">
        ${amount.value} ${fromCurrency.value} = ${convertedAmount.value} ${toCurrency.value}
        <div>
        <div style="font-size: 0.9rem; opacity: 0.8: margin-top: 10px ">
        Taxa: 1 ${fromCurrency.value} = ${rate} ${toCurrency.value}
        <div>
    `;

    //console.log(convertedValue);
  } catch (err) {
    error.style.display = "block";
    error.innerHTML = "Ocorreu um erro, tente novamente mais tarde.";
  }
  button.style.display = "block";
  loading.style.display = "none";
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  convertMoney();
});
