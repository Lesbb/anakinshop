const base = {
    baseUrl:"http://localhost:3000",
    register:"/api/register",
    login:"/api/login",
    selectTbItemAllByPage:"/api/backend/item/selectTbItemAllByPage", //商品列表
    total:"/api/total", //商品总条数
    search:"/api/search",//模糊查询
    selectItemCategoryByParentId:"/api/backend/itemCategory/selectItemCategoryByParentId",
    insertTbItem:'/api/backend/item/insertTbItem',//添加商品
    deleteItemById:"/api/backend/item/deleteItemById",//商品删除
    preUpdateItem:"/api/backend/item/preUpdateItem",//预更新
    updateTbItem:"/api/backend/item/updateTbItem",//修改商品
    selectItemParamAll:"/api/backend/itemParam/selectItemParamAll",//规格参数查询
    paramsSearch:"/api/params/search",//规格参数模糊查询
}

export default base;