import { RiCheckDoubleFill, RiInformationLine } from "react-icons/ri";

type SnackbarAlertUploardPropsType = {
  message: string;
  type?: "success" | "error";
};

const alertClassProvider = {
  error: { container: { className: "border-[#b94a33] bg-[#f4c8be] text-red-500" } },
  success: { container: { className: "bg-[#f3f9e4] border border-[#82964f] text-[#414b28]" } },
};

const SnackbarAlert = ({ message, type = "success" }: SnackbarAlertUploardPropsType) => {
  return (
    <div
      className={`mt-4 border ${alertClassProvider[type].container.className} message w-full flex justify-start p-1 px-3 items-center rounded`}
    >
      {type === "error" ? <RiInformationLine className="w-4 h-4" /> : <RiCheckDoubleFill className="w-4 h-4" />}
      <span className="text-sm text-left ml-2">{message}</span>
    </div>
  );
};

export default SnackbarAlert;
