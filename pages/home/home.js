// pages/home/home.js
import request from '../../service/network'

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      console.log('onLoad');
      // 发送网络请求
      // 使用原生的request发送网络请求
      // this.sendNetwork()

      //  使用封装的request发送网络请求
      request({
        url:"http://httpbin.org/",
      }).then(res=>{
        console.log(res);
      })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('onReady');
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('onShow');
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  sendNetwork(){
      // 1.发送最简单的get请求
      wx.request({
        url: 'http://152.136.185.210:7878/api/hy66/recommend',
        method:'GET',
        success:res=>{
          console.log(res);
        }
      })

      // 2.发送get请求，但是携带参数
      wx.request({
        url: 'http://152.136.185.210:7878/api/hy66/home/data',
        method:'GET',
        data:{
          type:'sell',
          page:1
        },
        success:res=>{
          console.log(res);
        }
      })

      // 3.post请求，并且携带参数
      wx.request({
        url: 'http://httpbin.org/post',
        method:'POST',
        data:{
          name:'dxt',
          age:22
        },
        success:res=>{
          console.log(res);
        }
      })
  }
})