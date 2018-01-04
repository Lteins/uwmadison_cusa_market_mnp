Page({
  data: {
    iconArray: [
      {
        checkImage: '/images/frontPage/market_buy.png' ,
        checkName: '二手市场-买'
      },
      {
        checkImage: '/images/frontPage/RMP.png',
        checkName: '敬请期待'
      },
      {
        checkImage: '/images/frontPage/market_sell.png',
        checkName: '二手市场-卖'
      }
    ],
    bigTitle: '/images/frontPage/title.png'
  },

  onLoad: function () {
    var app = getApp();
    // get userID
    wx.login({
      success: function (res) {
        if (res.code) {
          wx.request({
            url: 'https://madishare.com/LoginExecute.php',
            data: {
              LoginCode: res.code
            },
            method: "POST",
            header: {
              "content-type": "application/x-www-form-urlencoded",
            },
            success: function (res) {
              console.warn(res.data);
              app.globalData.userInfo = parseInt(res.data.UserId);
            }
          })
        } else {
          console.log('获取用户登录态失败！' + res.errMsg)
        }
      }
    });
  },

  jumpToMarket: function () {
    wx.navigateTo({
      url: '/pages/2s/2s'
    })
  },

  jumpToPostProduct: function () {
    wx.navigateTo({
      url: '/pages/2s/postProduct/po'
    })
  },
  
  // disable pull down
  onPullDownRefresh: function () {
    wx.stopPullDownRefresh()
  }

})