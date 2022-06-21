import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [Keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("i run all the time");
  useEffect(() => {
    console.log("Call The API....");
  }, []);
  useEffect(()=>{
    if (Keyword !== "" && Keyword.length > 5){  
      console.log("Search FOR", Keyword);
    }
  }, [Keyword]);
  useEffect(() => {
    console.log("I run when 'counter' Changaes...");
  }, [counter]);
  useEffect(() => {
    console.log("I run when 'counter' and keyword Changaes...");
  }, [Keyword, counter]);
  return (
    <div>
      <input
        value={Keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here...."
      />
      <h1 className={styles.title}>{counter}</h1>
      <Button text={"Continue"} />
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
