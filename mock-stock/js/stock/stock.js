function addStock(stock) {
      var table = document.getElementById("stockTable");
      var row = table.insertRow();
      var nameCell = row.insertCell();
      nameCell.innerHTML = stock.name;

      var priceCell = row.insertCell();
      priceCell.innerHTML = stock.price;

      var changeCell = row.insertCell();
      var percentChangeCell = row.insertCell();
      var chartCell = row.insertCell();

      changeCell.innerHTML = stock.change;
      percentChangeCell.innerHTML = stock.percentChange;
      
      if (parseInt(stock.change) === 0) {
        changeCell.style.color = "gray";
        percentChangeCell.style.color = "gray"; 
      } else if (parseInt(stock.change) > 0) {
        changeCell.style.color = "red";
        percentChangeCell.style.color = "red"; 
      } else {
        changeCell.style.color = "blue";
        percentChangeCell.style.color = "blue"; 
      }

  var chartButton = document.createElement("button"); 
  chartButton.innerHTML = "차트 보기";
  chartButton.style.color = "white";
  chartButton.style.border = "none";
  chartButton.style.padding = "10px 20px";
  if (parseInt(stock.change) === 0) {
        changeCell.style.color = "gray";
        percentChangeCell.style.color = "gray";
        chartButton.style.backgroundColor = "gray"; 
      } else if (parseInt(stock.change) > 0) {
        changeCell.style.color = "red";
        percentChangeCell.style.color = "red";
        chartButton.style.backgroundColor = "red"; 
      } else {
        changeCell.style.color = "blue";
        percentChangeCell.style.color = "blue"; 
        chartButton.style.backgroundColor = "blue";
      }
  chartButton.addEventListener("click", function() {
    if (stock.name === "H 조선") {
      window.location.href = "https://www.naver.com"; 
    } else if (stock.name === "K IT") {
      window.location.href = "https://www.naver.com"; 
    } else if (stock.name === "D 조선") {
      window.location.href = "https://www.naver.com"; 
    } else if (stock.name === "T 자동차") {
      window.location.href = "https://www.naver.com"; 
    } else if (stock.name === "S 에너지") {
      window.location.href = "https://www.naver.com"; 
    } else if (stock.name === "J 엔터") {
      window.location.href = "https://www.naver.com"; 
    } else if (stock.name === "F 바이오") {
      window.location.href = "https://www.naver.com"; 
    } else if (stock.name === "N IT") {
      window.location.href = "https://www.naver.com"; 
    } else if (stock.name === "H 에너지") {
      window.location.href = "https://www.naver.com"; 
    } else if (stock.name === "M 바이오") {
      window.location.href = "https://www.naver.com"; 
    } 
  });

   chartCell.appendChild(chartButton); 
}

// API 자리
var stockData = [
  { name: "H 조선", price: "100,000", change: "+5,000", percentChange: "+5%" },
  { name: "K IT", price: "50,000", change: "-2,000", percentChange: "-4%" },
  { name: "D 조선", price: "80,000", change: "+1,500", percentChange: "+2%" },
  { name: "T 자동차", price: "100,000", change: "+5,000", percentChange: "+5%" },
  { name: "S 에너지", price: "50,000", change: "-2,000", percentChange: "-4%" },
  { name: "J 엔터", price: "80,000", change: "+1,500", percentChange: "+2%" },
  { name: "F 바이오", price: "100,000", change: "+5,000", percentChange: "+5%" },
  { name: "N IT", price: "50,000", change: "-2,000", percentChange: "-4%" },
  { name: "H 에너지", price: "80,000", change: "+1,500", percentChange: "+2%" },
  { name: "M 바이오", price: "100,000", change: "+5,000", percentChange: "+5%" },
];

stockData.forEach(function(stock) {
  addStock(stock);
});

function showCurrentTime() {
  var currentTime = new Date().toLocaleTimeString();
  document.getElementById("currentTime").innerHTML = "현재 시각: " + currentTime;
}
setInterval(showCurrentTime, 1000);
function showRemainingTime() {
  var currentTime = new Date();
  var targetTime = new Date();
  targetTime.setHours(12);
  targetTime.setMinutes(30);
  targetTime.setSeconds(0);
  if (currentTime > targetTime) {
    targetTime.setDate(targetTime.getDate() + 1);
}
var timeDiff = targetTime - currentTime;
var hours = Math.floor(timeDiff / (1000 * 60 * 60));
  var minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

  var remainingTime;
  if (hours > 22) {
    remainingTime = minutes + "분 " + seconds + "초";
    document.getElementById("remainingTime").innerHTML = remainingTime + " 후 폐장";
  }
  if (hours < 1) {
    remainingTime = minutes + "분 " + seconds + "초";
    document.getElementById("remainingTime").innerHTML = remainingTime + " 후 개장";
  } else {
    remainingTime = hours + "시간 " + minutes + "분 " + seconds + "초";
    document.getElementById("remainingTime").innerHTML = remainingTime + " 후 개장";
  }
  

  setTimeout(showRemainingTime, 1000); 
}
showRemainingTime();
