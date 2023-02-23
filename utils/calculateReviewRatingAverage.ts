import { Review } from "@prisma/client";

export  const calculateReviewRatingAverage = (reviews: Review[]) => {

    if(!reviews.length) return 0;

    const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
    return totalRating / reviews.length;
    }
