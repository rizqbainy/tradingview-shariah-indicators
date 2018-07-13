monitorTraffic = (response) => {
  chrome.tabs.query(
    {
      url: ['https://www.tradingview.com/screener*']
    },
    (tabs) => {
      for (var index in tabs) {
        chrome.tabs.sendMessage(
          tabs[index].id,
          {status: 'ready'},
          (response) => {}
        );
      }
    }
  );
};

chrome.webRequest.onCompleted.addListener(
  monitorTraffic,
  {
    urls: [
      'https://scanner.tradingview.com/malaysia/scan'
    ]
  }
);
