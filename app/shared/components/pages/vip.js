const React = require("react");
const serialize = require("serialize-javascript");
const Script = require("../helpers/script");

const Vip = props => {
  console.log(props);
  const serializeProps = { item: props.itemData.item };
  console.log(serializeProps);

  return (
    <div>
      <Script>{`window.ML_PRELOADED_STATE = "${serialize(serializeProps, {
        isJSON: true
      })}"`}</Script>
      <h2>Vip Page</h2>
      <p>Esta es la vista del Vip</p>
    </div>
  );
};

module.exports = Vip;
