fetch('https://developerhub.alfabank.by:8273/partner/1.0.0/public/rates/')
	.then(handleResponse ) 
	.then(handleCurrencies)


function handleResponse(response){ 
	return response.json(); 
}

function handleCurrencies(currencies) { 
	let currencyUSD = currencies.rates[5].buyRate;
	console.log (currencies.rates[5].buyRate);	
	let USD_container = document.getElementById('currency_USD');
	USD_container.innerText ="USD " + currencyUSD;
	let currencyEUR = currencies.rates[4].buyRate;
	console.log (currencies.rates[4].buyRate);
	let EUR_container = document.getElementById('currency_EUR');
	EUR_container.innerText ="EUR " + currencyEUR;
	let currencyRUB = currencies.rates[3].buyRate;
	console.log (currencies.rates[3].buyRate);
	let RUB_container = document.getElementById('currency_RUB');
	RUB_container.innerText ="RUB " + currencyRUB;
}
