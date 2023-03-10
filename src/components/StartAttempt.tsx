import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [progress, setProgress] = useState<boolean>(false);
    function startQuiz(): void {
        setProgress(true);
        setAttempts(attempts - 1);
    }
    function stopQuiz(): void {
        setProgress(false);
    }
    function mulligan(): void {
        setAttempts(attempts + 1);
    }
    return (
        <div>
            <h5>Start Attempt</h5>
            <p>Attempts: {attempts}</p>
            <br></br>
            <Button disabled={progress || attempts === 0} onClick={startQuiz}>
                Start Quiz
            </Button>
            <Button disabled={!progress} onClick={stopQuiz}>
                Stop Quiz
            </Button>
            <Button disabled={progress} onClick={mulligan}>
                Mulligan
            </Button>
        </div>
    );
}
