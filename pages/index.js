import Head from 'next/head';
import Dasboard from './dashboard';
import { getSession, useSession } from 'next-auth/client';
import Login from '../components/Login';

export default function Home() {
  const [session] = useSession();

  if (!session) return <Login />;

  return (
    <div>
      <Dasboard />
    </div>
  );
}
