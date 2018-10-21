const url = "https://recall-bot.herokuapp.com/api";

function deleteTopic(topicId){
    return fetch(url + '/' + topicId, {
        method: 'delete'
    });
}
var topics = [];

function findAllTopics(){
    return fetch(url)
        .then(function (response){
            return response.json()

        }).then(data => {
            console.log("check 1");
        console.log(data.length);
            for(let i=0; i< data.length;i++){
                console.log(data[i]._id);
                deleteTopic(data[i]._id);
                console.log("deleted ", i);
            }
            console.log("deleted All  ------ !");

    });
}


document.getElementById('addData').addEventListener('click', function() {
    addAll();
});




document.getElementById('removeData').addEventListener('click', function() {
    findAllTopics();
});


let bulkData = [{
    "threshold": 68.8,
    "qa": [{
        "question": "How many stars are there on the US flag ?",
        "answer": "50 stars"
    }],
    "name": "History",
    "retainability": 100,
    "reviews": [],
    "strength": 12,
    "priority": "0",
    "createdAt": "2018-10-20T00:01:49.246Z"
},

    {
        "threshold": 68.8,
        "qa": [{
            "question": "What does the acronym S.W.A.T. stand for ?",
            "answer": "Special Weapons And Tactics"
        }],
        "name": "crime",
        "retainability": 100,
        "reviews": [{
            "dateOfReview": "2018-10-19T00:00:00.000Z",
            "score": 1
        }],
        "strength": 22,
        "priority": "0",
        "createdAt": "2018-10-18T00:01:49.246Z"
    },

    {
        "threshold": 68.8,
        "qa": [{
            "question": "According to Apollo astronauts, the Moon smells like ?",
            "answer": "Burnt Gunpowder"
        }],
        "name": "space",
        "retainability": 100,
        "reviews": [{
            "dateOfReview": "2018-10-18T00:00:00.000Z",
            "score": 1
        }],
        "strength": 22,
        "priority": "0",
        "createdAt": "2018-10-17T00:01:49.246Z"
    },

    {
        "threshold": 68.8,
        "qa": [{
            "question": "Whom did Caesar name as his heir ?",
            "answer": "Gaius Octavius"
        }],
        "name": "drama",
        "retainability": 100,
        "reviews": [{
            "dateOfReview": "2018-10-16T00:00:00.000Z",
            "score": 1
        },
            {
                "dateOfReview": "2018-10-19T00:00:00.000Z",
                "score": 1
            }
        ],
        "strength": 42,
        "priority": "0",
        "createdAt": "2018-10-15T00:01:49.246Z"
    }

    ,

    {
        "threshold": 68.8,
        "qa": [{
            "question": "Which is the most abundant mineral in the human body and is also an important component of limestone and marble ?",
            "answer": "Calcium"
        }],
        "name": "chemistry",
        "retainability": 100,
        "reviews": [{
            "dateOfReview": "2018-10-14T00:00:00.000Z",
            "score": 1
        },
            {
                "dateOfReview": "2018-10-17T00:00:00.000Z",
                "score": 1
            }
        ],
        "strength": 42,
        "priority": "0",
        "createdAt": "2018-10-13T00:00:49.246Z"
    },


    {
        "threshold": 68.8,
        "qa": [{
            "question": "According to Microsoft what does the XP in Windows XP stand for ?",
            "answer": "eXPerience"
        }],
        "name": "computers",
        "retainability": 100,
        "reviews": [{
            "dateOfReview": "2018-10-13T00:00:00.000Z",
            "score": 1
        },
            {
                "dateOfReview": "2018-10-16T00:00:00.000Z",
                "score": 1
            }
        ],
        "strength": 42,
        "priority": "0",
        "createdAt": "2018-10-12T00:01:49.246Z"
    },


    {
        "threshold": 68.8,
        "qa": [{
            "question": "What is iRecallBot ?",
            "answer": "A smart revision management app for students"
        }],
        "name": "Applications",
        "retainability": 100,
        "reviews": [{
            "dateOfReview": "2018-10-12T00:00:00.000Z",
            "score": 1
        },
            {
                "dateOfReview": "2018-10-15T00:00:00.000Z",
                "score": 1
            }
        ],
        "strength": 42,
        "priority": "0",
        "createdAt": "2018-10-11T00:01:49.246Z"
    },


    {
        "threshold": 68.8,
        "qa": [{
            "question": "Who played the role of Iron Man in Marvel movies ?",
            "answer": "Robert Dowry Junior"
        }],
        "name": "comics",
        "retainability": 100,
        "reviews": [{
            "dateOfReview": "2018-10-10T00:00:00.000Z",
            "score": 1
        },
            {
                "dateOfReview": "2018-10-13T00:00:00.000Z",
                "score": 1
            },
            {
                "dateOfReview": "2018-10-19T00:00:00.000Z",
                "score": 1
            }
        ],
        "strength": 72,
        "priority": "0",
        "createdAt": "2018-10-09T00:01:49.246Z"
    },



    {
        "threshold": 68.8,
        "qa": [{
            "question": "What Red Sox great was known as the Splendid Splinter ?",
            "answer": "Ted Williams"
        }],
        "name": "sports",
        "retainability": 100,
        "reviews": [{
            "dateOfReview": "2018-10-08T00:00:00.000Z",
            "score": 1
        },
            {
                "dateOfReview": "2018-10-11T00:00:00.000Z",
                "score": 1
            },
            {
                "dateOfReview": "2018-10-17T00:00:00.000Z",
                "score": 1
            }
        ],
        "strength": 72,
        "priority": "0",
        "createdAt": "2018-10-07T00:01:49.246Z"
    },




    {
        "threshold": 68.8,
        "qa": [{
            "question": "What are the two major parties in the USA ?",
            "answer": "Republican and Democratic party"
        }],
        "name": "politics",
        "retainability": 100,
        "reviews": [{
            "dateOfReview": "2018-10-07T00:00:00.000Z",
            "score": 1
        },
            {
                "dateOfReview": "2018-10-10T00:00:00.000Z",
                "score": 0
            },
            {
                "dateOfReview": "2018-10-16T00:00:00.000Z",
                "score": 0
            }
        ],
        "strength": 22,
        "priority": "1",
        "createdAt": "2018-10-06T00:01:49.246Z"
    },







    {
        "threshold": 68.8,
        "qa": [{
            "question": "What U.S. state was named for Queen Elizabeth ?",
            "answer": "Virginia"
        }],
        "name": "countries",
        "retainability": 100,
        "reviews": [{
            "dateOfReview": "2018-10-06T00:00:00.000Z",
            "score": 1
        },
            {
                "dateOfReview": "2018-10-09T00:00:00.000Z",
                "score": 1
            },
            {
                "dateOfReview": "2018-10-15T00:00:00.000Z",
                "score": 1
            }
        ],
        "strength": 72,
        "priority": "0",
        "createdAt": "2018-10-05T00:00:49.246Z"
    },



    {
        "threshold": 68.8,
        "qa": [{
            "question": "Which poet was instrumental in saving U.S.S. Constitution ?",
            "answer": "Oliver Wendell Holmes"
        }],
        "name": "law",
        "retainability": 100,
        "reviews": [{
            "dateOfReview": "2018-10-05T00:00:00.000Z",
            "score": 1
        },
            {
                "dateOfReview": "2018-10-08T00:00:00.000Z",
                "score": 1
            },
            {
                "dateOfReview": "2018-10-14T00:00:00.000Z",
                "score": 1
            }
        ],
        "strength": 72,
        "priority": "0",
        "createdAt": "2018-10-04T00:01:49.246Z"
    },



    {
        "threshold": 68.8,
        "qa": [{
            "question": "What is Ebbingause Forgetting Curve ?",
            "answer": "It is theory about how our memory works which was proposed in 1885"
        }],
        "name": "psychology",
        "retainability": 100,
        "reviews": [{
            "dateOfReview": "2018-10-04T00:00:00.000Z",
            "score": 1
        },
            {
                "dateOfReview": "2018-10-07T00:00:00.000Z",
                "score": 1
            },
            {
                "dateOfReview": "2018-10-13T00:00:00.000Z",
                "score": 1
            }
        ],
        "strength": 72,
        "priority": "0",
        "createdAt": "2018-10-03T00:01:49.246Z"
    },


    {
        "threshold": 68.8,
        "qa": [{
            "question": "What act performs on the Esplanade every fourth of July ?",
            "answer": "The Boston Pops"
        }],
        "name": "holidays",
        "retainability": 100,
        "reviews": [{
            "dateOfReview": "2018-10-03T00:00:00.000Z",
            "score": 1
        },
            {
                "dateOfReview": "2018-10-06T00:00:00.000Z",
                "score": 1
            },
            {
                "dateOfReview": "2018-10-12T00:00:00.000Z",
                "score": 1
            },
            {
                "dateOfReview": "2018-10-20T00:00:00.000Z",
                "score": 1
            }
        ],
        "strength": 182,
        "priority": "0",
        "createdAt": "2018-10-02T00:01:49.246Z"
    },





    {
        "threshold": 68.8,
        "qa": [{
            "question": "Who is president of Unites States ?",
            "answer": "Donald Trump"
        }],
        "name": "General Knowledge",
        "retainability": 100,
        "reviews": [{
            "dateOfReview": "2018-10-02T00:00:00.000Z",
            "score": 1
        },
            {
                "dateOfReview": "2018-10-05T00:00:00.000Z",
                "score": 1
            },
            {
                "dateOfReview": "2018-10-11T00:00:00.000Z",
                "score": 0
            },
            {
                "dateOfReview": "2018-10-19T00:00:00.000Z",
                "score": 0
            }
        ],
        "strength": 42,
        "priority": "1",
        "createdAt": "2018-10-01T00:01:49.246Z"
    }
];



function createTopic(topic){
    return fetch(url,{
        method: 'post',
        body: JSON.stringify(topic),
        headers: {
            'content-type': 'application/json'
        }
    });
}

function addAll(){
    for(let c = 0; c < bulkData.length; c++){
        createTopic(bulkData[c]);
    }

    console.log("added all topics !")
}


