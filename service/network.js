import {baseUrl} from './config'

export default function(options){
  // wx.showLoading({
  //   title: '数据加载中ing',
  // })
  return new Promise((resolve,reject)=>{
    wx.request({
      url: baseUrl + options.url,
      method:options.method || 'GET',
      data:options.data || {},
      success:res=>{
        resolve(res.data)
      },
      fail:reject,
      // complete:res=>{
      //   wx.hideLoading()
      // }
    })
  })
}