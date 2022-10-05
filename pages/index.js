import Head from "next/head";
import Image from "next/image";

import logo from "../assets/NBY_horz 1.svg";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Northbound Yoga</title>
      </Head>

      <main className="flex flex-col items-center justify-center h-screen px-28">
        <Image src={logo} alt="Northbound yoga" />
        <p>Coming soon...</p>
      </main>
    </div>
  );
}
