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