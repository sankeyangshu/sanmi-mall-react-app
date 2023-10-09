import { Image } from 'react-vant';
import mCss from './index.module.less';

const NewGoods = () => {
  // 测试数据
  const goodsList = [
    {
      image: 'https://img.yzcdn.cn/vant/cat.jpeg',
      text: '这是一个商品商品哈哈哈',
      price: '600',
    },
    {
      image: 'https://img.yzcdn.cn/vant/cat.jpeg',
      text: '这是一个商品商品哈哈哈',
      price: '600',
    },
    {
      image: 'https://img.yzcdn.cn/vant/cat.jpeg',
      text: '这是一个商品商品哈哈哈',
      price: '600',
    },
    {
      image: 'https://img.yzcdn.cn/vant/cat.jpeg',
      text: '这是一个商品商品哈哈哈',
      price: '600',
    },
    {
      image: 'https://img.yzcdn.cn/vant/cat.jpeg',
      text: '这是一个商品商品哈哈哈',
      price: '600',
    },
    {
      image: 'https://img.yzcdn.cn/vant/cat.jpeg',
      text: '这是一个商品商品哈哈哈',
      price: '600',
    },
  ];

  return (
    <div className={mCss.newGoods}>
      <div className={mCss.scrollView}>
        <div className={mCss.goods}>
          {goodsList.map((item) => (
            <div className={mCss['goods-item']} key={item.image}>
              <Image src={item.image} className={mCss['goods-image']} />
              <span className={mCss['goods-text']}>{item.text}</span>
              <div className={mCss['goods-price']}>
                <span>¥</span>
                {item.price}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewGoods;
