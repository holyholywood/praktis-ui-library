import React, { ChangeEvent } from "react";

/**
 * validateImageType() : void
 * @param file
 * @param acceptedType
 */

export function validateImageType(file: FileList, acceptedType: string[]) {
  return acceptedType.includes(file[0].type);
}

/**
 * validateImagePixelSize() : void
 * @param file
 */
export function validateImagePixelSize(file: FileList): Promise<boolean> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      const img = new Image();

      img.onload = () => {
        const width = img.naturalWidth;
        const height = img.naturalHeight;

        const isSizeMatch = width === 800 && height === 800;
        resolve(isSizeMatch);
      };

      img.src = e.target?.result as string;
    };

    reader.onerror = () => {
      reject(new Error("Error reading image file."));
    };

    reader.readAsDataURL(file[0]);
  });
}

export function validateImageFileSize(file: FileList) {
  return file[0].size / (1024 * 1024) <= 2;
}

type validateImageOptionType = {
  acceptedType?: string[];
};
/**
 * validateImage() : {isError: boolean, errMessage: string}
 * @param file
 * @param option
 * @returns
 */
export async function validateImage(
  file: FileList,
  option: validateImageOptionType = { acceptedType: ["image/png", "image/jpg", "image/jpeg"] }
) {
  const acceptedFileType = option.acceptedType ?? ["image/png", "image/jpg", "image/jpeg"];
  const errMessage = [];
  validateImageType(file, acceptedFileType) ? null : errMessage.push("File Type Unsupported");
  (await validateImagePixelSize(file)) ? null : errMessage.push("Media still contains image that is less than 800px x 800px");
  validateImageFileSize(file) ? null : errMessage.push("File size should be less than or equal 2MB");

  return {
    isError: errMessage.length > 0,
    errMessage,
  };
}

/**
 * * Helpers
 *
 * @param number
 * @returns
 */

export function getOrdinalSuffix(number: number): string {
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

/**
 * @Images Type
 */

export type imageType = {
  id: number;
  ImageURL: string;
};

export type imagesType = imageType[];
