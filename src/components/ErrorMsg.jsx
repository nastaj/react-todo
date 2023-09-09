import "../assets/scss/Error.scss";

function ErrorMsg({ error }) {
  return <p className="error-msg">{error}</p>;
}

export default ErrorMsg;
