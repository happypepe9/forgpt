import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <nav className="mb-4">
        <ul className="flex gap-4">
          <li><Link href="/">الرئيسية</Link></li>
          <li><Link href="/clients">العملاء</Link></li>
          <li><Link href="/cases">القضايا</Link></li>
          <li><Link href="/sessions">الجلسات</Link></li>
          <li><Link href="/appointments">المواعيد</Link></li>
          <li><Link href="/financials">المالية</Link></li>
        </ul>
      </nav>
      {children}
    </div>
  );
}
