const reviews = [
    {name: 'first', rating: 5, feedback: 'this is somefeedback'},
    {name: 'second', rating: 4, feedback: 'this is somefeedback'},
    {name: 'third', rating: 4, feedback: 'this is somefeedback'},
];

const otherReviews = [
    {name: 'first', rating: 5, feedback: 'this is somefeedback'},
    {name: 'second', rating: 4, feedback: 'this is somefeedback'},
    {name: 'third', rating: 4, feedback: 'this is somefeedback'},
];

function addReview(array, name, rating, feedback) {
    const review = {
        name,
        rating,
        feedback
    };
    array.push(review);
}

addReview(reviews, 'fourth', 3, 'something');
addReview(otherReviews, 'fourth', 7, 'something else');

console.log(reviews);
console.log(otherReviews);