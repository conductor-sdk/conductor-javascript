import { InlineTaskDef, TaskType, InlineTaskInputParameters } from "../types";
import { InlineTaskDefGen, InlineTaskInputParametersGen } from "./types";
import { nameTaskNameGenerator } from "./common";

const defaultInputParams: InlineTaskInputParameters = {
  value: "${workflow.input.value}",
  evaluatorType: "javascript",
  expression: "true",
};

export const generateEvaluationCode = (
  inputParametersPartial: Partial<InlineTaskInputParametersGen> = {}
): InlineTaskInputParameters => {
  const inlinePartialDefJavascript = inputParametersPartial;
  const inlineExpression = inlinePartialDefJavascript?.expression;
  if (
    inlineExpression !== undefined &&
    typeof inlineExpression === "function"
  ) {
    const resultingFunction = inlineExpression();
    const resultingFunctionAsString = resultingFunction.toString();

    const toReturn: InlineTaskInputParameters = {
      evaluatorType: "javascript",
      ...(inputParametersPartial || { value: "true" }),
      expression: `(${resultingFunctionAsString})();`,
    };
    return toReturn;
  }
  return {
    value: "${workflow.input.value}",
    expression: "true",
    ...inputParametersPartial,
    evaluatorType: "javascript",
  } as InlineTaskInputParameters;
};

export const generateInlineTask = (
  override: Partial<InlineTaskDefGen> = {}
): InlineTaskDef => ({
  ...nameTaskNameGenerator("inline", override),
  ...override,
  inputParameters: generateEvaluationCode(override?.inputParameters || {}),
  type: TaskType.INLINE,
});
