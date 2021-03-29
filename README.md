# Most of the code was provided by codepath. The animation, button effects, the audio, the images, the random pattern produced by the game was mine.
# Pre-work - _Memory Game_

**Singing-Pics-Demo** is a Light & Sound Memory game to apply for CodePath's SITE Program.

Submitted by: **Lulseged Admasu**

Time spent: **15** hours spent in total

Link to project: (https://puzzle-jewel-eye.glitch.me/)

## Required Functionality

The following **required** functionality is complete:

- [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
- [x] "Start" button toggles between "Start" and "Stop" when clicked.
- [x] Game buttons each light up and play a sound when clicked.
- [x] Computer plays back sequence of clues including sound and visual cue for each button
- [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess.
- [x] User wins the game after guessing a complete pattern
- [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

- [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
- [x] Buttons use a pitch (frequency) other than the ones in the tutorial
- [x] More than 4 functional game buttons
- [x] Playback speeds up on each turn
- [x] Computer picks a different pattern each time the game is played
- [x] Player only loses after 3 mistakes (instead of on the first mistake)
- [x] Game button appearance change goes beyond color (e.g. add an image)
- [x] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
- [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!
- [x] Buttons have up and down animation to confuse the player.
- [x] Buttons have cool css effect on hover.


## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src="CodePathApp.gif">


## Reflection Questions

1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. <BR>
   <b>[I used StackOverflow, https://tonnygaric.com/blog/create-a-seconds-countdown-in-6-lines-of-javascript, and https://www.youtube.com/watch?v=CZTCciHE72I&t=1s]</b>

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)<BR> 
   <b>[I run into some problems that got me overwhelmed at first. I had trouble controlling the animation with the button "start". But then I read on StackOverflow that I can hide the buttons by adding the hidden class. Then when the button is clicked simply remove the class. I tried it and it worked. But this was not the annoying part. What got me frustrated was being unable to find background images. It is easier to find a solution to a problem am having on my website rather than a quality image that does not get distorted when applied as background. To fix this problem I have started using websites that YouTubers visit when they design their own website. I take the image they use, search it on google and bookmark the source of the image. Doing this will make my job easier in the future.  Another one was that, I could not put the audio into the freqMap and call the .play() method. It kept on sending me an error saying that the audio did not load. I got around it using if statements which was tedious task. At last, but not least, I had trouble figuring out how to align the animation with the words and the start button. The buttons kept on overlapping with the game title and it was messy. So, I googled the problem and YouTubers came through and I was able to apply display: flex to properly divide the website into half.]</b>

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) <BR>
   <b>[1. What kind of projects should I get involved in to better my web development skillS?<BR>
       2. There are a lot of websites that can create a website like WordPress and BootStrap. Given that these types of sites make it easy to create a website, is it not a waste of time to invest myself in web development?<BR>
       3. What resources(websites, image editors) do website designers use to apply cool images as buttons or backgrounds?
       4. How do you fix the error related to the audio? <br>]</b>

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)<BR>
   <b>[I would work on the timer, improve the clueHoldTime, and work on a good landing page for the game. The timer worked fine as long as the user did not make a guess. Whenever the user makes a guess my timer quickly jumps like 4 seconds and ignores the 1000ms in the setInterval method. I had no time to figure this one out beause I was invested in the animation. <BR> The clueHoldTime is easy to implement if I do not take into account the game getting faster with a large margin in the beginning and a smaller margin towards the end. I would definetly like to figure that out.<BR> Lastly I would work on what the page looks like. I would center the title and buttons. And when the user clicks the start button, the page would transition upwards and reveal the game buttons with the stop button in the center.]</b>

## License

    Copyright [Lulseged Admasu]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
