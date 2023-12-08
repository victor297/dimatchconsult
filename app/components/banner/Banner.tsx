import Link from "next/link";
interface BannerProps {
  height?: string;
  showButton?: boolean;
  head: string;
  content: string;
  paragragh: string;
  bg: string;
}
const Banner: React.FC<BannerProps> = ({
  bg,
  height = "min-h-[65vh]",
  showButton = false,
  head,
  content,
  paragragh,
}) => {
  return (
    <div className={`${height} ${bg} bg-cover bg-center relative `}>
      <div className="w-full lg:w-5/12 bg-opacity-70 bg-slate-800 backdrop-blur-lg absolute inset-0 flex flex-col justify-center gap-6 text-start p-16">
        <p className="text-white font-bold ">{head}</p>
        <p className="text-white font-bold text-3xl md:text-4xl lg:text-5xl ">
          {content}
        </p>
        <p className="text-white text-base">{paragragh}</p>
        {showButton ? (
          <div className="flex items-center gap-2">
            <button className="bg-emerald-400 p-2 text-black">
              Get consulting
            </button>
            <Link href={"/videos"}>
              <p className="text-white font-bold">Watch Videos</p>
            </Link>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Banner;
