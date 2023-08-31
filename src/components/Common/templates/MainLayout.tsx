import { Inter } from "next/font/google";
import SideMenu from "../organisms/SideMenu";
import TopMenu from "../organisms/TopMenu";

const inter = Inter({ subsets: ["latin"] });

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className={`${inter.className} text-maindark min-h-screen`}>
      <TopMenu />
      <div className="flex mx-auto w-full max-w-7xl relative py-10">
        <SideMenu />
        <section className="h-full w-full px-8 md:px-4">{children}</section>
      </div>
    </main>
  );
};
export default MainLayout;
