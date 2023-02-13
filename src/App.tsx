import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <h1>Welcome to my app</h1>
            <img
                src="https://cdn.dribbble.com/users/1044993/screenshots/12436018/media/4af5b5c62eba141322e11e2747a1d9fd.png?compress=1&resize=400x300&vertical=top"
                alt="panda waving"
            />
            <p>
                Hello World! My name is Benita. Edit <code>src/App.tsx</code>
                and save. This page will automatically reload.
            </p>
            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                backgroundColor: "red",
                                width: "100%",
                                height: "100%",
                                color: "white"
                            }}
                        >
                            These are a few of my favorite things:
                            <ul>
                                <li>Reading romance and mystery novels</li>
                                <li>Riding my bike in warm weather</li>
                                <li>Listening to all kinds of music</li>
                            </ul>
                        </div>
                    </Col>
                    <Col>
                        <div
                            style={{
                                backgroundColor: "red",
                                width: "100%",
                                height: "100%"
                            }}
                        >
                            <Button onClick={() => console.log("Hello World!")}>
                                Log Hello World
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
