import { signIn } from 'next-auth/client';

export default function Login() {
  return (
    <div>
      <div>
        <h1 class="text-3xl text-gray-700 font-bold"> Revamp AI</h1>
        <button class="btn gap-2 btn-primary text-white" onClick={signIn}>
          Login
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
