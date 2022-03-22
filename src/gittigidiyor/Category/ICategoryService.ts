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

interface ICategoryAttributes {
  hasCatalog: boolean;
  deepest: boolean;
}

interface ICategory {
  categoryCode: string;
  categoryName: string;
  shippingTimes: IShippingTimes;
  specs?: ISpecs;
  $attributes?: ICategoryAttributes;
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

/** */
interface IGetParentCategoriesRequest {
  withSpecs: boolean;
  withDeepest: boolean;
  withCatalog: boolean;
  lang: Lang;
}

interface IGetParentCategoriesResponse extends ICategoriesResponse {}
/** */

interface IGetSubCategoriesRequest {
  categoryCode: string;
  withSpecs: boolean;
  withDeepest: boolean;
  withCatalog: boolean;
  lang: Lang;
}

interface IGetSubCategoriesResponse extends ICategoriesResponse {}

/** */

interface IGetCategorySpecsRequest {
  categoryCode: string;
  lang: Lang;
}

interface IGetCategorySpecsReturn {
  ackCode: string;
  responseTime: string;
  timeElapsed: string;
  specs: ISpecs;
}

interface IGetCategorySpecsResponse {
  return: IGetCategorySpecsReturn;
}

export {
  IGetParentCategoriesRequest,
  ICategoriesRequest,
  ICategoriesResponse,
  IGetParentCategoriesResponse,
  IGetSubCategoriesRequest,
  IGetSubCategoriesResponse,
  IGetCategorySpecsRequest,
  IGetCategorySpecsResponse,
};
