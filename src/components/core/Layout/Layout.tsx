import { FC } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Layout: FC<ILayout> = (props) => {
  const { children } = props;
  return (
    <div>
      <Header></Header>
      {children}
      <Footer></Footer>
    </div>
  );
};

export default Layout;

interface ILayout {
  children: React.ReactNode;
}
