import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full">
      <div className="flex max-w-5xl mx-auto px-6 py-12 items-center justify-between">
        {/* 로고 */}
        <div className="text-xl font-bold text-blue-600">BRILYENT</div>

        {/* 중앙 네비게이션 */}
        <nav>
          <ul className="flex gap-8 items-center">
            <li>
              <Link href="/about" className="text-gray-600 font-semibold">
                About
              </Link>
            </li>
            <li>
              <Link href="/projects" className="text-gray-600 font-semibold">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-600 font-semibold">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* 아이콘 그룹 */}
        <div className="flex items-center gap-4">
          <button
            className="w-6 h-6 text-gray-600 hover:text-gray-900 transition-colors"
            aria-label="다크모드 토글"
          >
            {/* 달 아이콘 (SVG) */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
              />
            </svg>
          </button>
          <Link
            href="https://github.com/JinWorkBench/sanghwi-portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="w-6 h-6 text-gray-600 hover:text-gray-900 transition-colors"
            aria-label="GitHub에서 소스 코드 보기"
          >
            {/* 깃허브 아이콘 (SVG) */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </Link>
        </div>
      </div>
    </header>
  );
}
