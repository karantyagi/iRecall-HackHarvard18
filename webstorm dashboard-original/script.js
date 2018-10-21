Chart.defaults.global.elements.line.fill = true;

// globals
let calls = 0;
let api = true;
let dataset = [];


let days = ['0', '1', '2', '3', '4', '5', '6', '7',
    '8', '9', '10', '11', '12', '13', '14',
    '15', '16', '17', '18', '19', '20', '21',
    '22', '23', '24', '25', '26', '27', '28',
    '29', '30'];

// '31', '32', '33', '34', '35'];


function getRecallData(offset, strength, total_days) {
    let rData = [];
    for (let i = 0; i < total_days; i++) {
        rData.push(getRecall(offset, strength, i));
    }
    return rData;
}

let offset = 0;
let strength = 12;

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


let allCurves = [
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
        backgroundColor: "rgba(25,153,0,0.2)"
    },
    {
        label: 'recall after 3rd revision',
        data: review3,
        backgroundColor: "rgba(200,53,0,0.2)"
    },
    {
        label: 'recall after 4th revision',
        data: review4,
        backgroundColor: "rgba(25,13,250,0.2)"
    }


];

// default values

let historyDatasets = [];
historyDatasets.push(allCurves[0]);


let spaceDatasets = [];
spaceDatasets.push(allCurves[0]);


let applicationsDatasets = [];
applicationsDatasets.push(allCurves[0]);
applicationsDatasets.push(allCurves[1]);


let politicsDatasets = [];
politicsDatasets.push(allCurves[0]);


let psychologyDatasets = [];
psychologyDatasets.push(allCurves[0]);
psychologyDatasets.push(allCurves[1]);
psychologyDatasets.push(allCurves[2]);


let generalKnowledgeDatasets = [];
generalKnowledgeDatasets.push(allCurves[0]);
generalKnowledgeDatasets.push(allCurves[1]);


// let url = "https://recall-bot.herokuapp.com/api/revise";
//
// function findTopicByTopicname(topicName) {
//     return fetch(url + '/' + topicName)
//         .then(function (response) {
//             return response.json();
//         }).then(topic => {
//             console.log(topic);
//
//         });
// }


function findAllTopics(callback) {
    return $.ajax({
        url: 'https://recall-bot.herokuapp.com/api/revise',
        success: callback
    });
}

function fetchData(data) {
    dataset = data;
    //console.log(dataset);
    console.log("API called");
    console.log(" Topics LENGTH: ", dataset.length);
    calls = calls + 1;

    // recomputing

    // for (let i = 0; i < dataset.length; i++) {
    //
    //     if (dataset[i].name == "history") {
    //         console.log(dataset[i].name);
    //         let l = historyDatasets.length;
    //         let r = dataset[i].reviews.length;
    //         console.log("review length : ", r);
    //         let curr21 = new Date().getTime() - 24 * 60 * 60 * 1000;
    //         if(r>1){
    //             console.log(dataset[i].reviews[r-1].dateOfReview.getTime());
    //             // let d = dataset[i].reviews[r-1].dateOfReview.getTime() - curr21;
    //             // console.log("difference : ", d);
    //             // if (d > 0) {
    //             //     if (dataset[i].reviews[r - 1].score == "1") {
    //             //         historyDatasets.push(allCurves[l]);
    //             //         updateAll();
    //             //     }
    //             // }
    //         }
    //
    //     }
    //
    //     //
    //     //
    //     if (dataset[i].name == "space") {
    //         console.log(dataset[i].name);
    //         l = spaceDatasets.length;
    //         r = dataset[i].reviews.length;
    //         curr21 = new Date().getTime() - 24 * 60*60* 1000;
    //         if(r>1) {
    //             console.log("space", dataset[i].reviews[0].dateOfReview);
                // let d = dataset[i].reviews[r - 1].dateOfReview.getTime() - curr21;
                // console.log("difference : ", d);
                // if (d > 0) {
                //     if (dataset[i].reviews[r - 1].score == "1") {
                //         spaceDatasets.push(allCurves[l]);
                //         updateAll();
                //     }
                // }
        //     }
        // }
        //
        // if (dataset[i].name == "applications") {
        //     let l = applicationsDatasets.length;
        //     let r = dataset[i].reviews.length;
        //     let curr21 = new Date().getTime() - 24 * 60*60* 1000;
        //     if(r>1) {
        //         let d = dataset[i].reviews[r - 1].dateOfReview.getTime() - curr21;
        //         console.log("difference : ", d);
        //         if (d > 0) {
        //             if (dataset[i].reviews[r - 1].score == "1") {
        //                 applicationsDatasets.push(allCurves[l]);
        //                 updateAll();
        //             }
        //         }
        //     }
        // }
        //
        // if (dataset[i].name == "psychology") {
        //     let l = psychologyDatasets.length;
        //     let r = dataset[i].reviews.length;
        //     let curr21 = new Date().getTime() - 24 * 60*60* 1000;
        //     if(r>1) {
        //         let d = dataset[i].reviews[r - 1].dateOfReview.getTime() - curr21;
        //         console.log("difference : ", d);
        //         if (d > 0) {
        //             if (dataset[i].reviews[r - 1].score == "1") {
        //                 psychologyDatasets.push(allCurves[l]);
        //                 updateAll();
        //             }
        //         }
        //     }
        // }



    // }

}


// The function returns the recall value for a given curve
function getRecall(offset, strength, day) {
    let recall = Math.exp(-(day - offset) / strength);
    //recall = Math.round(recall*100);
    recall = recall * 100;
    return recall > 100 ? NaN : recall;
}


let ctx1 = document.getElementById("myCurve1").getContext('2d');
let myChart1 = new Chart(ctx1, {
    type: 'line',
    data: {
        labels: days,
        cubicInterpolationMode: 'monotone',
        datasets: historyDatasets
    }
});

// curve for 2nd topic/question

Chart.defaults.global.elements.line.fill = true;

let ctx2 = document.getElementById("myCurve2").getContext('2d');
let myChart2 = new Chart(ctx2, {
    type: 'line',
    data: {
        labels: days,
        datasets: spaceDatasets
    }
});


// curve for 3rd topic/question

Chart.defaults.global.elements.line.fill = true;

let ctx3 = document.getElementById("myCurve3").getContext('2d');
let myChart3 = new Chart(ctx3, {
    type: 'line',
    data: {
        labels: days,
        datasets: applicationsDatasets
    }
});

// curve for 4th topic/question


Chart.defaults.global.elements.line.fill = true;

let ctx4 = document.getElementById("myCurve4").getContext('2d');
let myChart4 = new Chart(ctx4, {
    type: 'line',
    data: {
        labels: days,
        datasets: politicsDatasets

    }
});


// curve for 5th topic/question
Chart.defaults.global.elements.line.fill = true;

let ctx5 = document.getElementById("myCurve5").getContext('2d');
let myChart5 = new Chart(ctx5, {
    type: 'line',
    data: {
        labels: days,
        datasets: psychologyDatasets

    }
});


// curve for 6th topic/question
Chart.defaults.global.elements.line.fill = true;

let ctx6 = document.getElementById("myCurve6").getContext('2d');
let myChart6 = new Chart(ctx6, {
    type: 'line',
    data: {
        labels: days,
        datasets: generalKnowledgeDatasets

    }
});

/*

******************************************   TIME for updation starts **********************

 */

let time = 0;

function updateAll() {
    myChart1.update();
    myChart2.update();
    myChart3.update();
    myChart4.update();
    myChart5.update();
    myChart6.update();
}


function getTime() {
    time = time + 1;
    //console.log(" time : ", time);

    if (time % 5 == 0) {
       //findAllTopics(fetchData);
        console.log(" Updating Now ... ")
        updateAll();
    }

    if(time == 5){
        historyDatasets.push(allCurves[1]);
        politicsDatasets.push(allCurves[1]);
        updateAll();
    }



}

setInterval(getTime, 1000);


