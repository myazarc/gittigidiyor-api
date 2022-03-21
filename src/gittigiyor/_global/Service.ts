import { Client, createClientAsync } from "soap";
import { Lang } from "./Utils";

export default class Service {
  public END_POINT = "";
  /**
   * @type Client
   */
  public _: Client;

  private nick: string;
  private password: string;
  public lang: Lang = Lang.TR;

  constructor(nick: string, password: string) {
    this.nick = nick;
    this.password = password;
  }

  setEndPoint(end_point: string) {
    this.END_POINT = end_point;
  }

  async connect(): Promise<Client> {
    const auth = "Basic " + Buffer.from(this.nick + ":" + this.password).toString("base64");
    this._ = await createClientAsync(this.END_POINT, {
      attributesKey: "$attributes",
      wsdl_options: {
        timeout: 50000,
        strictSSL: false,
      },
      wsdl_headers: {
        Authorization: auth,
      },
    });
    this._.addHttpHeader("Authorization", auth);
    return this._;
  }
}
