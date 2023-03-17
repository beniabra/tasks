import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [guess, setGuess] = useState<string>("");

    function updateGuess(event: React.ChangeEvent<HTMLInputElement>) {
        setGuess(event.target.value);
    }

    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="formCheckAnswer">
                <Form.Control value={guess} onChange={updateGuess} />
                {guess == expectedAnswer ? <span>✔️</span> : <span>❌</span>}
            </Form.Group>
        </div>
    );
}
