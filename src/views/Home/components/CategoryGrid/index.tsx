import { Grid, Image } from 'react-vant';
import mCss from './index.module.less';

const CategoryGrid = () => {
  return (
    <div className={mCss.category}>
      <Grid border={false} className={mCss.grid}>
        <Grid.Item className={mCss['grid-item']}>
          <Image src="https://img.yzcdn.cn/vant/apple-1.jpg" className={mCss.img} />
          <span className={mCss.text}>文字</span>
        </Grid.Item>
        <Grid.Item className={mCss['grid-item']}>
          <Image src="https://img.yzcdn.cn/vant/apple-1.jpg" className={mCss.img} />
          <span className={mCss.text}>文字</span>
        </Grid.Item>
        <Grid.Item className={mCss['grid-item']}>
          <Image src="https://img.yzcdn.cn/vant/apple-1.jpg" className={mCss.img} />
          <span className={mCss.text}>文字</span>
        </Grid.Item>
      </Grid>
    </div>
  );
};

export default CategoryGrid;
