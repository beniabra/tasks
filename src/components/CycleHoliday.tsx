import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday =
    | "Holiday: 🎄"
    | "Holiday: 🌺"
    | "Holiday: 🐇"
    | "Holiday: 🎆"
    | "Holiday: 🦃";

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("Holiday: 🎄");
    const ALPHABET: Record<Holiday, Holiday> = {
        "Holiday: 🎄": "Holiday: 🐇",
        "Holiday: 🐇": "Holiday: 🎆",
        "Holiday: 🎆": "Holiday: 🌺",
        "Holiday: 🌺": "Holiday: 🦃",
        "Holiday: 🦃": "Holiday: 🎄"
    };
    const YEAR: Record<Holiday, Holiday> = {
        "Holiday: 🎄": "Holiday: 🎆",
        "Holiday: 🎆": "Holiday: 🐇",
        "Holiday: 🐇": "Holiday: 🌺",
        "Holiday: 🌺": "Holiday: 🦃",
        "Holiday: 🦃": "Holiday: 🎄"
    };
    function changeByAlphabet(): void {
        const newHoliday = ALPHABET[holiday];
        setHoliday(newHoliday);
    }
    function changeByYear(): void {
        const newHoliday = YEAR[holiday];
        setHoliday(newHoliday);
    }
    return (
        <div>
            <h5>Cycle Holiday</h5>
            <span>{holiday}</span>
            <br></br>
            <Button onClick={changeByAlphabet}>By Alphabet</Button>
            <Button onClick={changeByYear}>By Year</Button>
        </div>
    );
}
