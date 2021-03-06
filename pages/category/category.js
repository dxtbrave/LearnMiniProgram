// pages/category/category.js

import {getCategory,getSubcategory,getCategoryDetail} from "../../service/category"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    categories:[],
    categoryData:{},
    currentIndex:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this._getData()
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
  //   if (typeof this.getTabBar === 'function' &&
  //   this.getTabBar()) {
  //   this.getTabBar().setData({
  //     active: 1
  //   })
  // }
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
  /**
   * 获取分类列表数据
   */
  _getData(){
    this._getCategory()
  },
  _getCategory(){
    getCategory().then(res=>{
      // 1.获取categories
      const categories = res.data.category.list
      
      // 2.初始化每个类别的子数据
      const categoryData = {}
      for(let i = 0 ; i<categories.length ; i++){
        categoryData[i] = {
          subcategories:[],
          categoryDetail:[]
        }
      }


      // 3.修改data中的数据
      this.setData({
        categories:categories,
        categoryData: categoryData
      })

      // 4.请求第一个类别的数据
      this._getSubcategory(0)

      // 5.请求第一个类别的详细数据
      this._getCategoryDetail(0)

    })
  },

  _getSubcategory(currentIndex){
    // 1.获取对应的maitKey
    const maitkey = this.data.categories[currentIndex].maitKey

    // 2.请求数据
    getSubcategory(maitkey).then(res=>{
      const tempCategoryData = this.data.categoryData
      tempCategoryData[currentIndex].subcategories = res.data.list
      this.setData({
        categoryData:tempCategoryData
      })
    })
  },
  _getCategoryDetail(currentIndex){
    // 1.获取对应的miniWallKey
    const miniWallKey = this.data.categories[currentIndex].miniWallkey
    
    this._getRealCategoryDetail(currentIndex,miniWallKey,'pop')
  },
  _getRealCategoryDetail(index, miniWallKey, type){
    getCategoryDetail(miniWallKey, type).then(res=>{
      // 1.获取categoryData
      const categoryData = this.data.categoryData;

      // 2.修改数据
      categoryData[index].categoryDetail = res;
      // 3.修改data中的数据
      this.setData({
        categoryData: categoryData
      })
    })
  },
  menuClick(event){
    // 1.改变当前的currentIndex
    const currentIndex = event.detail.index
    this.setData({
      currentIndex
    })
    // 2.请求对应currentIndex的数据
    this._getSubcategory(currentIndex)
    
    // 3.请求对应的currentIndex的详情数据
    this._getCategoryDetail(currentIndex)
    this.onShow()
  }

})