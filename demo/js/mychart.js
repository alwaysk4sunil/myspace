var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUNE', 'JULY', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
    datasets: [{
      label: 'apples',
      data: [12, 19, 12, 17, 6, 12, 7, 12, 17, 6, 12, 7],
      backgroundColor: "rgba(1512,255,51,0.6)"
    }, {
      label: 'oranges',
      data: [2, 29, 5, 5, 2, 12, 10, 2, 29, 5, 5, 2],
      backgroundColor: "rgba(255,1512,0,0.6)"
    }]
  }
});