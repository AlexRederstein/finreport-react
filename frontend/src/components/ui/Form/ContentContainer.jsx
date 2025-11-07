import "./ContentContainer.css";

export default ({ children, ...props }) => {
  return (
    <div className="content-container" {...props}>
      {children}
    </div>
  );
};
