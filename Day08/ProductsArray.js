const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
];

function rateProduct(productId, userId, rating) {
  for (const product of products) {
    if (product._id === productId) {

      for (const rate of product.ratings) {
        if (rate.userId === userId) {
          rate.rate = rating; 
          return;
        }
      }
      product.ratings.push({ userId, rate: rating });
      return;
    }
  }
}
rateProduct('hedfcg','jjkf2',3);
console.log(products);

function averageRating(productId){
    for (const product of products){
        if (product._id === productId){
            if (product.ratings.length === 0){
                return 0;
            }
            let ratingSum = 0;
            for (const rate of product.ratings){
                ratingSum += rate.rate;
            }
            return ratingSum / product.ratings.length;
        }
    }
    return 0 ; // product not found
}
console.log(averageRating('hedfcg'));

function likeProduct(productId,likes){
    for (const product of products){
        if (product._id === productId){
            if (product.likes.length === 0){
                product.likes.push(likes);
                return;
            }else{
                product.likes.splice(0,product.likes.length);
                return;
            }
        }
    }
}
likeProduct('eedfcf' , 'fg12cy');
console.log(products);