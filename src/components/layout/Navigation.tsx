import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const links = [
  { title: "Главная", href: "/" },
  { title: "Эксперты", href: "/experts" },
  { title: "Лента", href: "/feed" },
  { title: "Автор", href: "/author/dmitry-evstafiev" },
  { title: "Пост", href: "/post/1" },
  { title: "Профиль", href: "/profile" },
  { title: "Кабинет автора", href: "/author/dashboard" },
  { title: "Стать автором", href: "/become-author" },
];

export function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Desktop */}

      <nav className="hidden lg:block">
        <ul className="flex items-center gap-10">
          {links.map((link) => (
            <li key={link.title}>
              <Link
                to={link.href}
                className="
                  text-[18px]
                  font-semibold
                  text-[#333]
                  transition-colors
                  hover:text-[#7B68EE]
                "
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Burger */}

      <button
        onClick={() => setOpen(true)}
        className="rounded-xl p-2 transition hover:bg-[#F5F3FF] lg:hidden"
      >
        <Menu size={30} />
      </button>

      {/* Overlay */}

      <div
        onClick={() => setOpen(false)}
        className={`
          fixed inset-0 z-40 bg-black/40 transition-opacity duration-300
          ${open ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
      />

      {/* Drawer */}

      <aside
        className={`
          fixed right-0 top-0 z-50
          flex h-full w-80 flex-col
          bg-white
          shadow-2xl
          transition-transform
          duration-300
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="flex items-center justify-between border-b p-6">
          <h2 className="text-xl font-bold">
            Меню
          </h2>

          <button
            onClick={() => setOpen(false)}
            className="rounded-lg p-2 hover:bg-gray-100"
          >
            <X size={28} />
          </button>
        </div>

        <nav className="flex flex-1 flex-col p-6">
          {links.map((link) => (
            <Link
              key={link.title}
              to={link.href}
              onClick={() => setOpen(false)}
              className="
                rounded-xl
                px-4
                py-3
                text-lg
                font-semibold
                transition
                hover:bg-[#F5F3FF]
                hover:text-[#7B68EE]
              "
            >
              {link.title}
            </Link>
          ))}
        </nav>

        <div className="border-t p-6">
          <Link
            to="/auth"
            onClick={() => setOpen(false)}
            className="
              flex
              h-12
              items-center
              justify-center
              rounded-xl
              bg-[#7B68EE]
              font-semibold
              text-white
              transition
              hover:bg-[#6955e6]
            "
          >
            Войти
          </Link>
        </div>
      </aside>
    </>
  );
}