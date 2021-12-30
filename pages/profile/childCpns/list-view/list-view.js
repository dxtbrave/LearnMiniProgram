// pages/profile/childCpns/list-view/list-view.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    infos: {
      type: Array,
      value:[]
    },
    serviceList:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    activeNames: ['1'],
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onChange(event){
      this.setData({
        activeNames: event.detail,
      });
    }
  }
})
