// components/w-tab-control/w-tab-control.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    titles:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    tabItemClick(event){
      // 改变index
      const index = event.currentTarget.dataset.index
      if(index !== this.data.currentIndex){
        this.setData({
          currentIndex:index
        })
        // 2.发出事件
        const data = {index}
        this.triggerEvent('tabClick',data,{})
      }
      
    }
  }
})
