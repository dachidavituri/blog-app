import { PropsWithChildren } from "react";
const PageOutlet: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className="pb-16 flex-1">{children}</div>;
};
export default PageOutlet;
