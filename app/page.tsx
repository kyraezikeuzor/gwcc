import ResourceLibrary from "@/components/library";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-start gap-4 justify-center h-full min-h-screen max-w-[680px] mx-auto py-20 px-6">
      <header className="flex flex-col items-start gap-2">
        <h1 className="text-2xl font-bold text-left tracking-tight">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Girls_Who_Code_Logo.svg/1200px-Girls_Who_Code_Logo.svg.png"
            alt="GWC Logo"
            className="w-auto h-20 object-cover mb-2"
          />{" "}
          Club Resources
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

      <div className="example-card hidden">
        <h3>Workshops</h3>
        <p>
          Check out the workshop guides for the different workshops your club
          can do. Each guides contains starter code for your members to get
          started.
        </p>
        <Link href="/workshops" target="_blank" className="example-link">
          View Workshops →
        </Link>
      </div>

      <ResourceLibrary />
    </div>
  );
}
