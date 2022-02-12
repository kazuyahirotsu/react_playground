import { memo } from "react";
import {Child2} from "./Child2";
import {Child3} from "./Child3";

const style = {
    height: "200px",
    backgroundColor: "lightblue",
    padding: "8px"
};

//use memo to reduce re-rendering by not rendering if props are not changed
export const Child1 = memo((props) => {
    console.log("Child1 rendering");

    const {onClickReset} = props;

    return (
        <div style={style}>
            <p>Child1</p>
            <button onClick = {onClickReset}>reset</button>
            <Child2 />
            <Child3 />
        </div>
    );
});