import config from './config';
import { ApiComments } from './comments/apiComents';

export default ApiComments({
  HTTPBaseURL: config.API_BASE_URL,
});
