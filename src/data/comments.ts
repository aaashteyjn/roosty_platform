export type Comment = {
  id: number;
  postId: number;

  author: string;
  avatar: string;

  date: string;

  content: string;

  likes: number;
};

export const comments: Comment[] = [
  {
    id: 1,
    postId: 1,
    author: "Иван Петров",
    avatar: "https://i.pravatar.cc/100?img=12",
    date: "2 часа назад",
    content:
      "Очень интересная статья! Особенно понравилось объяснение с практическими примерами. Хотелось бы увидеть продолжение на эту тему.",
    likes: 18,
  },

  {
    id: 2,
    postId: 1,
    author: "Анна Смирнова",
    avatar: "https://i.pravatar.cc/100?img=5",
    date: "Вчера",
    content:
      "Спасибо за материал! Всё изложено очень понятно. После прочтения захотелось глубже разобраться в теме.",
    likes: 7,
  },

  {
    id: 3,
    postId: 1,
    author: "Максим Волков",
    avatar: "https://i.pravatar.cc/100?img=31",
    date: "3 дня назад",
    content:
      "Отличная статья. Читается легко, хотя тема довольно сложная.",
    likes: 5,
  },

  {
    id: 4,
    postId: 2,
    author: "Екатерина",
    avatar: "https://i.pravatar.cc/100?img=47",
    date: "Сегодня",
    content:
      "Согласна с автором. Было бы интересно увидеть больше подобных публикаций.",
    likes: 11,
  },

  {
    id: 5,
    postId: 2,
    author: "Алексей",
    avatar: "https://i.pravatar.cc/100?img=15",
    date: "5 часов назад",
    content:
      "Очень полезно. Добавил статью в закладки.",
    likes: 3,
  },

  {
    id: 6,
    postId: 2,
    author: "Мария",
    avatar: "https://i.pravatar.cc/100?img=24",
    date: "Позавчера",
    content:
      "Спасибо! Всё кратко и по делу.",
    likes: 9,
  },
];