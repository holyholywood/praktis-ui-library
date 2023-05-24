import Image from "next/image";
import React from "react";
import { RiImageAddLine } from "react-icons/ri";

type UploadImagePropsType = {
  isInput?: boolean;
  defaultImages?: medias;
};

const UploadImage = () => {
  return (
    <div className="flex gap-6">
      {[0, 1, 2, 3, 4].map((el, index) => {
        return (
          <div key={index}>
            <SingleImageContainer ImageURL={defaultImage[index] ? defaultImage[index].ImageURL : null} count={index + 1} isInput />
          </div>
        );
      })}
    </div>
  );
};

export default UploadImage;

type SingleImageContainerPropsType = {
  ImageURL?: string | null;
  count: number;
  isInput?: boolean;
};

const SingleImageContainer = ({ ImageURL, count, isInput }: SingleImageContainerPropsType) => {
  return (
    <>
      <label
        htmlFor={`input${count}`}
        className={`rounded-lg border-dashed relative border w-24 px-1 py-2 h-24 border-primary flex items-center justify-center ${
          isInput && "hover:cursor-pointer"
        }`}
      >
        {ImageURL ? (
          <Image src={ImageURL} width={100} height={100} alt="image" className="object-contain" />
        ) : (
          <div className="flex flex-col justify-center items-center">
            <RiImageAddLine className="w-12 h-12 text-primary m-2" />
            <span className="text-xs text-[#848383]">{getOrdinalSuffix(count)} Photo</span>
          </div>
        )}
      </label>
      <input id={`input${count}`} type="file" className="hidden" disabled={!isInput} />
    </>
  );
};

const defaultImage = [
  {
    id: 159347,
    ImageURL: "https://s3.ap-southeast-3.amazonaws.com/omspts.dev.public/AJA-LZ-GGS-001-0_UhILlBl.jpg",
  },
  {
    id: 159348,
    ImageURL: "https://s3.ap-southeast-3.amazonaws.com/omspts.dev.public/AJA-LZ-GGS-001-1_v1Z76gf.jpg",
  },
  {
    id: 159349,
    ImageURL: "https://s3.ap-southeast-3.amazonaws.com/omspts.dev.public/AJA-LZ-GGS-001-2_adxpReY.jpg",
  },
];

type media = {
  id: number;
  ImageURL: string;
};

type medias = media[];

function getOrdinalSuffix(number: number): string {
  const suffixes: string[] = ["th", "st", "nd", "rd"];
  const mod100: number = number % 100;

  if (mod100 >= 11 && mod100 <= 13) {
    return number + "th";
  } else {
    const mod10: number = number % 10;
    const suffix: string = suffixes[mod10] || "th";
    return number + suffix;
  }
}
