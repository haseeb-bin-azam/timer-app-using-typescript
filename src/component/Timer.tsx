
import React, { Component, useState } from 'react';
import './Timer.css';

import TimerButton from './TimerButton';

function Timer() {
    let [seconds, setSeconds] = useState<number>(0);
    let [minutes, setMinutes] = useState<number>(0);
    let [hour, setHour] = useState<number>(0);
    let [miliSeconds, setmiliSeconds] = useState<number>(0);
    let [interv, setInterv] = useState<any>(0);
    let [status, setStatus] = useState(0)


    //start function
    const start = () => {
        run();
        setStatus(1);
        setInterv(setInterval(run, 10));
    };

    
    function run() {
        if (minutes === 60) {
            setHour(++hour);
            minutes = 0
        }

        if (seconds === 60) {
            setMinutes(++minutes)
            seconds = 0
        }

        if (miliSeconds === 100) {
            setSeconds(++seconds)
            miliSeconds = 0
        }
        setmiliSeconds(++miliSeconds)
    }

    // stop function 

    const stop = () => {
        clearInterval(interv);
        setStatus(2)
    }

    // reset function

    const reset = () => {
        clearInterval(interv);
        setStatus(0)
        setHour(hour = 0)
        setMinutes(minutes = 0)
        setmiliSeconds(miliSeconds = 0)
        setSeconds(seconds = 0)
    };

    // resume function

    const resume = () => {
        start()
    }

    return (
        <div className="timer-container">
            <div className="time-display">
                <h1>{hour}:{minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h1>
            </div>
            <div className="timer-button-container">
                <TimerButton

                    buttonAction={start}
                    buttonValue={'Start'}
                />
                <TimerButton

                    buttonAction={resume}
                    buttonValue={'Resume'}
                />
                <TimerButton

                    buttonAction={stop}
                    buttonValue={'Stop'}
                />
                <TimerButton

                    buttonAction={reset}
                    buttonValue={'Reset'}
                />
            </div>
        </div>
    );

}


export default Timer;