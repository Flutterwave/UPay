export const state = () => ({
  amount: 0
});

export const mutations = {
  update(state, value) {
    state.amount = value
  },

  /*  remove(state, { todo }) {
      state.list.splice(state.list.indexOf(todo), 1)
    },
    toggle(todo) {
      todo.done = !todo.done
    }*/
};
