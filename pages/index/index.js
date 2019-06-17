
Page({
  data: {
    datalist:[
      {
        title:"马",
        price:"10000",
        pic:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3300305952,1328708913&fm=27&gp=0.jpg"
      },
      {
        title: "小鸟",
        price: "800",
        pic:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2363037083,4182949652&fm=27&gp=0.jpg"
      },
      {
        title: "小狗",
        price: "5000",
        pic: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2758807304,2560528048&fm=27&gp=0.jpg"
      },
      { 
        title: "猴子",
        price: "12000",
        pic: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2488762186,4128944621&fm=27&gp=0.jpg"
      },
      {
        title: "猴子",
        price: "12000",
        pic: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2488762186,4128944621&fm=27&gp=0.jpg"
      },
      
    ]

   
  },
  //下单
  xiadan(event){
    console.log("点击了下单",event)
    let item = event.currentTarget.dataset.item
    let orderlist =[]
    let arrs = wx.getStorageSync("orderlist")
    if(arrs && arrs.length >0){
      orderlist = arrs
    }
    let order = {
      id:1,
      title: item.title,
      price: item.price
    }
    orderlist.push(order)
    
    wx.setStorageSync("orderlist", orderlist)
    wx.switchTab({
      url: '../orderlist/orderlist',
    })
    
 }
   
  }
)
