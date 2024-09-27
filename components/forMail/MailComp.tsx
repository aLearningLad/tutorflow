"use client";

import { useState } from "react";
import RecipientTab from "./RecipientTab";

const MailComp = () => {
  const [emailContents, setEmailContents] = useState<string>("");
  const [recipientList, setRecipientList] = useState<string[]>([]);

  const handleAdd = () => {
    if (emailContents.length < 5) {
      alert("Email address too short!");
      return;
    }

    setRecipientList((prev) => [...prev, emailContents]);
  };

  return (
    <div className=" h-[90vh] w-full border-4 border-white flex flex-col itemsc justify-center ">
      <section className=" w-full h-[90%] border-4 border-white flex flex-col lg:flex-row ">
        {/* email contents */}
        <textarea
          name=""
          id=""
          className=" w-full lg:w-7/12 h-[80%] bg-slate-600 rounded-lg "
        />

        {/* add recipients */}
        <div className=" w-5/12 h-full flex flex-col justify-center items-center text-center px-1 md:px-5 lg:px-12">
          <h2 className=" text-xl text-white">Add mail recipients</h2>
          <input
            type="text"
            placeholder="Eg. sallymichaels@gmail.com"
            className=" w-full focus:scale-105 transition-all duration-300 ease-in h-12 py-2 px-3 text-neutral-300 focus:outline-none text-[18px] bg-slate-600 rounded-md"
            value={emailContents}
            onChange={(e) => setEmailContents(e.target.value)}
          />
          <button
            onClick={handleAdd}
            className=" w-full h-12 mt-4 hover:bg-blue-600/60 bg-blue-600 text-white rounded-md"
          >
            Add
          </button>
          <div className=" w-full h-[30%] bg-neutral-50/20 rounded-lg mt-5 overflow-auto ">
            {/* will contain recipientList */}
            {recipientList.length > 0 ? (
              <div className=" p-2 lg:p-3 flex flex-col items-center text-center">
                {recipientList.map((person, index) => (
                  <RecipientTab
                    key={person}
                    index={index as number}
                    emailString={person}
                  />
                ))}
              </div>
            ) : (
              <div className=" p-2 md:p-3 lg:p-5 w-full h-full flex justify-center items-center text-center text-neutral-300 ">
                Attach email addresses to share your message with. Your
                recipient list will be displayed here
              </div>
            )}
          </div>
        </div>
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
