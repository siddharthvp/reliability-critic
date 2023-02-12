import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

// TODO: when popup clicked,
// Show reliability status:
// is site in RSP?
// is site in NPPSG?
// count of users (with names) marking site as reliable (allow comments as well?)
// count of users marking site as unreliable
// count of users marking site as borderline/depends (with comment)

const Popup = () => {
  const [count, setCount] = useState(0);
  const [domain, setDomain] = useState<string>();
  console.log("count:" + count)
  console.log("currentURL:" + domain)

  useEffect(() => {
    chrome.action.setBadgeText({ text: count.toString() });
  }, [count]);

  useEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      if (tabs[0].url) {
        setDomain(new URL(tabs[0].url).host)
      }
    });
  }, []);

  const submitVote = (vote: string) => {

  }

  return (
    <>
      <ul style={{ minWidth: "700px" }}>
        <li>Domain: {domain}</li>
      </ul>
      Mark:
      <button onClick={() => submitVote('reliable')}>Reliable</button>
      <button onClick={() => submitVote('unreliable')}>Unreliable</button>
      <button onClick={() => submitVote('depends')}>Borderline/depends</button>
    </>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>,
  document.getElementById("root")
);
