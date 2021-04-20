import { combineReducers } from "redux";
import { commentsReducer, CommentsTypeState } from "./comments.reducer";
import { reducer as formReducer } from "redux-form";
export interface RootState  {
    commentsReducer: CommentsTypeState ;
    form : ReturnType<typeof formReducer>;
  }

const rootReducer = combineReducers<RootState>({
    commentsReducer,
    form: formReducer,
});

export default rootReducer;

