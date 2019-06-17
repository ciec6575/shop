// pages/orderlist/orderlist.js
Page({
  data: {
orderlist : []
  },
  onShow: function () {
    let orderlist = wx.getStorageSync("orderlist")
    console.log(orderlist)
    this.setData({
      orderlist:orderlist
    })
  }, 
})