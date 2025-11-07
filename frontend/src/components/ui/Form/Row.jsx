export default ({ label = "", children }) => {
  return (
    <div className="row">
      <div>{label}:</div>
      <div>{children}</div>
    </div>
  );
};
