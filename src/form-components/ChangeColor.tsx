import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const [colors] = useState<string[]>([
        "red",
        "blue",
        "green",
        "brown",
        "purple",
        "yellow",
        "orange",
        "pink"
    ]);
    const [chosen, setChosen] = useState<string>(colors[0]);
    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setChosen(event.target.value);
    }
    return (
        <div>
            <h3>Change Color</h3>
            <div>
                {colors.map((color: string) => (
                    <Form.Check
                        key={color}
                        inline
                        type="radio"
                        name={color}
                        onChange={updateColor}
                        id="emotion-check-happy"
                        label={
                            <span style={{ backgroundColor: color }}>
                                {color}
                            </span>
                        }
                        value={color}
                        checked={chosen == color}
                    />
                ))}
            </div>
            <p>
                You have chosen
                <span
                    data-testid="colored-box"
                    style={{ backgroundColor: chosen }}
                >
                    {" "}
                    {chosen}
                </span>
                .
            </p>
        </div>
    );
}
