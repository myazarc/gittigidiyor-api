import { Lang } from "../_global/Utils";

interface ICategoriesRequest {
  startOffSet: number;
  /**
   * @description max 100
   */
  rowCount: number;
  withSpecs: boolean;
  withDeepest: boolean;
  withCatalog: boolean;
  lang: Lang;
}

interface IShippingTimes {
  shippingTime: string[];
}

interface IAttributes {
  type: string;
  /**
   * @description return 'false' or 'true'
   */
  required: string;
  name: string;
}

interface IValue extends Array<string> {}

interface IValues {
  value: IValue[];
}

interface ISpec {
  $attributes: IAttributes;
  values: IValues;
}

interface ISpecs {
  spec: ISpec[];
}

interface ICategory {
  categoryCode: string;
  categoryName: string;
  shippingTimes: IShippingTimes;
  specs?: ISpecs;
}

interface ICategories {
  category: ICategory[];
}

interface ICategoriesReturn {
  ackCode: string;
  responseTime: string;
  timeElapsed: string;
  categoryCount: number;
  categories: ICategories;
}

interface ICategoriesResponse {
  return: ICategoriesReturn;
}

export { ICategoriesRequest, ICategoriesResponse };
