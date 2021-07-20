/* eslint react-hooks/exhaustive-deps: off */

import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

const App = () => {
  const [num, setNum] = useState(0);
  const [faceShowFlog, setFaceShowFlag] = useState(true);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlog);
  };

  useEffect(() => {
    if (num % 3 === 0) {
      faceShowFlog || setFaceShowFlag(true);
    } else {
      faceShowFlog && setFaceShowFlag(false);
    }
  }, [num]);

  return (
    <>
      <ColorfulMessage color="blue">お元気ですか?</ColorfulMessage>
      <ColorfulMessage color="red">元気です</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <p>{num}</p>
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      {faceShowFlog && <p>^^;</p>}
    </>
  );
};

export default App;
