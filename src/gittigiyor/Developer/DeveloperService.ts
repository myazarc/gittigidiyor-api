import Service from "../_global/Service";
import {
  IIsDeveloperRequest,
  IIsDeveloperResponse,
  IRegisterDeveloperRequest,
} from "./IRegisterDeveloper";

export default class DeveloperService extends Service {
  public END_POINT =
    "https://dev.gittigidiyor.com:8443/listingapi/ws/DeveloperService?wsdl";

  registerDeveloper(payload: IRegisterDeveloperRequest): Promise<any> {
    return this._.registerDeveloperAsync(payload);
  }

  isDeveloper(
    payload: IIsDeveloperRequest
  ): Promise<
    [
      IIsDeveloperResponse,
      string | null,
      string | null,
      string | null,
      string | null | undefined
    ]
  > {
    return this._.isDeveloperAsync(payload);
  }
}
