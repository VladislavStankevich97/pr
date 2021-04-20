import { AxiosInstance } from "axios";
import { Comment, DirYa } from "./comments.types";
import {url} from '../../constant/constants'
interface Props {
  HTTPBaseURL: AxiosInstance;
}

const CommentsServiceFactory = ({ HTTPBaseURL }: Props) => {
  return {
    getComments: (): Promise<Comment[]> => {
      return HTTPBaseURL.get(`comments`).then((res: any) => res.data);
    },
    getPhoto: (path: string): Promise<DirYa> => {
      return HTTPBaseURL.get(`/resources?public_key=${path}`).then(
        (res) => res.data
      );
    },
    getPhotoFile: (
      url: string,
      dir: string,
      offset?: number,
      limit?: number
    ): Promise<any> => {
      return HTTPBaseURL.get(
        `/resources?public_key=${url}&path=${dir}${
          offset || offset === 0 ? `&offset=${offset}` : ""
        }${limit || limit ? `&limit=${limit}` : ""}`
      ).then((res) => res.data);
    },
    getCategories: (id:string): Promise<any> => {
      return HTTPBaseURL.get(
        `${url}/getCategoriesById?id=${id}`,   {
              
            },
      ).then((res) => res.data);
      // let response = await fetch(`${url}/getCategoriesById?id=${id}`, {
      //   headers: {
      //     authorization: getCookie("authorization"),
      //   },
      // });
      // const result = await response.json();
      // return result;
    },
  };
};

export default CommentsServiceFactory;
