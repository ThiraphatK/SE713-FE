const reviewList = {
    template: `
        <div class="review-container">
            <h3>Reviews:</h3>
            <ul>
                <li v-for="(review, index) in reviews" :key="index">
                    <p>{{review.name}} gave this {{review.rating}} stars</p>
                    <br/>
                    <p>{{review.review}}</p>
                    <br/>
                    <p>Would you recommend this product? {{review.recommend}}</p>
                </li>
            </ul>
        </div>
    `,
    props: {
        reviews: Array
    },
    setup(props) {
        const reviews = props.reviews;
        console.log("Review: "+reviews);
        return { reviews }

    }
};