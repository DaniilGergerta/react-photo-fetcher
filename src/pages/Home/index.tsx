import { FC } from 'react';
import HomeContent from './views/HomeContent';
import HomeHeader from './views/HomeHeader';

const Home: FC = () => {
  return (
    <>
      <HomeHeader />
      <HomeContent />
    </>
  );
};
export default Home;
