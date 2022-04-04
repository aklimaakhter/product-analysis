
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';


const Reviews = () => {
    const [reviews, setReviews] = useReviews();
    
    return (
        <div className='cart'>
                {
                    reviews.map(review => <Review
                        key={review.id}
                        review={review}
                    ></Review>)
                }
            </div>
    );
};

export default Reviews;