import { useState } from "react";

export const useSnackbarAlert = (): [
  string,
  React.Dispatch<React.SetStateAction<string>>,
  "error" | "success",
  React.Dispatch<React.SetStateAction<"error" | "success">>
] => {
  const [message, setMessage] = useState<string>("");
  const [type, setType] = useState<"error" | "success">("success");

  return [message, setMessage, type, setType];
};
