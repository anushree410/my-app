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

export const BMIElement = () => {
  const [BMIStateObject, setBMIState] = useState<BMIStateType>({
    hterr: false,
    wterr: false,
    bmi: 0,
  });
  const [ht, bindHt] = useInput({ initialValue: 0 });
  const [wt, bindWt] = useInput();

   useEffect(() => {
      const hterr = ht < 140 || ht > 300;
      const wterr = wt < 30 || wt > 120;
      const bmi = !hterr && !wterr ? (wt * 10000) / (ht * ht) : NaN;

      setBMIState(prev => ({
        ...prev,
        hterr,
        wterr,
        bmi,
      }));
    }, [ht, wt]);

  return (
    <Box component="form">
      <h1>BMI Calculator</h1>
      <Input label="Height (cm)" binding={bindHt}></Input>
      <ErrorComp
        measure="Height"
        visibility={BMIStateObject.hterr ? "visible" : "hidden"}
      ></ErrorComp>
      <br />
      <br />
      <Input label="Weight (kg)" binding={bindWt}></Input>
      <ErrorComp
        measure="Weight"
        visibility={BMIStateObject.wterr ? "visible" : "hidden"}
      ></ErrorComp>
      <br />
      <br />
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
