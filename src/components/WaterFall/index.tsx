import { FC } from 'react';
import mCss from './index.module.less';

type WaterFallProps = {
  children: React.ReactNode;
};

const WaterFall: FC<WaterFallProps> = ({ children }) => {
  return (
    <div className={mCss.waterfall}>
      <div className={mCss.list}>{children}</div>
      <div className={mCss.list}>{children}</div>
    </div>
  );
};

export default WaterFall;
