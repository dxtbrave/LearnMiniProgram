// components/my-prop/my-prop.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
      // title:String
      title:{
        type:String,
        value:'我是默认值',
        observer:(newval,oldval)=>{
          console.log(newval,oldval);
        }
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
    
  },
  externalClasses:['titleclass']
})
