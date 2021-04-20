import React, { Component } from "react";
import { MuiThemeProvider } from "material-ui/styles";
import { blue500, blue700 } from "material-ui/styles/colors";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import Tooltip from "@material-ui/core/Tooltip";
import Popper from "@material-ui/core/Popper";
import {
  SortableContainer,
  SortableHandle,
  SortableElement,
  arrayMove,
} from "react-sortable-hoc";
import { connect } from "react-redux";
import { compose, withHandlers, withState, withProps } from "recompose";
import { reduxForm, Field, getFormValues } from "redux-form";
import {
  Table,
  TableRow,
  TableHeader,
  TableHeaderColumn,
  TableRowColumn,
  TableBody,
} from "material-ui/Table";
import TitlePhoto from "../TitlePhoto/TitlePhoto";
import { Dispatch } from "redux";
import { cloneDeep } from "lodash";
import TextInput from "../TextInput";
import { data } from "autoprefixer";
const theme = getMuiTheme({
  palette: {
    primary1Color: blue500,
    primary2Color: blue700,
  },
});

// Компонент который используется активации drag-n-drop при клике внутри компонента
const DragHandle = SortableHandle(({ style }) => (
  <span style={{ ...style, ...{ cursor: "move" } }}>{"::::"}</span>
));

// Универсальный компонент для превращения TableBody в sortable контейнер
const TableBodySortable = SortableContainer(
  ({ children, displayRowCheckbox }) => (
    <TableBody displayRowCheckbox={displayRowCheckbox}>{children}</TableBody>
  )
);

// Строка необходима для того чтобы наш кастомный боди воспринимался как TableBody и в этом случае ошибки не будет
TableBodySortable.muiName = "TableBody";

// Компонент строки таблицы с оберткой в sortable элемент
const Row = SortableElement(
  ({ data = [{ name: "123" }], open, changeState, rowIndex, ...other }) => {
    const showModal = (id) => () => {
      if (open.value === true) {
        changeState(false);
        changeState(true, id);
      }
      changeState(true, id);
    };
    return (
      <TableRow>
        {other.children[0]}
        {/* <TableRowColumn style={{ width: "5%" }}>
        <DragHandle />
      </TableRowColumn> */}
        {data.map((item, index) => {
          const defaultBlock = (
            <span key={index}
              onClick={item.onClick && item.onClick(item.id, item.name)}
              style={{ overflow: "hiden", textOrientation: "ellipsis" }}
            >
              {item.value}
            </span>
          );
          let component;

          switch (item.name) {
            case "Фотографии": {
              component = (<>
                <span onMouseEnter={showModal(rowIndex)} style={{cursor: "pointer"}}>{defaultBlock}</span>
                {open.id === rowIndex && open.open && (
                    <TitlePhoto
                      photoList={item && item.files && item.files.files}
                      path={item && item.files && item.files.path}
                      changeState={changeState}
                    />
                  )}
                </>
              );

              break;
            }
            default:
              component = <Tooltip title={item.value}>{defaultBlock}</Tooltip>;
          }
          return (
            <TableRowColumn key={index} style={{ width: "50%" }}>
              {item.type === "text" && item.edit === true ? (
                <TextInput
                  value={item.value}
                  onChange={item.onChange(item.id, item.name)}
                />
              ) : (
                <>
                  {component}
                  
                </>
              )}
            </TableRowColumn>
          );
        })}
      </TableRow>
    );
  }
);

const search = (value, id) => {
  const getItem = value.reduce((acc, item, index) => {
    const search = item.row.findIndex((itemSearh) => itemSearh.id === id);
    if (search > -1) {
      acc.index = search;
      acc.key = index;
    }
    return acc;
  }, {});
  return getItem;
};

class SortableTable extends Component {
  constructor(props) {
    super(props);
    this.onChangeComponent = (id, name) => (event) => {
      console.log(event);
      const getItem = search(this.state.peoples, id);
      const getState = cloneDeep(this.state);
      getState.peoples[getItem.key].row[getItem.index].value = event;
      this.setState(getState);
    };

    this.onClickComponent = (id, name) => () => {
      const getItem = search(this.state.peoples, id);
      console.log(getItem);
      const getState = cloneDeep(this.state);
      getState.peoples[getItem.key].row[getItem.index].edit = true;
      this.setState(getState);
    };
    this.state = {
      peoples: this.props.data.tableDataFunc,
      open: false,
    };
  }

  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState({
      peoples: arrayMove(this.state.peoples, oldIndex, newIndex),
    });
  };
  changeState = (value, id) => {
    this.setState({ open: value, id });
  };
  render() {
    return (
      <Table
        className="cusomTable "
        fixedHeader={false}
        fixedFooter={false}
        size="small"
        style={{ height: "calc(100vh - 350px)"}}
      >
        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
          <TableRow>
            {/* <TableHeaderColumn style={{ width: "5%", height: "100%" }}>
              &nbsp; */}
            {this.props.data.tableDataFunc && this.props.data.tableDataFunc[0] && this.props.data.tableDataFunc[0].row.map((item, index) => (
              <TableHeaderColumn style={{ width: 200 }} key={index}>
                {item.name}
              </TableHeaderColumn>
            ))}
            {/* </TableHeaderColumn>
            <TableHeaderColumn>Id</TableHeaderColumn>
            <TableHeaderColumn>Name</TableHeaderColumn>
            <TableHeaderColumn>Status</TableHeaderColumn> */}
          </TableRow>
        </TableHeader>
        <TableBodySortable
          onSortEnd={this.onSortEnd}
          useDragHandle
          displayRowCheckbox={false}
        >
          {this.state.peoples.map((row, index) => {
            const rowItem = row.row.reduce((acc, item) => {
              acc.push(item);
              return acc;
            }, []);
            return (
              <Row
                rowIndex={index}
                key={index}
                data={rowItem}
                changeState={this.changeState}
                open={this.state}
              />
            );
          })}
        </TableBodySortable>
      </Table>
    );
  }
}

const App = (props) => {
  return (
    <MuiThemeProvider muiTheme={theme}>
      <SortableTable style={{ height: "calc(100vh - 350px);" }} {...props} />
    </MuiThemeProvider>
  );
};
// export default App;

const mapDispatchToProps = (dispatch) => {
  return {
    // getPhotos: (value: string) => () => dispatch(getPhoto.started(value)),
  };
};

const mapStateToProps = (state) => {
  return {
    formValues: getFormValues("WomensShoes")(state),
    photoList: state.commentsReducer.photoLink,
  };
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(App);
