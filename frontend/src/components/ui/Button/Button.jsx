import "./Button.css";

export default ({ children, ...props }) => {
  return (
    <button className="button-control" {...props}>
      {children}
    </button>
  );
};
