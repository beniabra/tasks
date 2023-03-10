import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [left, setLeft] = useState<number>(1);
    const [right, setRight] = useState<number>(2);
    function rollLeft(): void {
        setLeft(d6());
    }
    function rollRight(): void {
        setRight(d6());
    }
    // function determine(): void {
    //     if (left === right) {
    //         if (left === 0) {

    //         } else {

    //         }
    //     return
    // }
    return (
        <div>
            <h5>Two Dice</h5>
            <span data-testid="left-die">{left}</span>
            <Button onClick={rollLeft}>Roll Left</Button>
            <br></br>
            <span data-testid="right-die">{right}</span>
            <Button onClick={rollRight}>Roll Right</Button>
            <br></br>
            {left == right && left == 1 && <div>You Lose!</div>}
            {left == right && left != 1 && <div>You Win!</div>}
        </div>
    );
}
