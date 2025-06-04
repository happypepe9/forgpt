import Layout from '@/components/Layout';
import { useUser } from '@clerk/nextjs';
import Link from 'next/link';

export default function Home() {
  const { user } = useUser();

  return (
    <Layout>
      <h1 className="text-xl font-bold mb-4">لوحة التحكم</h1>
      {user ? (
        <p>مرحباً، {user.firstName}</p>
      ) : (
        <Link href="/sign-in">تسجيل الدخول</Link>
      )}
    </Layout>
  );
}
