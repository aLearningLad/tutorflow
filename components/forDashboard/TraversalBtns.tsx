"use client";

const TraversalBtns = () => {
  return (
    <div className=" w-full h-14 flex-col lg:flex-row flex justify-center items-center">
      <button className=" w-full h-7 rounded-md bg-cyan-600 x text-white py-2">
        Next
      </button>
      <button className=" w-full h-7 rounded-md bg-cyan-600 x text-white">
        Previous
      </button>
    </div>
  );
};

export default TraversalBtns;
