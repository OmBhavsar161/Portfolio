export default function Navbar() {
  return (
   <>
     <nav className="flex space-x-80 bg-teal-700 py-3">
        <h2 className="pl-52 text-3xl text-teal-100 ">Om Bhavsar</h2>
        <ul className="flex font-bold text-white space-x-6 float-right pl-60 pt-2">
            <li>Home</li>
            <li>About</li>
            <li>Skill</li>
            <li>Education</li>
            <li>Service</li>
            <li>Blog</li>
            <li>Contact</li>
        </ul>
     </nav>
     <img src="./image5.jpg" className="w-full h-[36rem] object-cover"/>
     <div className="absolute inset-0 flex items-center text-teal-100 justify-center text-6xl ">Om Bhavsar</div>
     </>
  )
}
