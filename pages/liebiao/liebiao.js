Page({
    data: {
      navList: ['樊登读书', '烟灶推荐', '净水饮水推荐', '洗碗机推荐', '电热推荐', '燃热推荐', '消毒柜推荐', '嵌入式推荐', '商用电器', '活动说明'],
      status: 0,
      fandeng: ['你好','我是樊登读书'],
      newlist:[]
    },
    getStatus(e) {
      this.setData({status: e.currentTarget.dataset.index});
      var inddaa=e.currentTarget.dataset.index;
      switch(inddaa)
      {
        case 0:
          this.setData({newlist: this.data.fandeng});
          break;
         default:
          this.setData({newlist: this.data.navList});
          break;
      }
    },
   onLoad: function (options) {
    this.setData({newlist: this.data.fandeng});
   }
  })