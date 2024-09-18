"use client";

const InputForNew = () => {
  return (
    <section className=" w-full flex flex-col items-center justify-center text-center mt-6 lg:mt-9">
      <h2 className=" text-[16px]">Invite participants by email</h2>
      <div className=" w-full">
        <input
          type="text"
          placeholder="Eg. isaac44@tutorflow.com"
          className=" w-full h-12 rounded-md bg-slate-500/70 mt-3 px-3 py-1"
        />
      </div>
    </section>
  );
};

export default InputForNew;
