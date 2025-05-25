(function () {
  console.log("🧠 YouTube Transcript Summarizer content.js loaded");

  function waitForTranscript() {
    // Sometimes the transcript takes time to load. Wait up to 5 seconds
    return new Promise((resolve) => {
      let attempts = 0;
      const interval = setInterval(() => {
        const cues = document.querySelectorAll(".cue");
        if (cues.length || attempts >= 10) {
          clearInterval(interval);
          resolve([...cues].map(e => e.textContent).join(" "));
        }
        attempts++;
      }, 500);
    });
  }

  function createButton() {
    if (document.getElementById("summarize-btn")) return;

    const button = document.createElement("button");
    button.innerText = "Summarize";
    button.id = "summarize-btn";
    button.style.position = "fixed";
    button.style.top = "100px";
    button.style.right = "20px";
    button.style.zIndex = "10000";
    button.style.padding = "10px 15px";
    button.style.background = "#ff0000";
    button.style.color = "#fff";
    button.style.border = "none";
    button.style.borderRadius = "6px";
    button.style.cursor = "pointer";

    document.body.appendChild(button);

    button.addEventListener("click", async () => {
      const transcript = await waitForTranscript();
      if (!transcript) {
        alert("❌ Transcript not found. Please enable it or try another video.");
        return;
      }

      chrome.storage.local.get(["platform", "prompt"], ({ platform, prompt }) => {
        const finalPrompt = `${prompt} \n\n ${transcript}`;
        let url = "";

        switch (platform) {
          case "chatgpt":
            url = `https://chat.openai.com/?message=${encodeURIComponent(finalPrompt)}`;
            break;
          case "gemini":
            url = `https://gemini.google.com/?q=${encodeURIComponent(finalPrompt)}`;
            break;
          case "claude":
            url = `https://claude.ai/?prompt=${encodeURIComponent(finalPrompt)}`;
            break;
          default:
            alert("⚠️ No AI platform selected. Please configure settings.");
            return;
        }

        window.open(url, "_blank");
      });
    });
  }

  // Wait a few seconds for YouTube DOM to settle
  setTimeout(createButton, 3000);
})();
