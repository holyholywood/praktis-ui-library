import Image from "next/image";
import { RiDeleteBin6Fill, RiImageAddLine } from "react-icons/ri";
import { getOrdinalSuffix } from "./util";

type SingleImageContainerPropsType = {
  ImageURL?: string | null;
  count: number;
  isInput?: boolean;
  handleUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleDelete: (index: number) => void;
};

const SingleImageContainer = ({ ImageURL, count, isInput, handleUpload, handleDelete }: SingleImageContainerPropsType) => {
  return (
    <>
      <label
        htmlFor={`input${count}`}
        className={`rounded-lg group border-dashed relative border w-24 px-1 py-2 h-24 border-primary flex items-center justify-center ${
          isInput && "hover:cursor-pointer"
        }`}
      >
        {ImageURL ? (
          <>
            <Image src={ImageURL} width={100} height={100} alt="image" className="object-contain" />
            <button
              onClick={() => handleDelete(count - 1)}
              className="bg-white/70 p-1 hidden group-hover:flex rounded-lg absolute justify-center items-center"
            >
              <RiDeleteBin6Fill className="text-red-500 text-lg" />
            </button>
          </>
        ) : (
          <div className="flex flex-col justify-center items-center">
            <RiImageAddLine className="w-12 h-12 text-primary m-2" />
            <span className="text-xs text-[#848383]">{getOrdinalSuffix(count)} Photo</span>
          </div>
        )}
      </label>
      <input
        onChange={handleUpload}
        id={`input${count}`}
        type="file"
        className="hidden"
        disabled={!isInput || ImageURL !== null}
        accept="image/png, image/jpeg"
      />
    </>
  );
};

export default SingleImageContainer;
