import { CiSearch, CiBookmark } from "react-icons/ci";
import { IoPersonOutline, IoBagOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Headers = () => {
  return (
    <div className="text-gray-300 px-5">
      <div className="flex justify-between">
        <p className="font-thin font-sans text-2xl hover:shadow-lg hover:shadow-orange-300">
          <Link to="/">
            T A N N <span className="text-black">-</span> T R I M
          </Link>
        </p>
        <ul className="flex justify-center">
          <li className="text-xl m-1">
            <CiSearch />
          </li>
          <li className="text-xl m-1">
            <IoPersonOutline />
          </li>
          <li className="text-xl m-1">
            <CiBookmark />
          </li>
          <li className="text-xl m-1">
            <IoBagOutline />
          </li>
        </ul>
      </div>
      <div className="grid justify-items-center mt-10">
        <ul className="flex">
          <li className="mx-8 hover:shadow-lg hover:shadow-orange-300">
            <Link to="/bags">Bags</Link>
          </li>
          <li className="mx-8 hover:shadow-lg hover:shadow-orange-300">
            <Link to="/travel">Travel</Link>
          </li>
          <li className="mx-8 hover:shadow-lg hover:shadow-orange-300">
            <Link to="/accesories">Accesories</Link>
          </li>
          <li className="mx-8 hover:shadow-lg hover:shadow-orange-300">
            <Link to="/gifting">Gifting</Link>
          </li>
          <li className="mx-8 hover:shadow-lg hover:shadow-orange-300">
            <Link to="/jewelery">Jewelery</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Headers;
