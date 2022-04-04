
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';
// import './Reviews.css'

const Reviews = () => {
    const [reviews, setReviews] = useReviews();
    
    return (
        <div className='cart'>
                {
                    reviews.map(review => <Review
                        key={review.id}
                        seeAllReviews={seeAllReviews}
                        review={review}
                    ></Review>)
                }
            </div>
    );
};

export default Reviews;