import { squaredata } from "@/misc/squaredata";

const TopSquares = () => {
  return (
    <div className=" w-full gap-3 h-[60%] px-4 py-1 md:px-8 md:py-3 lg:px-24 lg:py-5 grid grid-cols-1 lg:grid-cols-2 ">
      {squaredata.map((square) => (
        <button className="w-full h-full bg-yellow-400 text-black flex justify-center items-center rounded-lg">
          Click!
        </button>
      ))}
    </div>
  );
};

export default TopSquares;
