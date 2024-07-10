import { ProgressStepper, ProgressStep } from "@patternfly/react-core";
import { useNavigate, useLocation } from "react-router-dom";
import "./ProgressBar.scss";

const steps = [
  { path: "/cart", label: "Cart" },
  { path: "/address", label: "Address" },
  { path: "/personalize-your-cake", label: "Personalize" },
  { path: "/payment", label: "Payment" },
];

const getStepVariant = (stepPath, currentPath) => {
  const stepIndex = steps.findIndex((step) => step.path === stepPath);
  const currentIndex = steps.findIndex((step) => step.path === currentPath);

  if (currentIndex > stepIndex) {
    return "success";
  } else if (currentIndex === stepIndex) {
    return "info";
  } else {
    return "pending";
  }
};

function ProgressBar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleStepClick = (step) => {
    navigate(step);
  };

  return (
    <div className="progress-bar-container">
      <ProgressStepper
        aria-label="Progress stepper with custom icons"
        className="custom-progress-stepper"
      >
        {steps.map((step) => (
          <ProgressStep
            key={step.path}
            variant={getStepVariant(step.path, location.pathname)}
            id={`custom-step-${step.path}`}
            titleId={`custom-step-${step.path}-title`}
            aria-label={`${step.label} step`}
            onClick={() => handleStepClick(step.path)}
          >
            {step.label}
          </ProgressStep>
        ))}
      </ProgressStepper>
    </div>
  );
}

export default ProgressBar;
