import "./Form.css";

export default ({ children, ...props }) => {
  return (
    <div style={{ display: "flex", height: "100%" }}>
      <form {...props} className="form-control">
        {children}
      </form>
    </div>
  );
};
