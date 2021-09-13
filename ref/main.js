// Exchange Info
function getExchangeInfo() {
  axios({
    method: "get",
    url: "https://testnet.binance.vision/api/v3/exchangeInfo",
  })
    .then((res) => showOutput(res))
    .catch((err) => console.error(err));
}
const testies = "LTCUSDT";

// Order Book
function getOrderBook() {
  axios({
    method: "get",
    url: "https://testnet.binance.vision/api/v3/depth",
    params: {
      symbol: testies,
      limit: 10,
    },
  })
    .then((res) => showOutput(res))
    .catch((err) => console.error(err));
}

// 24hr Ticker Price Change
function getPriceChange() {
  axios
    .get("https://testnet.binance.vision/api/v3/ticker/24hr", {
      params: {
        symbol: "BTCUSDT",
      },
    })
    .then((res) => showOutput(res))
    .catch((err) => console.error(err));
}

function makeSignature() {
  var signature = CryptoJS.HmacSHA256(dataQueryString, keys["skey"]).toString(
    CryptoJS.enc.Hex
  );

  return signature;
}

// Profile
function getProfile() {
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

// SIMULTANEOUS DATA
function getData() {
  console.log("Simultaneous Request");
}

// CUSTOM HEADERS
function customHeaders() {
  console.log("Custom Headers");
}

// TRANSFORMING REQUESTS & RESPONSES
function transformResponse() {
  console.log("Transform Response");
}

// ERROR HANDLING
function errorHandling() {
  console.log("Error Handling");
}

// CANCEL TOKEN
function cancelToken() {
  console.log("Cancel Token");
}

// INTERCEPTING REQUESTS & RESPONSES

// AXIOS INSTANCES

// Show output in browser
function showOutput(res) {
  document.getElementById("res").innerHTML = `
    <div class="card card-body mb-4">
      <h5>Status: ${res.status}</h5>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Headers
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.headers, null, 2)}</pre>
      </div>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Data
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.data, null, 2)}</pre>
      </div>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Config
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.config, null, 2)}</pre>
      </div>
    </div>
  `;
}

// Event listeners
document.getElementById("get").addEventListener("click", getExchangeInfo);
document.getElementById("post").addEventListener("click", getOrderBook);
document.getElementById("update").addEventListener("click", getPriceChange);
document.getElementById("delete").addEventListener("click", getProfile);
document.getElementById("sim").addEventListener("click", getData);
document.getElementById("headers").addEventListener("click", customHeaders);
document
  .getElementById("transform")
  .addEventListener("click", transformResponse);
document.getElementById("error").addEventListener("click", errorHandling);
document.getElementById("cancel").addEventListener("click", cancelToken);
