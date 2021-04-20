import CommentsServiceFactory from "./comments.api";
import axios from "axios";
import {getCookie} from '../../helpers/cookies'
type apiCommentsParams = {
  HTTPBaseURL: string;
};

export const ApiComments = ({ HTTPBaseURL }: apiCommentsParams) => {
  const HTTP = axios.create({
    baseURL: HTTPBaseURL,
    headers: { authorization: getCookie("authorization") },
  });
  return {
    comments: CommentsServiceFactory({
      HTTPBaseURL: HTTP,
    }),
  };
};
