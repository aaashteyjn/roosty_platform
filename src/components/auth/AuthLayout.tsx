import { useState } from "react";
import { LoginForm } from "./LoginForm";
import { RegisterForm } from "./RegisterForm";

import logo from "../../assets/logo.png";
import { ParticlesBackground } from "../common/ParticlesBackground";

export function AuthLayout() {
  const [register, setRegister] = useState(false);

  return (
    <section className="relative min-h-screen overflow-y-auto bg-[#f7f6ff]">
      <ParticlesBackground variant="light" />

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          w-full
          max-w-md
          flex-col
          items-center
          px-6
          pt-12
          pb-12
        "
      >
        <img
          src={logo}
          alt="Roosty"
          className="mb-8 h-24 object-contain"
        />

        <div className="w-full rounded-3xl bg-white p-10 shadow-2xl">
          <div className="mb-8 flex border-b border-gray-200">
            <button
              onClick={() => setRegister(false)}
              className={`flex-1 pb-4 text-lg font-semibold transition ${
                !register
                  ? "border-b-2 border-[#7B68EE] text-[#7B68EE]"
                  : "text-gray-400"
              }`}
            >
              Вход
            </button>

            <button
              onClick={() => setRegister(true)}
              className={`flex-1 pb-4 text-lg font-semibold transition ${
                register
                  ? "border-b-2 border-[#7B68EE] text-[#7B68EE]"
                  : "text-gray-400"
              }`}
            >
              Регистрация
            </button>
          </div>

          {register ? <RegisterForm /> : <LoginForm />}
        </div>
      </div>
    </section>
  );
}