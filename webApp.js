const user = document.getElementById("userField");
const message = document.getElementById("messageField");
const send = document.getElementById("send");
const save = document.getElementById("button #save");
const cancel = document.getElementById("button #cancel");
// const hourlyButton = document.getElementById("hourly");



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

//  default line graph

//  const defaultConfig = {
//      type: 'line',
//      data: hourlyData,
//      options: trafficOptions,

//  }

//  const defaultconfig = document.getElementById('traffic-chart');
//  chart = new Chart(defaultconfig, defaultConfig);

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
      optiopns: trafficOptions
  });


  //hourly button chart

//   const hourlyData = document.getElementById("traffic-chart");
//   chart = new Chart(hourlyData, {
//       type:'line',
//       labels: ["15-28", "12-4", "2-20", "16-7", "18-5", "20-10", "30-15", "17-8", "11-3", "24-13", "21-13"],
//     //   ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", 
//     //   "4-10", "11-17", "18-24", "25-31"],
//       datasets: [{
//         data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,
//        2500],
//            backgroundColor: 'rgba(116, 119, 191, .3)',
//            borderWidth: 1,
//       }],
// });

//     document.getElementById('hourly').addEventListener('click', () => {
//     chart.config.data = {
//       type: 'line',
//       labels: ["15-28", "12-4", "2-20", "16-7", "18-5", "20-10", "30-15", "17-8", "11-3", "24-13", "21-13"],
//     //   ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", 
//     //   "4-10", "11-17", "18-24", "25-31"],
//       datasets: [{
//         data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,
//             2500],
        
//            backgroundColor: 'rgba(116, 119, 191, .3)',
//            borderWidth: 1,
//       }],
//         }
//         chart.update();
//     });

    // daily button chart

    // const dailyLineData = document.getElementById('traffic-chart');
    // chart = new Chart(dailyLineData, {
    //     type: 'line',
    //     labels: ["32-40", "41-45", "46-57", "58-62", "63-70", "71-75", "76-80", 
    // "81-95", "96-100", "105-120", "121-132"],
    // datasets: [{
    //     data:  [750, 1250, 1000, 1200, 1350, 1750, 1250, 500, 2250, 1500,
    //         2800],
    // //     [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,
    // //    2500],
    //        backgroundColor: 'rgba(116, 119, 191, .3)',
    //        borderWidth: 1,
    //     }],
    // });

    // document.getElementById('daily').addEventListener('click', () => {
    //     chart.config.data = {
    //         type: 'line',
    //         labels: ["32-40", "41-45", "46-57", "58-62", "63-70", "71-75", "76-80", 
    //     "81-95", "96-100", "105-120", "121-132"],
    //     datasets: [{
    //         data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,
    //        2500],
    //            backgroundColor: 'rgba(116, 119, 191, .3)',
    //            borderWidth: 1,
    //         }],
    //     }
    //     chart.update();
    // });

    // weekly button chart

    // const weeklyData = document.getElementById('traffic-chart');
    // chart = new Chart(weeklyData, {
    //     type: 'line',
    //     labels: ["4-12", "13-17", "18-24", "25-32", "33-43", "44-51", "52-67", 
    // "68-73", "74-81", "82-96", "97-105"],
    // datasets: [{
    //     data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,
    //    2500],
    //        backgroundColor: 'rgba(116, 119, 191, .3)',
    //        borderWidth: 1,
    //     }]
    // });

    // document.getElementById('weekly').addEventListener('click', () => {
    //     chart.config.data = {
    //         type: 'line',
    //         labels: ["4-12", "13-17", "18-24", "25-32", "33-43", "44-51", "52-67", 
    // "68-73", "74-81", "82-96", "97-105"],
    // datasets: [{
    //     data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,
    //    2500],
    //        backgroundColor: 'rgba(116, 119, 191, .3)',
    //        borderWidth: 1,
    //     }]
    //     }
    //     chart.update();
    // });

    // monthly data chart

    //  const monthlyData = document.getElementById('traffic-chart');
    //  chart = new Chart(monthlyData, {
    //     type: 'line',
    //     labels: ["3-16", "5-15", "6-24", "7-18", "8-20", "9-17", "10-22", 
    //     "11-22", "12-14", "13-26", "14-27"],
    //     datasets: [{
    //         data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,
    //        2500],
    //            backgroundColor: 'rgba(116, 119, 191, .3)',
    //            borderWidth: 1,
    //     }]
    // });

    // document.getElementById('monthly').addEventListener('click', () => {
    //     chart.config.data = {
    //     type: 'line',
    //     labels: ["3-16", "5-15", "6-24", "7-18", "8-20", "9-17", "10-22", 
    // "11-22", "12-14", "13-26", "14-27"],
    // datasets: [{
    //     data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,
    //    2500],
    //        backgroundColor: 'rgba(116, 119, 191, .3)',
    //        borderWidth: 1,
    // }]
    //  }
    //  chart.update();
    // });

       
//   const dailyData = document.getElementsByClassName("traffic-nav-link");
//   let dailyData = {
//     labels: ["32-40", "41-45", "46-57", "58-62", "63-70", "71-75", "76-80", 
//     "81-95", "96-100", "105-120", "121-132"],
//     datasets: [{
//         data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,
//        2500],
//            backgroundColor: 'rgba(116, 119, 191, .3)',
//            borderWidth: 1,
//         }]
//   };
//     let trafficnavlink = new Chart(dailyData, {
//         type: 'line',
//         data: dailyData,
//         options: dailyOptions
//     });

//   const weeklyData = document.getElementsByClassName("traffic-nav-link");
//   let weeklyData = {
    // labels: ["4-12", "13-17", "18-24", "25-32", "33-43", "44-51", "52-67", 
    // "68-73", "74-81", "82-96", "97-105"],
    // datasets: [{
    //     data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,
    //    2500],
    //        backgroundColor: 'rgba(116, 119, 191, .3)',
    //        borderWidth: 1,
    //     }]
//   };
//     let trafficnavlink = new Chart(weeklyData, {
//         type: 'line',
//         data: weeklyData,
//         options: weeklyOptions
//     });

//   const monthlyData = document.getElementsByClassName("traffic-nav-link");
//   let monthlyData = {
    // labels: ["3-16", "5-15", "6-24", "7-18", "8-20", "9-17", "10-22", 
    // "11-22", "12-14", "13-26", "14-27"],
    // datasets: [{
    //     data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,
    //    2500],
    //        backgroundColor: 'rgba(116, 119, 191, .3)',
    //        borderWidth: 1,
    // }]
//   };
//   let trafficnavlink = new Chart(monthlyData, {
//       type: 'line',
//       data: monthlyData,
//       options: monthlyOptions
//   });

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

  //nav link buttons event handler

//   const trafficNavLink = document.querySelectorAll('#traffic-nav-link');
//   document.getElementsByClassName('traffic-nav-link').addEventListener('click', () => {
//       if (button === hourly) {
//           chart.data = hourlyData;
//           chart.options = { 
//             hourlyOptions 
//         };
//           chart.update();  
//       } else if (button === daily) {
//             chart.data = dailyLineData;
//             chart.options = {
//                 dailyOptions
//             };
//              chart.update();
//       } else if (button === weekly) {
//             chart.data = weeklyData;
//             chart.options = {
//                 weeklyOptions
//             };
//       } else if (button === monthly) {
//             chart.data = monthlyData;
//             chart.options = {
//                 monthlyOptions
//             };
//              chart.update();
//       }

//   });


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
//   save.addEventListener('click', () => {

//   });



  // Cancel Button
//   cancel.addEventListener('click', () => {

//   });

