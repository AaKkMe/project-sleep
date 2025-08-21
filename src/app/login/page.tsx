import { LoginForm } from "@/components/login-form"
import { RegForm } from "@/components/reg-form"

export default function Page() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <>
        <LoginForm />
        <RegForm />
        </>
      </div>
    </div>
  )
}
