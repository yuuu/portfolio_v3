import React from "react";
import Image from "next/image";
import Link from "next/link";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center">
      <div>
        <h1 className="text-6xl leading-tight text-gray-900 py-4 my-4 border-b-2">
          Welcome to yuuu&lsquo;s portfolio.
        </h1>
        <span className="text-2xl block justify-center mb-8">
          Check out my profile!
        </span>
        <div className="flex justify-center">
          <Link href="/profile">
            <button className="bg-accent hover:bg-accent-dark text-white text-2xl py-2 px-4 tracking-widest rounded block">
              Profile
            </button>
          </Link>
        </div>
      </div>
      <div>
        <Image
          src="/images/logo.png"
          alt="yuuu&lsquo;s portfolio"
          width={720}
          height={718}
        />
      </div>
    </div>
  );
};

export default Home;
