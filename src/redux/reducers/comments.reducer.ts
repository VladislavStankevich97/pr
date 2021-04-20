import {
  getPhoto,
  setLoader,
  openModal,
  closeModal,
  setTableData,
  setTableDataFunc,
  setMap,
  setLocation,
} from "../actions/actions";
import { createReducer } from "redux-create-reducer";
import { Photo } from "../../api/comments/comments.types";
import { a } from "./moc";
type photo = Photo[];

export type CommentsTypeState = {
  loaderName: string;
  photoLink: photo[];
  globalModal?: {
    title: string;
    save: any;
    setOpen: (value: boolean) => void;
    component: JSX.Element;
  };
  tableData?: any[];
  tableDataFunc?: () => any[];
  map?: any[] | string | number;
  location?: {
    value: string[];
    type: string;
  };
};

export const initialState = {
  loaderName: "",
  photoLink: a,
};

export const commentsReducer = createReducer<CommentsTypeState, any>(
  initialState,
  {
    [setLoader.type]: (
      state: CommentsTypeState,
      action: ReturnType<typeof setLoader>
    ) => {
      return {
        ...state,
        loaderName: action.payload,
      };
    },

    [getPhoto.done.type]: (
      state: CommentsTypeState,
      action: ReturnType<typeof getPhoto.done>
    ) => {
      console.log(action.payload.result);
      return {
        ...state,
        photoLink: action.payload.result,
      };
    },
    [openModal.type]: (
      state: CommentsTypeState,
      action: ReturnType<typeof openModal>
    ) => {
      return {
        ...state,
        globalModal: action.payload,
      };
    },
    [closeModal.type]: (
      state: CommentsTypeState,
      action: ReturnType<typeof closeModal>
    ) => {
      return {
        ...state,
        globalModal: undefined,
      };
    },
    [setTableData.type]: (
      state: CommentsTypeState,
      action: ReturnType<typeof setTableData>
    ) => {
      return {
        ...state,
        tableData: action.payload,
      };
    },
    [setTableDataFunc.type]: (
      state: CommentsTypeState,
      action: ReturnType<typeof setTableDataFunc>
    ) => {
      return {
        ...state,
        tableDataFunc: action.payload,
      };
    },
    [setMap.type]: (
      state: CommentsTypeState,
      action: ReturnType<typeof setTableDataFunc>
    ) => {
      return {
        ...state,
        map: action.payload,
      };
    },

    [setLocation.type]: (
      state: CommentsTypeState,
      action: ReturnType<typeof setLocation>
    ) => {
      return {
        ...state,
        location: action.payload,
      };
    },
  }
);
