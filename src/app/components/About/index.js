import React from "react";
import { takeEvery } from "redux-saga/effects";
import { cmfConnect } from "@talend/react-cmf";

const About = () => <h2>About</h2>;

function* onAbout(action) {
  console.log("onAbout", action);
  yield takeEvery("WHAT", function* noName() {});
}
About.displayName = "About";
About.sagas = {
  "About#default": onAbout
};

export default cmfConnect()(About);
