# 113-1 復興期末考 Writeup

[TOC]

## OSINT

### Not O^2

* Author: Ping
* Flag: `FHFCTF{以書養氣}`

#### 題目說明

下方墨畫照片為哪四個字，Flag 為 `FHFCTF{墨畫之四字文字}`

題目照片：

![image](https://hackmd.io/_uploads/rJFCUhSr1g.jpg)

1. 觀察照片看到「國防醫學院」及「養氣」等字詞是看得懂的內容
2. 使用上述兩字詞進行關鍵字搜尋，發現國防醫學院相關的 domain 有 `www.ndmctsgh.edu.tw`（官網）及 `wwwndmc.ndmctsgh.edu.tw`（圖書館）。
3. 分別使用關鍵字「養氣」對兩 domain 搜尋，就可發現在圖書館網站出現相關搜尋結果。
    ![Screenshot 2024-12-23 at 00.15.08 Large](https://hackmd.io/_uploads/HktBonSHJg.png)

4. 瀏覽搜尋結果發現為「以書養氣」四字，並掛於圖書館二樓牆面。
5. 搜尋關鍵字「國防醫學院 圖書館」，驗證確實為該幅墨畫。
    ![Screenshot 2024-12-23 at 00.17.26 Large](https://hackmd.io/_uploads/rJE6snBrye.jpg)

## Crypto

### easyyyyyy~

* Author: yn
* Flag: `FHFCTF{t3_qelrdeq_t3_k33a3a_lk3_lc_qe3p3}`

1. 首先打開題目中給的網址：https://zh.planetcalc.com/1434/
2. 接者把 `ZBZWNZ{n3_kyflxyk_n3_e33u3u_fe3_fw_ky3j3}` 放進去，並選取英文按計算
3. 在下方計算結果中幾可找到 `FHFCTF{t3_qelrdeq_t3_k33a3a_lk3_lc_qe3p3}`

### 神奇之旅

* Author: yn
* Flag: `FHFCTF{Yakışıklı bir çocuktan hoşlanıyorum ve karın kasları var}`

1. 首先打開題目中給的網址：https://zh.planetcalc.com/1434/
2. 接者把 `ÏKÏÈVÏ{Açôışıôpı élû êsèwôvçr ksşpçrıasûwq zf ôçûır ôçüpçûı zçû}` 放進去，並選取法語按計算
3. 在下方計算結果中幾可找到 `FHFCTF{Yakışıklı bir çocuktan hoşlanıyorum ve karın kasları var}`

## Forensic

### New Year Gift

* Author: Ping
* Chal file: Gift.png
* Flag: `FHFCTF{1_l0v3_010}`

1. 使用 010 Editor 打開檔案，發現標頭的前四個 Byte 被全部加 1（原為 PNG 標頭的 `89 50 4E 47`）
    ![Screenshot 2024-12-21 at 23.48.54](https://hackmd.io/_uploads/ryXdXPEBkx.png)

2. 全部減 1 修回 PNG 標頭：`89 50 4E 47`，即可打開照片獲得 Flag。
    ![Screenshot 2024-12-22 at 00.10.32](https://hackmd.io/_uploads/BkNKuPNSJl.png)
    ![Gift Medium](https://hackmd.io/_uploads/B1O6OPEB1e.png)

### hide-and-seek

* Author: Ping
* file: hidden.png
* Flag: `FHFCTF{1_4m_h1d1n6_h3r3}`

1. 打開檔案，發現找不到 Flag
    ![hidden](https://hackmd.io/_uploads/SkxNNPNSyg.png)

2. 丟進 StegOnline 選 LSB Half 就看到 Flag 了
    ![Screenshot 2024-12-21 at 23.52.21](https://hackmd.io/_uploads/ry-SNwNSyl.png)

說明：此題使用 LSB 把 Flag 藏起來，背景色為 #FF0000 而 Flag 顏色為 #FE0000

### I am a dog

* Author: tong
* Flag：`FHFCTF{1_m155ed_the_reg1strat10n}`

1. 打開 PDF 檔案後，看到最後一頁「團隊所有成員簽署」的後面有白色的文字
2. 將文字複製後貼到記事本就看到是 Flag 了

### Hello Word

* Author: tong
* Flag：`FHFCTF{I_hate_office365_and_word}`

1. 用 Ｗord 打開檔案
2. 打開檔案後開啟 Word 的「喜好設定」
3. 進到「喜好設定」後，進入「檢視」把「隱藏文字」勾選起來
4. 按「確定」後，就可以看到 Flag 了

## Web

### Scratchcard

* Author: tong
* Flag: `FHFCTF{5k1n_15_u51n6_css}`

這題是一個刮刮樂遊戲，要把刮刮樂放在 CTFd 的主頁，但 Flag 在 CSS 檔裡面。

### 🤖

* Author: Ping
* Flag: `FHFCTF{r0b07_4r3_n07_54f3}`

1. 打開開發者工具，在 HTML 原始碼中看到前半部的 Flag
    ![image](https://hackmd.io/_uploads/ryzCakFS1e.png)

2. 打開 robots.txt 觀察，發現有一個 `/s3cr3t.html` 的路徑
    ![Screenshot 2024-12-21 at 23.59.34](https://hackmd.io/_uploads/S1-lLDVH1g.png)

3. 打開路徑就看到後半部的 Flag 了
    ![Screenshot 2024-12-22 at 00.00.17](https://hackmd.io/_uploads/ByaM8DVrJl.png)

### Turtle? but not useful

* Author: Ping
* Flag: `FHFCTF{f1nd_7ur7l3}`

1. 打開連結發現路徑為 `/page.html`
2. 網頁中的三張照片路徑分別為 `/01_70.jpeg`、`/02_72.jpeg`、`/03_70.jpeg`
3. 發現三張照片後面的數字疑似為 `FHF` 的 ASCII 編碼
4. 進到 `/` 路徑，看到目錄下的所有檔案內容。
    ![Screenshot 2024-12-29 at 21.47.06 Large](https://hackmd.io/_uploads/BkDWQRABye.png)
5. 將各照片後面的數字分別進行 ASCII to Text，就得到 Flag 了。

### CGC revenge

* Author: Ping
* Flag: `FHFCTF{y0u_4r3_53r10u5_1n_cl455}`

1. 打開網頁看到有三則最新消息
    ![Screenshot 2024-12-22 at 00.01.51](https://hackmd.io/_uploads/rJiO8PVB1g.png)

2. 打開 `【預告信】Flag 預告信` 發現測驗結束後才能拿到 Flag，到時候拿到根本沒用 www
    ![Screenshot 2024-12-22 at 00.02.45 Medium](https://hackmd.io/_uploads/ByAa8PNB1x.png)

3. 發現公告的檔案路徑是使用流水號（例如：預告信為 `news_in_170.html`；上一則公告為 `news_in_169.html`
4. 嘗試打開 `news_in_171.html` 的檔案，就得到 Flag 了
    ![Screenshot 2024-12-22 at 00.05.38](https://hackmd.io/_uploads/rk2LPPVHyg.png)

p.s. 2024 金盾獎決賽入圍名單當時就是被 IDOR 出來，提早 12 小時流出

### My name is ping

1. 打開網頁發現是一個 Ping IP 的工具
    ![image](https://hackmd.io/_uploads/Bk18C1FS1l.png)

2. 可正常的 Ping 一個 IP
    ![image](https://hackmd.io/_uploads/H1kmAytrJe.png)

3. 加分號就可進行 Command Injection
    ![image](https://hackmd.io/_uploads/Sy3F0kKBJg.png)

### 2Campus bad bad

* Author: Ping
* Flag: `FHFCTF{1_h473_1Campus}`

1. 打開網站發現是一個打卡系統，顯示吉林基地的打卡驗證碼
    ![image](https://hackmd.io/_uploads/HJTLkltr1l.png)

2. 點擊打卡端按鈕會進入打卡端介面
    ![image](https://hackmd.io/_uploads/HJhF1gYSkl.png)

3. 輸入吉林基地的驗證碼可順利完成打卡
    ![image](https://hackmd.io/_uploads/SJxnJeFrJl.png)

4. 題目要求打弘道基地的卡可獲得 Flag
5. 查看封包紀錄可看到驗證碼會載入到前端並進行簡單驗證，因此可藉此知道弘道基地的驗證碼
    ![image](https://hackmd.io/_uploads/r1vlxxtB1x.png)

6. 輸入弘道基地的驗證碼即可完成打卡，並獲得 Flag
    ![image](https://hackmd.io/_uploads/SJkwlxFrJe.png)

p.s. 詳見：https://zeroday.hitcon.org/vulnerability/ZD-2024-01044
