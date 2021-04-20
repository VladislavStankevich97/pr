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
import { Container, Main, H6, Block, Input, BlockSelect, BlockLabel, Img, Button } from './style'

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
      <Container
        style={{}}
      >
        <Main >
          <H6></H6>
          <div className="flex flex-wrap">
            <Block>
              <Input>
                <BlockLabel
                  htmlFor="grid-password"
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <p>заголовок &nbsp;</p>
                    <Tooltip style={{ color: "red" }} title="Поле обазятальное для заполнения">
                      <Img src="/img/info.svg" alt="no picture" />
                    </Tooltip>
                  </div>
                </BlockLabel>
                <Field
                  component="input"
                  name="Title"
                  type="text"
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                />
              </Input>
            </Block>
            <Block>
              <Input>
                <BlockLabel
                  htmlFor="grid-password"
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <p>описание &nbsp;</p>
                    <Tooltip style={{ color: "red" }} title="Поле обазятальное для заполнения">
                      <Img src="/img/info.svg" alt="no picture" />
                    </Tooltip>
                  </div>
                </BlockLabel>
                <Field
                  component="textarea"
                  name="Description"
                  type="text"
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  rows={4}
                />
              </Input>
            </Block>
          </div>
          <div className="flex flex-wrap">
            <BlockSelect>
              <Input>
                <BlockLabel
                  htmlFor="grid-password"
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <p>размер &nbsp;</p>
                    <Tooltip style={{ color: "red" }} title="Поле обазятальное для заполнения">
                      <Img src="/img/info.svg" alt="no picture" />
                    </Tooltip>
                  </div>
                </BlockLabel>
                <Field
                  component="input"
                  type="text"
                  name="Size"
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                />
              </Input>
            </BlockSelect>
            <BlockSelect>
              <Input>
                <BlockLabel
                  htmlFor="grid-password"
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <p>выберите состояние товара &nbsp;</p>
                    <Tooltip style={{ color: "red" }} title="Поле обазятальное для заполнения">
                      <Img src="/img/info.svg" alt="no picture" />
                    </Tooltip>
                  </div>
                </BlockLabel>

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
              </Input>
            </BlockSelect>
            <BlockSelect>
              <Input>
                <BlockLabel
                  htmlFor="grid-password"
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <p>вид объявления &nbsp;</p>
                    <Tooltip style={{ color: "red" }} title="Поле обазятальное для заполнения">
                      <Img src="/img/info.svg" alt="no picture" />
                    </Tooltip>
                  </div>
                </BlockLabel>
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
              </Input>
            </BlockSelect>
          </div>

          <hr className="mt-6 border-b-1 border-blueGray-300" />
          <H6></H6>
          <div className="flex flex-wrap">
            <BlockSelect>
              <Input>
                <BlockLabel
                  htmlFor="grid-password"
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <p>продвижение &nbsp;</p>
                    <Tooltip style={{ color: "red" }} title="Поле обазятальное для заполнения">
                      <Img src="/img/info.svg" alt="no picture" />
                    </Tooltip>
                  </div>
                </BlockLabel>
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
              </Input>
            </BlockSelect>
            <BlockSelect>
              <Input>
                <BlockLabel
                  htmlFor="grid-password"
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <p>размещение &nbsp;</p>
                    <Tooltip style={{ color: "red" }} title="Поле обазятальное для заполнения">
                      <Img src="/img/info.svg" alt="no picture" />
                    </Tooltip>
                  </div>
                </BlockLabel>

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
              </Input>
            </BlockSelect>
            <BlockSelect>
              <Input>
                <BlockLabel
                  htmlFor="grid-password"
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <p>имя енеджера &nbsp;</p>
                    <Tooltip style={{ color: "red" }} title="Поле обазятальное для заполнения">
                      <Img src="/img/info.svg" alt="no picture" />
                    </Tooltip>
                  </div>
                </BlockLabel>
                <Field
                  name="ManagerName"
                  component="input"
                  type="text"
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                />
              </Input>
            </BlockSelect>
            <BlockSelect>
              <Input>
                <BlockLabel
                  htmlFor="grid-password"
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <p>телефон &nbsp;</p>
                    <Tooltip style={{ color: "red" }} title="Поле обазятальное для заполнения">
                      <Img src="/img/info.svg" alt="no picture" />
                    </Tooltip>
                  </div>
                </BlockLabel>
                <Field
                  name="ContactPhone"
                  component="input"
                  type="text"
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                />
              </Input>
            </BlockSelect>

            <BlockSelect>
              <Input>
                <BlockLabel
                  htmlFor="grid-password"
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <p>цена &nbsp;</p>
                    <Tooltip style={{ color: "red" }} title="Поле обазятальное для заполнения">
                      <Img src="/img/info.svg" alt="no picture" />
                    </Tooltip>
                  </div>
                </BlockLabel>
                <Field
                  component="input"
                  type="text"
                  name="Price"
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                />
              </Input>
            </BlockSelect>
            <BlockSelect>
              <Input>
                <BlockLabel
                  htmlFor="grid-password"
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <p>писать по объявлению &nbsp;</p>
                    <Tooltip style={{ color: "red" }} title="Поле обазятальное для заполнения">
                      <Img src="/img/info.svg" alt="no picture" />
                    </Tooltip>
                  </div>
                </BlockLabel>
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
              </Input>
            </BlockSelect>
            <BlockSelect>
              <Input>
                <BlockLabel
                  htmlFor="grid-password"
                >
                  видео
                </BlockLabel>
                <Field
                  name="VideoURL"
                  component="input"
                  type="text"
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                />
              </Input>
            </BlockSelect>
            <BlockSelect>
              <Grid
                container
                direction="row"
                alignItems="center"
                justify="space-between"
                spacing={1}
              >
                <Grid item xs={8}>
                  <Input>
                    <BlockLabel
                      htmlFor="grid-password"
                    >
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <p>фото &nbsp;</p>
                        <Tooltip style={{ color: "red" }} title="Поле обазятальное для заполнения">
                          <Img src="/img/info.svg" alt="no picture" />
                        </Tooltip>
                      </div>
                    </BlockLabel>

                    <Field
                      component="input"
                      type="text"
                      name="photo"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                  </Input>
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
            </BlockSelect>
          </div>

          <hr className="mt-6 border-b-1 border-blueGray-300" />
          <H6></H6>
          <Locale />
        </Main>
        <hr className="mt-6 border-b-1 border-blueGray-300" />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
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
                    <Button
                      style={{
                        color: "gray",
                        paddingLeft: "5px",
                        fontSize: "18px",
                        cursor: "default",
                      }}
                      type="button"
                      disabled={true}
                      onClick={() => setOpenTemplateCreation(true)}
                    >
                      Сформировать
                    </Button>
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
                  <Button
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
          </Button>
                </>
            }
          </div>
          {openTemplateCreation && <TemplateCreationMProps description={description} photoList={photoList} openTemplateCreation={openTemplateCreation} setOpenTemplateCreation={setOpenTemplateCreation} seeTable={seeTable} />}
          <i className="fas fa-edit" style={{ color: "rgb(64 169 87)", fontSize: "18px", paddingBottom: "6px" }}></i>
          <Button
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
          </Button>
        </div>
      </Container>
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
