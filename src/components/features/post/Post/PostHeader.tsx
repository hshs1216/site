/*
   記事中でのヘッダー表示
 */

import { AiTwotoneTags } from 'react-icons/ai';
import { SiGithub} from 'react-icons/si';
import { Date } from '@/components/common/Date';
import { Link } from '@/components/common/Link';

type Props = {
  title: string;
  date: string;
  tags: string[];
};

export const PostHeader = ({ title, date, tags }: Props) => {
  return (
    <div className="vstack gap-4">
      <h1 className="text-primary-1 text-xl sm:text-3xl md:text-4xl font-bold tracking-tighter leading-tight">
        {title}
      </h1>
      <div className="flex justify-between w-full items-center">
        <div className="flex gap-4">
          <Date date={date} />
          <div className="flex gap-2">
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
        {/* GitHubリンクとEditテキストを一つのリンクとしてまとめる */}
        <Link href="https://github.com/hshs1216/site//tree/main/_posts" passHref>
          <a
            className="flex items-center gap-2 icon-btn"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Edit on GitHub"
          >
            <SiGithub /> {/* GitHubアイコン */}
            <span>Edit</span> {/* Editテキスト */}
          </a>
        </Link>
      </div>
    </div>
  );
};

