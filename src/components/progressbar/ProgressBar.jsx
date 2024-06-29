import React from "react";
import { ProgressStepper, ProgressStep } from "@patternfly/react-core";
import "./ProgressBar.scss";

function ProgressBar() {
  return (
    <div className="progress-bar-container">
      <ProgressStepper aria-label="Progress stepper with custom icons" className="custom-progress-stepper">
        <ProgressStep
          id="custom-step"
          titleId="custom-step1-title"
          aria-label="completed step, step with success"
        >
          Cart
        </ProgressStep>
        <ProgressStep
          variant="pending"
          id="custom-step2"
          titleId="custom-step2-title"
          aria-label="pending step"
        >
          Address
        </ProgressStep>
        <ProgressStep
          variant="pending"
          id="custom-step3"
          titleId="custom-step3-title"
          aria-label="pending step"
        >
          Personalize
        </ProgressStep>
        <ProgressStep
          variant="pending"
          id="custom-step3"
          titleId="custom-step3-title"
          aria-label="pending step"
        >
          Payment
        </ProgressStep>
      </ProgressStepper>
    </div>
  );
}

export default ProgressBar;
