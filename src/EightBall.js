import React, { useState } from "react";
import "./EightBall.css";

function choice(arr) {
    const randomIdx = Math.floor(Math.random() * arr.length);
    return arr[randomIdx]
}

function EightBall(props) {
    
    const restart = () => {
        setColor("black");
        setPrediction("Think of a Question")
        setRedCount(0)
        setYellowCount(0)
        setGreenCount(0)
    }
    const [prediction, setPrediction] = useState("Think of a Question");
    const [color, setColor] = useState("black");
    const [redCount, setRedCount] = useState(0)
    const [yellowCount, setYellowCount] = useState(0)
    const [greenCount, setGreenCount] = useState(0)

    function handleClick() {
        const { msg, color } = choice(props.choices);
        setPrediction(msg);
        setColor(color);
        if(color === 'red'){
            setRedCount(redCount + 1)
        } else if (color === 'goldenrod'){
            setYellowCount(yellowCount + 1)
        } else if (color === 'green'){
            setGreenCount(greenCount + 1)
        }
    }

    return (
        <div>
            <div
                onClick={handleClick}
                className="EightBall"
                style={{ backgroundColor: color }}
            >
                <p className="EightBall-text">{prediction}</p>
            </div>
            <h4>Green count: {greenCount}, Yellow count: {yellowCount}, Red count: {redCount}</h4>
            <button onClick={restart}>Reset</button>
        </div>
    );
}

EightBall.defaultProps = {
    choices: [
        { msg: "It is certain.", color: "green" },
        { msg: "It is decidedly so.", color: "green" },
        { msg: "Without a doubt.", color: "green" },
        { msg: "Yes - definitely.", color: "green" },
        { msg: "You may rely on it.", color: "green" },
        { msg: "As I see it, yes.", color: "green" },
        { msg: "Most likely.", color: "green" },
        { msg: "Outlook good.", color: "green" },
        { msg: "Yes.", color: "green" },
        { msg: "Signs point to yes.", color: "goldenrod" },
        { msg: "Reply hazy, try again.", color: "goldenrod" },
        { msg: "Ask again later.", color: "goldenrod" },
        { msg: "Better not tell you now.", color: "goldenrod" },
        { msg: "Cannot predict now.", color: "goldenrod" },
        { msg: "Concentrate and ask again.", color: "goldenrod" },
        { msg: "Don't count on it.", color: "red" },
        { msg: "My reply is no.", color: "red" },
        { msg: "My sources say no.", color: "red" },
        { msg: "Outlook not so good.", color: "red" },
        { msg: "Very doubtful.", color: "red" },
    ],
};

export default EightBall;
