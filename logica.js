	function callBack() {
		console.log("Caiu Aqui");
		var oResponse = this;
		var sResponseBody = oResponse.responseText;
		var oJSON = JSON.parse(sResponseBody);
		var sReais = oJSON.rates.BRL;
		console.log(sReais);

		var oUrl = new URL(location.href);
		var sValorOrigem = oUrl.searchParams.get("valor_origem");
		console.log(sValorOrigem);

		document.querySelector("#valor_destino").value = sReais * sValorOrigem;
	}

	function chamaAPI() {
		const sURL = "https://api.exchangeratesapi.io/latest";
		var oRequest = new XMLHttpRequest();
		oRequest.addEventListener("load", callBack);
		oRequest.open("GET", sURL);
		oRequest.send();

		// oRequest.addEventListener("load", function(){ 
		// 	callback(this.responseText);
		// }  );
	}