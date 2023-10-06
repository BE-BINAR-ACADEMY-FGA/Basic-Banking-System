class BankAccount {
  constructor() {
    this.saldo = 0;
    this.saldoView = document.getElementById("saldo");
  }

  tambahSaldo() {
    let input = prompt("Masukkan jumlah saldo yang ingin ditambahkan:");
    let tambahan = parseFloat(input);

    if (isNaN(tambahan) || tambahan < 0 || tambahan === 0 || tambahan === "") {
      alert("Masukkan jumlah saldo yang valid.");
    } else {
      this.saldo += tambahan;
      this.saldoView.textContent = this.saldo.toLocaleString("id-ID", {
        style: "currency",
        currency: "IDR",
      });
      alert(
        "Saldo saat ini: " +
          this.saldo.toLocaleString("id-ID", {
            style: "currency",
            currency: "IDR",
          })
      );
    }
  }

  kurangiSaldo() {
    let input = prompt("Masukkan jumlah saldo yang ingin dikurangi:");
    let pengurangan = parseFloat(input);

    if (
      isNaN(pengurangan) ||
      pengurangan < 0 ||
      pengurangan === 0 ||
      pengurangan === ""
    ) {
      alert("Masukkan jumlah saldo yang valid.");
    } else {
      if (this.saldo - pengurangan < 0) {
        alert("Saldo tidak mencukupi untuk pengurangan ini.");
      } else {
        this.saldo -= pengurangan;
        this.saldoView.textContent = this.saldo.toLocaleString("id-ID", {
          style: "currency",
          currency: "IDR",
        });
        alert(
          "Saldo saat ini: " +
            this.saldo.toLocaleString("id-ID", {
              style: "currency",
              currency: "IDR",
            })
        );
      }
    }
  }
}

const bankAccount = new BankAccount();
