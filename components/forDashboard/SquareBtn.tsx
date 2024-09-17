"use client";

import Image from "next/image";
import Modals from "./Modals";
import { useState } from "react";
import { modalOptions } from "@/lib/enums";

const SquareBtn: React.FC<Tsquaredata> = ({
  btnIcon,
  btnId,
  btnImg,
  btnSub,
  btnTitle,
}) => {
  const [modalForValue, setModalForValue] = useState<string>("");

  const handleBtnClick = (id: number) => {
    switch (id) {
      case 278178121:
        setModalForValue(modalOptions.NEW);
      case 1001265521:
        alert("Join meeting clicked!");
        break;
      case 982111837401:
        alert("Set up meeting clicked!");
        break;
      case 54667281:
        alert("Share meeting clicked!");
        break;

      default:
        console.log("Nothing clicked");
        break;
    }
  };

  return (
    <button
      className={`w-full p-2 hover:scale-90 hover:bg-slate-800 hover:border-2 hover:border-white transition-all duration-300 ease-in-out ${
        btnId === 278178121 && " bg-orange-500 text-white"
      } h-full flex-col text-white ${
        btnId === 1001265521 && "bg-blue-700"
      } flex justify-center items-center rounded-lg ${
        btnId === 982111837401 && "bg-blue-700"
      }
        ${btnId === 54667281 && "bg-orange-500"}
              `}
    >
      <section className=" w-full h-[60%] flex justify-between px-2 py-1 ">
        <div className="w-3/12 h-[50%] bg-neutral-50/30 flex justify-center items-center rounded-lg">
          <Modals modalFor={modalForValue} btnIcon={btnIcon} />
        </div>
        <Image src={btnImg} width={100} height={100} alt="button Icon" />
      </section>
      <section className=" w-full h-[40%] flex flex-col items-start text-start justify-center px-2 py-1 ">
        <h3 className=" text-[14px] text-white ">{btnTitle}</h3>
        <p className="text-[12px] text-neutral-200 ">{btnSub}</p>
      </section>
    </button>
  );
};

export default SquareBtn;
