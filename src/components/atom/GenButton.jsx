import { Button } from 'react-bootstrap';

const GenButton = ({ text }) => {
  return (
    <>
      <Button variant="success" className="button rounded-pill px-4 py-2">
        {text}
      </Button>
    </>
  );
};
export default GenButton;
