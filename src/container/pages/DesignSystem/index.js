/* eslint-disable no-unused-vars */
// DesignSystem Component
// --------------------------------------------------------

import React, { useState } from "react";
import Colors from "../../../helpers/colors";
import Button from "../../../components/Button";
import { ReactComponent as Eye } from "../../../assets/icon/Eye.svg";
import InputText from "../../../components/InputText";
import Notification from "../../../components/Notification";

function DesignSystem() {
  const [first, setFirst] = useState("");
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        margin: "20px",
        color: Colors.primary[10],
      }}
    >
      <div>
        <h2>Input</h2>
        <InputText value={first} onChange={(e) => setFirst(e.target.value)} />
      </div>
      <div>
        <h2>Button Contained</h2>
        <Button variant="contained">Click Me!</Button>
      </div>
      <div>
        <h2>Button Outlined</h2>
        <Button variant="outlined">Click Me!</Button>
      </div>
      <div>
        <h2>Button Full</h2>
        <Button variant="contained" full>
          Click Me!
        </Button>
      </div>
      <div>
        <h2>Button Loading</h2>
        <Button variant="contained" isLoading>
          Click Me!
        </Button>
      </div>
      <div>
        <h2>Button Rounded</h2>
        <Button variant="contained" rounded>
          Click Me!
        </Button>
      </div>
      <div>
        <h2>Button Custom Rounded</h2>
        <Button variant="contained" borderRadius="5px">
          Click Me!
        </Button>
      </div>
      <div>
        <h2>Button With Icon</h2>
        <Button
          variant="contained"
          borderRadius="5px"
          padding="0px 7px 0px 9px"
        >
          Detail
          <Eye />
        </Button>
      </div>
      <div>
        <h2>Notification</h2>

        <div>
          <Notification />
        </div>
      </div>
    </div>
  );
}

export default DesignSystem;
