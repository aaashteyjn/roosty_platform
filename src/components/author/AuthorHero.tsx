import { useState } from "react";

import { mockAuthor } from "../../data/mockAuthor";
import avatar from "../../assets/eustafiev.jpg";

import { ParticlesBackground } from "../common/ParticlesBackground";
import { MessageModal } from "../messages/MessageModal";

export function AuthorHero() {
  const [isMessageOpen, setIsMessageOpen] =
    useState(false);

  return (
    <section className="relative overflow-hidden">

      <div className="relative h-[300px] bg-[#7B68EE]">
        <ParticlesBackground />
      </div>

      <div className="relative z-10 mx-auto max-w-[1220px] -mt-[95px] px-6">

        <div className="flex gap-5">

          <img
            src={avatar}
            alt={mockAuthor.name}
            className="
              h-[230px]
              w-[230px]
              shrink-0
              rounded-full
              border-[10px]
              border-[#A995FF]
              object-cover
            "
          />

          <div className="pt-9">

            <button
              onClick={() => setIsMessageOpen(true)}
              className="
                bg-[#D8CCFF]
                px-3
                py-2
                font-['Montserrat']
                text-[16px]
                font-bold
                uppercase
                tracking-[2px]
                text-[#333333]
                transition-all
                duration-200
                hover:scale-105
              "
            >
              Отправить сообщение
            </button>

            <h1 className="mt-6 text-[45px] leading-none text-[#333333]">
              {mockAuthor.name}
            </h1>

            <p className="mt-3 max-w-[900px] text-[16px] leading-[1.7] text-[#555555]">
              {mockAuthor.description}
            </p>

          </div>

        </div>

      </div>

      <MessageModal
        isOpen={isMessageOpen}
        onClose={() => setIsMessageOpen(false)}
      />

    </section>
  );
}