// pages/detail/childCpns/detail-info/detail-info.js
import {debounce} from "../../../../utils/utils"
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    detailInfo: {
      type: Object,
      value:{}
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
    handleonLoad(){
     this.sendEvent()     
    },
    sendEvent(){
      this.triggerEvent('imageLoad',{},{})
    }
  }
})
