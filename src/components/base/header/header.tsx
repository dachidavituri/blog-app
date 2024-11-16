import { ModeToggle } from "@/components/theme/mode-toggle";
import { Button } from "@/components/ui/button";
import { Link, NavLink } from "react-router-dom";
const Header: React.FC = () => {
  return (
    <header className="w-full h-20 sticky top-0 bg-slate-700 flex items-center justify-between px-16">
      <h1 className="text-2xl font-semibold uppercase">blog platform</h1>
      <NavLink
        to="/ka/home"
        className={({ isActive }) =>
          `uppercase ${isActive ? "text-red-700" : "hover:text-red-400 text-white"}`
        }
      >
        home
      </NavLink>
      <div className="flex justify-center items-center gap-3">
        <Link to={"login"}>
          <Button className="bg-blue-500 font-semibold">Sign In</Button>
        </Link>
        <ModeToggle />
      </div>
    </header>
  );
};

export default Header;
