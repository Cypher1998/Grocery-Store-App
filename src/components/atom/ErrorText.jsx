const ErrorText = ({ error }) => {
  return (
    <div className="text-danger text-center error">
      <h5>{error}</h5>
    </div>
  );
};

export default ErrorText;
