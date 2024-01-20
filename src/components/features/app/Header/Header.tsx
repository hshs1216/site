import React from 'react';
import { FiSun } from 'react-icons/fi';
import { SiGithub} from 'react-icons/si';
import { Link } from '@/components/common/Link';
import { ContentLayout } from '@/components/features/app/Layout';
import { useDarkMode } from '@/hooks/useDarkMode';
import { NavBar } from './NavBar';

export const Header = () => {
  const { toggle } = useDarkMode();

  return (
    <ContentLayout className="sticky top-0 z-10 py-1 header-container  header-border">
      <nav className="hstack justify-between">
        <Link href="/" passHref>
          <a className="select-none text-primary-1 text-2xl md:text-3xl font-bold ">
            hshs1216&apos;s site
          </a>
        </Link>

        <div className="hidden lg:flex">
          <NavBar />
        </div>

        <div className="flex gap-4">
          <button
            type="button"
            className="icon-btn"
            aria-label="toggle theme"
            onClick={() => toggle()}
          >
            <FiSun />
          </button>
          <a href="https://github.com/hshs1216/site" target="_blank" rel="noopener noreferrer">
            <button
              type="button"
              className="icon-btn"
              aria-label="GitHub link"
            >
              <SiGithub />
            </button>
          </a>
        </div>
      </nav>
    </ContentLayout>
  );
};
