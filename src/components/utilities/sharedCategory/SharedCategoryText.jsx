const SharedCategoryText = ({ text }) => {
  return (
    <div className="text text-center py-2">
      <p>Taste of</p>
      <h3>{text}</h3>
      <p>Weekend discount offer</p>
      <div className="buttonDiv d-none d-sm-block">
        <button className="rounded-pill">shop now</button>
      </div>
    </div>
  );
};

export default SharedCategoryText;
