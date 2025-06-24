import { Figure } from 'react-bootstrap';
import Rating from './Rating';

const Product = (props) => {
    return (
        <div>
            <Figure>
                <Figure.Image
                    width={64}
                    height={64}
                    className='mr-3'
                    src={props.data.imageUrl}
                    alt='Product img'
                />
                <Figure.Caption>
                    <h5>{props.data.productName}</h5>
                    {props.data.releasedDate}
                    <Rating
                        rating={props.data.rating}
                        numOfReviews={props.data.numOfReviews}
                    />
                    <p>{props.data.description}</p>
                </Figure.Caption>
            </Figure>
        </div>
    );
}

export default Product;
