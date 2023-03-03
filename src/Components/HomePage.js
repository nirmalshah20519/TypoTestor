import React, { useState, useEffect } from 'react'
import { getAuth, signOut } from 'firebase/auth'
import "../css/index.css"
import Button from 'react-bootstrap/Button';
const HomePage = () => {

  // console.log(similarity)

  const [instruction, setInstruction] = useState("Click the below Start button to check your typing speed")
  const [text, setText] = useState("");
  const typedWords = document.getElementById('typed');
  const btn = document.getElementById('btn');
  const [startTime, setStartTime] = useState(0);
  const [message, setMessage] = useState("")
  // const [endTime, setEndTime] = useState(0);
  var netTime;
  var wordCount;
  var wpm, percentage;
  const auth = getAuth()
  const [btnText, setBtnText] = useState('Start');
  const sentences = [
    "He programmed the computer to respond in training cycle mode and glanced at the communication link again.",
    "It should know what the food on my fork weighs run a chemical analysis of every bite I take, and log it in my Digital Echo file for my future reference.",
    "In Normandy itself after the separation from England, architecture becomes French, but it is French of a remarkably good type.",
    "In truth owing to its isolated position on the very verge of Italy and to its close connexion with the East Venetian architecture was an independent development.",
    "Her alarm clock woke her at dawn reminding her it was time for her morning run.",
    "Its clock tower surmounted by a statue of Mars, dates from the previous century.",
    "Every day the earth heats and cools as night turns into day and back into night.",
    "She forced herself to notice how dark the sky was the rich scent of earth in the air the tickle of the pine needles that brushed her skin."
  ]
  const startTest = () => {
    var x = document.getElementById('type-txt');
    x.style.display = 'flex';
    var y = document.getElementById('typed');
    y.style.display = 'flex';
    y.focus()
    setInstruction("Type the below Line to check your typing speed")
    let random = Math.floor(Math.random() * sentences.length);
    setText(sentences[random]);
    setBtnText('Done');
  }

  const endTest = () => {
    var x = document.getElementById('type-txt');
    x.style.display = 'none';
    var y = document.getElementById('typed');    
    var stringSimilarity = require("string-similarity");
    var similarity = stringSimilarity.compareTwoStrings(text, y.value);    
    y.style.display = 'none';
    y.value = " "
    wordCount = text.split(' ').length
    console.log(wordCount)
    wpm = Math.floor((wordCount * 60) / netTime)
    console.log("%d words per minute", wpm)
    percentage=Math.floor(similarity*100)
    let msg = " "
    if (wpm > 30 && percentage>75) {
      msg = "Congrats! Your Speed is " + wpm + " words per minute and Accuracy is "+percentage+" %."      
    }
    else {
      msg = "Oops! Your typing Speed is " + wpm + " words per minute and Accuracy is "+percentage+" %. You need improvement."
    }
    setMessage(msg)
    setInstruction("Click the below Start button to check your typing speed")
    myFunction()
  }

  const click = () => {
    if (btnText === 'Start') {
      var start = new Date();
      setStartTime(start.getTime());
      startTest()
    }
    else if (btnText === 'Done') {
      var end = new Date();
      netTime = (end.getTime() - startTime) / 1000
      setBtnText('Start');
      endTest()
    }
  }

  const SignOut = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      console.log("Signed Out");
    }).catch((error) => {
      console.log(error);
    });
  }

  function myFunction() {
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 9000);
  }

  return (
    <>
      {/* <div style={{backgroundColor:"black",color:"white",width:"4rem",cursor:"pointer"}} onClick={SignOut} >SignOut</div> */}
      <div className="header">
        <span>Welcome {auth.currentUser.displayName.split(" ")[0]} !</span>
        <h1>Typo &#123;Testor&#125;</h1>
        <div className="logout-btn">
          <Button variant="dark" onClick={SignOut}>Logout</Button>
        </div>

      </div>
      <div className="body">
        <div className="main">
          <h4> {instruction} </h4>
          <div className="columnSet">
            <div className='columnSetInner'>
              <div className='type-txt' id='type-txt'>{text}</div>
              <textarea name="" id="typed" rows='10' className='txt-area' />
            </div>
          </div>

          <div className="btn-area">
            <Button variant="info" id='btn' onClick={click}>{btnText}</Button>
          </div>

        </div>
        <div id="snackbar">{message}</div>
      </div>
    </>
  )
}

export default HomePage