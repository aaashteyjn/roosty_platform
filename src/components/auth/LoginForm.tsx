import { Button } from "../ui/Button";
import { Input } from "../ui/Input";

export function LoginForm() {
  return (
    <form>

      <Input
        label="Email"
        type="email"
        placeholder="Введите email"
      />

      <Input
        label="Пароль"
        type="password"
        placeholder="Введите пароль"
      />

      <div className="mb-8 flex items-center justify-between">

        <label className="flex items-center gap-2 text-sm text-[#666]">
          <input type="checkbox" />
          Запомнить меня
        </label>

        <button
          type="button"
          className="text-sm font-semibold text-[#7B68EE]"
        >
          Забыли пароль?
        </button>

      </div>

      <Button className="w-full">
        Войти
      </Button>

    </form>
  );
}