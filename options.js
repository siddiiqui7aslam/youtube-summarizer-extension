chrome.storage.local.get(["platform", "prompt"], (data) => {
  document.getElementById("platform").value = data.platform || "chatgpt";
  document.getElementById("prompt").value = data.prompt || "";
});

document.getElementById("update").addEventListener("click", () => {
  const platform = document.getElementById("platform").value;
  const prompt = document.getElementById("prompt").value;
  chrome.storage.local.set({ platform, prompt }, () => {
    alert("Updated successfully!");
  });
});