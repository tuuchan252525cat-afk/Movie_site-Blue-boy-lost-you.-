import https from 'https';

https.get("https://camp-fire.jp/projects/979846/preview?token=tjiicjr6&utm_campaign=cp_po_share_c_msg_projects_show", (res) => {
  let data = "";
  res.on("data", chunk => data += chunk);
  res.on("end", () => {
    const imgRegex = /https:\/\/static\.camp-fire\.jp\/uploads\/[^\s"'>]+/gi;
    const matches = Array.from(new Set(data.match(imgRegex) || []));
    for (const url of matches) {
      console.log(url);
    }
  });
});
