const OneCard = ({ image, action }) => {
  return (
    <div onClick={action}>
      <img style={{ width: "200px" }} src={image} />
    </div>
  );
};

export default OneCard;
