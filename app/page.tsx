import Image from "next/image";
import logo from "@/public/codemeet_logo_png-removebg-preview.png"
export default function Home() {
  return (
    <main className="">
      CodeMeet
      <Image src={logo} alt="logo" className="w-60 h-40"/>
    </main>
  );
}
