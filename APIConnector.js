class APIConnector {
  constructor(endPoint, params) {
    this.endPoint = endPoint;
    this.params = params;
  }
  APICall() {
    axios({
      method: "get",
      url: "https://testnet.binance.vision" + endPoint,
      params: params,
    })
      .then((res) => showOutput(res))
      .catch((err) => console.error(err));
  }
}

var testy = new APIConnector("/api/v3/ticker/price", "BTCUSDT");
var testyr = testy.APICall();
console.log(testyr);

/* function APICall() {
  var baseURL = "https://testnet.binance.vision";
  var endPoint = "/api/v3/account";
  var dataQueryString = "recvWindow=20000&timestamp=" + Date.now();

  var keys = {
    akey: "9hbrHhyPZNhMt2WBihFSQ9RxoCPgLljW9MMPc4JF5P7KYEXK9lWMgomBhx8bQ8mk",
    skey: "s75nfQSpXg7P2voI6uTtCrfTVTYw5wnzUuOKPHAbHDe0LBapz6JlY9mF7GenoKxY",
  };
  var signature = CryptoJS.HmacSHA256(dataQueryString, keys["skey"]).toString(
    CryptoJS.enc.Hex
  );

  var ourRequest = new XMLHttpRequest();

  var url =
    baseURL + endPoint + "?" + dataQueryString + "&signature=" + signature;

  ourRequest.open("GET", url, true);
  ourRequest.setRequestHeader("X-MBX-APIKEY", keys["akey"]);

  ourRequest.onload = function () {
    ourData = JSON.parse(ourRequest.responseText);
    console.log(ourData);
  };
  ourRequest.send();
}
 */
