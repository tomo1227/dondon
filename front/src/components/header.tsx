import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="flex justify-around pt-3 container mx-auto px-4">
        <div className="flex flex-1 justify -start font-bold">
          <h1 className="py-2 px-4">DonDon</h1>
        </div>
        <nav className="flex-1 flex justify-center rounded-full">
          <ul className="flex">
            <li className="mx-3 py-2 px-4 flex-1">
              <Link href="/" className="text-blue-500 hover:text-blue-800 font-bold">
                Home
              </Link>
            </li>
            <li className="mx-3 py-2 px-4 flex-1">
              <a className="text-blue-500 hover:text-blue-800 font-bold" href="#">
                Link
              </a>
            </li>
            <li className="mx-3 py-2 px-4 flex-1">
              <Link href="/todo" className="text-blue-500 hover:text-blue-800 font-bold">
                {" "}
                Todo{" "}
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex-1 flex justify-end">
          <button className="bg-black-500 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded-full">
            お問い合わせ
          </button>
        </div>
      </div>
    </header>
  );
}
