import { Image } from 'react-vant';
import mCss from './index.module.less';

const HotList = () => {
  const src = 'https://img.yzcdn.cn/vant/cat.jpeg';

  return (
    <div className={mCss.hotList}>
      <Image src={src} className={mCss.left} />
      <div className={mCss.right}>
        <Image src={src} className={mCss['right-image']} />
        <Image src={src} className={mCss['right-image']} />
      </div>
    </div>
  );
};

export default HotList;
