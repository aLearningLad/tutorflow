import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

const Upcoming = () => {
  return (
    <div className="flex flex-col lg:flex-row px-2 py-3 md:px-5 text-white lg:py-4 lg w-full h-fit lg:h-[90vh] ">
      <LeftSide />
      <RightSide />
    </div>
  );
};

export default Upcoming;
