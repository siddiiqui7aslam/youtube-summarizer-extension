# youtube-summarizer-extension

YouTube Transcript Summarizer Launcher - Chrome Extension
This Chrome extension enhances the YouTube experience by extracting video transcripts and allowing users to summarize content using their preferred AI platform.

Features
Transcript Extraction
Automatically extracts the visible transcript from YouTube videos (if available).

Summarize Button
Adds a fixed-position "Summarize" button on every YouTube video page.

AI Platform Integration

Supports summarization via:
ChatGPT (chat.openai.com)
Gemini (gemini.google.com)
Claude (claude.ai)

Custom Prompt Support
Users can define their own summarization prompts, such as:
Summarize this video in bullet points.
The transcript will be inserted into this prompt.

Local Preference Storage
Saves user preferences for AI platform and prompt using chrome.storage.local.

Settings Panel
Allows users to change the selected AI tool and custom prompt at any time.
Bonus Features
Error handling if transcript is unavailable/
Simple and user-friendly interface

Setup Instructions
1. Clone or Download
bash
Copy
Edit
git clone https://github.com/yourusername/youtube-transcript-summarizer.git
Or download the ZIP file and extract it.

2. Load Extension in Chrome
Open Chrome and go to: chrome://extensions
Enable Developer Mode (top right)
Click Load unpacked
Select the extracted project folder containing manifest.json

How to Use
Go to any YouTube video.
Ensure the transcript is visible (... > Show transcript if not auto-enabled).
Click the "Summarize" button that appears on the screen.
A new tab will open with your selected AI platform, and the transcript plus prompt will be pre-filled.
Click the extension icon to update platform or prompt settings.

Project Structure
bash
Copy
Edit
youtube-transcript-summarizer/
│
├── manifest.json         # Chrome extension configuration
├── content.js            # Injected script for extracting transcript
├── popup.html            # Settings UI for selecting platform and prompt
├── popup.js              # Handles settings and storage
├── styles.css            # Optional styles for popup
└── icon.png              # Extension icon (required for manifest)
Tech Stack
JavaScript (Vanilla)
Chrome Extensions API
HTML/CSS
External AI platform URLs
Future Improvement
Automatically enable YouTube transcript
Display summary inline without redirect
Add styling and platform branding to UI

* Contact
You should be able to clearly explain the implementation and design logic during your interview.
