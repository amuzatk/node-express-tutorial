const Product = require('../models/product');

const getAllProductsStatic = async (req, res) => {
    // const search = 'R';
    // const products = await Product.find({}).sort("name price");
    const products = await Product.find({price: {$gt: 30 }})
    .sort('name')
    .select("name price")
    // .limit(5)
    .skip(0)
    ;
//   const products = await Product.find({ price: { $gt: 30 } })
//     .sort('price')
//     .select('name price');

  res.status(200).json({products, nbHits: products.length });
};
const getAllProducts = async (req, res) => {
  const {featured, name, company, sort, fields, numericFilters} = req.query;
  const queryObject = {};
  if(featured){
    queryObject.featured = featured === "true" ? true : false;
  }
  if (name) {
    queryObject.name = {$regex:name, $options:'i' };
  }
  if (company) {
    queryObject.company =company;
  }

  if(numericFilters){
    console.log(numericFilters,'=numericFilters=');
    const operatorMap = {
        '<':'$lt',
        '<=':'$lte',
        '=':'$eq',
        '>':'$gt',
        '>=':'$gte',

    }
    const regeX = /\b(<|<=|=|>|>=)\b/g;
    let filter = numericFilters.replace(regeX, (match)=> `-${operatorMap[match]}-` );

    const options = ["price", "rating"];

    // filter = filter.split(',').forEach((item)=>{
    //     const [field, operator, value] = item.split("-");
    //     if(options.includes(field)){
    //         queryObject[field] = {[operator] : Number(value) };
    //     }
    // });
    filter = filter.split(',').forEach((item) => {
  const [field, operator, value] = item.split('-');
  if (options.includes(field)) {
    if (!queryObject[field]) {
      queryObject[field] = {};
    }
    queryObject[field][operator] = Number(value);//allows merging multiple operators under the same field:
  }
});

    // console.log(filter,'=filter=');
  }
console.log(queryObject,'query==')

  let result = Product.find(queryObject);

  if(sort){
  const sortList = sort.split(',').join(' ');
  result = result.sort(sortList);
// console.log(sort,'sort query==')
    
  } else {
    result = result.sort('createdAt');
  }

  if(fields){
    const fieldsList = fields.split(',').join(' ');
    result = result.select(fieldsList);
    // console.log(fields,'fields query==')
  }

const page = Number(req.query.page);
const limit = Number(req.query.limit);
const skip = (page - 1) * limit;

result = result.skip(skip).limit(limit);
// 23 total item in the response
// limit=perPag=7 implies total page=4 (7 7 7 2);
  const products = await result;
  res.status(200).json({ products, nbHits: products.length });

  // const { featured, company, name, sort, fields, numericFilters } = req.query;
  // const queryObject = {};

  // if (featured) {
  //   queryObject.featured = featured === 'true' ? true : false;
  // }
  // if (company) {
  //   queryObject.company = company;
  // }
  // if (name) {
  //   queryObject.name = { $regex: name, $options: 'i' };
  // }
  // if (numericFilters) {
  //   const operatorMap = {
  //     '>': '$gt',
  //     '>=': '$gte',
  //     '=': '$eq',
  //     '<': '$lt',
  //     '<=': '$lte',
  //   };
  //   const regEx = /\b(<|>|>=|=|<|<=)\b/g;
  //   let filters = numericFilters.replace(
  //     regEx,
  //     (match) => `-${operatorMap[match]}-`
  //   );
  //   const options = ['price', 'rating'];
  //   filters = filters.split(',').forEach((item) => {
  //     const [field, operator, value] = item.split('-');
  //     if (options.includes(field)) {
  //       queryObject[field] = { [operator]: Number(value) };
  //     }
  //   });
  // }

  // let result = Product.find(queryObject);
  // // sort
  // if (sort) {
  //   const sortList = sort.split(',').join(' ');
  //   result = result.sort(sortList);
  // } else {
  //   result = result.sort('createdAt');
  // }

  // if (fields) {
  //   const fieldsList = fields.split(',').join(' ');
  //   result = result.select(fieldsList);
  // }
  // const page = Number(req.query.page) || 1;
  // const limit = Number(req.query.limit) || 10;
  // const skip = (page - 1) * limit;

  // result = result.skip(skip).limit(limit);
  // 23
  // 4 7 7 7 2

  // const products = await result;

//   console.log(queryObject, products.length,"====");
//   res.status(200).json({ products, nbHits: products.length });
};

module.exports = {
  getAllProducts,
  getAllProductsStatic,
};
