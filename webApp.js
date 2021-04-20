const user = document.getElementById("userField");
const message = document.getElementById("messageField");
const send = document.getElementById("send");


const notification1 = document.getElementById('alertBox1');
notification1.innerHTML = `<div class="alertBox1">
<div class="notif1">
<p><strong>Alert:</strong> You have <strong>1</strong> new update</p>
<p><strong>Alert:</strong> You have <strong>2</strong> new comments</p>
<div class="x-container">
<p class="alertBox1-close">&times;</p>
</div>
</div>
</div>`

notification1.addEventListener('click', (e) => {
    const element = e.target;
    if (element.classList.contains("alertBox1-close")) {
        notification1.style.display = "none"
    }
});

const clickEvent = document.getElementById('bell-icon');
document.getElementById('alertBox1').style.display = 'none';
clickEvent.addEventListener('click', displayAlertBox1);
   

 function displayAlertBox1() {
     notification1.style.display = 'block';
 }

const alertBanner = document.getElementById("alert");
alertBanner.innerHTML = 
`<div class="alert-banner">
<p><strong>Alert:</strong> You have <strong>6</srong> overdue tasks
 to complete</p>
 <p class="alert-banner-close">&times;</p>
 </div>`

 alertBanner.addEventListener('click', e => {
     const element = e.target;
     if (element.classList.contains("alert-banner-close")) {
         alertBanner.style.display = "none"
     }
 });

// line graph for traffic chart

 const trafficCanvas = document.getElementById("traffic-chart");

 let trafficData = {
     labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", 
     "4-10", "11-17", "18-24", "25-31"],
     datasets: [{
         data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,
        2500],
            backgroundColor: 'rgba(116, 119, 191, .3)',
            borderWidth: 1,
     }]
        
 };

 let trafficOptions = {
     aspectRatio: 2.5,
     animation: {
         duration: 0
     },
     scales: {
         yAxes: [{
             ticks: {
                 beginAtZero:true
             }
         }]
     },
     legend : {
         display: false
     }
 };
  let trafficChart = new Chart(trafficCanvas, {
      type: 'line',
      data: trafficData,
      options: trafficOptions
  });


  const hourlyData = {
    labels:  ["15-28", "12-4", "2-20", "16-7", "18-5", "20-10", "30-15", "17-8", "11-3", "24-13", "21-13"],
     datasets: [{
         data: [325, 1050, 1250, 2500, 1250, 1850, 1625, 1025, 750, 1400, 2200],
        //  [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,
        // 2500],
            backgroundColor: 'rgba(116, 119, 191, .3)',
            borderWidth: 1,
     }],
  };

  document.getElementById('hourly').addEventListener('click', () => {
      trafficChart.config.data = hourlyData;
      trafficChart.update();
  });

 const dailyLineData = {
  labels: ["32-40", "41-45", "46-57", "58-62", "63-70", "71-75", "76-80", 
        "81-95", "96-100", "105-120", "121-132"],
  datasets: [{
    data: [450, 700, 525, 850, 1000, 1250, 1550, 1100, 1300, 1700, 1450],
//     [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,
//    2500],
       backgroundColor: 'rgba(116, 119, 191, .3)',
       borderWidth: 1,
    }],
};

document.getElementById('daily').addEventListener('click', () => {
    trafficChart.config.data = dailyLineData;
    trafficChart.update();
});

const weeklyData = {
    labels: ["4-12", "13-17", "18-24", "25-32", "33-43", "44-51", "52-67", 
    "68-73", "74-81", "82-96", "97-105"],
    datasets: [{
     data: [200, 400, 550, 725, 450, 900, 1200, 950, 1600, 1050, 1150],
    //  [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,
    // 2500],
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderWidth: 1,
     }],
};

document.getElementById('weekly').addEventListener('click', () => {
    trafficChart.config.data = weeklyData;
    trafficChart.update();
});

const monthlyData = {
    labels: ["3-16", "5-15", "6-24", "7-18", "8-20", "9-17", "10-22", 
        "11-22", "12-14", "13-26", "14-27"],
        datasets: [{
            data: [300, 550, 825, 625, 1200, 1500, 1225, 1450, 1100, 1600, 1350],
        //     [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,
        //    2500],
               backgroundColor: 'rgba(116, 119, 191, .3)',
               borderWidth: 1,
        }],
};

document.getElementById('monthly').addEventListener('click', () => {
    trafficChart.config.data = monthlyData;
    trafficChart.update();
});


// pie and bar charts

  const dailyCanvas = document.getElementById("daily-chart");

  const dailyData = {
      labels: ["S", "M", "T", "W", "T", "F", "S"],
      datasets: [{
          label: '# of Hits',
          data: [75, 115, 175, 125, 225, 200, 100],
          backgroundColor: '#7477BF',
          borderWidth: 1
      }]
  };

  const dailyOptions = {
      scales: {
          yAxes: [{
              ticks: {
                  beginAtZero: true
              }
          }]
      },
      legend : {
          display: false
      }
  }

  let dailyChart = new Chart(dailyCanvas, {
      type: 'bar',
      data: dailyData,
      options: dailyOptions
  });

  const mobileCanvas = document.getElementById("mobile-chart");
  const mobileData = {
      labels: ["Desktop", "Tablet", "Phones"],
      datasets : [{
          label: '# of Users',
          data: [2000, 550, 500],
          borderWidth: 0,
          backgroundColor: [
              '#7477BF',
              '#78CF82',
              '#51B6C8'
          ]
      }]
  };

  const mobileOptions = {
      legend: {
          position: 'right',
          labels: {
              boxWidth: 20,
              fontStyle: 'bold'
          }
      }
  }

  let mobileChart = new Chart(mobileCanvas, {
      type: 'doughnut',
      data: mobileData,
      options: mobileOptions
  });

  // Send Button
  send.addEventListener('click', (e) => {
      e.preventDefault();
      if(userfield.value === "" && messageField.value === "") {
          alert("Please fill out user and message fields before sending");
      } else if (userfield.value === "") {
          alert("Please fill out user field before sending");  
      } else if (messageField.value === "") {
          alert("Please fill out message field before sending");   
      } else {
          alert(`Message successfully sent to: ${userfield.value}`);  
      }
  });

// Save button localStorage

// let toggleField = document.getElementById('on1');
// let toggleField2 = document.getElementById('on2');
let timezone = document.getElementById('timezone');
let save = document.getElementById('save');
let settings = document.getElementById('settings');
// const checkBox1 = document.querySelectorAll('input[type=checkbox]');
const checkBox1 = document.getElementById('checkbox1');
const checkBox2 = document.getElementById('checkbox2');

save.addEventListener('click', () => {
    // document.getElementById('checkbox1').checked == false;

    // if (checkBox1.checked == true) {
    // if (document.getElementById('checkbox1').checked == true) {
        localStorage.setItem("checkbox1", checkBox1.checked);
        // localStorage.getItem("checkbox1", checkbox1.value);
        // localStorage.getItem('checkbox1');
    // } else {
        // localStorage.setItem("checkbox1", "unchecked");
        // localStorage.getItem("checkbox1", checkbox1.value);
        localStorage.setItem("checkbox2", checkBox2.checked);
        // localStorage.setItem("checkbox2", "unchecked");
        localStorage.setItem('timezone', timezone.selectedIndex);
        // localStorage.getItem('timezone');
    // }
});

// Cancel button

cancel.addEventListener('click', () => {
    localStorage.clear();

});

// this is what I think Amber means by using a function to get the checkbox item on page load
function isChecked() {
    checkBox1.checked = JSON.parse(localStorage.getItem('checkbox1'));
    checkBox2.checked = JSON.parse(localStorage.getItem('checkbox2'));
    timezone.selectedIndex = localStorage.getItem('timezone');
    // document.getElementById('checkbox1');
    // if (document.getElementById('checkbox1').checked = true) {
    // if (checkBox1 !== localStorage.setItem('checkbox1', checkBox1.value)) {
    // localStorage.getItem('checkbox1');
    // document.getElementById('checkbox1').checked = true;
//     }
}


// function unChecked() {
//     document.getElementById('checkbox1').checked = false;
// }

window.onload = isChecked;
    

   

// window.onload = function() {
//     unChecked();
// };

// function check() {
//     const checkbox = document.getElementById('on1');
//     localStorage.setItem('on1', checkbox.checked);
// }

// const checked = localStorage.getItem('on1');
// document.getElementById('on1').checked = true;


// function saveResponses() {
//     if (timezone.value) {
//     localStorage.setItem('timezone', timezone.value)
//     localStorage.setItem('checkBox1', checkBox1.checked);
//     localStorage.getItem(checkBox1);
    // localStorage.setItem('on1', toggleField.checked);
    // localStorage.getItem('on1', toggleField.value);
    // localStorage.setItem('on2', toggleField2.checked);
    // localStorage.getItem('on2', toggleField2.value);
    // localStorage.setItem('timezone', timezone.value);
    // localStorage.getItem('timezone', timezone.value);
// }
// }


// save.addEventListener('click', function() {
// if (timezone.value) {
//     localStorage.setItem('timezone', timezone.value);
//     localStorage.getItem(timezone);
//     localStorage.setItem('checkBox1', checkBox1.checked);
//     localStorage.getItem(checkBox1);
// }
// });
// save.addEventListener('click', check);


// Cancel Button

    // toggleField = document.getElementById('off');
    // timeZone = document.getElementById('timezone');
    // let cancel = document.getElementById('cancel');
    // settings = document.getElementById('settings');

//     cancel.addEventListener('click', () => {
//         if (button === 'CANCEL') {
//     localStorage.removeItem('settings', JSON.stringify(settings));
//         }
// });

    // function cancelResponses() {
    //     // clear();
    //     localStorage.removeItem('on1');
    //     localStorage.removeItem('on2');
    //     // localStorage.removeItem('off');
    //     localStorage.removeItem('timezone');
    // }
    // cancel.addEventListener('click', cancelResponses);

  

