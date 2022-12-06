import { FC } from "react";

const ContentCard: FC<IContentCard> = (props) => {
  const { image, body, title, inverse = false } = props;

  return (
    <div className="p-10 rounded shadow-md grid grid-cols-1 md:grid-cols-2 gap-8 items-center ">
      <div className={`h-fit md:max-w-[500px] md:px-10`}>
        <h1 className="text-center text-[20px] my-4 md:text-left ">{title}</h1>
        <p className="text-center text-grayishBlue md:text-left">{body}</p>
      </div>

      <div
        className={`${
          inverse && "md:row-start-1"
        } h-fit md:max-w-[400px] mx-auto`}
      >
        <img src={image}></img>
      </div>
    </div>
  );
};

interface IContentCard {
  image: string;
  body: string;
  title: string;
  inverse?: boolean;
}

export default ContentCard;
