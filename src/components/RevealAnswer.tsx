import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [visible, setVisibile] = useState<boolean>(false);

    function flipVisibility(): void {
        setVisibile(!visible);
    }
    return (
        <div>
            <h5>Reveal Answer</h5>
            <br></br>
            <Button onClick={flipVisibility}>Reveal Answer</Button>
            {visible && <div>42</div>}
        </div>
    );
}
