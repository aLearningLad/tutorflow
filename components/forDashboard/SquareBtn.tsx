"use client";

import Image from "next/image";

const SquareBtn: React.FC<Tsquaredata> = ({
  btnIcon,
  btnId,
  btnImg,
  btnSub,
  btnTitle,
}) => {
  return (
    <button
      className={`w-full p-2 ${
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
          {btnIcon}
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
