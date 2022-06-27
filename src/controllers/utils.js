
exports.paging = async (model, page = 1, perPage = 8, filter) => {
    console.log(filter);
    const offset = (page - 1) * perPage
    const pages = {...filter, offset: parseInt(offset), limit: parseInt(perPage) }
    const data = await model.findAll(pages)
    const { count } = await model.findAndCountAll()
    console.log(count);

return { data, total: count }
}

