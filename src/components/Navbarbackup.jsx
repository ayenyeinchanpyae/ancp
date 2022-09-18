// import { useState } from "react";
// import { Link } from "react-scroll";
// import { GiHamburgerMenu } from "react-icons/gi";
// import MenuItems from "./MenuItem";

// const NavBar = () => {
//   const [active, setActive] = useState(false);

//   const showMenu = () => {
//     setActive(!active);
//   };

//   return (
//     <>
//       <div className="fixed w-full h-[60px]  text-cyan-600 flex justify-between p-4 items-center z-999">
//         <div className="text-2xl ml-[100px] font-bold text-center uppercase">
//           <Link to="/">Crafter</Link>
//         </div>

//         <nav>
//           <div className="absolute right-6 md:hidden top-6 scale-150">
//             <GiHamburgerMenu
//               onClick={showMenu}
//               className="scale-150 cursor-pointer"
//             />
//           </div>

//           <ul className="hidden md:flex gap-8 p-6 uppercase bg-white/10">
//             <li className="hover:underline">
//               <Link to="/blogs">All Blogs</Link>
//             </li>
//           </ul>

//           <MenuItems showMenu={showMenu} active={active} className="z-999" />
//         </nav>
//       </div>
//     </>
//   );
// };

// export default NavBar;
