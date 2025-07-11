function submitVotes() {
    // event.preventDefault(); 

    // Initialize the agent on page load.
    const fpPromise = import('https://fpjscdn.net/v3/RU2NtlmQZ88uIjsXGC3l')
    .then(FingerprintJS => FingerprintJS.load())

    // Get the visitorId when you need it.
    fpPromise
    .then(fp => fp.get())
    .then(result => {
        const visitorId = result.visitorId;
        console.log(visitorId);

        let fullname = document.getElementById("fullName").value;
        let leadership = document.getElementById("leadership").value;
        let outSpoken = document.getElementById("outSpoken").value;
        let bestDressedMale = document.getElementById("bestDressedMale").value;
        let bestDressedFemale= document.getElementById("bestDressedFemale").value;
        let mostPopularMale = document.getElementById("mostPopularMale").value;
        let mostPopularFemale = document.getElementById("mostPopularFemale").value;
        
        let id = Math.floor(Math.random() * 10000000);

        var dataRef = firebase.database().ref('votingResults/');
        dataRef.on('value', (snapshot) => {
            var data = snapshot.val();
            console.log(data);
            // console.log(data[Object.keys(data)[0]]);
            // console.log(typeof(data));
           
            for (let key in data) {
                if (data[key].votersIdentity === visitorId) {
                    swal({
                        title: "Students Awards Batch8",
                        text: "You have already voted before",
                        icon: "error",
                        button: "Return to Home"
                    }).then(function () {
                        window.location.reload();
                    });

                    return;
                }else {
                    firebase.database().ref('votingResults/' + id).set({
                        votersIdentity: visitorId,
                        fullname: fullname,
                        leadership: leadership,
                        outSpoken: outSpoken,
                        bestDressedMale: bestDressedMale,
                        bestDressedFemale: bestDressedFemale,
                        mostPopularMale: mostPopularMale,
                        mostPopularFemale: mostPopularFemale
                    });

                    swal({
                        title: "Students Awards Batch8",
                        text: "Vote Successfully Submitted",
                        icon: "success",
                        button: "Return to Home"
                        }).then(function () {
                        window.location.reload();
                    })
                
                
                }

            }
               
        });
    
    });


};


