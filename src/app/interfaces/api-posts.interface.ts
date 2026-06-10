export interface IPost {
  id: number;
  title: string;
  content: string;
  author: string;
  created_at: string;
  updated_at: string;
  wasRemoved?: boolean;
}

export interface IPostData {
  success: boolean;
  total: number;
  data: IPost[];
}

export interface IPostItem {
  success: boolean;
  total: number;
  data: IPost;
}
export interface IPostErrResp {
  success: boolean;
  message: string;
}

export type IPostResBody = Omit<IPostItem, 'total'>;

export type IBodyPost = Omit<IPost, 'id' | 'created_at' | 'updated_at'>;

export type IPostDelete = IPostErrResp | Pick<IPostItem, 'data'>;
