
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';


const Reviews = () => {
    const [reviews, setReviews] = useReviews();
    
    return (
        <div >
            <h2 className='text-3xl font-medium py-8'>What our coustomers say!</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                   
                {
                    reviews.map(review => <Review
                        key={review.id}
                        review={review}
                    ></Review>)
                }
               </div>
            </div>
    );
};

export default Reviews;