import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="border-t border-[#ECECEC] bg-white py-8 lg:py-10">
      <Container>
        <div
          className="
            flex
            flex-col
            items-center
            gap-4

            text-center

            md:flex-row
            md:justify-between
            md:text-left
          "
        >
          <span
            className="
              text-xl
              font-black
              tracking-wide
              text-[#7B68EE]
            "
          >
            РУСТИ
          </span>

          <span
            className="
              text-sm
              leading-6
              text-gray-500
            "
          >
            © 2026 РУСТИ. Все права защищены.
          </span>
        </div>
      </Container>
    </footer>
  );
}