import { Divider, Image, Swiper } from 'react-vant';
import WaterFall from '@/components/WaterFall';
import CategoryGrid from './components/CategoryGrid';
import GoodsPreview from './components/GoodsPreview';
import HotList from './components/HotList';
import NewGoods from './components/NewGoods';
import SpuGrid from './components/SpuGrid';
import mCss from './index.module.less';

const Home = () => {
  const src = 'https://img.yzcdn.cn/vant/cat.jpeg';

  const images = ['https://img.yzcdn.cn/vant/cat.jpeg', 'https://img.yzcdn.cn/vant/cat.jpeg'];

  return (
    <div className={mCss.home}>
      {/* 活动 */}
      <Image width="100%" height="130" src={src} />

      {/* 轮播图 */}
      <Swiper autoplay={3000}>
        {images.map((image, index) => (
          <Swiper.Item key={index}>
            <Image height={180} lazyload src={image} />
          </Swiper.Item>
        ))}
      </Swiper>

      {/* 宫格 */}
      <CategoryGrid />

      {/* 优惠券 */}
      <Image width="100%" height="155" src={src} style={{ marginTop: '10px' }} />

      {/* 新品上市 */}
      <SpuGrid title="新品上市">
        <NewGoods />
      </SpuGrid>

      {/* 精选好物 */}
      <SpuGrid title="精选好物">
        <HotList />
      </SpuGrid>

      {/* 猜你喜欢 */}
      <Divider style={{ color: '#157658', borderColor: '#dcebe6', padding: '0 10px' }}>
        猜你喜欢
      </Divider>
      <WaterFall>
        <GoodsPreview />
      </WaterFall>
    </div>
  );
};

export default Home;
