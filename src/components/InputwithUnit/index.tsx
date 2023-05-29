type customInputwithUnitPropsType = {
  unit?: string;
  label?: string;
  isRequired?: boolean;
  formControlClassName?: string;
  isCurrency?: boolean;
  inputSize?: "lg" | "default" | "sm" | "none";
};

type inputwithUnitPropsType = customInputwithUnitPropsType &
  React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

const inputSizeProvider = {
  none: {
    inputWrapper: { className: "" },
    input: { className: "" },
  },
  lg: {
    inputWrapper: { className: "" },
    input: { className: "" },
  },
  default: {
    inputWrapper: { className: "w-52" },
    input: { className: "w-36" },
  },
  sm: {
    inputWrapper: { className: "w-40" },
    input: { className: "w-20" },
  },
};

const InputwithUnit = ({ isRequired = false, inputSize = "default", ...props }: inputwithUnitPropsType) => {
  return (
    <div className={`form-control space-y-2 ${props.formControlClassName}`}>
      {props.label && (
        <label htmlFor={props.id} className="font-semibold">
          {props.label}
          {isRequired && <span className="text-danger">*</span>}
        </label>
      )}

      <div className={`input-text flex items-center ${inputSizeProvider[inputSize].inputWrapper.className}`}>
        {props.isCurrency && <span>Rp.</span>}
        <input
          {...props}
          className={`w-full focus:outline-none  ${inputSizeProvider[inputSize].input.className} ${props.unit && "pr-2"} ${
            props.className
          }`}
        />
        {props.unit && <span className={`${props.disabled && "text-gray-400"}`}>{props.unit}</span>}
      </div>
    </div>
  );
};
