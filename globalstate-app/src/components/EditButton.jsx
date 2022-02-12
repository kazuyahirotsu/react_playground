import { useContext } from "react";
import { AdminFlagContext } from "./providers/AdminFlagProvider";

const style = {
    width: "100px",
    padding: "6px",
    borderRadius: "8px",
};

export const EditButton = () => {
    //const {isAdmin} = props;
    
    const {isAdmin} = useContext(AdminFlagContext);
    //console.log(contextValue);

    return (
            <button style={style} disabled={!isAdmin}>edit</button>
    );
};