export default (context, inject) => {
  const Wallet = {
    userWallet: "0",
    getUserWallet() {
      if (this.userWallet == "") {
        this.fetchUserWallet();
      }
      return this.userWallet;
    },
    async fetchUserWallet() {
      let response = await context.$axios.$get("balance");
      let walletAmount = response.data.wallet_amount;
      this.setUserWallet(walletAmount);
      return walletAmount;
    },
    setUserWallet(amount) {
      this.userWallet = amount;
    },
  };

  inject("Wallet", Wallet);
};
