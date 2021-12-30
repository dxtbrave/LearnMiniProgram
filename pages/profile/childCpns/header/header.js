// pages/profile/childCpns/header/header.js
const app = getApp()
Component({
  /**
   * 组件的属性列表
   */
  properties: {
  },

  /**
   * 组件的初始数据
   */
  data: {
    isHeader:false,
    userInfo:{}
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleLogin(e){
      this.triggerEvent('showLoading')
      wx.getUserProfile({
        desc:'获取你的昵称、头像、地区及性别',
        success:res=>{
          app.addUserInfo(res.userInfo)
          this.setData({
            userInfo:res.userInfo,
            isHeader:true
          })
          this.triggerEvent('closeLoading')
        },
        fail:err=>{
          console.log(err);
          this.triggerEvent('closeLoading')
        }
      })
    },
    handleSignout(){
      this.triggerEvent('showDialog')
    },
    // 退出登录方法
    Signout(){
      this.triggerEvent('showLoading')
      setTimeout(()=>{
        this.setData({
          userInfo:{},
          isHeader:false
        })
        this.triggerEvent('closeLoading')
      },500)

    }
  }
})
