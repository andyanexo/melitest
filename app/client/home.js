const React = require("react");
const ReactDOM = require("react-dom");
const Home = require("../shared/components/pages/home");

ReactDOM.hydrate(<Home />, document.getElementById("root"));
