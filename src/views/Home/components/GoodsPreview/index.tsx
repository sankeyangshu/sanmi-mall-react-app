import { Image, Tag } from 'react-vant';
import mCss from './index.module.less';

const GoodsPreview = () => {
  const src = 'https://img.yzcdn.cn/vant/cat.jpeg';
  return (
    <div className={mCss.goodsPreview}>
      <Image src={src} />
      <div className={mCss.content}>
        <div className={mCss.title}>商品标题</div>
        <div className={mCss.tags}>
          <Tag color="#dcebe6" textColor="#157658" style={{ marginRight: '3px' }}>
            标签
          </Tag>
          <Tag color="#dcebe6" textColor="#157658">
            标签
          </Tag>
        </div>
        <div className={`${mCss.price} ${mCss.discount}`}>
          <span>¥</span>8000
        </div>
        <div className={mCss.price}>
          <span>¥</span>800
        </div>
        <div className={mCss.subtitle}>
          这是简介呵呵哈哈哈这是简介呵呵哈哈哈这是简介呵呵哈哈哈这是简介呵呵哈哈哈
        </div>
      </div>
    </div>
  );
};

export default GoodsPreview;
