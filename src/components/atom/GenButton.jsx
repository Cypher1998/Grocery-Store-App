import { Button } from 'react-bootstrap';

const GenButton = ({ text, onClick }) => {
  return (
    <>
      <Button
        variant="success"
        className="button rounded-pill px-4 py-2"
        onClick={onClick}
      >
        {text}
      </Button>
    </>
  );
};
export default GenButton;
