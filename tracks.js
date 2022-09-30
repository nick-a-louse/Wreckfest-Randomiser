<!--./tracks.js-->


let race = true;
let derby = true;
let specialRace = true;

// Function to get checkbox values
function validateTracks() {
    if (document.getElementById('race-event').checked) {
        race = true;
    } else {
        race = false;
    }
    if (document.getElementById('derby-event').checked) {
        derby = true;
    } else {
        derby = false;
    }
    if (document.getElementById('special-event').checked) {
        specialRace = true;
    } else {
        specialRace = false;
    }
};


// Function to retrieve the track json file

async function getTracks() {
    let url = './tracks.json';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
};

// Function to create an array of tracks

async function renderTracks() {

    let tracks = await getTracks();
    let filteredTracks = [];
    let numTracks = 0;
    let html = '';
    validateTracks();
 
    // Logic goes through every track in the JSON and checks it against the selected checkboxes from the HTML
    tracks.forEach(track => { 
        if ((race === true && track.trackType === ("Race")) ||
        (derby === true && track.trackType === ("Demolition Arena")) ||
        (specialRace === true && track.trackType === ("Special")))
        {
            let tempTrack = (track.index); // Adds any tracks that meet the above criteria to a list
            filteredTracks.push((tempTrack));
        };
    numTracks = filteredTracks.length; // Counts how many tracks have met the criteria
    });

// Error capture if no tracks meet criteria
if (numTracks == 0) {
    console.log("oh balls");
    window.alert("You haven't selected a track, so I suggest you race on Hillstreet!");
    document.getElementById("trackName").innerHTML = (tracks[51].name + " " + tracks[51].version);
    document.getElementById("trackSummary").innerHTML = (tracks[51].summary);
    document.getElementById("trackLength").innerHTML = (tracks[51].length);
    document.getElementById("trackSurface").innerHTML = (tracks[51].surfaceType);
    document.getElementById("trackImage").src = ("./wreckfest_tracks/"+tracks[5].coverImage);
    document.getElementById("trackMap").src = ("./wreckfest_tracks/"+tracks[51].mapImage);
    return;
};

// Get the right track index from the JSON
let randomTrack = ((Math.floor(Math.random() * (numTracks+1))));
let trackIndex = filteredTracks[randomTrack];
let chosenTrack = tracks.findIndex(function(item, i){
  return item.index === trackIndex
});

//Assigning the elements to the HTML page
document.getElementById("trackName").innerHTML = (tracks[chosenTrack].name + " " + tracks[chosenTrack].version);
document.getElementById("trackSummary").innerHTML = (tracks[chosenTrack].summary);
document.getElementById("trackLength").innerHTML = (tracks[chosenTrack].length);
document.getElementById("trackSurface").innerHTML = (tracks[chosenTrack].surfaceType);
document.getElementById("trackImage").src = ("./wreckfest_tracks/"+tracks[chosenTrack].coverImage);
document.getElementById("trackMap").src = ("./wreckfest_tracks/"+tracks[chosenTrack].mapImage);
};