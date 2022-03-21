import { createClientAsync, Client } from "soap";

export default class ApplicationService {
  public END_POINT =
    "https://dev.gittigidiyor.com:8443/listingapi/ws/ApplicationService?wsdl";

  /**
   * @type Client
   */
  private _: Client;

  async connect(): Promise<Client> {
    this._ = await createClientAsync(this.END_POINT);
    return this._;
  }

  createApplication() {
    return this._.createApplicationAsync();
  }

  debug() {
    console.log(this._);
  }
}
