export const state = () => ({
  showApp: false,
  bills: [],
  walletFetchInProgress: false,
});

export const mutations = {
  showApp(state, value) {
    state.showApp = value;
  },

  setBillsData(state, value) {
    state.bills = value;
  },
  setWalletFetchStatus(state, value) {
    state.walletFetchInProgress = value;
  },

  /*  remove(state, { todo }) {
      state.list.splice(state.list.indexOf(todo), 1)
    },
    toggle(todo) {
      todo.done = !todo.done
    }*/
};
