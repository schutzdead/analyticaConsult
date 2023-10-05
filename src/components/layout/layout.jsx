import Headerlayout from "./headerLayout";
import Footer from "./footer";

export default function Layout({ children }) {
    return (
        <div className="min-h-[100vh] flex flex-col">
            <Headerlayout />
            {children}
            <Footer />
        </div>
    );
  }