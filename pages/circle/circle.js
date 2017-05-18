//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    imgList: [
      '1495097537305.jpg',
      '1495097537709.jpg',
      '1495097538114.jpg',
      '1495097538516.jpg',
      '1495097538920.jpg',
      '1495097539321.jpg',
      '1495097539722.jpg',
      '1495097540123.jpg',
      '1495097540524.jpg',
      '1495097540925.jpg',
      '1495097541327.jpg',
      '1495097541729.jpg',
      '1495097542130.jpg',
      '1495097542531.jpg',
      '1495097542932.jpg',
      '1495097543333.jpg',
      '1495097543734.jpg',
      '1495097544136.jpg',
      '1495097544537.jpg',
      '1495097545347.jpg',
      '1495097545748.jpg',
      '1495097546149.jpg'
    ],
    userInfo: {}
  },
  onLoad: function () {
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  }
})