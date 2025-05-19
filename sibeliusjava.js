
// Variables that contain the correct symphony and movement
let correctSymphony;
let correctMovement;

// Array of audio files (one per movement)
const filePaths = [
"https://res.cloudinary.com/dm8attfdo/video/upload/v1747622986/Sibelius__Symphony_No._1_in_E_minor_Op._39__1._Andante_ma_non_troppo_-_Allegro_energico_nvehga.mp3",
"https://res.cloudinary.com/dm8attfdo/video/upload/v1747623149/Sibelius__Symphony_No._1_in_E_minor_Op._39__2._Andante_ma_non_troppo_lento_z0bath.mp3",
"https://res.cloudinary.com/dm8attfdo/video/upload/v1747624409/Sibelius__Symphony_No._1_in_E_minor_Op._39__3._Scherzo_Allegro_tfhw1l.mp3",
"https://res.cloudinary.com/dm8attfdo/video/upload/v1747624587/Sibelius__Symphony_No._1_in_E_minor_Op._39__4._Finale_Quasi_una_fantasia_yl5pg3.mp3",
"https://res.cloudinary.com/dm8attfdo/video/upload/v1747624966/Symphony_No._2_in_D_Major_Op._43__I._Allegretto_Poco_allegro_Tranquillo_ma_poco_a_poco..._eoz6dj.mp3",
"https://res.cloudinary.com/dm8attfdo/video/upload/v1747625055/Symphony_No._2_in_D_Major_Op._43__II._Tempo_andante_ma_rubato_Andante_sostenuto_2024..._gpp0g4.mp3",
"https://res.cloudinary.com/dm8attfdo/video/upload/v1747625094/Symphony_No._2_in_D_Major_Op._43__III._Vivacissimo_Lento_e_suave_Largamente_2024..._vvwgk4.mp3",
"https://res.cloudinary.com/dm8attfdo/video/upload/v1747625119/Symphony_No._2_in_D_Major_Op._43__IV._Finale__Allegro_moderato_2024_Remastered_Amsterdam_1964_owmggp.mp3",
"https://res.cloudinary.com/dm8attfdo/video/upload/v1747625467/Sibelius__Symphony_No._3_in_C_Op._52__1._Allegro_moderato_wdcyw3.mp3",
"https://res.cloudinary.com/dm8attfdo/video/upload/v1747625471/Sibelius__Symphony_No._3_in_C_Op._52__2._Andantino_con_moto_quasi_allegretto_kuk8nc.mp3",
"https://res.cloudinary.com/dm8attfdo/video/upload/v1747625516/Sibelius__Symphony_No._3_in_C_Op._52__3._Moderato_-_Allegro_ma_non_tanto_vtdtkr.mp3",
"https://res.cloudinary.com/dm8attfdo/video/upload/v1747626049/Symphony_No._4_in_A_Minor_Op._63__I._Tempo_molto_moderato_quasi_adagio_rrlxs6.mp3",
"https://res.cloudinary.com/dm8attfdo/video/upload/v1747626057/Symphony_No._4_in_A_Minor_Op._63__II._Allegro_molto_vivace_dha8p4.mp3",
"https://res.cloudinary.com/dm8attfdo/video/upload/v1747626068/Symphony_No._4_in_A_Minor_Op._63__III._Il_tempo_largo_evmwah.mp3",
"https://res.cloudinary.com/dm8attfdo/video/upload/v1747626078/Symphony_No._4_in_A_Minor_Op._63__IV._Allegro_ztejz7.mp3",
"https://res.cloudinary.com/dm8attfdo/video/upload/v1747626935/Symphony_No._5_in_E-Flat_Major_Op._82__I._Tempo_molto_moderato_-_Allegro_moderato_vdkc2c.mp3",
"https://res.cloudinary.com/dm8attfdo/video/upload/v1747626939/Symphony_No._5_in_E-Flat_Major_Op._82__II._Andante_mosso_quasi_allegretto_b4w7um.mp3",
"https://res.cloudinary.com/dm8attfdo/video/upload/v1747627232/Symphony_No._5_in_E-Flat_Major_Op._82__III._Allegro_molto_-_Largamente_assai_pzl9io.mp3",
"https://res.cloudinary.com/dm8attfdo/video/upload/v1747627099/Sibelius__Symphony_No._6_in_D_Minor_Op._104__I._Allegro_molto_moderato_icpgbr.mp3",
"https://res.cloudinary.com/dm8attfdo/video/upload/v1747627103/Sibelius__Symphony_No._6_in_D_Minor_Op._104__II._Allegretto_moderato_jmo0nj.mp3",
"https://res.cloudinary.com/dm8attfdo/video/upload/v1747627106/Sibelius__Symphony_No._6_in_D_Minor_Op._104__III._Poco_vivace_a8dvbe.mp3",
"https://res.cloudinary.com/dm8attfdo/video/upload/v1747627110/Sibelius__Symphony_No._6_in_D_Minor_Op._104__IV._Allegro_molto_vrngt2.mp3",
"https://res.cloudinary.com/dm8attfdo/video/upload/v1747627303/Symphony_No._7_in_C_Major_Op._105_cak4sr.mp3"
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
    } else if (randomIndex < 8) {
        correctSymphony = 2;
    } else if (randomIndex < 11) {
        correctSymphony = 3;
    } else if (randomIndex < 15) {
        correctSymphony = 4;
    } else if (randomIndex < 18) {
        correctSymphony = 5;
    } else if (randomIndex < 22) {
        correctSymphony = 6;
    } else {
        correctSymphony = 7;
    }
  
    if ([0, 4, 8, 11, 15, 18, 22].includes(randomIndex)) {
        correctMovement = 1;

    } else if ([1, 5, 9, 12, 16, 19].includes(randomIndex)) {
        correctMovement = 2;

    } else if ([2, 6, 10, 13, 17, 20].includes(randomIndex)) {
        correctMovement = 3;

    } else {
        correctMovement = 4;
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
            answer.innerHTML = "This was movement " + correctMovement + " of Sibelius's Symphony No. " + correctSymphony + ", about " + seconds + " second after the start of the movement.";
        }
        else{
            answer.innerHTML = "This was movement " + correctMovement + " of Sibelius's Symphony No. " + correctSymphony + ", about " + seconds + " seconds after the start of the movement.";
        }
    }
    else if (seconds === 0){
        if (minutes === 1){
            answer.innerHTML = "This was movement " + correctMovement + " of Sibelius's Symphony No. " + correctSymphony + ", about " + minutes + " minute after the start of the movement.";
        }
        else{
            answer.innerHTML = "This was movement " + correctMovement + " of Sibelius's Symphony No. " + correctSymphony + ", about " + minutes + " minutes after the start of the movement.";
        }
    }
    else{
        if (seconds === 1 && minutes === 1){
            answer.innerHTML = "This was movement " + correctMovement + " of Sibelius's Symphony No. " + correctSymphony + ", about " + minutes + " minute and " + seconds + " second after the start of the movement.";
        }
        else if (seconds === 1){
            answer.innerHTML = "This was movement " + correctMovement + " of Sibelius's Symphony No. " + correctSymphony + ", about " + minutes + " minutes and " + seconds + " second after the start of the movement.";
        }
        else if (minutes === 1){
            answer.innerHTML = "This was movement " + correctMovement + " of Sibelius's Symphony No. " + correctSymphony + ", about " + minutes + " minute and " + seconds + " seconds after the start of the movement.";
        }
        else{
            answer.innerHTML = "This was movement " + correctMovement + " of Sibelius's Symphony No. " + correctSymphony + ", about " + minutes + " minutes and " + seconds + " seconds after the start of the movement.";
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
