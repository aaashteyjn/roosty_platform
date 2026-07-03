const links = [
  {
    title: 'Главная',
    href: '/',
  },
  {
    title: 'Авторы',
    href: '/authors',
  },
  {
    title: 'Стать автором',
    href: '/become-author',
  },
];

export function Navigation() {
  return (
    <nav>
      <ul className="flex items-center gap-10">
        {links.map((link) => (
          <li key={link.title}>
            <a
              href={link.href}
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
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}