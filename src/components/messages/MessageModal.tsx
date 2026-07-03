import { useState } from 'react';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export function MessageModal({
  isOpen,
  onClose,
}: Props) {
  const [subject, setSubject] = useState('');
  const [text, setText] = useState('');

  if (!isOpen) return null;

  const handleSubmit = () => {
    console.log({
      subject,
      text,
    });

    alert('Сообщение отправлено ✉️');

    setSubject('');
    setText('');

    onClose();
  };

  return (
    <div
      className="
        fixed inset-0 z-50
        flex items-center justify-center
        bg-black/50
      "
    >
      <div className="w-full max-w-lg rounded-3xl bg-white p-8">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-3xl font-bold">
            Новое сообщение
          </h2>

          <button
            onClick={onClose}
            className="text-3xl text-gray-400"
          >
            ×
          </button>
        </div>

        <textarea
          value={text}
          onChange={(e) =>
            setText(e.target.value)
          }
          placeholder="Напишите сообщение..."
          rows={6}
          className="
            w-full rounded-xl border
            p-4 outline-none
          "
        />

        <button
          onClick={handleSubmit}
          className="
            mt-6 w-full rounded-xl
            bg-[#8d71ff] py-4
            text-xl font-bold text-white
            transition hover:opacity-90
          "
        >
          Отправить
        </button>
      </div>
    </div>
  );
}