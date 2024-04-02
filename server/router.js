const express = require('express');
const router = express.Router();
const homehot = require('./data/home/homehot');
const url = require('url');
const searchData = require('./data/search/index');

const commentData = require('./data/comment')
const detailData = require('./data/details')
const orderCommentData = require('./data/order')

// 使用Mock 
const Mock = require('mockjs');
const { log } = require('console');
const Random = Mock.Random
/**
 * @homehot  首页数据
 */
router.get('/home/hot1', (req, res) => {
  const city = url.parse(req.url, true).query.cityName;
  res.send({
    status: 200,
    result: homehot.hot1,
    city: city
  })
})

router.get('/home/hot2', (req, res) => {
  const city = url.parse(req.url, true).query.cityName;
  res.send({
    status: 200,
    result: homehot.hot2,
    city: city
  })
})
/**
 * 搜索
 */
router.get('/search', (req, res) => {
  const search = url.parse(req.url, true).query.search;
  console.log(search);
  let data = Mock.mock({
    hasMore: true,
    'data|5': [{
      id: Random.integer(),
      title: Random.csentence(5, 8),
      houseType: "17/19层| 4室1厅 - 273.97 ㎡",
      price: "<h3>130000</h3>",
      rentType: Random.cword(2),
      img: Random.image('800x600', Random.color(), '#FFF', 'png', Random.cword(5))
      // img: Random.image('800x600', '#ccc', '#FFF', 'png', '宜居.品质享受')
    }]
  })
  res.send({
    status: 200,
    // result: searchData
    result: data
  })
})


/**
 * Mock 测试
 */

// id: Math.random().toString().slice(2),
// title: "豪宅 · 使馆壹号院4居室-南",
// houseType: "17/19层| 4室1厅 - 273.97 ㎡",
// price: "<h3>130000</h3>",
// rentType: "整租",
// img: "http://iwenwiki.com/api/livable/search/1.jpg"

router.get('/mock', (req, res) => {
  let data = Mock.mock({
    'data|5': [{
      id: Random.integer(),
      title: Random.csentence(5, 8),
      houseType: "17/19层| 4室1厅 - 273.97 ㎡",
      price: "<h3>130000</h3>",
      rentType: Random.cword(2),
      img: Random.image('800x600', Random.color(), '#FFF', 'png', Random.cword(5))
    }]
  })
  res.send(data)
})



/**
 * 详情页
 */
// router.get('/details', (req, res) => {
//   const id = url.parse(req.url, true).query.id;
//   console.log(id);
//   res.send({
//     detailData
//   });
// })

router.get("/details", (req, res) => {
  const id = url.parse(req.url, true).query.id;
  console.log(id);
  res.send(detailData)
})

// 登陆
router.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (username && password) {
    res.send({
      status: 200,
      token: "enjy23rsdfe3fsveq.23r23sfdvfv.asdfqf4ag34ghdfjtkjhq",
      nick: username
    })
  } else {
    res.send({
      status: 400,
      msg: '用户名密码错误'
    })
  }
})


// 评论

router.get("/comment", (req, res) => {
  const id = url.parse(req.url).query.id;
  console.log(id);
  res.send({
    status: 200,
    result: commentData
  })
})


/**
 * 订单评论
 */

router.get('/order/comment', (req, res) => {
  const username = url.parse(req.url, true).query.username;
  console.log(username);
  res.send({
    status: 200,
    result: orderCommentData
  })
})


/**
 * 评价
 */

router.post('/order/submit/comment', (req, res) => {
  const { username, id, content } = req.body;
  console.log(username, id, content);
  res.send({
    status: 200,
    msg: '评价成功'
  })
})

module.exports = router;