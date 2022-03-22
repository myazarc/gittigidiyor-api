import Service from "../_global/Service";
import { ICategoriesRequest, ICategoriesResponse, IGetParentCategoriesRequest, IGetParentCategoriesResponse, IGetSubCategoriesRequest, IGetSubCategoriesResponse } from "./ICategoryService";

export default class CategoryService extends Service {
  public END_POINT = "https://dev.gittigidiyor.com:8443/listingapi/ws/CategoryService?wsdl";

  getCategories(payload: ICategoriesRequest): Promise<[ICategoriesResponse, string | null, string | null, string | null, string | null | undefined]> {
    return this._.getCategoriesAsync(payload);
  }

  getParentCategories(payload: IGetParentCategoriesRequest): Promise<[IGetParentCategoriesResponse, string | null, string | null, string | null, string | null | undefined]> {
    return this._.getParentCategoriesAsync(payload);
  }

  getSubCategories(payload: IGetSubCategoriesRequest): Promise<[IGetSubCategoriesResponse, string | null, string | null, string | null, string | null | undefined]> {
    return this._.getSubCategoriesAsync(payload);
  }

  getCategorySpecs(payload: IGetSubCategoriesRequest): Promise<[IGetSubCategoriesResponse, string | null, string | null, string | null, string | null | undefined]> {
    return this._.getCategorySpecsAsync(payload);
  }
}
