export interface IApiResp<T> {
  data: T;
}
export const LOADING_MESSAGES = ['Loading', 'Getting data', 'We are about to finish this', 'Almost there', 'Just a second more'] as const;

export type LoadingMsg = (typeof LOADING_MESSAGES)[number];

export type DataState<T> =
  | { status: 'loading'; data: null; error: null; loadingMsg?: LoadingMsg }
  | { status: 'success'; data: T; error: null }
  | { status: 'error'; data: null; error: IErrResp };

export interface IErrResp {
  message: string;
  status?: number;
}
