import { useState } from "react";
export type UseInputProps = {
  initialValue?: any;
};
function useInput({ initialValue = 0 }: UseInputProps = {}) {
  // initialValue = initialValue ?? 0;
  const [value, setValue] = useState<any>(initialValue);
  const bind = {
    value: value,
    onChange: (e: any) => {
      setValue(e.target.value);
    },
  };
  return [value, bind];
}

export default useInput;
