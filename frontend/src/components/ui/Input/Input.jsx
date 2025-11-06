import "./Input.css";

export default ({ type = "text", className = "", ...props }) => {
  const classList = `input-control ${className}`;
  return <input type={type} {...props} className={classList} />;
};
