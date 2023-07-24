import { useSelector } from 'react-redux';
import PicsumImage from '../../../../components/UI/PicsumImage';
import { selectGrayscale } from '../../../../redux/features/grayscaleSlice';

const HomeContent = () => {
  const grayscale = useSelector(selectGrayscale);
  return (
    <>
      <PicsumImage photoId={1} width={400} height={250} grayscale={grayscale} />
      <PicsumImage photoId={2} width={400} height={250} grayscale={grayscale} />
      <PicsumImage photoId={3} width={400} height={250} grayscale={grayscale} />
      <PicsumImage photoId={4} width={400} height={250} grayscale={grayscale} />
    </>
  );
};
export default HomeContent;
