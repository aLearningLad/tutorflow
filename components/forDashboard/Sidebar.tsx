import React from "react";

const Sidebar = () => {
  return (
    <nav className=" absolute bottom-0 lg:relative h-14 lg:min-h-screen w-full lg:w-24 bg-black">
      <section className=" w-2/12 lg:w-full flex justify-center items-center h-full lg:h-1/6 xl:h-[13%] border-2 border-white">
        {/* app logo here */}
      </section>
      <section className=" w-full h-full lg:h-5/6 bg-pink-400 flex flex-row lg:flex-col"></section>
    </nav>
  );
};

export default Sidebar;
