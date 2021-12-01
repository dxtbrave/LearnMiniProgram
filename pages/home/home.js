// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    titles:['衣服','裤子','鞋子']
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
  handleBtnClick(event){
    console.log('发生了点击');
  },
  handleTouchStart(){
    console.log('handleTouchStart');
  },
  handleTouchMove(){
    console.log('handleTouchMove');
  },
  handleTouchEnd(){
    console.log('handleTouchEnd');
  },
  handleTap(){
    console.log('handleTap');
  },
  handleLongpress(){
    console.log('handleLongpress');
  },
  handleEvenetClick(event){
    console.log(event);
  },
  handleItemClick(event){
    console.log(event);
  },
  handleCapture1(){
    console.log('handleCapture1');
  },
  handleCapture2(){
    console.log('handleCapture2');
  },
  handleCapture3(){
    console.log('handleCapture3');
  },
  handleBind1(){
    console.log('handleBind1');
  },
  handleBind2(){
    console.log('handleBind2');
  },
  handleBind3(){
    console.log('handleBind3');
  },
})