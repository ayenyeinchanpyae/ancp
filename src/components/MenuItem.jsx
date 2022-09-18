import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";

const MenuItem = ({ showMenu, active }) => {
  return (
    <ul
      className={
        active
          ? "flex-col flex fixed items-center  inset-0 left-1/4 uppercase bg-black/60 text-white backdrop-blur-lg gap-8 justify-center p-8 md:hidden"
          : "hidden"
      }
    >
      <AiOutlineClose onClick={showMenu} className="cursor-pointer" />
      {/* <li>
        <Link to="/">Home</Link>
      </li> */}

      <>
        <li className="hover:underline">
          <Link to="/login" onClick={showMenu}>
            Log In
          </Link>
        </li>
        <li className="hover:underline">
          <Link to="/signup" onClick={showMenu}>
            Sign Up
          </Link>
        </li>
      </>
    </ul>
  );
};

export default MenuItem;
