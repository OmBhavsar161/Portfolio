export default function Navbar() {
  const hover = "hover:bg-teal-300 rounded-md px-3 py-2"
  return (
   <>
     <nav className="flex space-x-80 bg-teal-700 py-3">
        <h2 className="pl-52 text-3xl text-teal-100 ">Om Bhavsar</h2>
        <ul className="flex font-bold text-white space-x-2 float-right pl-60 ">
            <li className={hover}><button>Home</button></li>
            <li className={hover}><button>Skill</button></li>
            <li className={hover}><button>About</button></li>
            <li className={hover}><button>Education</button></li>
            <li className={hover}><button>Service</button></li>
            <li className={hover}><button>Blog</button></li>
            <li className={hover}><button>Contact</button></li>
        </ul>
     </nav>
     <img src="./image5.jpg" className="w-full h-[36rem] object-cover"/>
     <div className="absolute inset-0 flex items-center text-teal-100 justify-center text-6xl ">Om Bhavsar</div>
     </>
  )
}
