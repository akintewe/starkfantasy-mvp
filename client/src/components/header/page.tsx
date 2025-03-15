import Logo from "./components/logo";
import NavBar from "./components/navbar";
import UserBlock from "./components/userBlock";

export default function header () {
    return (
        <div className="absolute top-0 z-50 flex justify-between w-full px-4 py-4">
        <Logo />
        <NavBar />
        <UserBlock />
        </div>
    );
}