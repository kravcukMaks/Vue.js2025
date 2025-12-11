import { defineEventHandler } from 'h3'

export default defineEventHandler(() => {
  return [
    { slug: 'first', title: 'Перша стаття', content: 'Текст першої статті...' },
    { slug: 'second', title: 'Друга стаття', content: 'Текст другої статті...' }
  ]
})