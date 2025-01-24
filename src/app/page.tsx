import { Navbar } from "./components/Navbar";
import { Homepage } from "./components/Home";

import '../style/main.css';

export default function Home() {
  return (
    <>
      <div className="">
        <Navbar />
        <Homepage />
      </div>
    </>
  );
}