import { PatternFormat } from "react-number-format"
import { cn } from "../_lib/utils";

interface PatternedInputProps {
  className?: string
  format: string
}

const PatternedInput = ({ className, format }: PatternedInputProps) => {
  return (
    < PatternFormat
      format={format}
      placeholder="Insira seu número de contato."
      className={
        cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )
      }
    />
  );
}

export default PatternedInput;