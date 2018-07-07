const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    stories:null,
    currentVid: null,
    currentVideo: null
  },
  play(ev) {
    if (this.data.currentVid !== null) {
      this.data.currentVideo.pause();
    }
    
    const currentVideo = wx.createVideoContext(`${ev.target.dataset.vid}`);

    currentVideo.play();

    this.setData({
      currentVideo,
      currentVid: ev.target.dataset.vid
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.setData({
        stories: app.globaData.stories
      })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
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
    
  }
})