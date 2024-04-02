import React, { memo } from 'react'

const User = memo(() => {
  return (
    <div>用户中心</div>
  )
})

export default User
// import echarts from 'echarts/lib/echarts';
// import 'echarts/lib/component/graphic';

// import React from 'react';
// import ReactECharts from 'echarts-for-react';

// const Home = () => {
//   var data = [
//     { name: '下线', intervals: [['00:50', '02:00'], ['04:00', '10:00'], ['10:00', '12:00']] },
//     { name: '上线', intervals: [['03:00', '04:00']] },
//     { name: '漫游', intervals: [['04:00', '10:00'], ['12:00', '14:00']] },
//     { name: '异常', intervals: [['15:00', '19:00']] },
//   ];

//   var hours = Array.from({ length: 24 }, (_, i) => `${i < 10 ? '0' : ''}${i}:00`);

//   var option = {
//     tooltip: {
//       trigger: 'axis',
//       formatter: function (params) {
//         var info = params[0];
//         return info.marker + info.name + ': ' + info.value[1] + ' - ' + info.value[2];
//       },
//     },
//     xAxis: {
//       type: 'category',
//       position: 'top',
//       axisLabel: {
//         show: true,
//         interval: 0,
//         color: '#333',
//       },
//       data: hours,
//       axisTick: {
//         show: true,
//         interval: 0,
//         alignWithLabel: true,
//         inside: true,
//         lineStyle: {
//           color: '#43D198',
//           width: 38,
//           height: 12,
//           borderRadius: 50,
//         },
//       },
//       axisLine: {
//         show: false,
//       },
//     },
//     yAxis: {
//       type: 'category',
//       position: 'left',
//       data: ['下线', '上线', '漫游', '异常'],
//       axisLabel: {
//         show: true,
//         interval: 0,
//         color: function (value) {
//           switch (value) {
//             case '下线':
//               return '#B0C4DE';
//             case '上线':
//               return 'green';
//             case '漫游':
//               return 'purple';
//             case '异常':
//               return 'red';
//             default:
//               return '#333';
//           }
//         },
//       },
//     },
//     series: data.map(function (item, idx) {
//       return {
//         name: item.name,
//         type: 'bar', // Modify to 'bar' or choose another valid series type
//         stack: 'chart',
//         barWidth: '80%', // Customize the width of the bar chart
//         data: item.intervals.map(function (interval) {
//           return [idx, interval[0], interval[1]];
//         }),
//         itemStyle: {
//           color: function (params) {
//             return option.yAxis.axisLabel.color(option.yAxis.data[params.data[0]]);
//           },
//         },
//       };
//     }),
//   };

//   return (
//     <div style={{ width: '100%', height: '400px' }}>
//       <ReactECharts option={option} />
//     </div>
//   );
// };

// export default Home;
