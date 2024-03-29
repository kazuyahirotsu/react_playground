import { useState } from "react";
import { useEffect } from "react";
//propsでcolor、childrenでmessageを指定して他のファイルの関数でhtmlを作る
import { ColoredMessage } from "./components/ColoredMessage";
import { CssModules } from "./components/CssModules";
import { StyledJsx } from "./components/StyledJsx";
import { StyledComponents } from "./components/StyledComponents";
import { Emotion } from "./components/Emotion";
import { TailwindCss } from "./components/TailwindCss";

export const App = () => {
  console.log("rendering");

  const [num, setNum] = useState(0);

  useEffect(() => {
    alert();
  }, []);

  const onClickButton = () => {
    setNum(num+1);
  };

//javascriptの関数は{関数}で使う
  return (
    <>
      {console.log("Hi")}
      <h1 style={{color: "red"}}>hello</h1>
      <ColoredMessage color="blue" > How are you? </ColoredMessage>
      <ColoredMessage color="pink" > Great!! This is children </ColoredMessage>
      <button onClick={onClickButton}>button</button>
      <p>{num}</p>

      <CssModules></CssModules>
      <StyledJsx></StyledJsx>
      <TailwindCss></TailwindCss>
    </>
  );
};