import Image from 'next/image';

const BackgroundImage: React.FC = () => {
  return (
    <div className="w-full">
      <Image className="" src="/Banner.png" alt="Background Image" width={0} height={0} />
    </div>
  );
};

export default BackgroundImage;