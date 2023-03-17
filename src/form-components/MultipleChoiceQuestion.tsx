import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [choice, setChoice] = useState<string>(options[0]);
    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group controlId="multipleChoice">
                <Form.Select
                    value={choice}
                    onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
                        setChoice(event.target.value)
                    }
                >
                    {options.map((option: string) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            {expectedAnswer == choice ? <span>✔️</span> : <span>❌</span>}
        </div>
    );
}
