import { useState, memo, useCallback } from "react";
import { Child1 } from "./components/Child1";
import { Child4 } from "./components/Child4";

export const App = memo(() => {
    console.log("App rendering");

    const [num, setNum] = useState(0);

    const onClickButton = () => {
        setNum(num+1);
    };

    //made this function a memo with useCallback
    const onClickReset = useCallback(() => {
        setNum(0);
    }, []);

    return (
        <>
            <button onClick={onClickButton}>button</button>
            <p>{num}</p>
            <Child1 onClickReset = {onClickReset} />
            <Child4 />
        </>
    );
});