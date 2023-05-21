import { useState } from "react";

const useBoolean = (defaultValue: boolean = false) => {
  const [booleanValue, setBooleanValue] = useState<boolean>(defaultValue);
  return [booleanValue, setBooleanValue];
};

export default useBoolean;
