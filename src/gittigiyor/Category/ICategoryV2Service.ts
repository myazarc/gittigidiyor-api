import { Lang } from "../_global/Utils";
interface IRequiredCategorySpecsRequest {
  categoryCode: string;
  lang: Lang;
}

interface I$Attributes {
  name: string;
}

interface ISpec {
  $attributes: I$Attributes;
}

interface IRequiredSpecs {
  spec: ISpec[];
}

interface IRequiredCategorySpecs {
  ackCode: string;
  responseTime: string;
  timeElapsed: string;
  count: number;
  catalogRequired: string;
  requiredSpecs: IRequiredSpecs;
}

interface IRequiredCategorySpecsResponse {
  return: IRequiredCategorySpecs;
}

export { IRequiredCategorySpecsRequest, IRequiredCategorySpecsResponse };
