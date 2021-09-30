// pages/live/live.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentIndex:0,
    channels:[],
    showChannels:true,
    arrowImg:"img/ic_arrow_right.png"
  },

  getRect: function () {
    var _this = this;
　　//我这里需要获取多个元素的高度，所以用的是selectAll
    wx.createSelectorQuery().selectAll(' .video-box, .channel_roo').boundingClientRect().exec(function(res){
      _this.setData({
        tabContHeight: res[0][0].height - res[0][1].height 
      })
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    var that = this
    wx.request({
     url: 'http://42.193.177.189',
     headers: {
      'Content-Type': 'application/json'
     },
     success: function (res) {
      //将获取到的json数据，存在名字叫list的这个数组中
      that.setData({
        channels: res.data,
       //res代表success函数的事件对，data是固定的，list是数组
      })
     }
    })
    console.log(channels)
   },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.getRect();
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  onChannelClick(e){
    if(e.currentTarget.dataset.position == this.data.currentIndex){
      return
    }
    this.setData({
      currentIndex:e.currentTarget.dataset.position
    })
    console.log(e)
  },
  goliebiao:function(){
    wx.navigateTo({
      url:'../liebiao/liebiao', //
      success:function() {
 
      },       //成功后的回调；
      fail:function() { },         //失败后的回调；
      complete:function() { }      //结束后的回调(成功，失败都会执行)
 })},
  onArrowClick(e){
    if(this.data.showChannels){
      this.setData({
        showChannels:false,
        arrowImg:"img/ic_arrow_left.png"
      })
    } else {
      this.setData({
        showChannels:true,
        arrowImg:"img/ic_arrow_right.png"
      })
    }
  },
  bindVideoEnterPictureInPicture() {
    console.log('进入小窗模式')
  },

  bindVideoLeavePictureInPicture() {
    console.log('退出小窗模式')
  },

  screenChange(res){
    console.log("screenChange->res:" + JSON.stringify(res))

  }
})
