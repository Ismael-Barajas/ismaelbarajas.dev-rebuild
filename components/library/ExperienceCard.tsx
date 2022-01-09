import Image from "next/image";

interface Props {
  img: string;
  position: Position;
  body: string[];
  tags: Tag[];
}

interface Position {
  position: string;
  time_commitment: string;
}

interface Tag {
  text: string;
  class: string;
}

const ExperienceCard = ({ img, position, body, tags }: Props) => {
  return (
    <div className="rounded-md p-6 shadow-card hover:shadow-h-card  transition-all ease-in-out duration-300 text-text bg-secondary">
      <div className="h-full">
        <a target="_blank" href="#" rel="noopener" className="h-full">
          <div className="relative h-24 max-h-24 text-center mb-2 transition-shadow duration-500 ease-in-out hover:shadow-h-card rounded-sm">
            <Image src={img} layout="fill" alt="test" objectFit="contain" />
          </div>
        </a>
        <div className="text-center text-sm py-3 text-gray-500 dark:text-gray-400">
          <p>{position.position}</p>
          <p>{position.time_commitment}</p>
        </div>
        <div className="text-lg leading-relaxed">
          {body.map((paragraph, index) => {
            return <p key={index}>{paragraph}</p>;
          })}
        </div>
        <div className="flex flex-col mt-4 flex-grow justify-end">
          <ul className="flex flex-wrap">
            {tags.map((tag, index) => {
              return (
                <li
                  key={index}
                  className={`${tag.class} text-sm my-1 py-1 px-4 mr-2 rounded-md`}
                >
                  {tag.text}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;