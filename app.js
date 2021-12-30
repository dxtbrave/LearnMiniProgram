App({
  globalData: {
    cartList: [],
    hasUserInfo:false,
    userInfo:{}
  },
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    const hasUserInfo =  this.decideUserInfo()
    this.globalData.hasUserInfo = hasUserInfo
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {

  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {

  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {

  },
  // 加入购物车方法
  addToCart(obj) {
    // 1.判断是否已经添加进来
    const oldInfo = this.globalData.cartList.find(item => item.iid === obj.iid)
    if (oldInfo) {
      oldInfo.count += 1
    } else {
      obj.count = 1
      obj.checked = true
      this.globalData.cartList.push(obj)
    }

    // 2.购物车回调
    if (this.addCartCallback) {
      this.addCartCallback()
    }
  },

  // 判断storage是否有userInfo
  decideUserInfo(){
    let flag = false
    const userInfo = wx.getStorageSync('userInfo')
    // 1.判断Storage中userInfo是否为空
    if(userInfo){
      flag = true
      this.globalData.userInfo = userInfo
    }
    return flag
  },

  // 添加用户信息方法
  addUserInfo(obj){
    // 1.判断Storage中userInfo是否为空
    const userInfo = wx.getStorageSync('userInfo')
    if(userInfo){
      this.globalData.userInfo = userInfo
    }else{
      wx.setStorageSync('userInfo', obj)
    }
  }
})