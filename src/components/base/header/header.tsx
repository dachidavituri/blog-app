import { ModeToggle } from "@/components/theme/mode-toggle";
import { NavLink } from "react-router-dom";
const Header: React.FC = () => {
  const getNavLinkClass = ({ isActive }: { isActive: boolean }) => {
    return `text-white ${isActive ? `text-red-700` : "hover:text-red-500"}`;
  };
  return (
    <header className="w-full h-20 sticky top-0 bg-slate-700 flex items-center justify-between px-16">
      <h1 className="text-2xl font-semibold uppercase">blog platform</h1>
      <NavLink to={"home"} className={getNavLinkClass}>
        HOME
      </NavLink>
      <ModeToggle />
    </header>
  );
};
export default Header;
