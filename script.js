// global constants
var clueHoldTime = 1500; //how long to hold each clue's light/sound

//Global Variables
var mistakeCount;
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5; //must be between 0.0 and 1.0
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 500; //how long to wait before starting playback of the clue sequence
var guessCounter = 0;

//optional Part6
//Sources
//from start-
//https://tonnygaric.com/blog/create-a-seconds-countdown-in-6-lines-of-javascript
//Stack OverFlow
// function timeCount() {
//   var timeInterval = setInterval(function() {
//     if (timeLeft == 0) {
//       clearInterval(timeInterval);
//       alert("Time Is Up!");
//       stopGame();
//     }
//     document.getElementById("timer").textContent = timeLeft;
//     timeLeft--;
//   }, 1000);
// }
//End

//Optional Part 5 addAudio

//Music: https://www.bensound.com/royalty-free-music/track/high-octane-heavy-hard-rock-metal
var audio1 = new Audio(
  "https://cdn.glitch.com/9129ceae-eb17-46e3-bc25-e775df6de83c%2FROCK.mp3?v=1616559172643"
);
audio1.currentTime = 3;
//Music: https://www.bensound.com/royalty-free-music/track/memories
var audio2 = new Audio(
  "https://cdn.glitch.com/9129ceae-eb17-46e3-bc25-e775df6de83c%2FCLASSICAL.mp3?v=1616558541356"
);
//Music: https://www.bensound.com/index.php?route=product/search&search=soul&sort=relevance&order=DESC
var audio3 = new Audio(
  "https://cdn.glitch.com/9129ceae-eb17-46e3-bc25-e775df6de83c%2FSOUL1.mp3?v=1616558675663"
);
audio3.currentTime = 2;
//Music: https://www.bensound.com/royalty-free-music/track/evolution-epic-nature
var audio4 = new Audio(
  "https://cdn.glitch.com/9129ceae-eb17-46e3-bc25-e775df6de83c%2FSYm.mp3?v=1616559733066"
);
audio4.currentTime = 28;
//Music: https://www.bensound.com/royalty-free-music/track/jazzy-frenchy
var audio5 = new Audio(
  "https://cdn.glitch.com/9129ceae-eb17-46e3-bc25-e775df6de83c%2FJAZZ.mp3?v=1616558675556"
);
//Music: https://www.bensound.com/royalty-free-music/track/endless-motion-edm-electro
var audio6 = new Audio(
  "https://cdn.glitch.com/9129ceae-eb17-46e3-bc25-e775df6de83c%2FELECTRONIC1.mp3?v=1616558675459"
);

//Optional Part 3
//GENERATE RANDOM ARRAY
var pattern = [];
//GENERATE RANDOM PATTERN FOR ARRAY
function randomPattern() {
  for (let j = 0; j < parseInt(5 + Math.random() * 10); j++) {
    pattern[j] = parseInt(1 + Math.random() * 6);
  }
  return pattern;
}
function startGame() {
  mistakeCount = 0;
  randomPattern();
  progress = 0;
  gamePlaying = true;
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");

  document.getElementById("gameButtonArea").classList.add("binary");

  document.getElementById("beforeStart").classList.add("hidden");
  document.getElementById("afterStart").classList.remove("hidden");

  playClueSequence();
}
function stopGame() {
  progress = 0;
  gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");

  document.getElementById("gameButtonArea").classList.remove("binary");

  document.getElementById("afterStart").classList.add("hidden");
  document.getElementById("beforeStart").classList.remove("hidden");

  document.getElementById("mistake").classList.add("hidden");
  chanceLeft = 1;
  clueHoldTime = 1500;
}

// Sound Synthesis Functions

function playTone(btn, len) {
  if (btn == 1) {
    audio1.play();
  } else if (btn == 2) {
    audio2.play();
  } else if (btn == 3) {
    audio3.play();
  } else if (btn == 4) {
    audio4.play();
  } else if (btn == 5) {
    audio5.play();
  } else if (btn == 6) {
    audio6.play();
  }
  //g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  tonePlaying = true;
  setTimeout(function() {
    stopTone(btn);
  }, len);
}
function startTone(btn) {
  if (!tonePlaying) {
    //start - https://melkornemesis.medium.com/handling-javascript-mouseup-event-outside-element-b0a34090bb56
    document.addEventListener(
      "mouseup",
      () => {
        stopTone(btn);
      },
      { nce: true }
    );
    //- end
    if (btn == 1) {
      audio1.play();
    } else if (btn == 2) {
      audio2.play();
    } else if (btn == 3) {
      audio3.play();
    } else if (btn == 4) {
      audio4.play();
    } else if (btn == 5) {
      audio5.play();
    } else if (btn == 6) {
      audio6.play();
    }

    // o.frequency.value = audioList[btn];
    tonePlaying = true;
  }
}
function stopTone(btn) {
  if (btn == 1) {
    audio1.pause();
    audio1.currentTime = 3;
  } else if (btn == 2) {
    audio2.pause();
    audio2.currentTime = 0;
  } else if (btn == 3) {
    audio3.pause();
    audio3.currentTime = 2;
  } else if (btn == 4) {
    audio4.pause();
    audio4.currentTime = 28;
  } else if (btn == 5) {
    audio5.pause();
    audio5.currentTime = 0;
  } else if (btn == 6) {
    audio6.pause();
    audio6.currentTime = 0;
  }
  tonePlaying = false;
}

//Page Initialization
// Init Sound Synthesizer

function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
}

function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
}

function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}
var count = -1;
var n = 0;

function playClueSequence() {
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  clueHoldTime = clueHoldTime - 80;
  for (let i = 0; i <= progress; i++) {
    // for each clue that is revealed so far
    clueHoldTime = clueHoldTime;
    setTimeout(playSingleClue, delay, pattern[i]); // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
}
var chanceLeft = document.getElementById("chance").textContent;

function loseGame() {
  stopGame();
  alert("Game Over. You lost.");
  clueHoldTime = 1500;
}
function winGame() {
  stopGame();
  alert("Game Over. You won.");
}

function guess(btn) {
  console.log("user guessed: " + btn);
  if (!gamePlaying) {
    return;
  } else {
    if (pattern[guessCounter] == btn) {
      if (guessCounter == progress) {
        if (progress == pattern.length - 1) {
          winGame();
        } else {
          progress++;
          playClueSequence();
        }
      } else {
        guessCounter++;
      }
    } else {
      if (mistakeCount < 2) {
        for (let j = 0; j < 1; j++) {
          mistakeCount++;
          if (mistakeCount == 1) {
            document.getElementById("chance").textContent = chanceLeft;
            chanceLeft--;
            document.getElementById("mistake").classList.remove("hidden");
          } else {
            document.getElementById("chance").textContent = chanceLeft;
            chanceLeft -= 2;
            document.getElementById("mistake").classList.remove("hidden");
          }
        }
        playClueSequence();
      } else {
        loseGame();
      }
    }
  }
}
