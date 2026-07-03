import { Link } from "react-router-dom";

import logo from "../../assets/logo.png";

import { Container } from "./Container";
import { Navigation } from "./Navigation";

import { Button } from "../ui/Button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#ececec] bg-white">
      <Container>
        <div className="flex h-20 items-center justify-between gap-12">

          <Link to="/" className="shrink-0">
            <img
              src={logo}
              alt="УСТИ"
              className="h-14 w-auto"
            />
          </Link>

          <div className="flex flex-1 justify-center">
            <Navigation />
          </div>

          <div className="flex shrink-0 items-center gap-4">
            <Link to="/auth">
              <Button>Войти</Button>
            </Link>
          </div>

        </div>
      </Container>
    </header>
  );
}