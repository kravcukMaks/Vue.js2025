export type Article = {
  id: number
  title: string
  summary: string
  content: string
  image: string
  date: string
}

export const articles: Article[] = [
  {
    id: 1,
    title: 'Vue 3.5 Released',
    summary: 'Нова версія Vue з покращеною продуктивністю.',
    content:
      'Повний текст статті про реліз Vue 3.5. Тут може бути будь-який тестовий контент.',
    image: 'https://picsum.photos/seed/vue35/800/400',
    date: '2025-03-12'
  },
  {
    id: 2,
    title: 'Vite стає стандартом',
    summary: 'Все більше проєктів переходять на Vite.',
    content:
      'Стаття про використання Vite як стандартного інструмента для фронтенду.',
    image: 'https://picsum.photos/seed/vite/800/400',
    date: '2025-02-01'
  }
]
