module.exports = [
  /**
   * 评价：
   *  0：未评价
   *  1：评价中
   *  2：已评价
   */
  {
    id: Math.random().toString().slice(2),
    title: "东城区 安外大街3号院",
    houseType: "1室1厅1卫 - 48m²",
    price: "4800",
    rentType: "整租",
    commentState: 0,
    img: "http://iwenwiki.com/api/livable/shop/z1.jpg"
  },
  {
    id: Math.random().toString().slice(2),
    title: "整租 · 义宾北区2居室-南北",
    houseType: "2室1厅1卫 - 78m²",
    price: "7200",
    rentType: "整租",
    commentState: 0,
    img: "http://iwenwiki.com/api/livable/shop/z5.jpg"
  },
  {
    id: Math.random().toString().slice(2),
    title: "整租 · 杨庄北区2居室-南北",
    houseType: "1室1厅1卫 - 48m²",
    price: "4300",
    rentType: "整租",
    commentState: 2,
    img: "http://iwenwiki.com/api/livable/shop/z6.jpg"
  }
]