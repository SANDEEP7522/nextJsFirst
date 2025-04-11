import Link from "next/link";

export const Header = () => {
  return (
    <div className="absolute z-10 w-full bg-gray-900">
      <nav className="container flex items-center justify-between w-screen h-12 text-white ">
        <Link href="/" className="text-3xl font-bold cursor-pointer">
          Home
        </Link>
        <div className="flex space-x-4 gap-2">
          <Link href="/performance" className="cursor-pointer ">
            Performance
          </Link>
          <Link href="/reliability" className="cursor-pointer ">
            Reliability
          </Link>
        </div>
      </nav>
    </div>
  );
};
