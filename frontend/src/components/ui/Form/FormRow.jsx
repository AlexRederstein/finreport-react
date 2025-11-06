export default ({ label = "", children }) => {
  return (
    <div className="form-row">
      <div>{label}:</div>
      <div>{children}</div>
    </div>
  );
};
