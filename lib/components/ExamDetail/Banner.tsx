export interface BannerExamProps {
  imageUrl: string;
  title: string;
}

const BannerExam = ({ imageUrl, title }: BannerExamProps) => {
  return (
    <img
      className="h-60 w-full rounded-2xl border-2 border-black object-cover shadow-right"
      src={imageUrl}
      alt={`${title} exam banner`}
    />
  );
};

export default BannerExam;
