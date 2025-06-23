function showMessage(text, success = true) {
  const box = document.getElementById("messageBox");
  box.innerText = text;
  box.style.backgroundColor = success ? "#2ecc71" : "#e74c3c";
  box.style.display = "block";

  setTimeout(() => {
    box.style.display = "none";
  }, 3000);
}

document.getElementById('connectBtn').onclick = async () => {
  const resultElement = document.getElementById('wallet');

  if (typeof window.ethereum === "undefined") {
    showMessage("❌ MetaMask yüklü değil!", false);
    return;
  }

  try {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    const account = accounts[0];
    resultElement.innerText = "Cüzdan: " + account;
    showMessage("✅ MetaMask Bağlama Başarılı Oldu.", true);
  } catch (error) {
    console.error("Bağlantı hatası:", error);
    showMessage("❌ MetaMask Bağlama Başarısız Oldu.", false);
  }
};

document.getElementById('swapBtn').onclick = () => {
  const amount = document.getElementById('amount').value;
  const from = document.getElementById('fromToken').value;
  const to = document.getElementById('toToken').value;

  if (!amount || isNaN(amount)) {
    showMessage("❗ Geçerli bir miktar girin.", false);
    return;
  }

  showMessage(`🔁 Takas simülasyonu: ${amount} ${from} → ${to}`, true);
};
