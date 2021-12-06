// custom-tab-bar/index.js
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
    active: 0,
    list: [
     {
      text: '首页',
      icon: 'home-o',
      url: '/pages/home/home'
     },
     {
      text: '分类',
      icon: 'apps-o',
      url: '/pages/category/category'
     },
     {
      text: '购物车',
      icon: 'cart-o',
      url: '/pages/cart/cart'
     },
     {
       text:'个人',
       icon:'user-o',
       url:'/pages/profile/profile'
     }
  ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onChange(event){
      wx.switchTab({
        url: this.data.list[event.detail].url,
      })
      
    }
  }
})