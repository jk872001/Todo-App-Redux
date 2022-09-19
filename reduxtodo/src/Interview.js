import React, { useState } from "react";

import { Button, Row, Col, Container } from "react-bootstrap";
export const Interview = () => {
  const [state, setState] = useState(null);
  function handleBtn(val) {
    if (val === 1) {
      setState("btn1");
    } else if (val === 2) {
      setState("btn2");
    } else if (val === 3) {
      setState("btn3");
    } else if (val === 4) {
      setState("btn4");
    } else if (val === 5) {
      setState("btn5");
    } else if (val === 6) {
      setState("btn6");
    } else if (val === 7) {
      setState("btn7");
    } else if (val === 8) {
      setState("btn8");
    } else if (val === 9) {
      setState("btn9");
    } else {
      setState("btn10");
    }
  }
  return (
    <div>
      <Container className="container">
        <Row>
          <Col className="box">
            <Button
              className={state === "btn1" ? "bigbutton" : null}
              onClick={() => handleBtn(1)}
            >
              Click me
            </Button>
          </Col>
          <Col className="box">
            <Button
              className={state === "btn2" ? "bigbutton" : null}
              onClick={() => handleBtn(2)}
            >
              Click me
            </Button>
          </Col>

          <Col className="box">
            <Button
              className={state === "btn3" ? "bigbutton" : null}
              onClick={() => handleBtn(3)}
            >
              Click me
            </Button>
          </Col>
          <Col className="box">
            <Button
              className={state === "btn4" ? "bigbutton" : null}
              onClick={() => handleBtn(4)}
            >
              Click me
            </Button>
          </Col>
          <Col className="box">
            <Button
              className={state === "btn5" ? "bigbutton" : null}
              onClick={() => handleBtn(5)}
            >
              Click me
            </Button>
          </Col>
        </Row>
        <Row>
          <Col className="box">
            <Button
              className={state === "btn6" ? "bigbutton" : null}
              onClick={() => handleBtn(6)}
            >
              Click me
            </Button>
          </Col>
          <Col className="box">
            <Button
              className={state === "btn7" ? "bigbutton" : null}
              onClick={() => handleBtn(7)}
            >
              Click me
            </Button>
          </Col>
          <Col className="box">
            <Button
              className={state === "btn8" ? "bigbutton" : null}
              onClick={() => handleBtn(8)}
            >
              Click me
            </Button>
          </Col>
          <Col className="box">
            <Button
              className={state === "btn9" ? "bigbutton" : null}
              onClick={() => handleBtn(9)}
            >
              Click me
            </Button>
          </Col>
          <Col className="box">
            <Button
              className={state === "btn10" ? "bigbutton" : null}
              onClick={() => handleBtn(10)}
            >
              Click me
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
