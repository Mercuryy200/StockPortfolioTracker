import { title } from "@/components/primitives";
import { LoginForm } from "@/components/login/form";

export default function LoginPage() {
  return (
    <div>
      <h1 className={title()}>Login</h1>
      <LoginForm />
    </div>
  );
}
