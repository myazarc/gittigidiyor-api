import Service from "../_global/Service";
import { ICategoriesRequest, ICategoriesResponse } from "./ICategoryService";

export default class CategoryService extends Service {
  public END_POINT = "https://dev.gittigidiyor.com:8443/listingapi/ws/CategoryService?wsdl";

  getCategories(payload: ICategoriesRequest): Promise<[ICategoriesResponse, string | null, string | null, string | null, string | null | undefined]> {
    return this._.getCategoriesAsync(payload);
  }
}
