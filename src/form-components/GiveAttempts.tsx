import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [request, setRequest] = useState<number>(0);
    return (
        <div>
            <h3>Give Attempts</h3>
            <Form.Group controlId="formGiveAttempts">
                <Form.Control
                    type="number"
                    value={request}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setRequest(Number(event.target.value))
                    }
                />
            </Form.Group>
            <div>Attempts: {attempts}</div>
            <Button
                disabled={attempts === 0}
                onClick={() => setAttempts(attempts - 1)}
            >
                Use
            </Button>
            <Button onClick={() => setAttempts(attempts + request)}>
                Gain
            </Button>
        </div>
    );
}
