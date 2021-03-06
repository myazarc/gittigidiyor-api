import Service from "../_global/Service";
import { Md5 } from "ts-md5/dist/md5";
import {
  IFinishEarlyRequest,
  IFinishEarlyResponse,
  IGetProductsRequest,
  IGetProductsResponse,
  IGetStockAndPriceRequest,
  IGetStockAndPriceResponse,
  IInsertAndActivateProductRequest,
  IInsertAndActivateProductResponse,
  IRelistProductRequest,
  IRelistProductResponse,
  IUpdatePriceRequest,
  IUpdatePriceResponse,
  IUpdateStockAndActivateProductRequest,
  IUpdateStockAndActivateProductResponse,
  IUpdateStockRequest,
  IUpdateStockResponse,
} from "./IProductService";

export default class ProductService extends Service {
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

  public insertAndActivateProduct(payload: IInsertAndActivateProductRequest): Promise<[IInsertAndActivateProductResponse, string | null, string | null, string | null, string | null | undefined]> {
    payload.apiKey = this.apiKey;
    const { time, sign } = this.getTimeWithSign();
    payload.time = time;
    payload.sign = sign;
    return this._.insertAndActivateProductAsync(payload);
  }

  public updatePrice(payload: IUpdatePriceRequest): Promise<[IUpdatePriceResponse, string | null, string | null, string | null, string | null | undefined]> {
    payload.apiKey = this.apiKey;
    const { time, sign } = this.getTimeWithSign();
    payload.time = time;
    payload.sign = sign;
    return this._.updatePriceAsync(payload);
  }

  public updateStock(payload: IUpdateStockRequest): Promise<[IUpdateStockResponse, string | null, string | null, string | null, string | null | undefined]> {
    payload.apiKey = this.apiKey;
    const { time, sign } = this.getTimeWithSign();
    payload.time = time;
    payload.sign = sign;
    return this._.updateStockAsync(payload);
  }

  public updateStockAndActivateProduct(
    payload: IUpdateStockAndActivateProductRequest
  ): Promise<[IUpdateStockAndActivateProductResponse, string | null, string | null, string | null, string | null | undefined]> {
    payload.apiKey = this.apiKey;
    const { time, sign } = this.getTimeWithSign();
    payload.time = time;
    payload.sign = sign;
    return this._.updateStockAndActivateProductAsync(payload);
  }

  public getStockAndPrice(payload: IGetStockAndPriceRequest): Promise<[IGetStockAndPriceResponse, string | null, string | null, string | null, string | null | undefined]> {
    payload.apiKey = this.apiKey;
    const { time, sign } = this.getTimeWithSign();
    payload.time = time;
    payload.sign = sign;
    return this._.getStockAndPriceAsync(payload);
  }

  public getProducts(payload: IGetProductsRequest): Promise<[IGetProductsResponse, string | null, string | null, string | null, string | null | undefined]> {
    payload.apiKey = this.apiKey;
    const { time, sign } = this.getTimeWithSign();
    payload.time = time;
    payload.sign = sign;
    return this._.getProductsAsync(payload);
  }

  public finishEarly(payload: IFinishEarlyRequest): Promise<[IFinishEarlyResponse, string | null, string | null, string | null, string | null | undefined]> {
    payload.apiKey = this.apiKey;
    const { time, sign } = this.getTimeWithSign();
    payload.time = time;
    payload.sign = sign;
    return this._.finishEarlyAsync(payload);
  }

  public relistProducts(payload: IRelistProductRequest): Promise<[IRelistProductResponse, string | null, string | null, string | null, string | null | undefined]> {
    payload.apiKey = this.apiKey;
    const { time, sign } = this.getTimeWithSign();
    payload.time = time;
    payload.sign = sign;
    return this._.relistProductsAsync(payload);
  }
}
