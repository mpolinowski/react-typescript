import { LoginForm } from '@/components/login/Login'


export function Welcome() {
  return (
      <div className="flex flex-col py-10 max-w-md mx-auto">
          <h2 className="text-3xl font-bold underline mb-3">
            Welcome!
          </h2>
          <LoginForm />
      </div>
  );
}