// This content script is injected into web pages to perform the 's' to 'sch' replacement.

const observer = new MutationObserver((mutationsList) => {
    for (const mutation of mutationsList) {
      if (mutation.type === "childList") {
        replaceSWithSch();
      }
    }
  });
  
  observer.observe(document.body, { childList: true, subtree: true });


  
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
  