// pages/detail/childCpns/bottom-bar/bottom-bar.js
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

  },

  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 加入购物车
     */
    onAddCart(){
      this.triggerEvent('addcart',{},{})
    }
  }
})
