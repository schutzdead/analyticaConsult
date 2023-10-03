import Headerlayout from "./headerLayout";
import Footer from "./footer";

export default function Layout({ children }) {
    return (
        <>
            <Headerlayout />
            {children}
            <Footer />
        </>
    );
  }