import { Categories } from "../utils/Constants";

const BagCategories = () => {
  return (
    <ul className="flex justify-around">
      {Categories.data.map((cat) => (
        <li key={cat.id} className="my-10 text-center">
          <div className="text-gray-300">
            <img src={cat.image} alt={cat.name} />
            <p className="text-gray-300 mt-4">{cat.name}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default BagCategories;
