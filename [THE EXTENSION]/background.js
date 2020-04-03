//author: Anime no Sekai, 2020

chrome.browserAction.onClicked.addListener(tab => {
    chrome.tabs.executeScript(tab.id, {file: 'inject.js'});
  });