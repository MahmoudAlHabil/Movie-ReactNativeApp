import React from 'react';
import StarRating from 'react-native-star-rating-widget';

const Rating = (props) => {
  const { setRate } = props;

  const [rating, setRating] = React.useState(setRate);
  return (
      <StarRating
        rating={rating}
        onChange={setRating}
      />
  );
};

export default Rating;