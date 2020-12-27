const Category = require('../../models/category');
const slugify = require('slugify');

const createCategory = async (req,res,next) => {
  try {
    const categoryObj = {
      name : req.body.name,
      slug : slugify(req.body.name,{locale: 'vi'})
    }
    if(req.body.parentId){
      categoryObj.parentId = req.body.parentId
    }
    const cat = new Category(categoryObj);
    await cat.save();

    return res.status(201).json({category : cat});
  } catch (error) {
    next(error);
  }

}
const createCategories = (categories,parentId = null) =>{
  const categorList = [];
  let category;
  if(parentId == null){
    category = categories.filter(cat => cat.parentId == undefined)
  }else{
    category = categories.filter(cat => cat.parentId == parentId);
  }
  for(let cat of category){
    categorList.push({
      _id : cat._id,
      name: cat.name,
      slug: cat.slug,
      children: createCategories(categories,cat._id)
    })
  }

  return categorList;
}
const getAllCategories = async (req,res,next) =>{
  try {
    const categories = await Category.find({});
    const categoryList = createCategories(categories);
    return res.status(200).json({categoryList});
  } catch (error) {
    next(error)
  }
}

module.exports = {
  createCategory,getAllCategories
}