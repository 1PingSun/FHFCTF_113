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