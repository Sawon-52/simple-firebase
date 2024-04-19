import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full h-20 bg-green-300 rounded-lg p-4 text-2xl text-stone-950 flex items-center justify-center">
      <ul className="flex gap-5 ">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/login"}>Login</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
