import React, { useEffect, useState, Dispatch, SetStateAction, ChangeEvent } from "react";
import { imagesType, validateImage } from "./util";
import SingleImageContainer from "./SingleImageContainer";
import SnackbarAlert from "../SnackbarAlert";
import { useSnackbarAlert } from "../SnackbarAlert/util";

type UploadImagePropsType = {
  isInput?: boolean;
  images: imagesType;
  setImages: Dispatch<SetStateAction<imagesType>>;
};

const UploadImage = ({ isInput = false, images, setImages }: UploadImagePropsType) => {
  /**
   * @Utility
   */

  const [alertMessage, setAlertMessage, alertType, setAlertType] = useSnackbarAlert();
  /**
   * @Images
   */

  useEffect(() => {
    // setDefaultImages(defaultImage);
  }, []);

  const handleUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files;
    if (file) {
      const { isError, errMessage } = await validateImage(file);
      if (isError) {
        setAlertMessage(errMessage[0]);
        setAlertType("error");

        return;
      }

      setImages([...images]);
    }
  };

  const handleDelete = (index: number) => {
    const updateImages = [...images];
    updateImages.splice(index, 1);
    setImages(updateImages);
  };

  return (
    <div>
      <div className="flex gap-6">
        {[0, 1, 2, 3, 4].map((el, index) => {
          return (
            <div key={index}>
              <SingleImageContainer
                handleUpload={handleUpload}
                handleDelete={handleDelete}
                ImageURL={images[index] ? images[index].ImageURL : null}
                count={index + 1}
                isInput={isInput}
              />
            </div>
          );
        })}
      </div>
      {alertMessage && <SnackbarAlert message={alertMessage} type={alertType} />}
    </div>
  );
};

export default UploadImage;
