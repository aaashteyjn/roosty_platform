import { Container } from './Container';

export function Footer() {
  return (
    <footer className="border-t border-[#ececec] bg-white py-10">
      <Container>
        <div className="flex items-center justify-between">
          <span className="font-bold text-[#7B68EE]">
            РУСТИ
          </span>

          <span className="text-sm text-gray-500">
            © 2026 РУСТИ. Все права защищены.
          </span>
        </div>
      </Container>
    </footer>
  );
}