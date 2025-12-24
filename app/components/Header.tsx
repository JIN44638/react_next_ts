import Link from "next/link";

export default function Header() {
  return (
    <header className="p-10 border-b border-gray-300">
      <nav style={{ display: "flex", gap: "20px" }}>
        {/* link- next있는거로 import되어야 함 */}
        <Link href="/">홈</Link>
        <Link href="/productpage">상품페이지</Link>
        <Link href="/cart">장바구니</Link>
        <Link href="/login">로그인</Link>
        <Link href="/about">소개</Link>
      </nav>
    </header>
  );
}
