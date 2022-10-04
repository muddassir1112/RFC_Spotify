import "./Component5.css";
import React from "react";

export default function Component5() {
  const fun = (e) => {  {/*Onclick function of button to get the answers of the question*/}
    if (e.target.getAttribute("value") === "first") {
      document.getElementsByClassName("demo")[0].innerHTML =
        "LoremLoremLoremLoremLoremLoremLoremLorem";
    } else if (e.target.getAttribute("value") === "second") {
      document.getElementsByClassName("demo")[1].innerHTML =
        "LoremLoremLoremLoremLoremLoremLoremLorem";
    } else if (e.target.getAttribute("value") === "third") {
      document.getElementsByClassName("demo")[2].innerHTML =
        "LoremLoremLoremLoremLoremLoremLoremLorem";
    } else if (e.target.getAttribute("value") === "fourth") {
      document.getElementsByClassName("demo")[3].innerHTML =
        "LoremLoremLoremLoremLoremLoremLoremLorem";
    } else if (e.target.getAttribute("value") === "fifth") {
      document.getElementsByClassName("demo")[4].innerHTML =
        "LoremLoremLoremLoremLoremLoremLoremLorem";
    }
  };
  return (
    <div>
      {/*Main Section */}
      <div className="question">
        <h2 style={{ textAlign: "center" }}>Question?</h2>
        <p style={{ textAlign: "center", paddingBottom: "4%" }}>
          We've got answers
        </p>
        <span>What is Spotify and Spotify Premium?</span>
        <button className="answers" onClick={fun} value="first">
          ▼
        </button>
        <p className="demo"></p> <hr></hr>
        <span>How do I cancel?</span>
        <button className="answers" onClick={fun} value="second">
          ▼
        </button>
        <p className="demo"></p> <hr></hr>
        <span>How does the Duo and Family Plan work?</span>
        <button className="answers" onClick={fun} value="third">
          ▼
        </button>
        <p className="demo"></p>
        <hr></hr>
        <span>How many devices can I listen to?</span>
        <button className="answers" onClick={fun} value="fourth">
          ▼
        </button>
        <p className="demo"></p>
        <hr></hr>
        <span>How does the student plan work?</span>
        <button className="answers" onClick={fun} value="fifth">
          ▼
        </button>
        <p className="demo"></p>
        <hr></hr>
      </div>
    </div>
  );
}
