import ResourceLibrary from "@/components/library";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-start gap-4 justify-start h-full min-h-screen max-w-[680px] mx-auto py-20 px-6">
      <header className="flex flex-col items-start gap-2">
        <h1 className="text-2xl font-bold text-left tracking-tight">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Girls_Who_Code_Logo.svg/1200px-Girls_Who_Code_Logo.svg.png"
            alt="GWC Logo"
            className="w-auto h-14 lg:h-20 object-cover mb-2"
          />{" "}
          Resources for Clubs
        </h1>
        <p className="text-left">
          Explore this collection of resources for{" "}
          <Link href="https://girlswhocode.com" target="_blank">
            Girls Who Code clubs
          </Link>
          . Check out workshop guides, project ideas, cool club events, & more.
          👾
        </p>
      </header>

      <ResourceLibrary />
    </div>
  );
}
