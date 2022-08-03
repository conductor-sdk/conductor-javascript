import {
  InlineTaskDef,
  TaskType,
  InlineEvaluatorType,
  InlineInputParametersValueParam,
  InlineInputParametersJavascript,
} from "../types";
import { nameTaskNameGenerator } from "./common";

const defaultInputParams: InlineInputParametersValueParam = {
  value: "${workflow.input.value}",
  evaluatorType: InlineEvaluatorType.VALUE_PARAM,
  expression: "true",
};

export const generateEvaluationCode = (
  inputParametersPartial:
    | Partial<InlineInputParametersJavascript>
    | Partial<InlineInputParametersValueParam> = {}
): InlineInputParametersJavascript | InlineInputParametersValueParam => {
  if (
    inputParametersPartial?.evaluatorType === InlineEvaluatorType.JAVASCRIPT
  ) {
    const inlinePartialDefJavascript =
      inputParametersPartial as InlineInputParametersJavascript;
    const inlineExpression = inlinePartialDefJavascript?.expression;
    if (
      inlineExpression !== undefined &&
      typeof inlineExpression === "function"
    ) {
      const resultingFunction = inlineExpression();
      const resultingFunctionAsString = resultingFunction.toString();

      const toReturn = {
        evaluatorType: InlineEvaluatorType.JAVASCRIPT,
        ...(inputParametersPartial as Partial<InlineInputParametersJavascript>),
        expression: `(${resultingFunctionAsString})();`,
      };
      return toReturn;
    } else {
      return {
        value: "${workflow.input.value}",
        expression: "true",
        ...(inputParametersPartial as Partial<InlineInputParametersJavascript>),
        evaluatorType: InlineEvaluatorType.JAVASCRIPT,
      } as InlineInputParametersJavascript;
    }
  }

  return {
    ...defaultInputParams,
    ...(inputParametersPartial as InlineInputParametersValueParam),
  };
};

export const generateInlineTask = (
  override: Partial<InlineTaskDef> = {}
): InlineTaskDef => ({
  ...nameTaskNameGenerator("inline", override),
  type: TaskType.INLINE,
  ...override,
  inputParameters: generateEvaluationCode(override?.inputParameters || {}),
});
