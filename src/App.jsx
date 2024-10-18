import { useState } from "react";

export default function App() {
    const xs = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
    const ys = ["the soup kitchen", "Disneyland", "the White House"];
    const zs = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"]  

    function randomValueFromArray(array){
      const random = Math.floor(Math.random()*array.length);
      return array[random];
    }

    const [xItem, setXitem] = useState(randomValueFromArray(xs));
    const [yItem, setYitem] = useState(randomValueFromArray(ys));
    const [zItem, setZitem] = useState(randomValueFromArray(zs));
    const [name, setName] = useState("");
    const [inputValue, setInputValue] = useState("Bob");
    const [showStory, setShowStory] = useState(false);
    const [temperature, setTemperature] = useState("fahrenheit");
    const [weight, setWeight] = useState("pounds");
    const [ukus, setUkus] = useState("us");

    const handleGenerateStory = () => {
      setXitem(randomValueFromArray(xs));
      setYitem(randomValueFromArray(ys));
      setZitem(randomValueFromArray(zs));
      {inputValue === "" ? setName("Bob"): setName(inputValue);}

      if(ukus === "us"){
        setTemperature("fahrenheit");
        setWeight("pounds");
      }else{
        setTemperature("centigrade");
        setWeight("stone");
      }

      setShowStory(true);
    };

    return (
      <>
        <div>
          <label htmlFor="customname">Enter custom name:</label>
          <input type="text" placeholder="" onChange={(e) => setInputValue(e.target.value)} />
        </div>
        <div>
          <label htmlFor="us">US</label>
          <input type="radio" value="us" checked={ukus === "us"} onChange={() => setUkus("us")}/>
          <label htmlFor="uk">UK</label>
          <input type="radio" value="uk" checked={ukus === "uk"} onChange={() => setUkus("uk")}/>
        </div>
        <div>
          <button onClick={handleGenerateStory}>Generate random story</button>
        </div>
        {showStory && (
          <p>
            It was 94 {temperature} outside, so {xItem} went for a walk. When they
            got to {yItem}, they stared in horror for a few moments, then {zItem}. {name} saw
            the whole thing, but was not surprised — {xItem} weighs 300 {weight}, and it was a hot day.
          </p>
        )}
      </>
    );
  }