const container = document.getElementById('heading');
const wordList =["Code.WithMohit", "Follow",'Like', 'Share', 'Comments']; 
const input = document.getElementById("speed");
let speed = 100;
let intervalid_Start, intervalid_End;
let i = 0; 
let wordCount = 0;

input.addEventListener("input", (e) => {
  speed = 2000 / e.target.value;
  startTyping();
});

function startTyping() {
  clearInterval(intervalid_Start);
  clearInterval(intervalid_End);
  i = 0;
  
  container.textContent = "";
  // changing word 
  
  intervalid_Start = setInterval(() => {
    const str = wordList[wordCount];
    container.textContent += str[i];
    i++;

    if (i === str.length) {
      clearInterval(intervalid_Start);
      setTimeout(startDeleting, speed);
    }
  }, speed);
}

function startDeleting() {
  intervalid_End = setInterval(() => {
    container.textContent = container.textContent.slice(0, -1);
    i--;
    if (i < 0) {
      (wordCount < wordList.length -1 ) ? wordCount++ : wordCount = 0;
      clearInterval(intervalid_End);
      setTimeout(startTyping, speed);
    }
  }, speed);
}

startTyping();