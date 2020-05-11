import Reset from "../components/Reset";

const Sell = (props) => (
  <div>
    {console.log(props)}
    <p>Reset Your Password {props.query.resetToken}</p>
    <Reset resetToken={props.query.resetToken}></Reset>
  </div>
);

export default Sell;
