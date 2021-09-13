// Profile
function getProfile() {
  var baseURL = "https://testnet.binance.vision";
  // var baseURL = "https://api.binance.com";
  var endPoint = "/api/v3/account";
  var dataQueryString = "recvWindow=20000&timestamp=" + Date.now();

  var keys = {
    akey: "9hbrHhyPZNhMt2WBihFSQ9RxoCPgLljW9MMPc4JF5P7KYEXK9lWMgomBhx8bQ8mk",
    skey: "s75nfQSpXg7P2voI6uTtCrfTVTYw5wnzUuOKPHAbHDe0LBapz6JlY9mF7GenoKxY",
  };
  /* var keys = {
    akey: "KlVX5yL5oLu4icNZh7GmSmNDCeuLQVDO2rh9rRS939BlM4AYyznDzIepaaLMVnVw",
    skey: "y73MtIP4NAQOpqRzpVYy6DAePeOUyDlf5qM7Zx9hLLyI5LAv4xYnhayBRwxg7AsO",
  }; */

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
    showOutput(ourData);
  };
  ourRequest.send();
}

// INTERCEPTING REQUESTS & RESPONSES

// AXIOS INSTANCES

// Show output in browser
function showOutput(res) {
  document.getElementById("res").innerHTML = `
  <table class="table">
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col">Asset</th>
      <th scope="col">Balance</th>
      <th scope="col">Locked</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>${res.balances[0].asset}</td>
      <td>${res.balances[0].free}</td>
      <td>${res.balances[0].locked}</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>${res.balances[1].asset}</td>
      <td>${res.balances[1].free}</td>
      <td>${res.balances[1].locked}</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>${res.balances[2].asset}</td>
      <td>${res.balances[2].free}</td>
      <td>${res.balances[2].locked}</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>${res.balances[3].asset}</td>
      <td>${res.balances[3].free}</td>
      <td>${res.balances[3].locked}</td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td>${res.balances[4].asset}</td>
      <td>${res.balances[4].free}</td>
      <td>${res.balances[4].locked}</td>
    </tr>
    <tr>
      <th scope="row">6</th>
      <td>${res.balances[5].asset}</td>
      <td>${res.balances[5].free}</td>
      <td>${res.balances[5].locked}</td>
    </tr>
    <tr>
      <th scope="row">7</th>
      <td>${res.balances[6].asset}</td>
      <td>${res.balances[6].free}</td>
      <td>${res.balances[6].locked}</td>
    </tr>
    <tr>
      <th scope="row">8</th>
      <td>${res.balances[7].asset}</td>
      <td>${res.balances[7].free}</td>
      <td>${res.balances[7].locked}</td>
    </tr>
  </tbody>
</table>
   
  `;
}

// Event listeners

document.getElementById("delete").addEventListener("click", getProfile);
