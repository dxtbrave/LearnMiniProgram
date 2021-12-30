// pages/profile/profile.js
import Toast from '@vant/weapp/toast/toast';
import Dialog from '@vant/weapp/dialog/dialog';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderList: [
      { icon: 'chat-o', info: '我的消息' },
      { icon: 'points', info: '积分商城' },
      { icon: 'vip-card-o', info: '会员卡' },
    ],
    serviceList: [
      { icon: 'cart-o', info: '我的购物车' },
      { icon: 'goods-collect-o', info: '下载购物APP' },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

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
  showLoading(){
    Toast.loading({
      message: '加载中...',
      forbidClick: true,
      duration:0
    });
  },
  closeLoading(){
    Toast.clear()
  },
  showDialog(){
    const header = this.selectComponent('#header')
    Dialog.confirm({
      message: '是否退出登录？',
    })
      .then(() => {
        header.Signout()
      })
      .catch(() => {
      });
  }
})