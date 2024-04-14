import { travelData } from "../utils/Constants";

const TravelPage = () => {
  return (
    <div>
      <ul className="flex flex-wrap">
        {travelData.tourist.map((tour) => (
          <li>
            <div className="bg-gray-800 w-64 rounded-md mx-4 mt-5">
              <img
                src={tour.images}
                className="w-auto rounded-t-md"
                alt="travelImage"
              />
              <h2 className="text-gray-300 text-lg mx-4 mt-5 mb-2">
                {tour.name}
              </h2>
              <p className="text-base text-gray-300 mx-4 mt-5 mb-2">{tour.info}</p>
            </div>
          </li>
        ))}
      </ul>
      ;
    </div>
  );
};

export default TravelPage;
