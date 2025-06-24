function Rating(props) {
    const rating = props.rating || 0;
    return (
        <div>
            <h1>Rating: {rating}</h1>
        </div>
    );
}

export default Rating;
