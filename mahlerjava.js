// Variables that contain the correct symphony and movement
let correctSymphony;
let correctMovement;

// Array of audio files (one per movement)
const filePaths = [
    "https://res.cloudinary.com/dm8attfdo/video/upload/v1738115899/Mahler1_1_rppoqc.mp3",
    "https://res.cloudinary.com/dm8attfdo/video/upload/v1738115894/Mahler1_2_hvt9dr.mp3",
    "https://res.cloudinary.com/dm8attfdo/video/upload/v1738115892/Mahler1_3_piinjl.mp3",
    "https://res.cloudinary.com/dm8attfdo/video/upload/v1738115916/Mahler1_4_xtc8bu.mp3",
    "https://res.cloudinary.com/dm8attfdo/video/upload/v1738115928/Mahler2_1_jwuqb7.mp3",
    "https://res.cloudinary.com/dm8attfdo/video/upload/v1738115857/Mahler2_2_ioogfv.mp3",
    "https://res.cloudinary.com/dm8attfdo/video/upload/v1738115892/Mahler2_3_koioff.mp3",
    "https://res.cloudinary.com/dm8attfdo/video/upload/v1738115859/Mahler2_4_cgtx1a.mp3",
    "https://res.cloudinary.com/dm8attfdo/video/upload/v1738115937/Mahler2_5_somfls.mp3",
    "https://res.cloudinary.com/dm8attfdo/video/upload/v1738115938/Mahler3_1_wwctcj.mp3",
    "https://res.cloudinary.com/dm8attfdo/video/upload/v1738115899/Mahler3_2_qjcch9.mp3",
    "https://res.cloudinary.com/dm8attfdo/video/upload/v1738115925/Mahler3_3_beemm7.mp3",
    "https://res.cloudinary.com/dm8attfdo/video/upload/v1738115869/Mahler3_4_ghavki.mp3",
    "https://res.cloudinary.com/dm8attfdo/video/upload/v1738115866/Mahler3_5_cpkvob.mp3",
    "https://res.cloudinary.com/dm8attfdo/video/upload/v1738115926/Mahler3_6_ugfcfs.mp3",
    "https://res.cloudinary.com/dm8attfdo/video/upload/v1738115925/Mahler4_1_xxfazg.mp3",
    "https://res.cloudinary.com/dm8attfdo/video/upload/v1738115871/Mahler4_2_majq2a.mp3",
    "https://res.cloudinary.com/dm8attfdo/video/upload/v1738115926/Mahler4_3_a2ws9h.mp3",
    "https://res.cloudinary.com/dm8attfdo/video/upload/v1738115871/Mahler4_4_a4bn6e.mp3",
    "https://res.cloudinary.com/dm8attfdo/video/upload/v1738115903/Mahler5_1_cblknc.mp3",
    "https://res.cloudinary.com/dm8attfdo/video/upload/v1738115926/Mahler5_2_cye1wr.mp3",
    "https://res.cloudinary.com/dm8attfdo/video/upload/v1738115927/Mahler5_3_rruli3.mp3",
    "https://res.cloudinary.com/dm8attfdo/video/upload/v1738115876/Mahler5_4_qvirq1.mp3",
    "https://res.cloudinary.com/dm8attfdo/video/upload/v1738115928/Mahler5_5_pxne71.mp3",
    "https://res.cloudinary.com/dm8attfdo/video/upload/v1738115929/Mahler6_1_zikf5p.mp3",
    "https://res.cloudinary.com/dm8attfdo/video/upload/v1738115908/Mahler6_2_cyyjrn.mp3",
    "https://res.cloudinary.com/dm8attfdo/video/upload/v1738115930/Mahler6_3_lejqza.mp3",
    "https://res.cloudinary.com/dm8attfdo/video/upload/v1738115940/Mahler6_4_omjmss.mp3",
    "https://res.cloudinary.com/dm8attfdo/video/upload/v1738115930/Mahler7_1_rhnn99.mp3",
    "https://res.cloudinary.com/dm8attfdo/video/upload/v1738115930/Mahler7_2_cylgxh.mp3",
    "https://res.cloudinary.com/dm8attfdo/video/upload/v1738115912/Mahler7_3_ejl0hp.mp3",
    "https://res.cloudinary.com/dm8attfdo/video/upload/v1738115931/Mahler7_4_dyn7bv.mp3",
    "https://res.cloudinary.com/dm8attfdo/video/upload/v1738115931/Mahler7_5_ddg92m.mp3",
    "https://res.cloudinary.com/dm8attfdo/video/upload/v1738115935/Mahler8_1_pruew2.mp3",
    "https://res.cloudinary.com/dm8attfdo/video/upload/v1738115945/Mahler8_2_qupqon.mp3",
    "https://res.cloudinary.com/dm8attfdo/video/upload/v1738115937/Mahler9_1_jeby2o.mp3",
    "https://res.cloudinary.com/dm8attfdo/video/upload/v1738115934/Mahler9_2_i63woq.mp3",
    "https://res.cloudinary.com/dm8attfdo/video/upload/v1738115920/Mahler9_3_iqwi6a.mp3",
    "https://res.cloudinary.com/dm8attfdo/video/upload/v1738115940/Mahler9_4_gvmvi5.mp3",
    "https://res.cloudinary.com/dm8attfdo/video/upload/v1738115937/Mahler10_1_grbnyh.mp3",
    "https://res.cloudinary.com/dm8attfdo/video/upload/v1738115922/Mahler10_2_kkfbpg.mp3",
    "https://res.cloudinary.com/dm8attfdo/video/upload/v1738115922/Mahler10_3_isghtp.mp3",
    "https://res.cloudinary.com/dm8attfdo/video/upload/v1738115922/Mahler10_4_yt4ruy.mp3",
    "https://res.cloudinary.com/dm8attfdo/video/upload/v1738115938/Mahler10_5_gwurpf.mp3"
];

// Variables that contain the start time and which audio file we are using
let randomAudio;
let randomStartTime;

// Function to pick a random audio and start time
function initializeAudio() {
    const randomIndex = Math.floor(Math.random() * filePaths.length);
    randomAudio = new Audio(filePaths[randomIndex]);

// Tell the console all the files loaded.
    randomAudio.addEventListener('loadedmetadata', function() {
        console.log("Audio metadata loaded");
        randomStartTime = Math.floor(Math.random() * (randomAudio.duration - 40)) + 15;
        // Random start point no earlier than 15 seconds and no later than 25 seconds from the end (i.e. to prevent silence)
    });
    if (randomIndex < 4) {
        correctSymphony = 1;
    } else if (randomIndex < 9) {
        correctSymphony = 2;
    } else if (randomIndex < 15) {
        correctSymphony = 3;
    } else if (randomIndex < 19) {
        correctSymphony = 4;
    } else if (randomIndex < 24) {
        correctSymphony = 5;
    } else if (randomIndex < 28) {
        correctSymphony = 6;
    } else if (randomIndex < 33) {
        correctSymphony = 7;
    } else if (randomIndex < 35) {
        correctSymphony = 8;
    } else if (randomIndex < 39) {
        correctSymphony = 9;
    } else {
        correctSymphony = 10;
    }
    if ([0, 4, 9, 15, 19, 24, 28, 33, 35, 39].includes(randomIndex)) {
        correctMovement = 1;

    } else if ([1, 5, 10, 16, 20, 25, 29, 34, 36, 40].includes(randomIndex)) {
        correctMovement = 2;

    } else if ([2, 6, 11, 17, 21, 26, 30, 37, 41].includes(randomIndex)) {
        correctMovement = 3;

    } else if ([3, 7, 12, 18, 22, 27, 31, 38, 42].includes(randomIndex)) {
        correctMovement = 4;

    } else if ([8, 13, 23, 32, 43].includes(randomIndex)) {
        correctMovement = 5;

    } else {
        correctMovement = 6;
    }
}

function displayAnswer(button) {
    const parentSection = button.closest('section');
    // Hide all buttons in all sections
    document.querySelectorAll('section').forEach(function(section) {
        section.querySelectorAll('.audioBtn').forEach(function(button) {
            button.style.display = 'none'; // Hide all audio buttons
        });
        section.querySelectorAll('.showAnswerButton').forEach(function(button) {
            button.style.display = 'none'; // Hide all "show answer" buttons
        });
    });
    const answer = parentSection.querySelector('#answer');
    let seconds = randomStartTime % 60;
    let minutes = (randomStartTime - seconds)/60;
    if (minutes === 0){
        if (seconds === 1){
            answer.innerHTML = "This was movement " + correctMovement + " of Mahler's Symphony No. " + correctSymphony + ", about " + seconds + " second after the start of the movement.";
        }
        else{
            answer.innerHTML = "This was movement " + correctMovement + " of Mahler's Symphony No. " + correctSymphony + ", about " + seconds + " seconds after the start of the movement.";
        }
    }
    else if (seconds === 0){
        if (minutes === 1){
            answer.innerHTML = "This was movement " + correctMovement + " of Mahler's Symphony No. " + correctSymphony + ", about " + minutes + " minute after the start of the movement.";
        }
        else{
            answer.innerHTML = "This was movement " + correctMovement + " of Mahler's Symphony No. " + correctSymphony + ", about " + minutes + " minutes after the start of the movement.";
        }
    }
    else{
        if (seconds === 1 && minutes === 1){
            answer.innerHTML = "This was movement " + correctMovement + " of Mahler's Symphony No. " + correctSymphony + ", about " + minutes + " minute and " + seconds + " second after the start of the movement.";
        }
        else if (seconds === 1){
            answer.innerHTML = "This was movement " + correctMovement + " of Mahler's Symphony No. " + correctSymphony + ", about " + minutes + " minutes and " + seconds + " second after the start of the movement.";
        }
        else if (minutes === 1){
            answer.innerHTML = "This was movement " + correctMovement + " of Mahler's Symphony No. " + correctSymphony + ", about " + minutes + " minute and " + seconds + " seconds after the start of the movement.";
        }
        else{
            answer.innerHTML = "This was movement " + correctMovement + " of Mahler's Symphony No. " + correctSymphony + ", about " + minutes + " minutes and " + seconds + " seconds after the start of the movement.";
        }}

    // Show "Listen for 30 seconds" and "Listen until end of movement" buttons in the relevant section only
    const listen30 = parentSection.querySelector('#listen30');
    const listenAll = parentSection.querySelector('#listenAll');

    // Only display these buttons if the answer has been submitted in this section
    if (listen30) {
        listen30.style.display = 'inline';
    }
    if (listenAll) {
        listenAll.style.display = 'inline';
    }
}

// Function to play audio from a random start point for a specific duration (depeding on which level the person is at)
function playAudio(excerptDuration) {
    const audio = new Audio(randomAudio.src); // Create a new Audio object to avoid issues with multiple plays

// Tell the console the excerpt about to be played loaded.
    audio.addEventListener('loadedmetadata', function() {
        console.log("Audio metadata loaded");
        audio.currentTime = randomStartTime; // Start from the random point
        audio.play();

        // Stop the audio after the specific duration (1, 4, 10, or 20 seconds)
        audio.addEventListener('timeupdate', function() {
            if (audio.currentTime >= randomStartTime + excerptDuration) {
                audio.pause();
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the random audio and moment on page load
    initializeAudio();

    // Button event listeners for playing audio excerpts
    document.querySelectorAll('.audioBtn').forEach(function(button) {
        button.addEventListener('click', function() {
            let duration = parseInt(button.getAttribute('data-duration')); // Get duration from the button's data attribute
            playAudio(duration); // Play audio with the specified duration
        });
    });

    // Hint buttons to display more time sections
    document.querySelectorAll('.hintBtn').forEach(function(button) {
        button.addEventListener('click', function() {
            const targetSection = button.getAttribute('data-target');
            document.getElementById(targetSection).style.display = "inline";
        });
    });

    // Submit button event listener for checking the answers
    document.querySelectorAll('.submitBtn').forEach(function(button) {
        button.addEventListener('click', function() {
            const parentSection = button.closest('section'); // Find the parent section of the button
            const symphonyInput = parentSection.querySelector('.symphonyInput');
            const movementInput = parentSection.querySelector('.movementInput');
            const symphonyFeedback = parentSection.querySelector('.symphonyFeedback');
            const movementFeedback = parentSection.querySelector('.movementFeedback');

            let symphonyGuess = symphonyInput.value;
            let movementGuess = movementInput.value;

            // Check Symphony guess
            if (parseInt(symphonyGuess) === correctSymphony) {
                symphonyInput.style.backgroundColor = 'Green';
                symphonyFeedback.innerHTML = 'Correct!';
                // Check Movement guess only if symphony is correct.
                if (parseInt(movementGuess) === correctMovement) {
                    movementInput.style.backgroundColor = 'Green';
                    movementFeedback.innerHTML = 'Correct!';
                    const showAnswerButton = parentSection.querySelector('.showAnswerButton');
                    if (showAnswerButton) {
                        showAnswerButton.style.display = 'inline'; // Display the new "Show Answer" button
                    }
                    const hintBtn = parentSection.querySelector('.hintBtn');
                    hintBtn.style.display = 'none';
                    const submitBtn = parentSection.querySelector('.submitBtn');
                    submitBtn.style.display = 'none';
                } else {
                    movementInput.style.backgroundColor = 'Red';
                    movementFeedback.innerHTML = 'Incorrect!';
                }
            } else {
                symphonyInput.style.backgroundColor = 'Red';
                symphonyFeedback.innerHTML = 'Incorrect!';
                movementInput.style.backgroundColor = 'Yellow';
                movementFeedback.innerHTML = "Can't Determine the Correct Movement Until Symphony Is Correct...";
            }
        });
    });

// Give the answer if the user chooses to give up
    document.querySelectorAll('.giveUp').forEach(function(button) {
        button.addEventListener('click', function() {
        displayAnswer(button);
        document.getElementById("listenAll").style.display = "inline";
        });
    });

    document.querySelectorAll('.showAnswerButton').forEach(function(button) {
        button.addEventListener('click', function() {
            displayAnswer(button);
            document.getElementById("listen30").style.display = "inline";
            document.getElementById("listenAll").style.display = "inline";
        });
    });
});
