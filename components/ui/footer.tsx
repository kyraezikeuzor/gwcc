import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col items-start gap-2 max-w-[680px] mx-auto px-6">
      <p className="!text-base">
        Made with 💚 by{" "}
        <Link href="https://kyraezikeuzor.com" target="_blank">
          Kyra
        </Link>
      </p>
    </footer>
  );
}
