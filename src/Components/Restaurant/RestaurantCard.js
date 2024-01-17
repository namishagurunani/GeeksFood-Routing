const RestaurantCard = ({ item }) => {
  const StarRating = (rating) => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} style={{ color: i <= rating ? "#ffcc00" : "#ddd" }}>
          &#9733;
        </span>
      );
    }

    return (
      <>
        {stars} {rating} / 5
      </>
    );
  };

  return (
    <div className="card">
      <div className="title">
        <h3>{item.name}</h3>
        <div className="ratings">{StarRating(item.rating)}</div>
      </div>
      <div className="address">
        <p>
        ☥
          {item.address}, {item["address line 2"]}
        </p>
      </div>
      <div className="post">
        <span>
          {item.outcode} {item.postcode}
        </span>
      </div>
      <div className="base">
        <div className="food-type">🍴{item["type_of_food"]}</div>
        <a href={item.URL}>Visit Menu</a>
      </div>
    </div>
  );
};

export default RestaurantCard;
