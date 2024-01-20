/*
  トップページの「最新の記事」で表示する、記事のアブスト表示
*/

import { AiTwotoneTags } from 'react-icons/ai';
import { Date } from '@/components/common/Date';
import { Image } from '@/components/common/Image';
import { Link } from '@/components/common/Link';

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  slug: string;
  tags: string[];
};

export const Story = ({ title, coverImage, date, excerpt, slug, tags  }: Props) => {
  tags = Array.isArray(tags) ? tags : [];
  return (
    <Link href={`/posts/${slug}`}>
      <a className="select-none w-full h-full vstack md:flex-row cursor-pointer focus:outline-2 ">
        <div className="center w-full md:w-1/6 h-52 md:h-full bg-neutral-50 md:bg-transparent">
          <Image
            src={coverImage}
            alt={`Cover Image for ${title}`}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="md:w-5/6 p-4 md:p-6 vstack gap-2 bg-primary-1">
          <Date date={date} />
          <h1 className="text-primary-1 text-xl sm:text-2xl md:text-2xl font-medium tracking-tighter whitespace-normal">
            {title}
          </h1>
          <p className="text-neutral-700 dark:text-neutral-300 font-normal text-md line-clamp-2 sm:line-clamp-4 md:line-clamp-3">
            {excerpt}
          </p>
          <div className="wrap gap-2">
            <span className="select-none text-primary-1">
              <AiTwotoneTags />
            </span>
            {tags.map((tag) => (
              <Link key={tag} href={`/tags/${tag}`} passHref>
                <a className="badge">{tag}</a>
              </Link>
            ))}
          </div>
        </div>
          
      </a>
    </Link>
  );
};
