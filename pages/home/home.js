// pages/home/home.js
Page({
  data: {
    name:'董笑天',
    age:22,
    students:[
      {id:110,name:'dxt',age:22},
      {id:111,name:'dhl',age:20},
      {id:112,name:'xl',age:21}
    ],
    counter:0
  },
  handleBtnAdd(){
    this.setData({
      counter:this.data.counter + 1
    })
  },
  handleBtnStraction(){
    this.setData({
      counter:this.data.counter - 1
    })
  }
})