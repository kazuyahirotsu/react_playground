export const ColoredMessage = (props) => {
    //分割代入する (destructure)
    const {color, children} = props;

    const contentStyle = {
        color,
        fontSize: "20px"
    };

    return <p style = {contentStyle}>{children}</p>
}