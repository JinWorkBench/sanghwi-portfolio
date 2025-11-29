export default function Header() {
  return (
		<header className="w-full">
			<div className="flex max-w-5xl mx-auto px-6 py-4 items-center justify-between">
				{/* 로고 */}
				<div>로고</div>
				{/* 중앙 네비게이션 */}
				<nav>네비게이션</nav>
				{/* 아이콘 그룹 */}
				<div>아이콘</div>
			</div>
		</header>
  );
}