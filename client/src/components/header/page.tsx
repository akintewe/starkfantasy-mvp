import Logo from "./components/logo";
import NavBar from "./components/navbar";
import UserBlock from "./components/userBlock";

interface HeaderProps {
  className?: string;
}

export default function Header({ className = "" }: HeaderProps) {
  return (
    <header className={`fixed top-0 left-0 w-full p-4 z-50 py-4 ${className}`}>
      <div>
        <Logo />
        <NavBar />
        <UserBlock />
      </div>
    </header>
  );
}
