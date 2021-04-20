import actionCreatorFactory from "typescript-fsa";
import {Photo} from '../../api/comments/comments.types'

const actionCreator = actionCreatorFactory();

// первый в сагу, второй в редьюсер
type photo = Photo[];

export const getPhoto = actionCreator.async<string, photo[]>("GET_PHOTO");

export const setLoader = actionCreator<string>("SET_LOADER");

export const openModal = actionCreator<any>("OPEN_MODAL");

export const closeModal = actionCreator<null>("CLOSE_MODAL");

export const setTableData = actionCreator<any[]>("SET_TABLE_DATA");

export const setTableDataFunc = actionCreator<any>("SET_TABLE_DATA_FUNC");

export const setMap = actionCreator<string|any[]>("SET_MAP");

export const fetchCategory = actionCreator.async<string, photo[]>("FETCH_CATEGORY");

export const setLocation = actionCreator<any>("SET_LOCATION");
