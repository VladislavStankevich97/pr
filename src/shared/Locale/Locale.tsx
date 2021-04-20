import React, { useState } from "react";
import { Checkbox, Grid } from "@material-ui/core";
import { reduxForm } from "redux-form";
import { compose } from "recompose";
import { connect, useStore } from "react-redux";
import { Form } from "../../constant/constants";
import Map from "../Map/Map";
import { Dispatch } from "redux";
import { setMap, setLocation } from "../../redux/actions/actions";
import "./Locale.css"
import Tooltip from "@material-ui/core/Tooltip";
import { Img } from '../../Components/dynamucComponents/WomensShoes/style'

interface LocaleProps {

}

interface LocalePrivateProps extends LocaleProps {
  setMapInput: (value: any) => void;
  setMapSelect: (value: any) => void;
  setLocation: (value: any) => void;
}

interface Selected {
  [key: string]: string[]
}



const selectAdress: Selected = {
  1: ['moskow', 'moskow2', 'moskow3'],
  2: ['piter1', 'piter2', 'piter3'],
  3: ["other1", "other2", "other3"],
  4: ["other1", "other2", "other3"]
}

const Locale: React.FC<LocalePrivateProps> = ({
  setMapInput,
  setMapSelect,
  setLocation
}) => {
  const [cheked, setCheked] = React.useState({ value: false, name: "" });

  const chekedHandler = (name: string) => (e: any) => {
    console.log(e.target.value)
    if ("Metro" === name) {
      setLocation({ value: '', type: "Select" })
    }
    if ("adress" === name) {
      setLocation({ value: '', type: "Input" })
    }
    if ("Map" === name) {
      setLocation({ value: '', type: "Map" })
    }
    if (name === cheked.name) {
      setCheked({ name, value: cheked.value });
    } else {
      setCheked({ name, value: true });
    }
  };

  const onChangeSelect = (e: any) => {
    const value = e.target.value;
    setLocation({ value: selectAdress[value], type: "select" })
  }

  const onChangeInput = (e: any) => {
    const value = e.target.value;
    setLocation({ value: [value], type: "input" })
  }


  const colorInput = cheked.name !== "adress" ? "rgb(235 237 241 / 1)" : "";
  const colorSelect = cheked.name !== "Metro" ? "rgb(231 231 234 / 1)" : "";
  const opacityMap = cheked.name !== "Map" ? "0.5" : "1";
  const pointerEventsMap = cheked.name !== "Map" ? "none" : "auto";

  return (
    <div className="flex flex-wrap">
      <Grid container direction="row" alignItems="center">
        <Grid item>
          <Checkbox
            style={{ color: "rgb(24 129 181)" }}
            color="primary"
            inputProps={{ "aria-label": "secondary checkbox" }}
            onClick={chekedHandler("adress")}
            checked={cheked.name === "adress" && cheked.value}
          />
        </Grid>
        <Grid item xs={11}>
          <div className="w-full lg:w-12/12 px-4">
            <div className="relative w-full mb-3">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <p>адресс &nbsp;</p>
                  <Tooltip style={{ color: "red" }} title="Поле обазятальное для заполнения">
                    <Img src="/img/info.svg" alt="no picture" />
                  </Tooltip>
                </div>
              </label>
              <input
                style={{ backgroundColor: colorInput }}
                disabled={cheked.name !== "adress"}
                onChange={cheked.name === "adress" && cheked.value ? onChangeInput : () => { }}
                type="text"
                placeholder={cheked.name !== "adress" ? "Поле неактивно" : "Введите адрес"}
                className="border-0 px-3 py-3 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              />
              <i
                className="fas fa-map-marked-alt"
                style={{
                  right: 10,
                  top: 35,
                  position: "absolute",
                  fontSize: 20,
                  color: "#475669",
                }}
              ></i>
            </div>
          </div>
        </Grid>
      </Grid>
      <Grid container direction="row" alignItems="center">
        <Grid item>
          <Checkbox
            style={{ color: "rgb(24 129 181)" }}
            color="primary"
            inputProps={{ "aria-label": "secondary checkbox" }}
            onClick={chekedHandler("Metro")}
            checked={cheked.name === "Metro" && cheked.value}
          />
        </Grid>
        <Grid item xs={11}>
          <div className="w-full lg:w-12/12 px-4">
            <div className="relative w-full mb-3">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              ></label>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <select
                  style={{ backgroundColor: colorSelect }}
                  disabled={cheked.name !== "Metro"}
                  onChange={cheked.name === "Metro" && cheked.value ? onChangeSelect : () => { }}
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                >
                  <option value="1">Метро москвы</option>
                  <option value="2">Метро питера</option>
                  <option value="3">
                    Метро самых больших городов россии
                  </option>
                </select>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
      <Grid container direction="row" alignItems="flex-start">
        <Grid item>
          <Checkbox
            style={{ color: "rgb(24 129 181)" }}
            color="primary"
            inputProps={{ "aria-label": "secondary checkbox" }}
            onClick={chekedHandler("Map")}
            checked={cheked.name === "Map" && cheked.value}
          />
        </Grid>
        <Grid item xs={11} style={{ padding: "0 14px" }}>
          <div style={{ opacity: opacityMap, pointerEvents: pointerEventsMap }}>
            <Map></Map>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setMapInput: (value: any) => {
      dispatch(setMap(value.target.value));
    },
    setLocation: (value: any) => {
      dispatch(setLocation(value))
    }
  };
};

export default compose<LocalePrivateProps, LocaleProps>(
  connect(null, mapDispatchToProps),
  reduxForm({
    form: Form.Local,
    enableReinitialize: true,
    destroyOnUnmount: true,
  })
)(Locale);
