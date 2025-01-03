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