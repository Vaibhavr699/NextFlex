import { defineStore } from "pinia"

export const useUserStore = defineStore("userStore", {
  state: () => ({
    users: [],
  }),

  actions: {
    async fetchUsers() {
      const { data } = await useFetch("/api/users")
      if (data.value) {
        this.users = data.value
      }
    },
    updateUser(id, key, value) {
      const user = this.users.find(u => u.id === id)
      if (user) {
        user[key] = value
      }
    },
  },
})


