// globals
let timeInSec = 0;
let calls = 0;
let api = true;
let dataset = [];

let equationConstants = {
    "12": 0,
    "22": 1,
    "42": 4,
    "72": 10,
    "182": 18
};


function getRecall(offset, strength, day) {
    var recall =  (Math.exp(-(day - offset)/strength)*100);
    return recall;
}

function findAllTopics(callback) {
    return $.ajax({
        url: 'https://recall-bot.herokuapp.com/api/',
        success: callback
    });
}

function fetchData(data){
    dataset = data;
    console.log(dataset);
    console.log("API called");
    calls = calls + 1;
}

function  getTotalRecall() {
    let sum = 0;
    let t = new Date().getTime();
    let countOfDays =0;

    for(let h = 0; h < dataset.length; h++){
        let diff = (t - new Date(dataset[h].createdAt).getTime() )/ (60 * 60 * 1000 * 24);
        diff = diff.toFixed(8);
        console.log("Days : ", diff);
        if(diff > 0){
            countOfDays = countOfDays + 1;
            // console.log("offset: ", equationConstants[dataset[h].strength], " ", "strength: ", dataset[h].strength);
            sum = sum + getRecall(equationConstants[dataset[h].strength], dataset[h].strength, diff);
        }
        // console.log(dataset[h].strength);
    }

    return sum/countOfDays;

    //return (Math.random() > 0.5 ? 1.0 : -1.0) * Math.round(Math.random() * 100);

}


var chartColors = {
    red: 'rgb(255, 99, 132)',
    orange: 'rgb(255, 159, 64)',
    yellow: 'rgb(255, 205, 86)',
    green: 'rgb(75, 192, 192)',
    blue: 'rgb(24, 122, 235)',
    purple: 'rgb(153, 102, 255)',
    grey: 'rgb(201, 203, 207)'
};

function randomScalingFactor() {
    return (Math.random() > 0.5 ? 1.0 : -1.0) * Math.round(Math.random() * 100);
}



function onRefresh(chart) {
    if(calls > 2){
        api = false;
        console.log("API calls exhausted");
    }
    // console.log(new Date().getTime());
    // console.log("Time : ", timeInSec,"  |   API calls : ",calls);
    if(timeInSec%10 == 0){
        if(api){

            /*

            UNCOMMENT THIS

             */
            // findAllTopics(fetchData);
        }
        // console.clear();
    }
    timeInSec = timeInSec + 1;
    chart.config.data.datasets.forEach(function(dataset) {
        dataset.data.push({
            x: Date.now(),
            y: getTotalRecall()
        });
    });
}

var color = Chart.helpers.color;
var config = {
    type: 'line',
    data: {
        datasets: [{
            label: 'Total Recall',
            backgroundColor: color(chartColors.blue).alpha(0.5).rgbString(),
            borderColor: chartColors.blue,
            fill: false,
            cubicInterpolationMode: 'monotone',
            data: []
        }]
    },
    options: {
        title: {
            display: true,
            text: 'Live Recall Curve'
        },
        scales: {
            xAxes: [{
                type: 'realtime',
                realtime: {
                    duration: 20000,
                    refresh: 1000,
                    delay: 1000,
                    onRefresh: onRefresh                }
            }],
            yAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Recall %'
                },
                ticks: {
                    // max: 87.001,
                    // min: 88.095,
                    // stepSize: 5
                }
            }]
        },
        tooltips: {
            mode: 'nearest',
            intersect: false
        },
        hover: {
            mode: 'nearest',
            intersect: false
        }
    }
};

window.onload = function() {
    var ctx = document.getElementById('myChart').getContext('2d');
    window.myChart = new Chart(ctx, config);
};

// document.getElementById('randomizeData').addEventListener('click', function() {
//     config.data.datasets.forEach(function(dataset) {
//         dataset.data.forEach(function(dataObj) {
//             dataObj.y = randomScalingFactor();
//         });
//     });
//     window.myChart.update();
// });

// var colorNames = Object.keys(chartColors);
// document.getElementById('addDataset').addEventListener('click', function() {
//     var colorName = colorNames[config.data.datasets.length % colorNames.length];
//     var newColor = chartColors[colorName];
//     var newDataset = {
//         label: 'Dataset ' + (config.data.datasets.length + 1),
//         backgroundColor: color(newColor).alpha(0.5).rgbString(),
//         borderColor: newColor,
//         fill: false,
//         lineTension: 0,
//         data: []
//     };
//
//     config.data.datasets.push(newDataset);
//     window.myChart.update();
// });

// document.getElementById('removeDataset').addEventListener('click', function() {
//     config.data.datasets.pop();
//     window.myChart.update();
// });
//
// document.getElementById('addData').addEventListener('click', function() {
//     onRefresh(window.myChart);
//     window.myChart.update();
// });




findAllTopics(fetchData);
getRecall();
