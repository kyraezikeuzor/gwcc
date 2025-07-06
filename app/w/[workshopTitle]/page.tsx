import { workshops } from "@/data/workshops";
import Link from "next/link";

export default async function WorkshopPage({
  params,
}: {
  params: Promise<{ workshopTitle: string }>;
}) {
  const { workshopTitle } = await params;
  const workshop = workshops.find(
    (w) => w.title.toLowerCase().replace(/ /g, "-") === workshopTitle
  );

  return (
    <div className="flex flex-col items-start gap-4 justify-center h-full min-h-screen max-w-[680px] mx-auto py-20 px-6">
      <Link href="/" className="text-sm text-gray-500">
        ← Back to Resources
      </Link>
      <h1>{workshop?.title}</h1>
      <p>{workshop?.description}</p>
      <div className="flex flex-col gap-4 w-full">
        <div className="flex flex-col gap-4">
          <h3>Starter Code</h3>
          <code className="bg-gray-100  p-4 rounded-md text-xs">
            {workshop?.starterCodeFiles.map((file) => (
              <div
                className="flex flex-col gap-2 text-xs overflow-x-scroll"
                key={file.name}
              >
                <h2>{file.name}</h2>
                <pre>{file.content}</pre>
              </div>
            ))}
          </code>
        </div>
        <div className="flex flex-col gap-4">
          <h3>Final Code</h3>
          <code className="bg-gray-100 p-4 rounded-md text-xs">
            {workshop?.finalCodeFiles.map((file) => (
              <div
                className="flex flex-col gap-2 text-xs overflow-x-scroll"
                key={file.name}
              >
                <h2>{file.name}</h2>
                <pre>{file.content}</pre>
              </div>
            ))}
          </code>
        </div>
      </div>
    </div>
  );
}
