import "./directory.styles.scss";
import CategoriesItem from "../categories-item/categories-item.component";
const Directory = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoriesItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
