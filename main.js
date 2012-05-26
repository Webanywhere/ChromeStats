chrome.history.onVisited.addListener(function(r) {
chrome.experimental.socket.create('udp', '127.0.0.1', 8125, function(socketInfo) {
  chrome.experimental.socket.connect(socketInfo.socketId, function (result) {
        chrome.experimental.socket.write(socketInfo.socketId, "chrome.history:1|c", function(r){console.log(r)});
    });
});
    console.log("new page visited");
});