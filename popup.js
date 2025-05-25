document.getElementById("save").addEventListener("click", async () => {
  const platform = document.getElementById("platform").value;
  const prompt = document.getElementById("prompt").value;
  chrome.storage.local.set({ platform, prompt }, () => {
    alert("Settings saved!");
  });
});