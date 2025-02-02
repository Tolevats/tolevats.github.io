import { defineStore } from 'pinia'

export const useProjectsStore = defineStore('projects', {
  state: () => ({
    projects: [
      { id: 1, title: 'Portfolio', description: 'My portfolio in Vue.js' },
      { id: 2, title: 'Notes', description: 'A simple app to create and edit notes' },
    ],
  }),
})
