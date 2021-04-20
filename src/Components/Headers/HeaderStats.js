import React from "react";
import { reduxForm, Field, getFormValues } from "redux-form";
import { Form, Loaders } from "../../constant/constants";
import Modal from "../../shared/WomensShoesModal/WomensShoesModal";
import CardStats from "../Cards/CardStats.js";
import { connect } from "react-redux";
import { compose } from "recompose";
function HeaderStats() {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <div
      
        className="relative bg-lightBlue-600 md:pt-32 pb-20 pt-12"
        style={{ paddingBottom: "100px", paddingTop: "50px"}}
        
      >
        <div className="px-2 md:px-10 mx-auto w-full" >
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Количество шаблонов"
                  statTitle="350"
                  statArrow=""
                  statPercent="0"
                  statDescripiron="за неделю"
                  statIconName="far fa-chart-bar"
                  statIconColor="bg-red-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="PERFORMANCE"
                  statTitle="49,65%"
                  statArrow="up"
                  statPercent="12"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last month"
                  statIconName="fas fa-percent"
                  statIconColor="bg-lightBlue-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="PERFORMANCE"
                  statTitle="49,65%"
                  statArrow="up"
                  statPercent="12"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last month"
                  statIconName="fas fa-percent"
                  statIconColor="bg-lightBlue-500"
                />
              </div>
              {/* <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="PERFORMANCE"
                  statTitle="49,65%"
                  statArrow="up"
                  statPercent="12"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last month"
                  statIconName="fas fa-percent"
                  statIconColor="bg-lightBlue-500"
                />
              </div> */}
            </div>
          </div>
        </div>
        <div style={{height:40, width:'100%'}}></div>
        <div style={{display:'flex', justifyContent:'space-between', flexDirection:'row', alignItems:'center', position:'absolute', right:'10px', left:'10px'}}>
          <div className="relative  mb-3" style={{width:'25%'}}>
            <label
              className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Категория
            </label>
            <div>
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
          <div className="relative  mb-3" style={{width:'25%'}}>
            <label
              className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Категория
            </label>
            <div>
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
          <div className="relative  mb-3" style={{width:'25%'}}>
            <label
              className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Категория
            </label>
            <div>
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
          <button
            className="bg-teal-500 text-white active:bg-teal-600 font-bold uppercase text-base px-8 py-3 rounded-full shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            style={{ height: 46, width: '10%' ,marginTop:15}}
            onClick={setOpen}
          >
            Cоздать
          </button>
        </div>
      </div>

      {open && <Modal setOpen={setOpen} title="Создание шаблона"></Modal>}
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    // getPhotos: (value: string) => () => dispatch(getPhoto.started(value)),
    // setTableDatas: (value: any) => {
    //   dispatch(setTableDataFunc(value));
  };
};

const mapStateToProps = (state) => {
  return {
    formValues: getFormValues(Form.Header)(state),
    isLoader: state.commentsReducer.loaderName === Loaders.fetchPhoto,
    photoList: state.commentsReducer.photoLink,
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({
    form: Form.Header,
    enableReinitialize: true,
    destroyOnUnmount: true,
    initialValues: {},
  })
)(HeaderStats);
