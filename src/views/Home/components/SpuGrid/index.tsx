import { Arrow } from '@react-vant/icons';
import { forwardRef, useImperativeHandle } from 'react';
import mCss from './index.module.less';

/**
 * 商品spu参数类型
 */
type spuGridProps = {
  /**
   * 标题
   */
  title: string;
  /**
   * 子组件
   */
  children: React.ReactNode;
};

/**
 * 商品spu节点类型
 */
export interface spuGridRefType {
  /**
   * 点击更多
   */
  clickRight: (path: string) => void;
}

const SpuGrid = forwardRef<spuGridRefType, spuGridProps>(({ title, children }, ref) => {
  // 在子组件中使用 useImperativeHandle 自定义引用对象
  useImperativeHandle(ref, () => ({
    // 在引用对象中定义方法
    clickRight: (path) => {
      // 点击更多跳转
      onClickRight(path);
    },
  }));

  /**
   * 点击更多跳转
   * @param {string} path 跳转路径
   */
  const onClickRight = (path: string) => {
    console.log(path);
  };

  return (
    <div className={mCss.spuGrid}>
      <div className={mCss.title}>
        <div className={mCss['title-left']}>{title}</div>
        <div className={mCss['title-right']} onClick={() => onClickRight}>
          更多
          <Arrow fontSize={16} />
        </div>
      </div>
      <div className={mCss.content}>{children}</div>
    </div>
  );
});

export default SpuGrid;
