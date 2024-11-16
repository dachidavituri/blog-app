import { ModeToggle } from "@/components/theme/mode-toggle";
import { ChangeLanguage } from "@/components/base/change-language";
import { Button } from "@/components/ui/button";
import { Link, NavLink } from "react-router-dom";
import { Trans, useTranslation } from "react-i18next";
const Header: React.FC = () => {
  const { t } = useTranslation();
  console.log(t("Welcome to React"));
  return (
    <header className="w-full h-20 sticky top-0 bg-slate-700 flex items-center justify-between px-16">
      <h1 className="text-2xl font-semibold uppercase">
        <Trans>header.blogTitle</Trans>
      </h1>
      <NavLink
        to="/ka/home"
        className={({ isActive }) =>
          `uppercase ${isActive ? "text-red-700" : "hover:text-red-400 text-white"}`
        }
      >
        <Trans>header.home</Trans>
      </NavLink>
      <div className="flex justify-center items-center gap-3">
        <Link to={"login"}>
          <Button className="bg-blue-500 font-semibold">
            <Trans>header.sign</Trans>
          </Button>
        </Link>
        <ChangeLanguage />
        <ModeToggle />
      </div>
    </header>
  );
};

export default Header;
