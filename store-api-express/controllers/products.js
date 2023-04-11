const Product = require("../models/Product");

const getAllProducts = async (req, res, next) => {
    console.log(req.query);
    const { name, featured, company, numericFilters, sort, fields } = req.query;
    const queryObject = {};
    let sortList = "createdAt";

    // Filter
    if (name) {
        queryObject.name = { $regex: name.trim(), $options: "i" };
    }
    if (featured) {
        queryObject.featured = (featured === "true");
    }
    if (company) {
        queryObject.company = company;
    }
    if (numericFilters) {
        const operatorMap = {
            ">": "$gt",
            ">=": "$gte",
            "=": "$eq",
            "<": "$lt",
            "<=": "$lte"
        };
        const regex = /\b(>|>=|=|<|<=)\b/g;
        let filters = numericFilters.replace(
            regex,
            (match) => `-${operatorMap[match]}-`
        );
        const options = ["price", "rating"];
        filters = filters.split(",").forEach(item => {
            const [field, operator, value] = item.split("-");
            if (options.includes(field)) {
                queryObject[`${field}`] = { [operator]: Number(value) };
            }
        });
    }
    console.log(queryObject);
    let query = Product.find(queryObject);

    // Select
    if (fields) {
        const fieldList = fields.split(",").join(" ");
        query = query.select(fieldList);
    }

    // Sort
    // Default: createdAt ASC
    if (sort) {
        sortList = sort.split(",").join(" ");
    }
    query = query.sort(sortList);

    // Pagination
    const page = parseInt(req.query.page) || 1;
    const perPage = parseInt(req.query.perPage) || 10;
    const skip = (page - 1) * perPage;
    query = query.skip(skip).limit(perPage);

    // Executing Query
    const products = await query;
    res.status(200).json({
        success: true,
        nbPages: page,
        nbHits: products.length,
        data: products
    });
};

module.exports = {
    getAllProducts
};