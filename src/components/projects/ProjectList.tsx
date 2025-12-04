export default function ProjectList() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
      {/* 프로젝트 헤더 */}
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Projects
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          제가 작업한 프로젝트들을 소개합니다
        </p>
      </div>

      {/* 프로젝트 그리드 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <p className="text-gray-500 dark:text-gray-400">프로젝트 카드 영역</p>
      </div>
    </section>
  );
}
