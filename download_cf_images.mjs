import https from 'https';
import fs from 'fs';
import path from 'path';

const urls = [
  { name: 'main_camp.jpg', url: 'https://static.camp-fire.jp/uploads/project_version/image/1649623/3ac64eff-41fe-4e0c-a4a0-5be7ff9bbde6.jpeg' },
  { name: 'img_fa4.png', url: 'https://static.camp-fire.jp/uploads/editor_uploaded_image/image/5479305/fa4dd59f738ead605fc95b9436f38980.png' },
  { name: 'img_2.png', url: 'https://static.camp-fire.jp/uploads/editor_uploaded_image/image/5479319/2.png' },
  { name: 'img_3.png', url: 'https://static.camp-fire.jp/uploads/editor_uploaded_image/image/5479322/3.png' },
  { name: 'img_89a.png', url: 'https://static.camp-fire.jp/uploads/editor_uploaded_image/image/5478541/89abe0c30f8f1e13101c571b22480b82.png' },
  { name: 'img_4.png', url: 'https://static.camp-fire.jp/uploads/editor_uploaded_image/image/5479323/4.png' },
  { name: 'img_5.png', url: 'https://static.camp-fire.jp/uploads/editor_uploaded_image/image/5479325/5.png' },
  { name: 'img_7.png', url: 'https://static.camp-fire.jp/uploads/editor_uploaded_image/image/5486701/%EF%BC%97.png' },
  { name: 'img_6.png', url: 'https://static.camp-fire.jp/uploads/editor_uploaded_image/image/5479327/6.png' },
];

for (const item of urls) {
  const dest = path.join('./public/images', item.name);
  const file = fs.createWriteStream(dest);
  https.get(item.url, (res) => {
    res.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log(`Saved ${item.name} (${fs.statSync(dest).size} bytes)`);
    });
  }).on('error', (err) => console.error(err));
}
