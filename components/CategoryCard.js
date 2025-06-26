"use client";

import PropTypes from "prop-types";

const CategoryCard = ({ category }) => (
  <div className="card bg-base-100 shadow-md w-64 m-2">
    <figure>
      <img
        src={category.imageUrl}
        alt={category.name}
        className="h-40 w-full object-cover rounded-t"
      />
    </figure>
    <div className="card-body">
      <h3 className="card-title">{category.name}</h3>
      {category.description && <p>{category.description}</p>}
    </div>
  </div>
);

CategoryCard.propTypes = {
  category: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    imageUrl: PropTypes.string.isRequired,
  }).isRequired,
};

export default CategoryCard;
