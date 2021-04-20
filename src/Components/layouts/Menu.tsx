import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import Sidebar from "../Sidebar/Sidebar";
import Templates from '../Page/Templates'
import HeaderStats from '../Headers/HeaderStats'
import Modal from '../../shared/ModalGlobal/Modal'
import { RootState } from "../../redux/reducers/rootReducer";

interface MenuProps { }

interface MenuPrivateProps extends MenuProps {
  modal: any;
}


const Menu: React.FC<MenuPrivateProps> = ({ modal }) => {
  return (
    <>
      {modal && <Modal title={modal.title} setOpen={modal.setOpen} save={modal.save} Component={modal.component} tableDataFunc={modal} />}
      <Sidebar />
      <div
        className="relative md:ml-64 bg-blueGray-100" style={{}}>
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24" style={{ marginTop: '50px', width: '100%' }}>
          <Switch>
            <Route path="/admin/dashboard" exact component={Templates} />
            <Route path="/admin/settings" exact component={Templates} />
            <Redirect from="/admin" to="/admin/dashboard" />
          </Switch>
        </div>
      </div>
    </>
  );
}
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
  };
};

const mapStateToProps = (state: RootState) => {
  return {
    modal: state.commentsReducer.globalModal,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu)