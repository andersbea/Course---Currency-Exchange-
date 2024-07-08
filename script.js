const sekToEur = 0.087;
const sekToUsd = 0.095;

const eurToSek = 1 / sekToEur;
const eurToUsd = 1.08;

const usdToSek = 1 / sekToUsd;
const usdToEur = 1 / eurToUsd;

function valueChange(prefix) {
  const value = document.getElementById(prefix + 'Value').value;
  const fromCurrency = document.getElementById(prefix + 'Currency').value;
  let toPrefix = 'first';
  if (prefix === 'first') {
    toPrefix = 'second';
  }

  const toCurrency = document.getElementById(toPrefix + 'Currency').value;

  let result = value;
  if (fromCurrency === 'SEK' && toCurrency === 'EUR') {
    result = value * sekToEur;
  } else if (fromCurrency === 'SEK' && toCurrency === 'USD') {
    result = value * sekToUsd;
  } else if (fromCurrency === 'EUR' && toCurrency === 'SEK') {
    result = value * eurToSek;
  } else if (fromCurrency === 'EUR' && toCurrency === 'USD') {
    result = value * eurToUsd;
  } else if (fromCurrency === 'USD' && toCurrency === 'SEK') {
    result = value * usdToSek;
  } else if (fromCurrency === 'USD' && toCurrency === 'EUR') {
    result = value * usdToEur;
  }

  document.getElementById(toPrefix + 'Value').value = result;
}
