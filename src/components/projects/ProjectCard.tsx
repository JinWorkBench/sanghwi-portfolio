export default function ProjectCard() {
  return (
    <article className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-shadow">
      {/* 썸네일 영역 */}
      <div className="aspect-video bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
        <p className="text-gray-400 dark:text-gray-500 text-sm">
          썸네일 이미지
        </p>
      </div>

      {/* 프로젝트 정보 */}
      <div className="p-6">
        {/* 제목 */}
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          프로젝트 제목
        </h3>

        {/* 설명 */}
        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
          프로젝트에 대한 간단한 설명입니다.
        </p>

        {/* 기술 스택 */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
            React
          </span>
          <span className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
            TypeScript
          </span>
          <span className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
            Next.js
          </span>
        </div>

        {/* 날짜 */}
        <p className="text-sm text-gray-500 dark:text-gray-500">
          2024.01 - 2024.03
        </p>
      </div>
    </article>
  );
}
