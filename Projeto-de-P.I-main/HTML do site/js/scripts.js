/*!
* Start Bootstrap - Modern Business v5.0.6 (https://startbootstrap.com/template-overviews/modern-business)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-modern-business/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project


const firebaseConfig = {
  "apiKey": "AIzaSyBZiIyPOr4uEqLtyLYwsHrTao9vyEirSMY",
  "authDomain": "projled-111c9.firebaseapp.com",
  "databaseURL": "https://projled-111c9-default-rtdb.firebaseio.com",
  "projectId": "projled-111c9",
  "storageBucket": "projled-111c9.appspot.com",
  "messagingSenderId": "456228891378",
  "appId": "1:456228891378:web:b6b778c8b2cb12d21e7e6b",
  "measurementId": "G-1FF4QYE8WX"
  };
  
        firebase.initializeApp(firebaseConfig);

var umidar = document.getElementById('humidity');

var x = firebaseRef = firebase.database().ref().child("humidity");
x.on('value', function(datasnapshot){
    umidar.innerText = datasnapshot.val();
})

var temar = document.getElementById('temperature');

var x = firebaseRef = firebase.database().ref().child("temperature");
x.on('value', function(datasnapshot){
    temar.innerText = datasnapshot.val();
})

tempRef.on('value', onNewData('currentTemp', 'tempLineChart' , 'Temperatura', 'C°'));
umidRef.on('value', onNewData('currentUmid', 'umidLineChart' , 'Umidade', '%'));

function onNewData(currentValueEl, chartEl, label, metric){
    return function(snapshot){
      var readings = snapshot.val();
      if(readings){
          var currentValue;
          var data = [];
          for(var key in readings){
            currentValue = readings[key]
            data.push(currentValue);
          }
  
          document.getElementById(currentValueEl).innerText = currentValue + ' ' + metric;
          buildLineChart(chartEl, label, data);
      }
    }
  }

  // Constroi um gráfico de linha no elemento (el) com a descrição (label) e os
  // dados passados (data)
  function buildLineChart(el, label, data){
    var elNode = document.getElementById(el);
    new Chart(elNode, {
      type: 'line',
      data: {
          labels: new Array(data.length).fill(""),
          datasets: [{
              label: label,
              data: data,
              borderWidth: 1,
              fill: false,
              spanGaps: false,
              lineTension: 0.1,
              backgroundColor: "#F9A825",
              borderColor: "#F9A825"
          }]
      }
    });
  }


  <script src="https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js"></script>
  <script src="https://www.gstatic.com/firebasejs/9.17.2/firebase-analytics.js"></script>
   <!-- Core theme JS-->

   <script src="https://www.gstatic.com/firebasejs/8.2.0/firebase-auth.js"></script>
   <script src="https://www.gstatic.com/firebasejs/8.2.0/firebase-database.js"></script>
  
  
  
   <script src="https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js"></script>
   <script src="https://www.gstatic.com/firebasejs/9.16.0/firebase-analytics.js"></script>

   <script src="https://www.gstatic.com/firebasejs/8.2.0/firebase-auth.js"></script>
   <script src="https://www.gstatic.com/firebasejs/8.2.0/firebase-database.js"></script>
   <script>

const firebaseConfig = {
apiKey: "AIzaSyBZiIyPOr4uEqLtyLYwsHrTao9vyEirSMY",
authDomain: "projled-111c9.firebaseapp.com",
databaseURL: "https://projled-111c9-default-rtdb.firebaseio.com",
projectId: "projled-111c9",
storageBucket: "projled-111c9.appspot.com",
messagingSenderId: "456228891378",
appId: "1:456228891378:web:b6b778c8b2cb12d21e7e6b",
measurementId: "G-1FF4QYE8WX"
};

   firebase.initializeApp(firebaseConfig);

var humidity = document.getElementById('humidity');

var x = firebaseRef = firebase.database().ref().child("humidity");
x.on('value', function(datasnapshot){
humidity.innerText = datasnapshot.val();
})

var temperature = document.getElementById('temperature');

var x = firebaseRef = firebase.database().ref().child("temperature");
x.on('value', function(datasnapshot){
temperature.innerText = datasnapshot.val();
})




       
   </script>