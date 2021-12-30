// pages/category/childCpns/menu/menu.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    categories:{
      type:Array,
      value:[]
    }
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
    onChange(options){
      // 将最新的currentIndex传递到分类页面
      this.triggerEvent('menuclick', {
        index:options.detail
      }, {})
    }
  }
})
