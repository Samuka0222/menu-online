import { createContext, useState } from "react";
import IStep from "../_lib/interfaces/IStep";

interface CartStepsContext {
  steps: IStep[];
  setSteps: React.Dispatch<React.SetStateAction<IStep[]>>;
  actualStep: IStep | undefined;
  setActualStep: React.Dispatch<React.SetStateAction<IStep | undefined>>;
}

interface CartStepProvider {
  children: React.ReactNode;
}

export const CartStepContext = createContext<CartStepsContext | undefined>(undefined)
CartStepContext.displayName = "Etapas do Carrinho";

export const CartStepProvider = ({ children }: CartStepProvider) => {
  const [steps, setSteps] = useState(
    [
      {
        step: 1,
        actual: true,
        finished: false
      },
      {
        step: 2,
        actual: false,
        finished: false
      },
      {
        step: 3,
        actual: false,
        finished: false
      }
    ]
  );

  const [actualStep, setActualStep] = useState(
    steps.find(step => step.actual === true)
  )

  return (
    <CartStepContext.Provider value={{
      steps,
      setSteps,
      actualStep,
      setActualStep
    }}>
      {children}
    </CartStepContext.Provider>
  )
}