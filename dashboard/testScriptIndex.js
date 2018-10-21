Chart.defaults.global.elements.line.fill = true;

// globals
let timeInSec = 0;
let calls = 0;
let api = true;
let dataset = [];


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

findAllTopics(fetchData);

// find social studies



let offset = 0;
let strength = 12;

// The function returns the recall value for a given curve
function getRecall(offset, strength, day) {
    let recall = Math.exp(-(day - offset)/strength);
    //recall = Math.round(recall*100);
    recall = recall*100;
    return recall > 100 ? NaN : recall;
}

let days = ['0', '1', '2', '3', '4', '5', '6', '7',
    '8', '9', '10', '11', '12', '13', '14',
    '15', '16', '17', '18', '19', '20', '21',
    '22', '23', '24', '25', '26', '27', '28',
    '29', '30'];

// '31', '32', '33', '34', '35'];


function getRecallData(offset, strength, total_days){
    let rData = [];
    for(let i = 0; i < total_days; i++){
        rData.push(getRecall(offset,strength,i));
    }
    return rData;
}


// for history

let url = "https://recall-bot.herokuapp.com/api/name/history";

function findTopicByTopicname(topicName) {
    return fetch(url + '/' + topicName)
        .then(function(response){
            return response.json();
        }).then(topic => {
            console.log(topic);
        });
}




findTopicByTopicname("history");


let base_data = getRecallData(0, 12, days.length);

// updating forgetting curve equation after successful 1st review
offset = 1;
strength = 22;
review1 = getRecallData(offset, strength, days.length);

// updating forgetting curve equation after successful 2nd review
offset = 4;
strength = 42;
review2 = getRecallData(offset, strength, days.length);

// updating forgetting curve equation after successful 3rd review
review3 = getRecallData(10, 72, days.length);

// updating forgetting curve equation after successful 4th review
offset = 18;
strength = 182;
review4 = getRecallData(offset, strength, days.length);




let ctx1 = document.getElementById("myCurve1").getContext('2d');
let myChart1 = new Chart(ctx1, {
    type: 'line',
    data: {
        labels: days,
        cubicInterpolationMode: 'monotone',
        datasets:
            [
                {
                    label: 'default recall',
                    data: base_data,
                    backgroundColor: "rgba(153,255,51,0.25)"
                }
            ]
    }
});

// curve for 2nd topic/question

Chart.defaults.global.elements.line.fill = true;

let ctx2 = document.getElementById("myCurve2").getContext('2d');
let myChart2 = new Chart(ctx2, {
    type: 'line',
    data: {
        labels: days,
        datasets:
            [
                {
                    label: 'default recall',
                    data: base_data,
                    backgroundColor: "rgba(153,255,51,0.15)"
                },
                {
                    label: 'recall after 1st revision',
                    data: review1,
                    backgroundColor: "rgba(255,153,0,0.3)"
                }


            ]
    }
});


// curve for 3rd topic/question

Chart.defaults.global.elements.line.fill = true;

let ctx3 = document.getElementById("myCurve3").getContext('2d');
let myChart3 = new Chart(ctx3, {
    type: 'line',
    data: {
        labels: days,
        datasets:
            [
                {
                    label: 'default recall',
                    data: base_data,
                    backgroundColor: "rgba(153,255,51,0.15)"
                },
                {
                    label: 'recall after 1st revision',
                    data: review1,
                    backgroundColor: "rgba(255,153,0,0.2)"
                },
                {
                    label: 'recall after 2nd revision',
                    data: review2,
                    backgroundColor: "rgba(25,153,0,0.20)"
                }


            ]
    }
});

// curve for 4th topic/question


Chart.defaults.global.elements.line.fill = true;

let ctx4 = document.getElementById("myCurve4").getContext('2d');
let myChart4 = new Chart(ctx4, {
    type: 'line',
    data: {
        labels: days,
        datasets:
            [
                {
                    label: 'default recall',
                    data: base_data,
                    backgroundColor: "rgba(153,255,51,0.15)"
                },
                {
                    label: 'recall after 1st revision',
                    data: review1,
                    backgroundColor: "rgba(255,153,0,0.18)"
                },
                {
                    label: 'recall after 2nd revision',
                    data: review2,
                    backgroundColor: "rgba(25,153,0,0.18)"
                },
                {
                    label: 'recall after 3rd revision',
                    data: review3,
                    backgroundColor: "rgba(200,53,0,0.25)"
                }

            ]
    }
});


// curve for 5th topic/question
Chart.defaults.global.elements.line.fill = true;

let ctx5 = document.getElementById("myCurve5").getContext('2d');
let myChart5 = new Chart(ctx5, {
    type: 'line',
    data: {
        labels: days,
        datasets:
            [
                {
                    label: 'default recall',
                    data: base_data,
                    backgroundColor: "rgba(153,255,51,0.15)"
                },
                {
                    label: 'recall after 1st revision',
                    data: review1,
                    backgroundColor: "rgba(255,153,0,0.15)"
                },
                {
                    label: 'recall after 2nd revision',
                    data: review2,
                    backgroundColor: "rgba(25,153,0,0.15)"
                },
                {
                    label: 'recall after 3rd revision',
                    data: review3,
                    backgroundColor: "rgba(200,53,0,0.15)"
                },
                {
                    label: 'recall after 4th revision',
                    data: review4,
                    backgroundColor: "rgba(25,13,250,0.15)"
                }


            ]
    }
});


// curve for 6th topic/question
Chart.defaults.global.elements.line.fill = true;

let ctx6 = document.getElementById("myCurve6").getContext('2d');
let myChart6 = new Chart(ctx6, {
    type: 'line',
    data: {
        labels: days,
        datasets:
            [
                {
                    label: 'default recall',
                    data: base_data,
                    backgroundColor: "rgba(153,255,51,0.15)"
                },
                {
                    label: 'recall after 1st revision',
                    data: review1,
                    backgroundColor: "rgba(255,153,0,0.15)"
                },
                {
                    label: 'recall after 2nd revision',
                    data: review2,
                    backgroundColor: "rgba(25,153,0,0.15)"
                },
                {
                    label: 'recall after 3rd revision',
                    data: review3,
                    backgroundColor: "rgba(200,53,0,0.15)"
                },
                {
                    label: 'recall after 4th revision',
                    data: review4,
                    backgroundColor: "rgba(25,13,250,0.15)"
                }


            ]
    }
});

