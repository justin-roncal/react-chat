import { takeEvery } from "redux-saga";
import * as types from "../constant/ActionTypes";

const handleNewMessage = function* handleNewMessage(params) {
  yield takeEvery(
    types.ADD_MESSAGE,
    action => (
      (action.author = params.username),
      params.socket.send(JSON.stringify(action))
    )
  );
};

export default handleNewMessage;
