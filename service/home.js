import request from './network'

/**
 * 获取轮播图和推荐数据
 */
export function getMultiData(){
  return request({
    url:'/home/multidata'
  })
}

/**
 * 获取商品信息
 */
export function getGoodsData(type,page){
  return request({
    url:'/home/data',
    data:{
      type,
      page
    }
  })
}