import React, { useEffect, useState } from "react";

import { Dispatch } from "redux";
import Locale from "../../../shared/Locale/Locale";
import { Grid } from "@material-ui/core";
import { connect } from "react-redux";
import { compose } from "recompose";
import { reduxForm, Field, getFormValues } from "redux-form";
import CircularProgress from "@material-ui/core/CircularProgress";
import { getPhoto, setTableDataFunc } from "../../../redux/actions/actions";
import { Form, Loaders } from "../../../constant/constants";
import { RootState } from "../../../redux/reducers/rootReducer";
import { Photo } from "../../../api/comments/comments.types";
import { createData } from "./logic";
import { closeModal, openModal } from "../../../redux/actions/actions";
import Table from "../../../shared/Table/Table";
import TemplateCreationMProps from "../../../shared/TemplateCreation/TemplateCreation"
import Tooltip from "@material-ui/core/Tooltip";


interface WomensShoesProps { }
type Photos = Photo[];
interface WomensShoesPrivateProps extends WomensShoesProps {
  formValues: any;
  getPhotos: (value: string) => () => void;
  isLoader: boolean;
  photoList: Photos[];
  setTableDatas: (value: any) => void;
  openModal: (
    title: string,
    save: any,
    setOpen: (value: boolean) => void,
    component: any,
    tableDataFunc: any[],
  ) => void;
  closeTable: () => void;
  tableDataFunc: any[] | undefined
}

const WomensShoes: React.FC<WomensShoesPrivateProps> = ({
  formValues,
  getPhotos,
  isLoader,
  photoList,
  setTableDatas,
  openModal,
  closeTable,
}) => {
  const seeTable = () => {
    const data = photoList && formValues && createData(photoList, formValues)();
    openModal('Просмотр', undefined, closeTable, Table, data || [])
  }
  const [open, setOpen] = React.useState(false);
  const [openTemplateCreation, setOpenTemplateCreation] = useState(false);

  const formValuesArrayValues = formValues && Object.values(formValues)
  console.log(formValues)
  const buttonActive = formValuesArrayValues && formValuesArrayValues.every((el: any) => el);
  const description = formValues && formValues.Description

  return (
    <>
      <div
        className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0"
        style={{ margin: 0, boxShadow: "none" }}
      >
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase"></h6>
          <div className="flex flex-wrap">
            <div className="w-full lg:w-12/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  <div style={{ display: "flex" }}>
                    <Tooltip title="Поле обазятальное для заполнения">
                      <span style={{ cursor: "pointer", color: "red", fontSize: "1.5em" }}>!</span></Tooltip>
                    <p style={{ marginTop: "3px" }}> &nbsp; заголовок</p>
                  </div>
                </label>
                <Field
                  component="input"
                  name="Title"
                  type="text"
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                />
              </div>
            </div>
            <div className="w-full lg:w-12/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                <div style={{ display: "flex" }}>
                  <Tooltip title="Поле обазятальное для заполнения">
                    <span style={{ cursor: "pointer", color: "red", fontSize: "1.5em" }}>!</span></Tooltip>
                  <p style={{ marginTop: "3px" }}> &nbsp; описание</p>
                </div>
                </label>
                <Field
                  component="textarea"
                  name="Description"
                  type="text"
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  rows={4}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                <div style={{ display: "flex" }}>
                  <Tooltip title="Поле обазятальное для заполнения">
                    <span style={{ cursor: "pointer", color: "red", fontSize: "1.5em" }}>!</span></Tooltip>
                  <p style={{ marginTop: "3px" }}> &nbsp; размер</p>
                </div>
                </label>
                <Field
                  component="input"
                  type="text"
                  name="Size"
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                />
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                <div style={{ display: "flex" }}>
                  <Tooltip title="Поле обазятальное для заполнения">
                    <span style={{ cursor: "pointer", color: "red", fontSize: "1.5em" }}>!</span></Tooltip>
                  <p style={{ marginTop: "3px" }}> &nbsp; выберите состояние товара</p>
                </div>
                </label>

                <Field
                  component="select"
                  name="Condition"
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                >
                  <option key={0} value={"Новое"}>
                    Новое
                  </option>
                  <option key={1} value={"Б/у"}>
                    Б/у
                  </option>
                </Field>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                <div style={{ display: "flex" }}>
                  <Tooltip title="Поле обазятальное для заполнения">
                    <span style={{ cursor: "pointer", color: "red", fontSize: "1.5em" }}>!</span></Tooltip>
                  <p style={{ marginTop: "3px" }}> &nbsp; вид объявления</p>
                </div>
                </label>
                <Field
                  component={"select"}
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  name="AdType"
                >
                  <option key={0} value="Товар приобретен на продажу">
                    Товар приобретен на продажу
                  </option>
                  <option key={1} value="Товар от производителя">
                    Товар от производителя
                  </option>
                </Field>
              </div>
            </div>
          </div>

          <hr className="mt-6 border-b-1 border-blueGray-300" />
          <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase"></h6>
          <div className="flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                <div style={{ display: "flex" }}>
                  <Tooltip title="Поле обазятальное для заполнения">
                    <span style={{ cursor: "pointer", color: "red", fontSize: "1.5em" }}>!</span></Tooltip>
                  <p style={{ marginTop: "3px" }}> &nbsp; продвижение</p>
                </div>
                </label>
                <Field
                  component={"select"}
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  name="AdStatus"
                >
                  <option key={0} value="Free">
                    Free
                  </option>
                  <option key={1} value="Highlight">
                    Highlight
                  </option>
                  <option key={2} value="XL">
                    XL
                  </option>
                  <option key={3} value="x2_1">
                    x2_1
                  </option>
                  <option key={4} value="x2_7">
                    x2_7
                  </option>
                  <option key={5} value="x5_1">
                    x5_1
                  </option>
                  <option key={6} value="x5_7">
                    x5_7
                  </option>
                  <option key={7} value="x10_1">
                    x10_1
                  </option>
                  <option key={8} value="x10_7">
                    x10_7
                  </option>
                </Field>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                <div style={{ display: "flex" }}>
                  <Tooltip title="Поле обазятальное для заполнения">
                    <span style={{ cursor: "pointer", color: "red", fontSize: "1.5em" }}>!</span></Tooltip>
                  <p style={{ marginTop: "3px" }}> &nbsp; размещение</p>
                </div>
                </label>

                <Field
                  component="select"
                  name="ListingFee"
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                >
                  <option key={0} value={"Package"}>
                    Package
                  </option>
                  <option key={1} value={"PackageSingle"}>
                    PackageSingle
                  </option>
                  <option key={2} value={"Single"}>
                    Single
                  </option>
                </Field>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                <div style={{ display: "flex" }}>
                  <Tooltip title="Поле обазятальное для заполнения">
                    <span style={{ cursor: "pointer", color: "red", fontSize: "1.5em" }}>!</span></Tooltip>
                  <p style={{ marginTop: "3px" }}> &nbsp; имя менеджера</p>
                </div>
                </label>
                <Field
                  name="ManagerName"
                  component="input"
                  type="text"
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                />
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                <div style={{ display: "flex" }}>
                  <Tooltip title="Поле обазятальное для заполнения">
                    <span style={{ cursor: "pointer", color: "red", fontSize: "1.5em" }}>!</span></Tooltip>
                  <p style={{ marginTop: "3px" }}> &nbsp; телефон</p>
                </div>
                </label>
                <Field
                  name="ContactPhone"
                  component="input"
                  type="text"
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                />
              </div>
            </div>

            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                <div style={{ display: "flex" }}>
                  <Tooltip title="Поле обазятальное для заполнения">
                    <span style={{ cursor: "pointer", color: "red", fontSize: "1.5em" }}>!</span></Tooltip>
                  <p style={{ marginTop: "3px" }}> &nbsp; цена</p>
                </div>
                </label>
                <Field
                  component="input"
                  type="text"
                  name="Price"
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                />
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                <div style={{ display: "flex" }}>
                  <Tooltip title="Поле обазятальное для заполнения">
                    <span style={{ cursor: "pointer", color: "red", fontSize: "1.5em" }}>!</span></Tooltip>
                  <p style={{ marginTop: "3px" }}> &nbsp; писать по объявлению</p>
                </div>
                </label>
                <Field
                  component={"select"}
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  name="AllowEmail"
                >
                  <option key={0} value="Да">
                    Да
                  </option>
                  <option key={1} value="Нет">
                    Нет
                  </option>
                </Field>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Видео
                </label>
                <Field
                  name="VideoURL"
                  component="input"
                  type="text"
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                />
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <Grid
                container
                direction="row"
                alignItems="center"
                justify="space-between"
                spacing={1}
              >
                <Grid item xs={8}>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Фото
                    </label>

                    <Field
                      component="input"
                      type="text"
                      name="photo"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                  </div>
                </Grid>
                <Grid item xs={4}>
                  {isLoader ? (
                    <CircularProgress
                      style={{
                        margin: "10px",
                        marginTop: "29px",
                        color: "#1DA5E9",
                      }}
                    />
                  ) : (
                      <button
                        onClick={getPhotos(
                          (formValues && formValues.photo) || ""
                        )}
                        className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-base px-8 py-3 rounded-full shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        style={{
                          width: "100%",
                          marginTop: "15px",
                        }}
                      >
                        Загрузить
                      </button>
                    )}
                </Grid>
              </Grid>
            </div>
          </div>

          <hr className="mt-6 border-b-1 border-blueGray-300" />
          <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase"></h6>
          <Locale />
        </div>
        <hr className="mt-6 border-b-1 border-blueGray-300" />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          {/* <i className="fas fa-trash-alt" style={{
            fontSize: "18px",
            color: 'red',
            marginBottom: "5px",
            marginRight: "-19px"
          }}></i>
          <button
            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            style={{
              fontSize: "18px",
            }}
            type="button"
            onClick={() => setOpen(false)}
          >
            Отменить
          </button> */}
          <div style={{ cursor: "pointer" }}>
            {
              !buttonActive
                ?
                <>
                  <i
                    className="far fa-eye"
                    style={{
                      color: "gray",
                      marginBottom: "4px",
                      fontSize: "18px",
                      cursor: "default",
                    }}
                  ></i>
                  <Tooltip title="Заполните все обязательные поля">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      style={{
                        color: "gray",
                        paddingLeft: "5px",
                        fontSize: "18px",
                        cursor: "default",
                      }}
                      type="button"
                      disabled={true}
                      // title="Заполните все обязательные поля"
                      onClick={() => setOpenTemplateCreation(true)}
                    >
                      Сформировать
                    </button>
                  </Tooltip>
                </>
                :
                <>
                  <i
                    className="far fa-eye"
                    style={{
                      color: "rgb(30 166 233)",
                      marginBottom: "4px",
                      fontSize: "18px",
                    }}
                  ></i>
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    style={{
                      color: "rgb(30 166 233)",
                      paddingLeft: "5px",
                      fontSize: "18px",
                    }}
                    type="button"
                    disabled={false}
                    onClick={() => setOpenTemplateCreation(true)}
                  >
                    Сформировать
          </button>
                </>
            }
          </div>
          {openTemplateCreation && <TemplateCreationMProps description={description} photoList={photoList} openTemplateCreation={openTemplateCreation} setOpenTemplateCreation={setOpenTemplateCreation} seeTable={seeTable} />}
          <i className="fas fa-edit" style={{ color: "rgb(64 169 87)", fontSize: "18px", paddingBottom: "6px" }}></i>
          <button
            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={seeTable}
            style={{
              color: "rgb(64 169 87)",
              paddingLeft: "5px",
              marginRight: 30,
              fontSize: "18px",
            }}
          >
            Сохранить
          </button>
        </div>
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    getPhotos: (value: string) => () => dispatch(getPhoto.started(value)),
    setTableDatas: (value: any) => {
      dispatch(setTableDataFunc(value));
    },
    openModal: (
      title: string,
      save: any,
      setOpen: (value: boolean) => void,
      component: () => JSX.Element,
      tableDataFunc: any[],
    ) => {
      dispatch(openModal({ title, save, setOpen, component, tableDataFunc }));
    },
    closeTable: () => dispatch(closeModal(null)),
  };
};

const mapStateToProps = (state: RootState) => {
  return {
    formValues: getFormValues(Form.WomensShoes)(state),
    isLoader: state.commentsReducer.loaderName === Loaders.fetchPhoto,
    photoList: state.commentsReducer.photoLink,
  };
};

export default compose<WomensShoesPrivateProps, WomensShoesProps>(
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({
    form: Form.WomensShoes,
    enableReinitialize: true,
    destroyOnUnmount: true,
    initialValues: {
      photo: "https://disk.yandex.ru/d/pR99M-njH5hL5Q?w=1",
      Description: "",
      Title: "",
      Condition: "Новое",
      AdType: "Товар приобретен Formна продажу",
      ContactPhone: "",
      ManagerName: "",
      AllowEmail: "Да",
      Size: "",
      Price: "",
      AdStatus: "Free",
      ListingFee: "Package",
      Address: "Захардкодил",
    },
  })
)(WomensShoes);
