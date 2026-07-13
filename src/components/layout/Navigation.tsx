import { Link } from "react-router-dom";


const links = [
  {
    title: "Главная",
    href: "/",
  },
  {
    title: "Эксперты",
    href: "/experts",
  },
  {
    title: "Лента",
    href: "/feed",
  },
  {
    title: "Автор",
    href: "/author/dmitry-evstafiev",
  },
  {
    title: "Пост",
    href: "/post/1",
  },
  {
    title: "Профиль",
    href: "/profile",
  },
  {
    title: "Кабинет автора",
    href: "/author/dashboard",
  },
  {
    title: "Стать автором",
    href: "/become-author",
  },
];


export function Navigation() {
  return (
    <nav>
      <ul className="flex items-center gap-10">

        {links.map((link) => (

          <li key={link.title}>

            <Link
              to={link.href}
              className="
                text-[18px]
                font-semibold
                text-[#333333]
                transition-colors
                duration-200
                hover:text-[#7B68EE]
              "
            >
              {link.title}
            </Link>

          </li>

        ))}

      </ul>
    </nav>
  );
}