export default function Navbar() {
  const hover = "hover:text-teal-900 hover:bg-teal-300 rounded-md px-4 py-2 ";
  return (
    <>
      <nav className="relative z-10 flex space-x-80 bg-teal-700 py-3">
        <h2 className="pl-48 text-3xl text-teal-100">Om Bhavsar</h2>
        <ul className="flex font-bold text-white space-x-2 pl-28">
          <li>
            <button className={hover}>Home</button>
          </li>
          <li>
            <button className={hover}>Skill</button>
          </li>
          <li>
            <button className={hover}>About</button>
          </li>
          <li>
            <button className={hover}>Education</button>
          </li>
          <li>
            <button className={hover}>Service</button>
          </li>
          <li>
            <button className={hover}>Blog</button>
          </li>
          <li>
            <button className={hover}>Contact</button>
          </li>
        </ul>
      </nav>
      <div className="relative w-full h-[36rem]">
        <img src="./image5.jpg" className="w-full h-[36rem] object-cover" />
        <div className="absolute inset-0 flex items-center justify-center text-teal-100 text-6xl z-0">
          Om Bhavsar
        </div>
      </div>
    </>
  );
}
