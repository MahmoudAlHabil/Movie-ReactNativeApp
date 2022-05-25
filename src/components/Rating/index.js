import React from 'react';
import StarRating from 'react-native-star-rating-widget';
import { primary } from '../../utils/colors';

const Rating = (props) => {
  const { setRate } = props;

  const [rating, setRating] = React.useState(setRate);
  return (
      <StarRating
        rating={rating}
        onChange={setRating}
        starSize={14}
        color={primary}
        starStyle={{width: 3}}
      />
  );
};

export default Rating;