import Service from "../_global/Service";
import { Md5 } from "ts-md5/dist/md5";
import { IGetPagedSalesRequest, IGetPagedSalesResponse } from "./IOrderService";

export default class OrderService extends Service {
  public END_POINT = "https://dev.gittigidiyor.com:8443/listingapi/ws/IndividualSaleService?wsdl";

  constructor(nick: string, password: string, public apiKey: string, public apiSecret: string) {
    super(nick, password);
  }

  private getTimeWithSign() {
    const time = Date.now();
    const signText = this.apiKey.toString() + this.apiSecret.toString() + time.toString();
    const sign = Md5.hashStr(signText);
    return { time, sign };
  }

  public getPagedSales(payload: IGetPagedSalesRequest): Promise<[IGetPagedSalesResponse, string | null, string | null, string | null, string | null | undefined]> {
    payload.apiKey = this.apiKey;
    const { time, sign } = this.getTimeWithSign();
    payload.time = time;
    payload.sign = sign;
    return this._.getPagedSalesAsync(payload);
  }
}
