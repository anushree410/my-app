import React from "react";

export const ResultComponent: React.FC<{ bmi: number }> = React.memo(
  // const BMIContextObj = useContext(BMIContext);

  ({ bmi }) => {
    console.log("result rendered");
    if (isNaN(bmi)) {
      return <div></div>;
    } else if (bmi < 18.5) {
      return (
        <div>
          You are underweight. Here are some tips to gain weight:
          <br />
          <a href="https://www.medicalnewstoday.com/articles/321982">
            https://www.medicalnewstoday.com/articles/321982
          </a>
          <br />
          <a href="https://www.mayoclinic.org/healthy-lifestyle/nutrition-and-healthy-eating/expert-answers/underweight/faq-20058429">
            https://www.mayoclinic.org/healthy-lifestyle/nutrition-and-healthy-eating/expert-answers/underweight/faq-20058429
          </a>
        </div>
      );
    } else if (bmi < 24.9) {
      return <div>You are healthy.</div>;
    } else if (bmi < 29.9) {
      return (
        <div>
          You are overweight. Here are some articles on weight loss:
          <br />
          <a href="https://www.everydayhealth.com/diet-and-nutrition/diet/tips-weight-loss-actually-work/">
            https://www.everydayhealth.com/diet-and-nutrition/diet/tips-weight-loss-actually-work/
          </a>
          <br />
          <a href="https://www.nhs.uk/live-well/healthy-weight/managing-your-weight/tips-to-help-you-lose-weight/">
            https://www.nhs.uk/live-well/healthy-weight/managing-your-weight/tips-to-help-you-lose-weight/
          </a>
        </div>
      );
    } else {
      return (
        <div>
          You are obese. Here are some tips for weight loss.
          <br />
          <a href="https://www.everydayhealth.com/diet-and-nutrition/diet/tips-weight-loss-actually-work/">
            https://www.everydayhealth.com/diet-and-nutrition/diet/tips-weight-loss-actually-work/
          </a>
          <br />
          <a href="https://www.nhs.uk/live-well/healthy-weight/managing-your-weight/tips-to-help-you-lose-weight/">
            https://www.nhs.uk/live-well/healthy-weight/managing-your-weight/tips-to-help-you-lose-weight/
          </a>
        </div>
      );
    }
  }
);
//   [bmi]
// );
