import { CartStepContext } from "@/app/_providers/cart-steps-provider";
import IStep from "../interfaces/IStep";
import { useContext } from "react";

export default function useEtapaContext() {
  const context = useContext(CartStepContext);

  if (!context) {
    throw new Error('Contexto não foi encontrado.');
  }

  const {
    steps,
    actualStep,
    setActualStep,
    setSteps
  } = context

  function finishStep(index: number) {
    const updatedSteps = steps.map((item, i) => ({
      ...item,
      concluido: i === index ? true : item.finished,
      atual: i === index ? false : item.actual
    }));

    setSteps(() => updatedSteps);
    changeActualStep(index + 1, updatedSteps);
  }

  function changeActualStep(index: number, arrayAtualizado: IStep[]) {
    const updatedSteps = arrayAtualizado.map((item, i) => ({
      ...item,
      atual: i === index
    }));

    setSteps(() => updatedSteps);
    setActualStep(updatedSteps[index])
  }

  function previousStep(index: number) {
    const updatedSteps = steps.map((item, i) => ({
      ...item,
      concluido: i === index ? true : item.finished,
      atual: i === index ? false : item.actual
    }));

    setSteps(() => updatedSteps);
    changeActualStep(index, updatedSteps);
  }

  return {
    steps,
    actualStep,
    finishStep,
    changeActualStep,
    previousStep
  }
}