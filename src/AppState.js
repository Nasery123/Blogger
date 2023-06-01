import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  /** @type {import('./models/Account.js').Account} */
  account: {},

  blogs: {},
  /** @type {import('./models/Blog.js').Blog | null} */
  activeBlog: null,

  /** @type {import('./models/Profile.js').ProfileAccount} */
  activeProfile: null
})
