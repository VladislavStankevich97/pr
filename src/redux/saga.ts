import { call, put, takeEvery } from "redux-saga/effects";
import { setLoader, getPhoto } from "./actions/actions";
import api from "../api";
import {  DirYa, Photo } from "../api/comments/comments.types";
import {Loaders} from '../constant/constants'

// done : { par, res }

export function* getPhotoSaga({
  payload,
}: ReturnType<typeof getPhoto.started>) {
  try {
    yield put(setLoader(Loaders.fetchPhoto))
    const dir: DirYa = yield call(api.comments.getPhoto, payload);

    let namesDir = dir._embedded.items.map((item) => {
      return { type: item.type, path: item.path, name:item.name };
    });
    namesDir = namesDir.filter((item: any) => item.type === 'dir').sort((a,b)=>{
      if(a.name< b.name) {
        return -1
      }
      if(a.name> b.name) {
        return 1
      }
      return 0
    });
    type photo = Photo[]
    let files :photo[] = []
    for( const item of namesDir) {
      const dir: DirYa = yield call(api.comments.getPhotoFile,payload, item.path );
      const count = dir._embedded.total;
      const mass:any = [];
      for (let i = 0; i < count; i += 1000) {
          
        const result: DirYa  = yield call(api.comments.getPhotoFile,payload, item.path,i,1000 );
       
        mass.push(...result._embedded.items)
      }
      let names:any= mass.filter((itemPhoto:any)=> itemPhoto.type ==='file').map((item: any) => ({
          type: item.type,
          path: item.path,
          name: item.name,
          file: item.file,
        }))

      files.push(names);
    }
    yield put(getPhoto.done({params:payload, result:files}))

  } catch (error) {
  }
  finally {
    yield put(setLoader(''))
  }
}

// function* sagaItemsCategory(action) {
//   try {
//     const categories = yield call(getCategories, action.payload);

//     yield put(itemsCategory(categories.response).done);
//     console.log(categories.response);
//   } catch (e) {
//     yield put({ type: "USER_FETCH_FAILED", message: e.message });
//   }
// }

export function* watchCommentsSaga() {
  yield takeEvery(getPhoto.started, getPhotoSaga);
}
