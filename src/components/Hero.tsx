import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex items-center justify-center px-6 py-20 md:py-32">
      <div className="max-w-4xl mx-auto text-center">
        {/* 메인 타이틀 */}
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
          안녕하세요, <br className="md:hidden" />
          <span className="text-blue-600 dark:text-blue-400">진상휘</span>입니다
        </h1>

        {/* 부제목 */}
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
          개발자 | 문제 해결자 | 지속 가능한 코드 작성자
        </p>

        {/* 설명 */}
        <p className="text-lg text-gray-500 dark:text-gray-400 mb-12 leading-relaxed">
          사용자 경험을 개선하고, 효율적인 솔루션을 만드는 것을 좋아합니다.
          <br />
          Next.js와 TypeScript로 현대적인 웹 애플리케이션을 구축합니다.
        </p>

        {/* CTA 버튼 그룹 */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/projects"
            className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            프로젝트 보기
          </Link>
          <Link
            href="/contact"
            className="px-8 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            연락하기
          </Link>
        </div>
      </div>
    </section>
  );
}