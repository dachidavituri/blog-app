import { ModeToggle } from "@/components/theme/mode-toggle";
import { ChangeLanguage } from "@/components/base/change-language";
import { Button } from "@/components/ui/button";
import { Link, NavLink } from "react-router-dom";
import { Trans, useTranslation } from "react-i18next";
import useCurrentLang from "@/i18n/currentLang";

const Header: React.FC = () => {
  const { t } = useTranslation();
  console.log(t("Welcome to React"));
  const currentLang = useCurrentLang();
  console.log(`current lang is `, currentLang);

  return (
    <header className="w-full h-20 sticky top-0 bg-slate-700 flex items-center justify-between px-16 py-6 z-10">
      <h1 className="text-2xl font-semibold uppercase">
        <Trans>header.blogTitle</Trans>
      </h1>
      <div className="flex gap-3">
        <NavLink to={`/${currentLang}/home`} className="uppercase">
          <Trans>header.home</Trans>
        </NavLink>
        <NavLink to={`/${currentLang}/about`} className="uppercase">
          <Trans>header.about</Trans>
        </NavLink>
      </div>
      <div className="flex justify-center items-center gap-3">
        <Link to={`/${currentLang}/login`}>
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
