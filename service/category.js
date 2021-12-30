import request from './network'

// 获取分类列表数据
export function getCategory(){
  return request({
    url:'/category'
  })
}

// 请求类别数据
export function getSubcategory(maitKey){
  return request({
    url:'/subcategory',
    data:{
      maitKey
    }
  })
}

// 请求详细数据
export function getCategoryDetail(miniWallkey, type) {
  return request({
    url: '/subcategory/detail',
    data: {
      miniWallkey,
      type
    }
  })
}