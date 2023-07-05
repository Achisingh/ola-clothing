import "./categories-item.styles.scss";

const CategoriesItem = ({ category }) => {
  const { imageUrl, title } = category;
  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="category-body-container">
        <h3>{title}</h3>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default CategoriesItem;
