import React, { memo } from 'react'
// import { useNavigate } from 'react-router-dom'


const Shop = memo(() => {
  // const navigate = useNavigate();
  const test = () => {
    // navigate('/list');
    history.push('/list')
  }
  return (
    <div>
      Shop
      <button onClick={test}>点我</button>
    </div>
  )
})

export default Shop



// import React from 'react';
// import './style.css'
// const COLORS = ['#bbf7d0', '#99f6e4', '#bfdbfe', '#ddd6fe', '#f5d0fe', '#fed7aa', '#fee2e2'];
// const TAGS = ['HTML', 'CSS', 'JavaScript', 'Typescript', 'Tailwind', 'React', 'Next.js', 'Gatsby', 'UI/UX', 'SVG', 'animation', 'webdev'];
// const DURATION = 15000;
// const ROWS = 5;
// const TAGS_PER_ROW = 5;

// const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
// const shuffle = arr => [...arr].sort(() => 0.5 - Math.random());

// const InfiniteLoopSlider = ({ children, duration, reverse = false }) => {
//   return (
//     <div className="loop-slider" style={{
//       '--duration': `${duration}ms`,
//       '--direction': reverse ? 'reverse' : 'normal',
//     }}>
//       <div className="inner">
//         {children}
//         {children}
//       </div>
//     </div>
//   );
// };

// const Tag = ({ text }) => (
//   <div className="tag">
//     <span>#</span> {text}
//   </div>
// );

// const Shop = () => {
//   const tagRows = [...new Array(ROWS)].map((_, i) => (
//     <InfiniteLoopSlider
//       key={i}
//       duration={random(DURATION - 5000, DURATION + 5000)}
//       reverse={i % 2}
//     >
//       {shuffle(TAGS).slice(0, TAGS_PER_ROW).map((tag) => (
//         <Tag text={tag} key={tag} />
//       ))}
//     </InfiniteLoopSlider>
//   ));

//   return (
//     <div className="app">
//       <header>
//         <h1>无限滚动效果</h1>
//         <p>CSS only, content independent, bi-directional, customizable</p>
//       </header>

//       <div className="tag-list">
//         {tagRows}
//       </div>

//       <div className="fade" />
//     </div>
//   );
// };

// export default Shop;
