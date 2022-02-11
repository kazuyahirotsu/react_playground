import classes from "./CssModules.module.scss"

export const CssModules = () => {
    return (
        <div className={classes.container}>
            <p className={classes.title}>This is Css Module</p>
            <button className={classes.button}>button</button>
        </div>
    );
};