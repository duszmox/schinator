// Handle interactions in the popup interface.


  document.getElementById("replaceButton").addEventListener("click", () => {
    // Request the necessary permissions when a button is clicked.
    browser.permissions.request({
      permissions: ["activeTab"]
    }).then((result) => {
      if (result === true) {
        // Permissions granted, you can now read and write data.
        console.log("Permissions granted.");
        
        browser.tabs.query({ active: true, currentWindow: true }, (tabs) => {
          const activeTab = tabs[0];
          browser.scripting.executeScript({
            target: { tabId: activeTab.id },
            function: replaceSWithSch,
          });
        
        });
      } else {
        // Permissions denied.
        console.error("Permissions denied.");
      }
    });
  });
  
  
  function replaceSWithSch() {
    const textNodes = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT,
      null,
      false
    );
  
    let node;
    while ((node = textNodes.nextNode())) {
      // replace all instances of 's' with 'sch' but don't replace inside of existing 'sch'
      node.nodeValue = node.nodeValue.replace(/s(?!ch)/g, "sch");
    }
    console.log("Replaced all instances of 's' with 'sch'.")
  }
  