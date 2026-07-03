type Props = {
  name: string;
};

export function Avatar({
  name,
}: Props) {
  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2);

  return (
    <div
      className="
        flex
        h-28
        w-28
        items-center
        justify-center
        rounded-full
        bg-[#7B68EE]
        text-3xl
        font-black
        text-white
      "
    >
      {initials}
    </div>
  );
}