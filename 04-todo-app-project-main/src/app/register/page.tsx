import AuthForm from '@/components/auth/AuthForm';
import Header from '@/components/Header';

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="flex items-center justify-center min-h-[calc(100vh-64px)] px-4 py-12">
        <div className="w-full max-w-md bg-white shadow-md rounded-2xl p-8 sm:p-10 border border-gray-200">
          <h2 className="text-2xl sm:text-3xl font-semibold text-center text-gray-800 mb-6">
            Create an Account ✨
          </h2>
          <AuthForm isLogin={false} />
        </div>
      </div>
    </div>
  );
}
