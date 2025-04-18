import { defineStore } from 'pinia'

export const useProjectsStore = defineStore('projects', {
  state: () => ({
    projects: [
      { id: 1, title: 'Portfolio', description: 'My portfolio in Vue.js' },
      { id: 2, title: 'GoEco!', description: 'Your eco-friendly event planner' },
      { id: 3, title: 'OnPointStore', description: 'An ecommerce platform prototype' },
      { id: 4, title: 'Note App', description: 'A simple app to handle your notes' },
    ],
  }),
})
