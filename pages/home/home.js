// pages/home/home.js
import {getMultiData,getGoodsData} from  '../../service/home'

const types = ['pop','new','sell']
const TOP_DISTANCE = 1000

Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners:[],
    recommends:[],
    titles:['流行','新款','精选'],
    currentType:'pop',
    goods:{
      'pop':{page:0,list:[]},
      'new':{page:0,list:[]},
      'sell':{page:0,list:[]}
    },
    isBackTop:false

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      // 1.请求轮播图以及推荐数据
      this._getMultidata()
      // 2.请求商品信息数据
      this._getGoodsData('pop')
      this._getGoodsData('new')
      this._getGoodsData('sell')
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
    // this.getTabBar().setData({
    //   active:0
    // })
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
   * 获取轮播图及推荐数据
   */
  _getMultidata(){
    getMultiData().then(res=>{
      // 取出轮播图和推荐的数据
      // 将banners和recommends放到data中
      this.setData({
        banners:res.data.banner.list,
        recommends:res.data.recommend.list
      })
    })
  },

  /**
   * 请求商品数据
   */
  _getGoodsData(type){
    // 1.获取页码
    const page = this.data.goods[type].page  + 1
    // 2.发送网络请求
    getGoodsData(type,page).then(res=>{
      // 2.1取出数据
      const list = res.data.list
      // 2.2将数据设置到对应type的list中
      const oldList = this.data.goods[type].list
      oldList.push(...list)
      // 2.3将数据设置到data中的goods中
      const typeKey = `goods.${type}.list`
      const pageKey = `goods.${type}.page` 
      this.setData({
        [typeKey]:oldList,
        [pageKey]:page
      })

    })
  },

  /**
   * 事件监听函数
   * 点击tab-control事件
   */
  handleTabClick(event){
    // 1.取出index
    const index = event.detail.index
    // 2.设置currentType
    this.setData({
      currentType:types[index]
    })
  },
  /**
   * 上拉加载更多
   */
  onReachBottom(){
    setTimeout(()=>{
      this._getGoodsData(this.data.currentType)
    },500)
  },
  /**
   * 监听页面滚动
   */
  onPageScroll(options){
    // 1.取出scrollTop
    const scrollTop = options.scrollTop

    // 2.修改showBackTop属性
    // 官方：不要在滚动的函数回调中频繁的调用this.setData
    const flag = scrollTop >= TOP_DISTANCE
    if(flag != this.data.isBackTop){
      this.setData({
        isBackTop: flag
      })
    }
    
  }
})