import React from "react";
import WomensShoes from "../../Components/dynamucComponents/WomensShoes/WomensShoes";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { RootState } from "../../redux/reducers/rootReducer";
import { closeModal, openModal } from "../../redux/actions/actions";
import Table from "../Table/Table";
interface ModalProps {
  setOpen: (value: boolean) => void;
  title: string;
}

interface ModalPrivateProps extends ModalProps {
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

const WomensShoesModal: React.FC<ModalPrivateProps> = ({
  setOpen,
  title,
  openModal,
  closeTable,
  tableDataFunc,
}) => {

  return (
    <>
      <div
        className="inset-0 z-50 outline-none focus:outline-none"
        style={{
          top: 10,
          left: 10,
          position: "absolute",
          right: 10,
          overflow: "hidden"
        }}
      >
        <div
          className="relative w-auto my-6 mx-auto max-w-6xl"
          style={{ width: "100%" }}
        >
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div  className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
              <h3 className="text-3xl font-semibold">{title}</h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              >
                <span
                  className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none"
                  onClick={() => setOpen(false)}
                >
                  ×
                </span>
              </button>
            </div>
            <div className="relative p-6 flex-auto">
              <WomensShoes />
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};
const mapDispatchToProps = (dispatch: Dispatch, { tableDataFunc }: ModalPrivateProps) => {
  return {
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

    // formValues: getFormValues(Form.WomensShoes)(state),
    // isLoader: state.commentsReducer.loaderName === Loaders.fetchPhoto,
    tableDataFunc: state.commentsReducer.tableDataFunc && state.commentsReducer.tableDataFunc(),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(WomensShoesModal);
