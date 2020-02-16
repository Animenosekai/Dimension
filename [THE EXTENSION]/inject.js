console.log("inject script loaded")

inject(inject);

function inject() {
    var iFrame  = document.createElement ("iframe");
    iFrame.src  = chrome.extension.getURL ("dimension.html");

    document.body.insertBefore (iFrame, document.body.firstChild);
    console.log('html injected')
}