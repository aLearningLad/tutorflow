import { squaredata } from "@/misc/squaredata";
import SquareBtn from "./SquareBtn";

const TopSquares = () => {
  return (
    <div className=" w-full gap-3 h-[70%] px-4 py-1 md:px-8 md:py-3 lg:px-24 lg:py-5 grid grid-cols-1 lg:grid-cols-2 ">
      {squaredata.map(({ btnIcon, btnId, btnImg, btnSub, btnTitle }) => (
        <SquareBtn
          key={btnId}
          btnIcon={btnIcon}
          btnId={btnId}
          btnImg={btnImg}
          btnSub={btnSub}
          btnTitle={btnTitle}
        />
      ))}
    </div>
  );
};

export default TopSquares;
