import Badge from "@/components/Badge";
import Heading from "@/components/Common/atoms/Heading";
import Meta from "@/components/Common/molecules/Meta";
import Table from "@/components/Table";
import { NextPageCustom } from "./_app";
import TopMenu from "@/components/Common/organisms/TopMenu";
import Button from "@/components/Button";
import Link from "next/link";

const Home: NextPageCustom = () => {
  return (
    <>
      <Meta />
      <TopMenu />
      <main className="min-h-screen ">
        <div className="min-h-[700px]">
          <section className="max-w-7xl gap-16 w-full mx-auto flex justify-center items-center min-h-[600px] flex-col ">
            <div className="text-center">
              <h1 className="text-quaternary font-bold text-5xl">Hi, Welcome to {process.env.NEXT_PUBLIC_APP_NAME}</h1>
              <div className="my-4 flex gap-4 mx-auto w-fit">
                <Badge text="V 0.0.0.1" color="primary" />
                <Badge text="May 2023" color="secondary" />
              </div>
              <p className="text text-quinary my-4">
                Simple, TailwindCSS Based and easy to use UI Library for Praktis Frontend Application.
              </p>
            </div>
            <Link href={"/components/atoms"}>
              <Button color="secondary" variant="rounded">
                Getting Started
              </Button>
            </Link>
          </section>
        </div>
      </main>
    </>
  );
};

Home.woLayout = true;

export default Home;
