export const Category = ({ categories, dispatch }) => {
  return (
    <div className="category">
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            className="filter-btn"
            key={index}
            onClick={() => dispatch({ type: category })}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};
