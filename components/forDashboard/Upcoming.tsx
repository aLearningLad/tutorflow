import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

const Upcoming = () => {
  return (
    <div className="border-4 border-yellow-600 flex flex-col lg:flex-row px-2 py-3 md:px-5 text-white lg:py-4 lg w-full min-h-[85vh] ">
      <LeftSide />
      <RightSide />
    </div>
  );
};

export default Upcoming;
