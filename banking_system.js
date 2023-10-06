class BankAccount {
  constructor() {
    this.saldo = 0;
    this.saldoView = document.getElementById("saldo");
  }
  getSaldo() {
    return this.saldo;
  }

  setSaldo(saldo) {
    this.saldo = saldo;
    this.updateSaldoView();
  }

  updateSaldoView() {
    this.saldoView.textContent = this.saldo.toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
    });
  }

  async simulasiTransaksi(transactionFunction) {
    await new Promise((resolve) => {
      setTimeout(resolve, 5000);
    });

    await transactionFunction();
  }

  async inputSaldo(promptText) {
    const input = prompt(promptText);
    const jumlah = parseFloat(input);

    if (isNaN(jumlah) || jumlah < 0 || jumlah === 0 || jumlah === "") {
      alert("Masukkan jumlah saldo yang valid.");
      return null;
    }

    return jumlah;
  }

  showSaldo() {
    alert(
      "Saldo saat ini: " +
        this.getSaldo().toLocaleString("id-ID", {
          style: "currency",
          currency: "IDR",
        })
    );
  }
}

class BankAccountWithTransaction extends BankAccount {
  async deposit() {
    try {
      const tambahan = await this.inputSaldo(
        "Masukkan jumlah saldo yang ingin dideposit:"
      );
      if (tambahan !== null) {
        await this.simulasiTransaksi(async () => {
          const saldoAwal = this.getSaldo();
          this.setSaldo(saldoAwal + tambahan);
          this.showSaldo();
        });
      }
    } catch (error) {
      console.error("Terjadi kesalahan:", error);
    }
  }
  async withdraw() {
    try {
      const pengurangan = await this.inputSaldo(
        "Masukkan jumlah saldo yang ingin diwithdraw:"
      );
      if (pengurangan !== null) {
        await this.simulasiTransaksi(async () => {
          if (this.getSaldo() - pengurangan < 0) {
            alert("Saldo tidak mencukupi untuk withdraw.");
          } else {
            const saldoAwal = this.getSaldo();
            this.setSaldo(saldoAwal - pengurangan);
            this.showSaldo();
          }
        });
      }
    } catch (error) {
      console.error("Terjadi kesalahan:", error);
    }
  }
}

const bankAccount = new BankAccountWithTransaction();
