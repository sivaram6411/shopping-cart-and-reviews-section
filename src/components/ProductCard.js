import { BsBoxArrowUp } from "react-icons/bs";
import { CiBookmark } from "react-icons/ci";
import { MdCurrencyRupee } from "react-icons/md";
import { TbShoppingBagPlus } from "react-icons/tb";
import { ProductsList } from "../utils/Constants";
import BagCategories from "./BagCategories";
import { useEffect, useState } from "react";
import axios from "axios";

const ProductCard = () => {
  return (
    <div>
      <BagCategories />
      <div className="flex justify-between font-medium mx-5">
        <p className="text-gray-300">
          Bags <span className="text">.</span> Backpacks
        </p>
        <p className="text-gray-300 flex">
          13 products{"  "}
          <span className="text-xl my-1 mx-1">
            <BsBoxArrowUp />
          </span>
        </p>
      </div>
      <ul className="flex flex-wrap">
        {ProductsList.dataInfo.map((product) => {
          return (
            <li key={product.id}>
              <div className="bg-gray-800 w-64 rounded-md mx-4 mt-5">
                <div className="relative">
                  <CiBookmark className="absolute right-0 m-2 text-3xl" />
                  <img
                    src={product.cardImage}
                    className="w-auto rounded-t-md"
                    alt="bagImage"
                  />
                </div>
                <p className="text-gray-300 text-lg mx-4 mt-5 mb-2">
                  {product.content}
                </p>
                <div className="text-white flex justify-between">
                  <div className="flex mx-4 mb-5">
                    <MdCurrencyRupee className="mt-1 font-bold text-lg" />
                    <p className="text-white text-lg font-medium mt-0">
                      {product.offerPrice}{" "}
                      <span className="text-xs font-extralight line-through">
                        {product.originalPrice}
                      </span>{" "}
                      <span className="text-xs text-green-400">
                        {product.discount}
                      </span>
                    </p>
                  </div>
                  <div className="items-center text-4xl mr-5">
                    <TbShoppingBagPlus />
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProductCard;

{
  /*
  * this data was using Axios
  
  const ProductCard = () => {
  const [bagList, setBagList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3030/data")
      .then((res) => setBagList(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <BagCategories />
      <div className="flex justify-between font-medium mx-5">
        <p className="text-gray-300">
          Bags <span className="text">.</span> Backpacks
        </p>
        <p className="text-gray-300 flex">
          13 products{"  "}
          <span className="text-xl my-1 mx-1">
            <BsBoxArrowUp />
          </span>
        </p>
      </div>
      <ul className="flex flex-wrap">
        {bagList.map((product) => {
          return (
            <li key={product.id}>
              <div className="bg-gray-800 w-64 rounded-md mx-4 mt-5">
                <div className="relative">
                  <CiBookmark className="absolute right-0 m-2 text-3xl" />
                  <img
                    src={product.cardImage}
                    className="w-auto rounded-t-md"
                    alt="bagImage"
                  />
                </div>
                <p className="text-gray-300 text-lg mx-4 mt-5 mb-2">
                  {product.content}
                </p>
                <div className="text-white flex justify-between">
                  <div className="flex mx-4 mb-5">
                    <MdCurrencyRupee className="mt-1 font-bold text-lg" />
                    <p className="text-white text-lg font-medium mt-0">
                      {product.offerPrice}{" "}
                      <span className="text-xs font-extralight line-through">
                        {product.originalPrice}
                      </span>{" "}
                      <span className="text-xs text-green-400">
                        {product.discount}
                      </span>
                    </p>
                  </div>
                  <div className="items-center text-4xl mr-5">
                    <TbShoppingBagPlus />
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
 */
}
