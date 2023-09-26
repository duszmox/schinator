// This script is your background script.
// It runs in the background and can communicate with your content scripts.

browser.runtime.onInstalled.addListener((details) => {
    if (details.reason === "install") {
      // Handle extension installation, if needed.
    }
  });
  