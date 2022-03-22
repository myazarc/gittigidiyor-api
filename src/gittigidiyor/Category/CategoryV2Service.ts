import Service from "../_global/Service";
import { IRequiredCategorySpecsRequest, IRequiredCategorySpecsResponse } from "./ICategoryV2Service";

export default class CategoryV2Service extends Service {
  public END_POINT = "https://dev.gittigidiyor.com:8443/listingapi/ws/CategoryV2Service?wsdl";

  getRequiredCategorySpecs(payload: IRequiredCategorySpecsRequest): Promise<[IRequiredCategorySpecsResponse, string | null, string | null, string | null, string | null | undefined]> {
    return this._.getRequiredCategorySpecsAsync(payload);
  }
}
