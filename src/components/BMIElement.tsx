import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import NewButton from "./NewButton/NewButton";
import { ResultComponent } from "./ResultComponent";
import useInput from "./hooks/useInput";
import Input from "./Input/Input";
import ErrorComp from "./ErrorComp/ErrorComp";
type BMIStateType = {
  hterr: boolean;
  wterr: boolean;
  bmi: number;
};
// type BindingType = {
//   value: any;
//   onInput: (e: any) => void;
// };

export const BMIElement = () => {
  const [BMIStateObject, setBMIState] = useState<BMIStateType>({
    hterr: false,
    wterr: false,
    bmi: NaN,
  });
  const [ht, bindHt] = useInput({ initialValue: 0 });
  const [wt, bindWt] = useInput();

  useEffect(() => {
    setBMIState({
      ...BMIStateObject,
      hterr: ht < 140 || ht > 300,
      wterr: wt < 30 || wt > 120,
      bmi:
        ht > 139 && ht < 301 && wt > 29 && wt < 121
          ? (wt * 10000) / (ht * ht)
          : NaN,
    });
  }, []);

  return (
    <Box component="form">
      <h1>BMI Calculator</h1>
      <Input label="Height (cm)" binding={bindHt}></Input>
      {/* <TextField
        type="number"
        variant="standard"
        label="Height (cm)"
        // onChange={(e) => {
        //   act(() => {
        //     setHt(Number(e.target.value));
        //   });
        // }}
        {...bindHt}
      /> */}
      <ErrorComp
        measure="Height"
        visibility={BMIStateObject.hterr ? "visible" : "hidden"}
      ></ErrorComp>

      {/* <span
        style={{
          color: "red",
          fontSize: "12px",
          visibility: BMIStateObject.hterr ? "visible" : "hidden",
        }}
      >
        Height out of bounds
      </span> */}
      <br />
      <br />
      <Input label="Weight (kg)" binding={bindWt}></Input>
      {/* <TextField
        type="number"
        variant="standard"
        label="Weight (kg)"
        // onChange={(e) => {
        //   act(() => {
        //     setWt(Number(e.target.value));
        //   });
        // }}
        {...bindWt}
      /> */}
      <ErrorComp
        measure="Weight"
        visibility={BMIStateObject.wterr ? "visible" : "hidden"}
      ></ErrorComp>
      {/* <span
        style={{
          color: "red",
          fontSize: "12px",
          visibility: BMIStateObject.wterr ? "visible" : "hidden",
        }}
      >
        Weight out of bounds
      </span> */}
      <br />
      <br />
      {/* <Button variant="contained">Submit</Button> */}
      <NewButton>Submit</NewButton>
      <hr></hr>
      <Box>
        {isNaN(BMIStateObject.bmi) ? "" : `BMI: ${BMIStateObject.bmi}`}
        <ResultComponent bmi={BMIStateObject.bmi} />
        <br />
      </Box>
    </Box>
  );
};
