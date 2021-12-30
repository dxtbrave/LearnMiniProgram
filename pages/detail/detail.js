// pages/detail/detail.js
import Toast from '@vant/weapp/toast/toast';
import {
  debounce
} from '../../utils/utils'
import {
  getDetail,
  getRecommends,
  GoodsBaseInfo,
  ShopInfo,
  ParamInfo
} from '../../service/detail'
import {
  getGoodsData
} from "../../service/home"

const app = getApp()

Page({
  data: {
    iid: '',
    topImages: [],
    baseInfo: {},
    shopInfo: {},
    detailInfo: {},
    paramInfo: {},
    commentInfo: {},
    recommends: [],
    page: 0,
    currentIndex: 0,
    isLoading: false,
    isShow: false,
    param_height: 0,
    comment_height: 0,
    recommend_height: 0

  },
  onLoad: function (options) {
    // 1.获取传入的iid
    this.setData({
      iid: options.iid
    })

    // 2.请求商品详情数据
    this._getDetailData()

    // 3.请求推荐数据 
    this._getRecommends()


  },
  onReady: function () {
    this.getTop()
  },
  onShow: function () {

  },
  onHide: function () {

  },
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
    this._getRecommends()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  /**
   * 监听页面滚动
   */
  onPageScroll(options) {
    // 1.取出scrollTop
    const scrollTop = options.scrollTop
    // 取出各个高度
    const param = this.data.param_height
    const comment = this.data.comment_height
    const recommend = this.data.recommend_height
    // 2.修改showBackTop属性
    // 官方：不要在滚动的函数回调中频繁的调用this.setData
    const flag = scrollTop >= 1000
    if (flag != this.data.isShow) {
      this.setData({
        isShow: flag
      })
    }
    let index = 0
    if(scrollTop >= 0 && scrollTop < param ){
      index = 0
    }else if(scrollTop >= param && scrollTop < comment){
      index = 1
    }else if(scrollTop >= comment && scrollTop < recommend){
      index = 2
    }else if(scrollTop >= recommend ) {
      index = 3
    }
    if(index != this.data.currentIndex){
      this.setData({
        currentIndex:index
      })
    }
  },
  // 请求商品详情数据
  _getDetailData() {
    getDetail(this.data.iid).then(res => {
      const data = res.result

      // 1.取出顶部的图片
      const topImages = data.itemInfo.topImages

      // 2.创建BaseInfo对象
      const baseInfo = new GoodsBaseInfo(data.itemInfo, data.columns, data.shopInfo.services)

      // 3.创建ShopInfo对象
      const shopInfo = new ShopInfo(data.shopInfo)

      // 4.创建ParamInfo对象
      const paramInfo = new ParamInfo(data.itemParams.info, data.itemParams.rule)

      // 5.获取detailInfo信息
      const detailInfo = data.detailInfo

      // 6.获取评论信息
      let commentInfo = {}
      if (data.rate && data.rate.cRate > 0) {
        commentInfo = data.rate.list[0]
      }
      this.setData({
        topImages: topImages,
        baseInfo: baseInfo,
        shopInfo: shopInfo,
        detailInfo: detailInfo,
        paramInfo: paramInfo,
        commentInfo: commentInfo
      })
    })
  },
  // 请求推荐数据
  _getRecommends() {
    const page = this.data.page + 1
    getGoodsData('new', page).then(res => {
      // 2.1取出数据
      const list = res.data.list
      // 2.2将数据设置到对应type的list中
      const oldList = this.data.recommends
      oldList.push(...list)
      this.setData({
        page: page,
        recommends: oldList
      })
    })
  },
  // 加入购物车
  onAddCart() {
    // 1.获取商品对象
    const obj = {}
    obj.iid = this.data.iid
    obj.imageUrl = this.data.topImages[0]
    obj.title = this.data.baseInfo.title
    obj.desc = this.data.baseInfo.desc
    obj.price = this.data.baseInfo.realPrice

    // 2.加入购物车列表
    app.addToCart(obj)

    // 3.加入成功提示
    Toast({
      message: '加入购物车成功！',
      forbidClick: true,
    })
  },
  // 滚动到顶部
  ScrollTop() {
    wx.pageScrollTo({
      scrollTop: 0,
    })
  },
  // 滚动到参数
  ScrollParam() {
    wx.pageScrollTo({
      scrollTop: this.data.param_height - 30
    })
  },
  // 滚动到评论
  ScrollComment(){
    wx.pageScrollTo({
      scrollTop: this.data.comment_height - 30
    })
  },
  // 滚动到推荐
  ScrollRecommend(){
    wx.pageScrollTo({
      scrollTop: this.data.recommend_height - 30
    })
  },
  // 获取高度
  getTop() {
    const query = wx.createSelectorQuery()
    query.select('.paramInfo').boundingClientRect(res => {
      this.setData({
        param_height: res.top.toFixed(0)
      })
    }).exec()
    query.select('.comment').boundingClientRect(res => {
      this.setData({
        comment_height: res.top.toFixed(0)
      })
    }).exec()
    query.select('.recommend').boundingClientRect(res => {
      this.setData({
        recommend_height: res.top.toFixed(0)
      })
    }).exec()
    
  },
  imageLoad() {
    this.getTop()
  }
})