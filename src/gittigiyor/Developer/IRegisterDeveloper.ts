import { Lang } from "../_global/Utils";

interface IRegisterDeveloperRequest {
  nick: string;
  password: string;
  lang: Lang;
}

interface IIsDeveloperRequest {
  nick: string;
  password: string;
  lang: Lang;
}

interface IIsDeveloperReturnResponse {
  ackCode: string;
  responseTime: string;
  timeElapsed: string;
  developerId: string;
  nick: string;
  registerDate: string;
}

interface IIsDeveloperResponse {
  return: IIsDeveloperReturnResponse;
}

export { IRegisterDeveloperRequest, IIsDeveloperRequest, IIsDeveloperResponse };
