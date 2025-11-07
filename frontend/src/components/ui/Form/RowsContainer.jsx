import "./Form.css";

export default ({ children, ...props }) => {
  return (
    <div {...props} className="rows-container">
      {children}
    </div>
  );
};
