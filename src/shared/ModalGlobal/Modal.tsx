import React from "react";

interface ModalProps {
  setOpen: (value: boolean) => void;
  title: string;
  save?: any;
  Component:(data:any) => JSX.Element;
  tableDataFunc:any[],
}


const Modal: React.FC<ModalProps> = (props) => {
  const { setOpen, title, Component, save, tableDataFunc} = props;
  return (
    <>
      <div
        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
        style={{
          top: "3%",
          left: "2%",
          position: "fixed",
          right: "2%",
          bottom: "3%",
          zIndex: 1000,
          height: 'calc(100vh - 10%);',
          overflow: "hidden",
        }}
        //  onClick={() => setOpen(false)}
      >
        <div
          className="relative w-auto my-6 mx-auto max-w-6xl"
          style={{ width: "100%", border: '1px solid #00000024', borderRadius:'5px' }}
        >
          {/*content*/}
          <div
            className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"
            style={{ backgroundColor: "#f4f8fb" }}
          >
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
              <h3 className="text-3xl font-semibold">{title}</h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                // onClick={() => setOpen(false)}
              >
                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none"  onClick={() => setOpen(false)}>
                  ×
                </span>
              </button>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto" style={{margin:'1%', height: 'calc(100vh - 256px)'}}><Component data={tableDataFunc}/></div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setOpen(false)}
              >
                Закрыть
              </button>
              {save && <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" style={{color:"#54B9A6"}}
                type="button"
                onClick={save}
              >
                Сохранить
              </button>}
                
                
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default Modal;
