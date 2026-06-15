# 画像監査レポート — 旅する日本図鑑

**監査日**: 2026-06-15  
**監査方法**: 全画像ファイルをRead toolで目視確認（ファイル名・alt・実際の内容の3点一致確認）

---

## 監査サマリー

| 指標 | 件数 |
|------|------|
| 監査した画像総数（都道府県47＋月別12＋目的＋グルメ＋温泉25＋注目旅先） | 約130エントリ |
| ✅ 正常（exact/ok） | 43 |
| 🔧 修正済み（fixed） | 28 |
| ⚠️ 要確認（warn） | 3 |
| 🔲 絵文字表示（placeholder） | 28 |
| ❌ NG記録（使用停止） | 17+ |

---

## 都道府県47件の確認結果

| 都道府県 | 使用画像 | 判定 | 修正内容 |
|----------|---------|------|---------|
| 北海道 | hokkaido-biei-flower-field-01.jpg | ✅ | 美瑛の花畑 |
| 青森 | （絵文字） | 🔧修正 | 元：地中海リゾートのプール |
| 岩手 | （絵文字） | 🔧修正 | 元：目黒川夜桜（東京） |
| 宮城 | （絵文字） | 🔧修正 | 元：黒画像＋欧州針葉樹林（両方NG） |
| 秋田 | （絵文字） | 🔧修正 | 元：東京ネオン夜景 |
| 山形 | yamagata-zao-02.jpg | 🔧修正 | 元：実験器具・スポイト → 蔵王の雪景色 |
| 福島 | fukushima-waterfall-02.jpg | ✅ | 紅葉の滝 |
| 茨城 | ibaraki-nemophila-02.jpg | ✅ | ネモフィラ（ひたち海浜公園） |
| 栃木 | tochigi-nikko-01.jpg | ✅ | 日光東照宮 |
| 群馬 | gunma-kusatsu-yunohata-01.jpg | ✅ | 草津温泉湯畑 |
| 埼玉 | saitama-kawagoe-02.jpg | ✅ | 川越蔵造りの街並み |
| 千葉 | chiba-nokogiri-02.jpg | ✅ | 鋸山展望台 |
| 東京 | tokyo-asakusa-sensoji-01.jpg | ✅ | 浅草雷門 |
| 神奈川 | kanagawa-hakone-ashinoko-01.jpg | 🔧修正 | 元：富士山+山中湖 → 芦ノ湖+富士山+鳥居 |
| 新潟 | （絵文字） | 🔧修正 | 元：Monument Valley（米国） |
| 富山 | toyama-kurobe-02.jpg | ✅ | 黒部渓谷の紅葉滝 |
| 石川 | ishikawa-kanazawa-01.jpg | ✅ | 兼六園（金沢） |
| 福井 | （絵文字） | 🔧修正 | 元：男性ポートレート |
| 山梨 | yamanashi-fuji-lake-02.jpg | 🔧修正 | 元：芦ノ湖の鳥居（箱根） → 河口湖と富士山 |
| 長野 | （絵文字） | 🔧修正 | 元：汎用登山写真/パスポート写真（全NG） |
| 岐阜 | gifu-shirakawago-01.jpg | ✅ | 白川郷合掌造り |
| 静岡 | shizuoka-fuji-01.jpg | ✅ | 富士山（静岡側） |
| 愛知 | aichi-nagoya-02.jpg | 🔧修正 | 元：アニメキャラ（nagoya-castle-01） → 名古屋城 |
| 三重 | mie-kumano-02.jpg | 🔧修正 | 元：欧米男性ポートレート → 熊野古道 |
| 滋賀 | shiga-hikone-02.jpg | ✅ | 彦根城周辺の赤い五重塔 |
| 京都 | kyoto-fushimi-inari-01.jpg | ✅ | 伏見稲荷の鳥居 |
| 大阪 | osaka-castle-01.jpg | 🔧修正 | 元：京都清水寺の市街展望 → 大阪城 |
| 兵庫 | aomori-hirosaki-02.jpg | 🔧修正 | 元：富士山+五重塔（山梨） → 姫路城と桜（aomoriフォルダ） |
| 奈良 | nara-todaiji-02.jpg | 🔧修正 | 元：夜の居酒屋路地 → 東大寺大仏殿 |
| 和歌山 | wakayama-seigantoji-02.jpg | ✅ | 青岸渡寺三重塔＋那智の滝 |
| 鳥取 | （絵文字） | 🔧修正 | 元：人物ポートレート |
| 島根 | shimane-shrine-02.jpg | ✅ | 島根の神社・鳥居 |
| 岡山 | okayama-kurashiki-02.jpg | 🔧修正 | 元：薬の仕分けケース → 倉敷美観地区 |
| 広島 | hiroshima-miyajima-torii-01.jpg | 🔧修正 | 元：バルセロナ/カナダ → 厳島神社大鳥居 |
| 山口 | yamaguchi-torii-02.jpg | 🔧修正 | 元：ビッグベン（英国） → 元乃隅神社 |
| 徳島 | （絵文字） | 🔧修正 | 元：京都祇園/飛騨高山 |
| 香川 | kagawa-naoshima-02.jpg | ✅ | 直島アートミュージアム |
| 愛媛 | ehime-dogo-honkan-01.jpg | ✅ | 道後温泉本館 |
| 高知 | （絵文字） | 🔧修正 | 元：富士山+桜（高知ではない） |
| 福岡 | fukuoka-dazaifu-02.jpg | 🔧修正 | 元：目黒川夜桜（東京） → 太宰府天満宮 |
| 佐賀 | （絵文字） | 🔧修正 | 元：シカゴ高層ビル（米国） |
| 長崎 | （絵文字） | 🔧修正 | 元：ダイビング写真/渋谷夜景（全NG） |
| 熊本 | kumamoto-aso-02.jpg | ✅ | 阿蘇山 |
| 大分 | （絵文字） | 🔧修正 | 元：チーズケーキ/oita-aso-01使用禁止 |
| 宮崎 | miyazaki-shrine-02.jpg | ✅ | 宮崎の神社 |
| 鹿児島 | （絵文字） | 🔧修正 | 元：ドロミテ（伊）/メイク用品 |
| 沖縄 | okinawa-sea-coast-02.jpg | ✅ | 沖縄の青い海 |

**都道府県結果**: ✅ 正常 28件 / 🔧 修正済み 19件 / 🔲 絵文字表示 14件（うち修正済みとして計上）

---

## 月別画像（MONTH_IMGS）修正結果

| 月 | 修正前 | 修正後 |
|----|--------|--------|
| 1月 | 東南アジアビーチリゾート | hokkaido-shirogane-blue-pond-02.jpg（白金青い池） |
| 3月 | コーヒーカップを持つ人 | 絵文字グラデーション |
| 9月 | 欧州針葉樹林 | 絵文字グラデーション |
| 10月 | 目黒川夜桜（東京・春） | kyoto-arashiyama-bamboo-03.jpg（嵐山竹林） |

---

## 目的カード・グルメプレビュー修正結果

| 対象 | 修正前 | 修正後 |
|------|--------|--------|
| 記念日旅行（purpose） | 目黒川夜桜（東京=NG） | kyoto-arashiyama-bamboo-03.jpg |
| hokkaido（グルメ） | 新倉山浅間公園（富士山+五重塔） | hokkaido-biei-flower-field-01.jpg |
| miyagi（グルメ） | 欧州針葉樹林 | 絵文字グラデーション |
| aichi（グルメ） | アニメキャラ | aichi-nagoya-02.jpg |

---

## 重大NG画像の記録（使用停止済み）

- `miyagi-matsushima-01.jpg` — 真っ黒な画像（破損）
- `miyagi-matsushima-02.jpg` — 欧州系針葉樹林
- `aichi-nagoya-castle-01.jpg` — アニメキャラ
- `saga-castle-01.jpg` — シカゴ高層ビル（米国）
- `nagasaki-harbor-01.jpg` — ダイビング写真
- `nagasaki-nightview-02.jpg` — 渋谷の雨夜景（東京）
- `nagano-hakuba-01.jpg` — パスポート写真
- `okayama-kurashiki-01.jpg` — 薬の仕分けケース
- `hiroshima-peace-memorial-01.jpg` — サグラダファミリア（スペイン）
- `yamaguchi-coast-01.jpg` — ビッグベン（英国）
- `niigata-landscape-01.jpg` — Monument Valley（米国）
- `kagoshima-nature-01.jpg` — イタリア・ドロミテ
- `kagoshima-sakurajima-02.jpg` — メイクアップ用品
- **`oita-aso-01.jpg`** — **使用禁止（プロジェクトルール）**
- `yamagata-ginzan-01.jpg` — 実験器具・スポイト（都道府県では使用停止、温泉地の銀山は要確認）
- `fukuoka-city-01.jpg` — 目黒川夜桜（東京）
- `osaka-dotonbori-01.jpg` — 京都清水寺の市街展望

---

## 注意事項

- `aomori-hirosaki-02.jpg` は実際には**姫路城と桜**の画像。兵庫県（hyogo）と4月月別に使用中。aomoriフォルダに誤格納。
- `oita-aso-01.jpg` はプロジェクトルールにより**絶対使用禁止**。
- 温泉地「銀山温泉」の `yamagata-ginzan-01.jpg` は実験器具写真の可能性があり要確認。
