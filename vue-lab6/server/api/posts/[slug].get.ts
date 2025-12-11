import { defineEventHandler, getRouterParam } from 'h3'

const posts = [
  { slug: 'first', title: 'Перша стаття', content: 'Текст першої статті...' },
  { slug: 'second', title: 'Друга стаття', content: 'Текст другої статті...' }
]

export default defineEventHandler((event) => {
  const slug = getRouterParam(event, 'slug') 
  const post = posts.find(p => p.slug === slug)
  return post || { error: 'Not found' }
})

