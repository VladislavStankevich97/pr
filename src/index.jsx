import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./redux/reducers/rootReducer"; //"./redux/reducers/rootReducer";
import { createStore, applyMiddleware, compose } from "redux";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "./tailwind.css";

import Index from "./Components/Index";
import Auth from "./Components/layouts/Auth";
import Menu from "./Components/layouts/Menu";
import TemplatesList from './Components/TemplatesList/TemplatesList'
import { watchCommentsSaga } from "./redux/saga";



const sagaMiddleware = createSagaMiddleware()
  export  const store = compose(
      applyMiddleware(sagaMiddleware),
   (window).__REDUX_DEVTOOLS_EXTENSION__ && (window).__REDUX_DEVTOOLS_EXTENSION__()
    )(createStore)(rootReducer)
  
  
    sagaMiddleware.run(watchCommentsSaga)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Index} />
          <Route path="/auth" component={Auth} />
          <Route path="/admin" component={Menu} />
          <Route path="/templates" component={TemplatesList} />
          <Redirect from="*" to="/" />
        </Switch>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
