import React, { useState } from "react";
import { Form, Row } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);
    const [editMode, setEditMode] = useState<boolean>(false);
    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Switch
                type="switch"
                id="editMode"
                checked={editMode}
                onChange={() => setEditMode(!editMode)}
            />
            {editMode ? (
                <div>
                    <Form.Group controlId="formEditStudent" as={Row}>
                        <Form.Label>Name:</Form.Label>
                        <Form.Control
                            value={name}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => setName(event.target.value)}
                        />
                    </Form.Group>
                    <Form.Check
                        label="Student"
                        type="checkbox"
                        id="is-student-check"
                        checked={isStudent}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ) => setIsStudent(event.target.checked)}
                    />
                </div>
            ) : isStudent ? (
                <div>{name} is a student</div>
            ) : (
                <div>{name} is not a student</div>
            )}
        </div>
    );
}
