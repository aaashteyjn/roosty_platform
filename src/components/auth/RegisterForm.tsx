import { Button } from "../ui/Button";
import { Input } from "../ui/Input";

export function RegisterForm() {
  return (
    <form>

      <Input
        label="Имя"
        placeholder="Введите имя"
      />

      <Input
        label="Email"
        type="email"
        placeholder="Введите email"
      />

      <Input
        label="Пароль"
        type="password"
        placeholder="Придумайте пароль"
      />

      <Input
        label="Повторите пароль"
        type="password"
        placeholder="Повторите пароль"
      />

      <label className="mb-8 flex items-center gap-2 text-sm text-[#666]">
        <input type="checkbox" />
        Я принимаю пользовательское соглашение
      </label>

      <Button className="w-full">
        Создать аккаунт
      </Button>

    </form>
  );
}