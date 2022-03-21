import Service from "../_global/Service";
import { Md5 } from "ts-md5/dist/md5";
import { IInsertAndActivateProductRequest, IInsertAndActivateProductResponse } from "./IProductService";

export default class CategoryV2Service extends Service {
  public END_POINT = "https://dev.gittigidiyor.com:8443/listingapi/ws/IndividualProductService?wsdl";

  constructor(nick: string, password: string, public apiKey: string, public apiSecret: string) {
    super(nick, password);
  }

  private getTimeWithSign() {
    const time = Date.now();
    const signText = this.apiKey.toString() + this.apiSecret.toString() + time.toString();
    const sign = Md5.hashStr(signText);
    return { time, sign };
  }

  insertAndActivateProduct(payload: any): Promise<[IInsertAndActivateProductResponse, string | null, string | null, string | null, string | null | undefined]> {
    payload.apiKey = this.apiKey;
    const { time, sign } = this.getTimeWithSign();
    payload.time = time;
    payload.sign = sign;
    return this._.insertAndActivateProductAsync(payload);
  }
}
