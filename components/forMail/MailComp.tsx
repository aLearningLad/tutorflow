import React from "react";

const MailComp = () => {
  return (
    <div className=" h-[90vh] w-full border-4 border-white flex flex-col itemsc justify-center ">
      <section className=" w-full h-[90%] border-4 border-white flex flex-col lg:flex-row ">
        {/* email contents */}
        <textarea
          name=""
          id=""
          className=" w-full h-[80%] bg-slate-600 rounded-lg "
        />
      </section>

      <section className=" w-full h-[10%] flex justify-center items-center p-1 md:p-2">
        <button className=" w-full hover:scale-95 hover:text-orange-400 h-full border-4 border-orange-500 hover:bg-transparent transition-all duration-300 ease-in-out md:w-8/12 lg:w-4/12 rounded-md bg-orange-500 text-white ">
          Send
        </button>
      </section>
    </div>
  );
};

export default MailComp;
