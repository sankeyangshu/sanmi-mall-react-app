import { Button } from 'react-vant';
import './index.less';

const Home = () => {
  return (
    <>
      <Button type="primary">Primary</Button>
      <Button type="info">Info</Button>
      <Button type="default">Default</Button>
      <Button type="warning">Warning</Button>
      <Button type="danger">Dangeer</Button>
    </>
  );
};

export default Home;
