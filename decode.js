import "./styles.css";
import { useState, useEffect } from 'react';

/*
THE SCRIPT USED TO GET THE URL IN STEP 2

let codeTags = document.getElementsByTagName("code");
let arry = [];

for (let i = 0; i < codeTags.length; i++){
    let divTags = codeTags[i].getElementsByTagName("div");
    
    for (let j = 0; j < divTags.length; j++){
      let spanTags = divTags[j].getElementsByTagName("span");
      
      for (let k = 0; k < spanTags.length; k++){
        arry.push(spanTags[k].getElementsByTagName("i")[0].attributes[1].textContent);
        arry.join('');
      }
  }
}
*/

export default function App() {
  
  // Import URL to load flag
  const url = 'https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/776173';

  // create state to set flag, display text, and to animate text
  const [flag, setFlag] = useState(null);
  const [flagText, setFlagText] = useState('');
  const [animationStarted, setAnimationStarted] = useState(false);

  // useEffect with HTTP fetch request to pull API data
  useEffect(() => {
    fetch(url)
      .then((response) => {
        // The ok read-only property of the Response interface contains a Boolean stating whether the response was successful or not.
        if (!response.ok) {
          console.log("Error with response");
        }
        // .text() for plain text
        return response.text();
      })
      .then((data) => {
        // set the data to the flag state
        setFlag(data);
      })
        .catch(console.error);
  }, []);

  // useEffect to run animation once flag state is defined.
  //T he if statement will only run when flag is truthy and animationStarted is false to prevent starting the animation again.
  useEffect(() => {
    if (flag && !animationStarted) {
      setAnimationStarted(true);
      animateFlag(flag);
    }
  }, [flag, animationStarted]);

  const animateFlag = (flagProp) => {
    let currentIndex = 0;

    const intervalIndex = setInterval(() => {
      if (currentIndex <= flagProp.length) {
        // Display characters one by one
        // The substring() method of String values returns the part of this string from the start index up to and excluding the end index.
        setFlagText(flagProp.substring(0, currentIndex)); 
        currentIndex++;
      } else {
        // Stop the animation when all characters are displayed
        clearInterval(intervalIndex); 
      }
    }, 500); // 500 ms delay
  };

  // Ternary operator to display loading and JSX map to map through flagText state as a list
  return (
    <div>
      {flagText ? (
        <ul>
          {flagText.split('').map((flagMap, flagMapIndex) => (
            <li key={flagMapIndex}>{flagMap}</li>
          ))}
        </ul>
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  );
}