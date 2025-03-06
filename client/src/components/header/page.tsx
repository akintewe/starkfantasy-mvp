import Logo from "./components/logo";
import NavBar from "./components/navbar";
import UserBlock from "./components/userBlock";

export default function header () {
    return (
        <>
        <Logo />
        <NavBar />
        <UserBlock />
        </>
    );
}