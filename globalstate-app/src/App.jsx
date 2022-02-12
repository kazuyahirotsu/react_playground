import { useContext } from "react";
import { Card } from "./components/Card";
import { AdminFlagContext } from "./components/providers/AdminFlagProvider";

export const App = () => {
    //admin flag
    //const [isAdmin, setIsAdmin] = useState(false);

    const {isAdmin, setIsAdmin} = useContext(AdminFlagContext);

    const onClickSwitch = () => setIsAdmin(!isAdmin);

    return (
        <div>
            {isAdmin ? <span>This is admin</span>:<span>This is not admin</span>}
            <button onClick={onClickSwitch}>change</button>
            <Card isAdmin={isAdmin} />
        </div>
    );
};