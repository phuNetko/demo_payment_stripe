// import { Spinner } from '@material-tailwind/react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store';

const Loading = () => {
  const isLoading = useSelector((state: RootState) => state.themeConfig.loading);
  return (
    <>
      {isLoading ? (
        <div className="fixed w-full h-screen flex justify-center items-center" style={{ zIndex: 99999 }}>
          <div className="absolute w-full h-screen opacity-50 bg-gray-500"></div>
          <div>
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Loading;
