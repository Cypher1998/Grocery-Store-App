import { Spinner } from 'react-bootstrap';

const DisplaySpinner = () => {
  return (
    <div className="text-center pb-3">
      <Spinner animation="border" size="sm" />
      <Spinner animation="border" />
    </div>
  );
};
export default DisplaySpinner;
