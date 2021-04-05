const user = document.getElementById("userField");
const message = document.getElementById("messageField");
const send = document.getElementById("send");
const save = document.getElementById("button #save");
const cancel = document.getElementById("button #cancel");



const alertBanner = document.getElementById("alert");
alertBanner.innerHTML = 
`<div class="alert-banner">
<p><strong>Alert:</strong> You have <strong>6</srong> overdue tasks
 to complete</p>
 <p class="alert-banner-close">x</p>
 </div>`

 alertBanner.addEventListener('click', (e) => {
     const element = e.target;
     if (element.classlist.contains("alert-banner-close")) {
         alert.style.display = "none"
     }
 });

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
      optiopns: trafficOptions
  });

  const dailyCanvas = document.getElementById("daily-chart");

  const dailyData = {
      labels: ["S", "M", "T", "W", "F", "S"],
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

  // Save button
  save.addEventListener('click', () => {

  });



  // Cancel Button
  cancel.addEventListener('click', () => {

  });

