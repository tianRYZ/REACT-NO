import React from 'react';
import { Button } from 'antd';
import html2pdf from 'html2pdf.js';
import toBanner from '../../../../assets/images/to2.jpg'
import './style.less'
const HTMLToPDF = () => {
  const exportPDF = () => {
    const element = document.getElementById('content-to-export');
    html2pdf(element);
  };

  return (
    <div>
      <div id="content-to-export">
        <div className='top'>
          <img src={toBanner} alt='' />
          <div className='cover'></div>
          <div className='bottom'>国语说唱也很抒情，副歌也美</div>
        </div>
      </div>
      <Button className='button' onClick={exportPDF}>导出为 PDF</Button>
    </div>
  );
};

export default HTMLToPDF;
