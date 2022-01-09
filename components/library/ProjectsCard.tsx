import Image from "next/image";
import { CodeIcon, ExternalLinkIcon } from "@heroicons/react/outline";

interface Props {
  img: string;
  url: string;
  github_url: string;
  body: string[];
  tags: Tag[];
}

interface Tag {
  text: string;
  class: string;
}

const ProjectsCard = ({ img, url, github_url, tags, body }: Props) => {
  return (
    <div className="rounded-md shadow-card hover:shadow-h-card  transition-all ease-in-out duration-300 text-text bg-background max-w-lg">
      <div className="h-full">
        <div className="relative h-52 max-h-52 text-center mb-2">
          <Image src={img} layout="fill" alt="test" objectFit="cover" />
        </div>
        <div className="flex justify-center py-3">
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="flex transition-all ease-in-out hover:shadow-card items-center bg-primary text-white text-sm my-1 py-1 px-3 mr-2 rounded-md duration-500 hover:bg-[#ce4f35dc]"
          >
            <ExternalLinkIcon className="h-5 w-5 mr-1" />
            Visit
          </a>
          <a
            href={github_url}
            target="_blank"
            rel="noreferrer"
            className="flex transition-all ease-in-out hover:shadow-card items-center bg-primary text-white text-sm my-1 py-1 px-3 mr-2 rounded-md duration-500 hover:bg-[#ce4f35dc]"
          >
            <CodeIcon className="h-5 w-5 mr-1" />
            GitHub
          </a>
        </div>
        <div className="text-lg leading-relaxed px-3">
          {body.map((paragraph, index) => {
            return <p key={index}>{paragraph}</p>;
          })}
        </div>
        <div className="flex flex-col mt-4 flex-grow justify-end px-3 pb-3">
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

export default ProjectsCard;