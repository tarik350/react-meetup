import classes from "./Layout.module.css";
import MainNavigator from "./MainNavigator";

const Layout = ({ children }) => {
  return (
    <div>
      <MainNavigator />
      <main className={classes.main}> {children}</main>
    </div>
  );
};

export default Layout;
