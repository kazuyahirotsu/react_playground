//not working
/** @jsxImportSource @emotion/react */
import {jsx, css} from "@emotion/react"
import styled from "@emotion/styled"

export const Emotion = () => {
    //like scss
    const containerStyle = css`
        border: solid 1px #aaa;
        border-radius: 20px;
        padding: 8px;
        margin: 8px;
        display: flex;
        justify-content: space-around;
        align-items: center;
    `;

    //like inline style
    const titleStyle = css({
        margin: 0,
        color: "#aaa"
    });

    return (
        <div css={containerStyle}>
            <p css={titleStyle}>This is Emotion</p>
            <SButton>button</SButton>
        </div>
    );
};

const SButton = styled.button`
    background-color: #ddd;
    border: none;
    padding: 8px;
    border-radius: 8px;
    &:hover {
        background-color: #aaa;
        color: #fff;
        cursor: pointer;
    }
`;