// pages/home/home.js
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
  handleShowToast(){
    wx.showToast({
      title: '加载中...',
      duration:3000,
      icon:'loading',
      mask:true
    })
  },
  handleShowModal(){
    wx.showModal({
      title:'我是标题',
      content:'我是内容',
      success:res=>{
        console.log(res);
        if(res.cancel){
          console.log('用户点击了取消按钮');
        }
        if(res.confirm){
          console.log('用户点击了确定按钮');
        }
      }
    })
  },
  handleShowLoading(){
    wx.showLoading({
      title: '加载中...',
      mask:true,
    })
  },
  handleShowActionSheet(){
    wx.showActionSheet({
      itemList: ['相册','转发'],
    })
  }
})