# 尋卓護照

尋卓護照是給 HKPES 尋卓卡 Level 2 職涯探尋小組用的手機記錄本。小組約 8 至 12 人，六個單元各用一套實體圖卡，圖卡由組長保管。組員在手機上記下自己選了哪些卡，並把要帶到單元 06 的卡加上星號。

這個儲存庫是公開的。裡面的圖卡全部是**佔位圖**（色塊加號碼），沒有尋卓卡的正式圖樣，也沒有從教材抄來的卡面文字。

## 私隱

程式不收集任何資料。姓名、記錄和相片只存在這部手機（`localStorage` 與 `IndexedDB`）。沒有統計、沒有帳號，也不會把內容上傳或連到第三方。字型使用手機自己的字體，不從外網載入。

唯一的網路用途，是開啟這個網站時下載它自己的檔案。下載完成後可以離線使用，也可以加到主畫面。

請每完成一個單元就按右上角「備份」匯出一份。使用 iPhone 時，請把尋卓護照加到主畫面。Safari 若連續約 7 日沒有開啟這個網站，可能會清除網站資料；加到主畫面後會穩妥得多。

## 六個單元用哪一套卡

| 單元 | 圖卡庫檔案 | 佔位張數 |
| --- | --- | --- |
| 01 現況與起點，以及 06 尋召命 Calling | `cards/association.json` | 聯想圖卡 96 張 |
| 02 價值觀 | `cards/values.json` | 價值卡 65 張，另加附加卡 7 張 |
| 03 職業興趣 | `cards/careers.json` | 職業卡 108 張 |
| 04 個人風格（This is Me! DISC） | `cards/disc.json` | 風格卡 72 張 |
| 05 優勢（含周哈里窗） | `cards/strengths.json` | 優勢卡 90 張 |

單元 02 的極速價值搜尋和標書，以及單元 03 至 05 按了 ☆ 的卡，會出現在單元 06 的 CBD 三角形：頂端是尋召命 Calling（在單元 06 另選 1 至 3 張聯想圖卡），左下是活真我 Being（價值、This is Me），右下是行使命 Doing（職業、優勢），中間是展關懷 Caring 的文字。選卡時會帶上圖卡庫裡的圖片。

每個卡位仍可拍照，或手動輸入卡名。圖卡庫只是主要的選法。

## 一次換上正式卡名和圖片

不需要改任何程式。只替換 manifest 和圖片資料夾，然後推上 `main`。

每一套卡是一個 JSON 陣列，路徑固定，檔名不要改：

- `cards/association.json`
- `cards/values.json`
- `cards/careers.json`
- `cards/disc.json`
- `cards/strengths.json`

陣列裡每一張卡有且只有這五個欄位：

| 欄位 | 必須 | 說明 |
| --- | --- | --- |
| `id` | 是 | 這套卡裡唯一的代號，例如 `values-001`。組員已經選過的卡靠這個代號對上圖片，換圖時請沿用原來的 `id`。 |
| `number` | 是 | 卡號，數字。選卡畫面可以搜尋這個號碼。 |
| `name` | 是 | 畫面上的卡名。把佔位名稱改成正式卡名即可。 |
| `set` | 是 | 必須等於檔名（不含 `.json`），例如價值卡檔裡每一張都是 `"set": "values"`。 |
| `image` | 是 | 圖片路徑，相對於網站根目錄。 |

路徑規則：

- 用 `images/values/001.jpg` 這種寫法。
- 不要用 `/` 開頭，否則在 `https://lohasshek.github.io/xunzhuo-passport/` 會找錯位置。
- 不要寫 `http://` 或任何其他網站的網址。程式會略過站外圖片。
- 圖片可以是 svg、png、jpg 或 webp。改副檔名時，記得同時改 `image`。

價值卡目前的佔位對應是：

- `values-001` 至 `values-065`：價值卡 01–65，圖片 `images/values/001.svg` 至 `065.svg`
- `values-x01` 至 `values-x07`：附加卡 01–07（實體套裝 65+7 的那 7 張），圖片 `images/values/x01.svg` 至 `x07.svg`

換正式名稱時，保留 `id`，只改 `name` 和圖片。例如把第一張價值卡換成正式內容（下面的名稱是說明用的空位，不是教材原文）：

```json
{
  "id": "values-001",
  "number": 1,
  "name": "（這裡寫這張卡的正式名稱）",
  "set": "values",
  "image": "images/values/001.jpg"
}
```

然後把真實圖片放到 `images/values/001.jpg`，可以刪掉用不到的 `001.svg`。其餘四套同樣處理。JSON 必須是合法的陣列，不能有註解或多餘逗號。卡在陣列裡的順序，就是選卡畫面的順序。

正式卡面若受版權保護，請先取得 HKPES 授權，再放上這個公開儲存庫。

換完後推送到 `main`。組員下次連上網開啟程式，會下載新的 manifest 和圖片。離線時仍顯示上次成功下載的版本。不需要改 `js/`、`sw.js` 或這個說明以外的程式。

請不要再執行 `python3 scripts/generate-placeholders.py`。那個指令只用來重做佔位圖，會覆寫 `cards/` 和 `images/`。

## 本機預覽

不要直接雙擊打開 `index.html`（`file://` 讀不到圖卡庫，也不能安裝離線功能）。在專案資料夾執行：

```bash
python3 -m http.server 8080
```

用手機或瀏覽器開啟 `http://127.0.0.1:8080/`。正式網址是 [https://lohasshek.github.io/xunzhuo-passport/](https://lohasshek.github.io/xunzhuo-passport/)。

## 部署到 GitHub Pages

網站檔案放在儲存庫根目錄。`.github/workflows/pages.yml` 會在 `main` 有新的推送時，用 GitHub Actions 發佈到 GitHub Pages。

擁有者需要手動打開一次設定（這個儲存庫的代理程式無法替你改 Pages 設定）：

1. 把這個變更合併到 `main`。
2. 打開 GitHub 儲存庫的 **Settings → Pages**。
3. 在 **Build and deployment** 的 **Source** 選擇 **GitHub Actions**（不要選 Deploy from a branch）。
4. 若工作流程沒有權限：到 **Settings → Actions → General → Workflow permissions**，允許 Actions 有足夠權限部署 Pages（需要 `pages: write` 與 `id-token: write`，工作流程檔裡已經聲明）。
5. 打開 **Actions**，確認名為 **Deploy GitHub Pages** 的工作流程成功。
6. 網站網址：<https://lohasshek.github.io/xunzhuo-passport/>

第一次啟用後，之後每次推上 `main` 都會自動更新。

## 備份、列印、離線

右上角「備份」：

1. 匯出備份檔（記錄和相片，一個 JSON 檔）
2. 匯入備份檔
3. 列印，或在列印對話框存成 PDF

離線與主畫面：網站有 `manifest.json` 和 `sw.js`。用瀏覽器開啟一次、等檔案下載完成後，即可離線使用。iPhone 用分享按鈕加入主畫面；Android 用瀏覽器的「加到主畫面」或「安裝應用程式」。
