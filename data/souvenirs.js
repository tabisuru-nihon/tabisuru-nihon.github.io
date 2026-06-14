/* ===================================================
   お土産・名産品データ — 47都道府県
   将来のアフィリエイト実装に向けた準備データ
   各商品にアフィリエイト候補フラグを持たせています
=================================================== */
window.SOUVENIRS_DATA = {

  hokkaido: [
    { name: '白い恋人', genre: '洋菓子', desc: '石屋製菓の定番チョコレートサンドクッキー。北海道土産の代名詞', reason: '知名度が高く、贈り物にも最適。日持ちする', portable: true, season: '通年', affiliate: true, keywords: ['白い恋人', '石屋製菓', '北海道土産'] },
    { name: 'マルセイバターサンド', genre: '洋菓子', desc: '六花亭の名品。北海道産バターの濃厚な餡', reason: '六花亭ブランドの信頼感・贈答品に最適', portable: true, season: '通年', affiliate: true, keywords: ['六花亭', 'マルセイバターサンド', '北海道菓子'] },
    { name: 'じゃがポックル', genre: 'スナック', desc: 'カルビーの北海道じゃがいも使用ポテルスナック。現地限定感', reason: 'SNSで人気・カジュアルな土産として受けがいい', portable: true, season: '通年', affiliate: true, keywords: ['じゃがポックル', 'カルビー', '北海道スナック'] },
    { name: '北海道チーズ（十勝産）', genre: '乳製品', desc: '十勝・ニセコ産の濃厚チーズ各種', reason: '北海道酪農のブランド力が高く通販でも人気', portable: false, season: '通年', affiliate: true, keywords: ['十勝チーズ', '北海道チーズ', '北海道乳製品'] },
    { name: '毛ガニ・タラバガニ（冷凍）', genre: '海産物', desc: '北海道産の最高級カニ。産地直送の冷凍品が通販で人気', reason: '高単価で楽天やAmazonでの検索量が多い', portable: false, season: '冬・秋', affiliate: true, keywords: ['北海道カニ', '毛ガニ', 'タラバガニ', '産直'] },
  ],

  aomori: [
    { name: 'りんごジュース（青森産）', genre: '飲料', desc: '青森りんご100%ストレートジュース', reason: '青森りんごブランドは全国区。通販でも人気', portable: true, season: '通年', affiliate: true, keywords: ['青森りんごジュース', '青森りんご', 'ストレートジュース'] },
    { name: 'シードル（りんごのスパークリング）', genre: '酒類', desc: '弘前発のりんご発泡酒。土産・ギフトに人気', reason: '独自性が高くギフト需要が高い', portable: true, season: '通年', affiliate: true, keywords: ['青森シードル', 'りんご酒', '弘前シードル'] },
    { name: 'ねぶた漬け', genre: '食品', desc: 'スルメ・数の子・昆布の醤油漬け。ご飯のお供の定番', reason: 'Amazonでも販売されている定番土産', portable: true, season: '通年', affiliate: true, keywords: ['ねぶた漬け', '青森土産', '数の子昆布'] },
    { name: '黒にんにく', genre: '健康食品', desc: '青森産にんにくを熟成した健康食品', reason: '健康志向の高まりで需要増・通販向き', portable: true, season: '通年', affiliate: true, keywords: ['青森黒にんにく', '熟成黒にんにく', '青森にんにく'] },
    { name: '津軽びいどろ', genre: '工芸品', desc: 'ねぶたの色をイメージしたガラス工芸品', reason: 'インテリアとして人気・高単価', portable: true, season: '通年', affiliate: false, keywords: ['津軽びいどろ', '青森ガラス工芸', '津軽塗'] },
  ],

  iwate: [
    { name: '南部せんべい', genre: '和菓子', desc: '南部地方発祥のごまや落花生入りせんべい', reason: '知名度が高く日持ちする。岩手土産の定番', portable: true, season: '通年', affiliate: true, keywords: ['南部せんべい', '岩手土産', '南部鉄器'] },
    { name: 'かもめの玉子', genre: '洋菓子', desc: '黄身あんを白あんで包んだ卵型の銘菓', reason: '岩手・三陸を代表する銘菓。知名度が高い', portable: true, season: '通年', affiliate: true, keywords: ['かもめの玉子', '岩手銘菓', 'さいとう製菓'] },
    { name: '南部鉄器', genre: '工芸品', desc: '盛岡発祥の鉄器。急須・鍋・フライパン', reason: '海外でも人気の高い工芸品。高単価', portable: false, season: '通年', affiliate: true, keywords: ['南部鉄器', '盛岡鉄器', '岩手鉄器'] },
    { name: '盛岡冷麺', genre: '食品', desc: '盛岡三大麺の一つ。コシのある麺を乾麺で持ち帰り', reason: '麺類の通販は需要が高い', portable: true, season: '通年', affiliate: true, keywords: ['盛岡冷麺', '岩手麺', '冷麺通販'] },
    { name: '前沢牛加工品', genre: '肉類', desc: '国内屈指のブランド和牛・前沢牛のレトルト・加工品', reason: '高級ブランド牛として認知度が高い', portable: true, season: '通年', affiliate: true, keywords: ['前沢牛', '岩手牛', '和牛ギフト'] },
  ],

  miyagi: [
    { name: '牛タン（仙台）', genre: '加工肉', desc: '仙台発祥の炭火焼き牛タン。塩漬けで持ち帰りも人気', reason: '仙台土産の代名詞。需要が安定している', portable: true, season: '通年', affiliate: true, keywords: ['仙台牛タン', '牛タン通販', '宮城土産'] },
    { name: 'ずんだ餅・ずんだ商品', genre: '和菓子', desc: '枝豆ペーストを使った仙台名物スイーツ', reason: 'ずんだシェイクなどで若者にも浸透', portable: true, season: '通年', affiliate: true, keywords: ['ずんだ餅', '仙台ずんだ', '宮城銘菓'] },
    { name: '笹かまぼこ', genre: '水産加工', desc: '宮城・三陸の白身魚を使ったかまぼこ', reason: '現地でも通販でも人気の定番土産', portable: true, season: '通年', affiliate: true, keywords: ['笹かまぼこ', '宮城かまぼこ', '三陸水産'] },
    { name: '宮城のホヤ缶・牡蠣缶', genre: '缶詰', desc: '三陸産の海鮮を缶詰で長期保存', reason: '缶詰は持ち帰りしやすくギフト需要も', portable: true, season: '通年', affiliate: true, keywords: ['三陸牡蠣', '宮城ホヤ', '三陸缶詰'] },
  ],

  akita: [
    { name: 'きりたんぽ鍋セット', genre: '鍋物', desc: '秋田の郷土料理・比内地鶏のスープ付きセット', reason: '秋田の代名詞料理。ギフトセットが人気', portable: true, season: '秋冬', affiliate: true, keywords: ['きりたんぽ', '秋田鍋', '比内地鶏'] },
    { name: '稲庭うどん', genre: '麺類', desc: '秋田の手延べうどん。日本三大うどんの一つ', reason: '全国的に知名度が高い。通販でも人気', portable: true, season: '通年', affiliate: true, keywords: ['稲庭うどん', '秋田うどん', '手延べうどん'] },
    { name: '秋田の日本酒（久保田・雪の茅舎等）', genre: '酒類', desc: '秋田は清酒の一大産地。全国ブランドも多い', reason: '日本酒ギフトは高単価で需要が高い', portable: false, season: '通年', affiliate: true, keywords: ['秋田日本酒', '久保田', '雪の茅舎'] },
    { name: 'なまはげ面グッズ', genre: '民芸品', desc: 'なまはげをモチーフにした置物・Tシャツ等', reason: '秋田の象徴として観光土産に人気', portable: true, season: '通年', affiliate: false, keywords: ['なまはげ', '秋田民芸品', 'なまはげグッズ'] },
  ],

  yamagata: [
    { name: 'さくらんぼ（佐藤錦）', genre: '果物', desc: '山形産さくらんぼの最高峰。贈り物に人気', reason: '単価が高く、ギフト需要が非常に高い', portable: false, season: '6月〜7月', affiliate: true, keywords: ['山形さくらんぼ', '佐藤錦', 'さくらんぼギフト'] },
    { name: '山形ラーメン（醤油ラーメン）', genre: '食品', desc: '山形の食文化・中華そばの乾麺・スープセット', reason: '山形ラーメンの全国的認知が上昇中', portable: true, season: '通年', affiliate: true, keywords: ['山形ラーメン', '中華そば', '山形醤油ラーメン'] },
    { name: '銀山温泉グッズ', genre: '雑貨', desc: 'NHKドラマ「おしん」「あまちゃん」のロケ地としても有名な銀山温泉のグッズ', reason: '銀山温泉はインスタで人気のスポット', portable: true, season: '通年', affiliate: false, keywords: ['銀山温泉', '山形温泉', '大正ロマン'] },
    { name: '米沢牛', genre: '肉類', desc: '日本三大和牛の一つ。楽天などで産直販売も', reason: '三大和牛ブランドとして通販需要が高い', portable: false, season: '通年', affiliate: true, keywords: ['米沢牛', '山形牛', '和牛ギフト'] },
  ],

  fukushima: [
    { name: '福島の桃', genre: '果物', desc: '福島県は桃の名産地。お中元ギフトに人気', reason: '夏ギフトとして楽天・Amazonで高需要', portable: false, season: '7月〜8月', affiliate: true, keywords: ['福島の桃', '白桃ギフト', '福島フルーツ'] },
    { name: '喜多方ラーメン', genre: '食品', desc: '全国的に有名な喜多方の醤油ラーメン乾麺・スープ', reason: 'ラーメン三大名所の一つとして知名度が高い', portable: true, season: '通年', affiliate: true, keywords: ['喜多方ラーメン', '福島ラーメン', '喜多方麺'] },
    { name: '会津塗（漆器）', genre: '工芸品', desc: '会津若松の伝統漆器。汁椀・重箱など', reason: '漆器は高単価の工芸品ギフト', portable: true, season: '通年', affiliate: true, keywords: ['会津塗', '会津漆器', '福島工芸品'] },
    { name: '日本酒（飛露喜・写楽）', genre: '酒類', desc: '全国的に人気の福島の地酒', reason: '福島の日本酒はブランド力が高い', portable: false, season: '通年', affiliate: true, keywords: ['飛露喜', '写楽', '福島日本酒'] },
  ],

  ibaraki: [
    { name: '干し芋（茨城産）', genre: '加工食品', desc: '茨城は干し芋の生産量日本一。安納芋・紅はるかなど', reason: '健康食品として需要が増加中', portable: true, season: '秋冬', affiliate: true, keywords: ['茨城干し芋', 'ほしいも', '干し芋通販'] },
    { name: 'あんこう鍋セット', genre: '食品', desc: '冬の茨城名物・あんこう鍋のスープセット', reason: '高級珍味として通販ギフト需要あり', portable: true, season: '冬', affiliate: true, keywords: ['あんこう鍋', '茨城あんこう', 'あんこうキモ'] },
    { name: '常陸牛', genre: '肉類', desc: '茨城のブランド和牛', reason: 'ブランド牛通販の需要が高まっている', portable: false, season: '通年', affiliate: true, keywords: ['常陸牛', '茨城牛', 'ブランド和牛'] },
  ],

  tochigi: [
    { name: '日光レーズンサンド', genre: '洋菓子', desc: '日光エリアの洋菓子銘菓', reason: '日光は観光地としてのブランドが強い', portable: true, season: '通年', affiliate: true, keywords: ['日光土産', '栃木洋菓子', 'レーズンサンド'] },
    { name: 'とちおとめ（イチゴ）', genre: '果物', desc: '栃木県の銘品イチゴ。日本一の生産量', reason: 'イチゴのブランドとして通販でも人気', portable: false, season: '12月〜5月', affiliate: true, keywords: ['とちおとめ', '栃木いちご', 'いちご通販'] },
    { name: '那須の乳製品', genre: '乳製品', desc: '那須高原のミルク・チーズ・バター', reason: '高原リゾートとセットで人気', portable: true, season: '通年', affiliate: true, keywords: ['那須チーズ', '那須牛乳', '那須高原'] },
    { name: '日光東照宮グッズ', genre: '雑貨', desc: '世界遺産・日光東照宮の公式グッズ', reason: '定番観光土産', portable: true, season: '通年', affiliate: false, keywords: ['日光東照宮', '日光土産', '日光グッズ'] },
  ],

  gunma: [
    { name: '草津温泉入浴剤', genre: '入浴剤', desc: '草津温泉の湯の花を配合した入浴剤', reason: '温泉土産の定番。通販でも人気', portable: true, season: '通年', affiliate: true, keywords: ['草津温泉入浴剤', '湯の花', '草津土産'] },
    { name: '水沢うどん', genre: '麺類', desc: '伊香保温泉近くの名物うどん', reason: '群馬のご当地グルメとして知名度あり', portable: true, season: '通年', affiliate: true, keywords: ['水沢うどん', '群馬うどん', '伊香保名物'] },
    { name: 'こんにゃく（下仁田）', genre: '食品', desc: '下仁田こんにゃく・こんにゃく加工品', reason: '国内生産量が高く、健康食品として需要あり', portable: true, season: '通年', affiliate: true, keywords: ['下仁田こんにゃく', '群馬こんにゃく', 'こんにゃく通販'] },
  ],

  saitama: [
    { name: '五家宝', genre: '和菓子', desc: '熊谷発祥のきな粉棒のお菓子', reason: '埼玉の郷土銘菓', portable: true, season: '通年', affiliate: false, keywords: ['五家宝', '埼玉銘菓', '熊谷土産'] },
    { name: '狭山茶', genre: '茶', desc: '埼玉の銘茶・狭山茶', reason: '日本三大茶の一つ。お茶ギフトは需要が高い', portable: true, season: '通年', affiliate: true, keywords: ['狭山茶', '埼玉茶', '日本茶ギフト'] },
    { name: '十万石まんじゅう', genre: '和菓子', desc: '「うまい、うますぎる」のCMで有名な埼玉銘菓', reason: 'CMでの知名度が高い', portable: true, season: '通年', affiliate: false, keywords: ['十万石まんじゅう', '埼玉まんじゅう', '行田土産'] },
  ],

  chiba: [
    { name: '落花生（千葉産）', genre: '食品', desc: '千葉は国内最大の落花生産地', reason: '千葉土産の定番。乾燥品は日持ちする', portable: true, season: '秋', affiliate: true, keywords: ['千葉落花生', 'ピーナッツ', '千葉土産'] },
    { name: 'なめろう・アジの干物', genre: '水産加工', desc: '千葉・外房の名物魚料理の加工品', reason: '千葉の漁業文化を反映した土産', portable: true, season: '通年', affiliate: true, keywords: ['千葉アジ', 'なめろう', '外房土産'] },
    { name: 'TDL・TDSグッズ', genre: '雑貨', desc: '東京ディズニーリゾートの公式グッズ（浦安市）', reason: '定番のギフト需要が高い', portable: true, season: '通年', affiliate: false, keywords: ['ディズニーグッズ', 'TDL土産', 'ディズニーお土産'] },
  ],

  tokyo: [
    { name: '東京ばな奈', genre: '洋菓子', desc: 'バナナクリームのスポンジケーキ。東京土産の定番', reason: '東京土産の売上上位の定番商品', portable: true, season: '通年', affiliate: true, keywords: ['東京ばな奈', '東京土産', 'お菓子'] },
    { name: '雷おこし', genre: '和菓子', desc: '浅草発祥の米菓・雷おこし', reason: '浅草・東京の歴史ある和菓子', portable: true, season: '通年', affiliate: false, keywords: ['雷おこし', '浅草土産', '東京和菓子'] },
    { name: '東京カヌレ', genre: '洋菓子', desc: 'フランスの伝統菓子が東京で進化したスイーツ', reason: 'SNSで人気のスイーツブーム', portable: true, season: '通年', affiliate: false, keywords: ['東京カヌレ', 'カヌレ土産', '東京スイーツ'] },
  ],

  kanagawa: [
    { name: '鎌倉彫', genre: '工芸品', desc: '鎌倉発祥の漆器彫刻工芸品', reason: '高級ギフトとして需要あり', portable: true, season: '通年', affiliate: true, keywords: ['鎌倉彫', '鎌倉漆器', '鎌倉工芸品'] },
    { name: '崎陽軒シウマイ', genre: '食品', desc: '横浜・崎陽軒のシウマイ。全国的なブランド', reason: '横浜名物として知名度が高い', portable: true, season: '通年', affiliate: true, keywords: ['崎陽軒', 'シウマイ', '横浜土産'] },
    { name: '箱根温泉饅頭', genre: '和菓子', desc: '箱根温泉街の定番まんじゅう', reason: '温泉まんじゅうは温泉土産の代名詞', portable: true, season: '通年', affiliate: false, keywords: ['箱根温泉まんじゅう', '箱根土産', '温泉まんじゅう'] },
  ],

  niigata: [
    { name: '新潟コシヒカリ', genre: '米', desc: '全国最高の評価を受ける魚沼産コシヒカリ', reason: '米のギフトは年間通じて需要が高い', portable: false, season: '秋', affiliate: true, keywords: ['魚沼産コシヒカリ', '新潟米', 'コシヒカリギフト'] },
    { name: '新潟日本酒（久保田・八海山）', genre: '酒類', desc: '全国トップクラスの日本酒産地', reason: '日本酒ギフトの定番ブランド', portable: false, season: '通年', affiliate: true, keywords: ['久保田', '八海山', '新潟日本酒'] },
    { name: 'へぎそば', genre: '麺類', desc: '布海苔（ふのり）を使った新潟の蕎麦', reason: '独自性の高い麺類として人気', portable: true, season: '通年', affiliate: true, keywords: ['へぎそば', '新潟そば', '十日町そば'] },
  ],

  toyama: [
    { name: '白エビ加工品', genre: '水産加工', desc: '富山湾の宝石・白エビのせんべい・加工品', reason: '富山の高級食材として知名度上昇中', portable: true, season: '通年', affiliate: true, keywords: ['白エビ', '富山白エビ', '富山海産物'] },
    { name: 'ますのすし', genre: '食品', desc: '富山の押しずし。駅弁として有名', reason: '富山の代表的な持ち帰り土産', portable: true, season: '通年', affiliate: true, keywords: ['ますのすし', '富山土産', '鱒寿司'] },
    { name: 'ホタルイカ（富山産）', genre: '水産加工', desc: '富山湾のホタルイカ。沖漬け・素干しが人気', reason: '富山のブランド水産品として通販人気', portable: true, season: '春', affiliate: true, keywords: ['ホタルイカ', '富山ホタルイカ', 'ホタルイカ沖漬け'] },
  ],

  ishikawa: [
    { name: '金箔商品（金沢）', genre: '雑貨', desc: '金沢は金箔生産量99%。化粧品・食品・雑貨', reason: '金沢のブランドイメージが強い', portable: true, season: '通年', affiliate: true, keywords: ['金沢金箔', '金箔コスメ', '金沢土産'] },
    { name: '加賀棒茶', genre: '茶', desc: '石川県の銘茶・棒茶（茎茶）', reason: '加賀の食文化を反映した高級茶', portable: true, season: '通年', affiliate: true, keywords: ['加賀棒茶', '石川茶', '金沢棒茶'] },
    { name: '治部煮レトルト', genre: '食品', desc: '金沢の郷土料理をレトルト化', reason: '金沢グルメの通販展開が増えている', portable: true, season: '通年', affiliate: true, keywords: ['治部煮', '金沢料理', '石川グルメ'] },
    { name: '九谷焼', genre: '工芸品', desc: '石川の伝統陶器。色鮮やかな絵付けが特徴', reason: '工芸品ギフトとして高単価', portable: true, season: '通年', affiliate: true, keywords: ['九谷焼', '石川陶器', '金沢工芸'] },
  ],

  fukui: [
    { name: '越前がに（カニ）', genre: '海産物', desc: '冬の福井名物・越前がに', reason: '高単価のカニギフトは需要が高い', portable: false, season: '冬（11〜3月）', affiliate: true, keywords: ['越前がに', '福井カニ', 'ズワイガニ'] },
    { name: '羽二重餅', genre: '和菓子', desc: '福井の銘菓・絹のような柔らかい餅', reason: '福井土産の定番', portable: true, season: '通年', affiliate: false, keywords: ['羽二重餅', '福井銘菓', '福井土産'] },
    { name: '越前焼', genre: '工芸品', desc: '日本六古窯の一つ・越前焼', reason: '歴史ある陶器として工芸品需要あり', portable: true, season: '通年', affiliate: false, keywords: ['越前焼', '福井陶器', '日本六古窯'] },
  ],

  yamanashi: [
    { name: '桔梗信玄餅', genre: '和菓子', desc: '黒蜜ときな粉のわらび餅。山梨を代表する銘菓', reason: '山梨土産の代名詞として全国的に有名', portable: true, season: '通年', affiliate: true, keywords: ['桔梗信玄餅', '山梨銘菓', '信玄餅'] },
    { name: '山梨のワイン', genre: '酒類', desc: '勝沼・甲州ワイン。国産ワインの聖地', reason: '甲州ワインは国際的な評価も高い', portable: false, season: '通年', affiliate: true, keywords: ['甲州ワイン', '山梨ワイン', '勝沼ワイン'] },
    { name: '山梨の桃・ぶどう', genre: '果物', desc: '山梨は桃・ぶどうの生産量日本一', reason: 'フルーツギフトは夏の高需要', portable: false, season: '夏〜秋', affiliate: true, keywords: ['山梨桃', '山梨ぶどう', '甲州フルーツ'] },
  ],

  nagano: [
    { name: '信州そば', genre: '麺類', desc: '長野の蕎麦。戸隠・更科・木曽など多くの産地', reason: '蕎麦の本場として全国的な認知度が高い', portable: true, season: '通年', affiliate: true, keywords: ['信州そば', '長野そば', '戸隠そば'] },
    { name: '野沢菜漬け', genre: '漬物', desc: '長野の伝統的な漬物。ご飯のお供の定番', reason: '漬物ギフトとして日持ちする', portable: true, season: '通年', affiliate: true, keywords: ['野沢菜', '長野漬物', '野沢温泉'] },
    { name: '信州みそ', genre: '調味料', desc: '長野の伝統発酵食品・味噌', reason: '料理好きへのギフトとして人気', portable: true, season: '通年', affiliate: true, keywords: ['信州みそ', '長野味噌', '信州味噌通販'] },
  ],

  gifu: [
    { name: '飛騨牛', genre: '肉類', desc: '岐阜・飛騨地方のブランド和牛', reason: 'ブランド牛として高単価・通販需要が高い', portable: false, season: '通年', affiliate: true, keywords: ['飛騨牛', '岐阜牛', '飛騨高山牛'] },
    { name: '飛騨高山の酒・みたらし団子', genre: '食品', desc: '飛騨の朝市で有名な食文化', reason: '飛騨高山は観光地として知名度が高い', portable: true, season: '通年', affiliate: false, keywords: ['飛騨高山土産', 'みたらし団子', '飛騨の里'] },
    { name: '美濃和紙', genre: '工芸品', desc: '世界遺産・美濃の伝統和紙', reason: '文化的価値が高く、ギフトとして人気', portable: true, season: '通年', affiliate: false, keywords: ['美濃和紙', '岐阜工芸品', '和紙ギフト'] },
  ],

  shizuoka: [
    { name: '静岡茶（本山茶・川根茶）', genre: '茶', desc: '静岡は日本最大の茶産地', reason: 'お茶ギフトは定番の贈り物', portable: true, season: '通年', affiliate: true, keywords: ['静岡茶', '川根茶', '本山茶'] },
    { name: 'うなぎパイ', genre: '洋菓子', desc: 'うなぎのエキスを練り込んだ春華堂の定番菓子', reason: '静岡土産の代名詞として全国的に有名', portable: true, season: '通年', affiliate: true, keywords: ['うなぎパイ', '静岡銘菓', '春華堂'] },
    { name: '静岡の海産物（桜エビ・シラス）', genre: '水産加工', desc: '駿河湾の桜エビ・シラスの加工品', reason: '独自の食材として人気が高い', portable: true, season: '通年', affiliate: true, keywords: ['駿河湾桜エビ', '静岡シラス', '静岡海産物'] },
  ],

  aichi: [
    { name: 'ういろう', genre: '和菓子', desc: '名古屋発祥の蒸し菓子', reason: '名古屋土産の定番', portable: true, season: '通年', affiliate: false, keywords: ['ういろう', '名古屋土産', '名古屋銘菓'] },
    { name: 'えびせんべい', genre: 'スナック', desc: '知多半島発祥のエビを使ったせんべい', reason: '愛知・知多のお土産として定番', portable: true, season: '通年', affiliate: true, keywords: ['えびせんべい', '愛知土産', '知多えび'] },
    { name: '名古屋コーチン商品', genre: '食品', desc: '名古屋コーチンのレトルト・加工品', reason: 'ブランド地鶏として高い認知度', portable: true, season: '通年', affiliate: true, keywords: ['名古屋コーチン', '愛知地鶏', 'ブランド鶏'] },
  ],

  mie: [
    { name: '伊勢神宮赤福', genre: '和菓子', desc: '伊勢の銘菓・赤福餅。こしあんのお餅', reason: '伊勢神宮参拝のお土産として全国的知名度', portable: true, season: '通年', affiliate: true, keywords: ['赤福', '伊勢土産', '伊勢銘菓'] },
    { name: '伊勢海老', genre: '海産物', desc: '三重が誇るブランド海老', reason: '高級ギフトとして需要が高い', portable: false, season: '秋冬', affiliate: true, keywords: ['伊勢海老', '三重海産物', '伊勢えびギフト'] },
    { name: '松阪牛', genre: '肉類', desc: '日本三大和牛の一つ・松阪牛', reason: '最高級ブランド牛として通販でも人気', portable: false, season: '通年', affiliate: true, keywords: ['松阪牛', '三重牛', '和牛ギフト'] },
  ],

  shiga: [
    { name: '近江牛', genre: '肉類', desc: '日本三大和牛の一つ・近江牛', reason: 'ブランド牛の通販需要が高い', portable: false, season: '通年', affiliate: true, keywords: ['近江牛', '滋賀牛', '近江和牛'] },
    { name: '鮒寿司', genre: '食品', desc: '琵琶湖のフナを使った発酵食品', reason: '日本最古の寿司として歴史的価値があり、珍味ギフトとして', portable: true, season: '通年', affiliate: true, keywords: ['鮒寿司', '滋賀ふなずし', '琵琶湖珍味'] },
    { name: '信楽焼', genre: '工芸品', desc: '日本六古窯の一つ・狸の置物で有名', reason: 'インテリア・縁起物として人気', portable: true, season: '通年', affiliate: false, keywords: ['信楽焼', '滋賀陶器', '信楽たぬき'] },
  ],

  kyoto: [
    { name: '八ツ橋', genre: '和菓子', desc: '京都を代表する銘菓。ニッキ風味のせんべい・生八ツ橋', reason: '京都土産の代名詞として最高の認知度', portable: true, season: '通年', affiliate: true, keywords: ['八ツ橋', '京都土産', '生八ツ橋'] },
    { name: '京漬物', genre: '食品', desc: '千枚漬け・しば漬けなど京都の伝統漬物', reason: '京都グルメとして高い需要', portable: true, season: '通年', affiliate: true, keywords: ['京漬物', '千枚漬け', 'しば漬け'] },
    { name: '西陣織グッズ', genre: '工芸品', desc: '京都の伝統織物・西陣織を使った小物', reason: '京都ブランドの高級工芸品', portable: true, season: '通年', affiliate: true, keywords: ['西陣織', '京都工芸品', '西陣織財布'] },
    { name: '宇治茶・抹茶商品', genre: '茶', desc: '宇治の高級抹茶・抹茶スイーツ', reason: '抹茶ブームで需要増加。外国人にも人気', portable: true, season: '通年', affiliate: true, keywords: ['宇治茶', '抹茶土産', '京都抹茶'] },
  ],

  osaka: [
    { name: 'たこ焼き器・粉セット', genre: '調理器具・食品', desc: '大阪名物・たこ焼きを自宅でできるセット', reason: '大阪グルメを自宅で楽しむ需要', portable: true, season: '通年', affiliate: true, keywords: ['たこ焼き器', '大阪土産', 'たこ焼きセット'] },
    { name: '551蓬莱の豚まん', genre: '食品', desc: '大阪を代表する中華饅頭', reason: '大阪土産として非常に高い知名度', portable: true, season: '通年', affiliate: false, keywords: ['551蓬莱', '豚まん', '大阪肉まん'] },
    { name: '岩おこし・粟おこし', genre: '和菓子', desc: '大阪の伝統的な米菓', reason: '大阪の歴史的銘菓', portable: true, season: '通年', affiliate: false, keywords: ['岩おこし', '大阪銘菓', '粟おこし'] },
  ],

  hyogo: [
    { name: '神戸プリン', genre: '洋菓子', desc: '神戸洋菓子文化を代表するプリン', reason: '神戸スイーツとして全国的人気', portable: true, season: '通年', affiliate: true, keywords: ['神戸プリン', '神戸スイーツ', '兵庫洋菓子'] },
    { name: 'ゴーフル（神戸風月堂）', genre: '洋菓子', desc: '神戸の定番お菓子・ゴーフル', reason: '神戸土産の定番として長年の実績', portable: true, season: '通年', affiliate: true, keywords: ['ゴーフル', '神戸風月堂', '神戸土産'] },
    { name: '有馬温泉グッズ・炭酸せんべい', genre: '食品・雑貨', desc: '有馬温泉名物の炭酸せんべい', reason: '温泉土産として安定需要', portable: true, season: '通年', affiliate: false, keywords: ['炭酸せんべい', '有馬温泉土産', '兵庫土産'] },
  ],

  nara: [
    { name: '吉野葛', genre: '食品', desc: '吉野産の本葛粉。葛切り・葛餅の原料', reason: '高品質な伝統食材として需要がある', portable: true, season: '通年', affiliate: true, keywords: ['吉野葛', '奈良葛切り', '本葛粉'] },
    { name: '奈良漬', genre: '漬物', desc: '奈良の伝統漬物・酒粕漬け', reason: '奈良の代表的な土産品', portable: true, season: '通年', affiliate: false, keywords: ['奈良漬', '奈良土産', '酒粕漬け'] },
    { name: 'シカグッズ', genre: '雑貨', desc: '奈良公園の鹿をモチーフにした雑貨', reason: '奈良観光のシンボルとして定番', portable: true, season: '通年', affiliate: false, keywords: ['奈良鹿グッズ', '奈良土産', '奈良雑貨'] },
  ],

  wakayama: [
    { name: '紀州南高梅（梅干し）', genre: '食品', desc: '和歌山・みなべ町の最高級梅干し', reason: '梅干しの最高ブランドとして全国的需要', portable: true, season: '通年', affiliate: true, keywords: ['南高梅', '和歌山梅干し', '紀州梅'] },
    { name: 'みかん（有田みかん）', genre: '果物', desc: '全国有数のみかん産地・有田みかん', reason: '冬ギフトとして需要が高い', portable: false, season: '秋冬', affiliate: true, keywords: ['有田みかん', '和歌山みかん', 'みかんギフト'] },
    { name: '高野豆腐', genre: '食品', desc: '高野山の精進料理から生まれた凍り豆腐', reason: '健康食品として通販需要あり', portable: true, season: '通年', affiliate: true, keywords: ['高野豆腐', '高野山土産', '和歌山健康食品'] },
  ],

  tottori: [
    { name: '二十世紀梨', genre: '果物', desc: '鳥取を代表する梨のブランド', reason: '秋のフルーツギフトとして需要あり', portable: false, season: '秋', affiliate: true, keywords: ['二十世紀梨', '鳥取梨', '鳥取フルーツ'] },
    { name: '砂丘らっきょう', genre: '食品', desc: '鳥取砂丘の砂地で育てた高品質らっきょう', reason: '鳥取の特産品として定番', portable: true, season: '春', affiliate: true, keywords: ['砂丘らっきょう', '鳥取らっきょう', '鳥取特産'] },
    { name: '松葉がに', genre: '海産物', desc: '日本海の高級ズワイガニ', reason: '冬の高級ギフトとして需要が高い', portable: false, season: '冬（11〜3月）', affiliate: true, keywords: ['松葉がに', '鳥取カニ', '日本海ズワイガニ'] },
  ],

  shimane: [
    { name: '出雲そば', genre: '麺類', desc: '島根・出雲の割子蕎麦。日本三大蕎麦の一つ', reason: '出雲大社参拝とセットで人気', portable: true, season: '通年', affiliate: true, keywords: ['出雲そば', '島根蕎麦', '割子そば'] },
    { name: '石見の海産物（のどぐろ等）', genre: '水産加工', desc: '山陰の高級魚・のどぐろの干物・加工品', reason: '高級魚として通販需要が増加', portable: true, season: '通年', affiliate: true, keywords: ['のどぐろ', '島根海産物', '山陰干物'] },
  ],

  okayama: [
    { name: 'きびだんご', genre: '和菓子', desc: '桃太郎伝説の岡山銘菓', reason: '岡山・桃太郎のブランドで認知度が高い', portable: true, season: '通年', affiliate: false, keywords: ['きびだんご', '岡山土産', '桃太郎'] },
    { name: '岡山の桃・マスカット', genre: '果物', desc: '岡山は桃・マスカットの高品質産地', reason: 'フルーツギフトとして高需要', portable: false, season: '夏〜秋', affiliate: true, keywords: ['岡山桃', 'マスカット', '岡山フルーツ'] },
    { name: '備前焼', genre: '工芸品', desc: '日本六古窯の一つ・備前焼', reason: '工芸品ギフトとして需要がある', portable: true, season: '通年', affiliate: false, keywords: ['備前焼', '岡山陶器', '備前陶芸'] },
  ],

  hiroshima: [
    { name: 'もみじ饅頭', genre: '和菓子', desc: 'もみじ型の薄皮饅頭。広島・宮島を代表する銘菓', reason: '広島土産の定番として全国的知名度', portable: true, season: '通年', affiliate: true, keywords: ['もみじ饅頭', '広島土産', '宮島銘菓'] },
    { name: '広島牡蠣', genre: '海産物', desc: '広島は国内最大の牡蠣産地', reason: '高品質牡蠣の通販需要が高い', portable: false, season: '秋冬', affiliate: true, keywords: ['広島牡蠣', '広島カキ', '牡蠣通販'] },
    { name: '広島お好み焼きソース', genre: '調味料', desc: 'オタフクソースなど広島発のソース', reason: '全国流通するブランドソース', portable: true, season: '通年', affiliate: true, keywords: ['オタフクソース', '広島ソース', 'お好み焼きソース'] },
  ],

  yamaguchi: [
    { name: 'ふぐ関連商品（下関）', genre: '食品', desc: '下関・ふぐの一大産地。ひれ酒・加工品', reason: '高級食材・贈り物需要が高い', portable: true, season: '冬', affiliate: true, keywords: ['ふぐ', '下関ふぐ', 'フグ加工品'] },
    { name: '外郎（ういろう）', genre: '和菓子', desc: '山口の外郎は名古屋とは別の独自の銘菓', reason: '山口・萩の定番土産', portable: true, season: '通年', affiliate: false, keywords: ['山口外郎', 'ういろう', '山口銘菓'] },
  ],

  tokushima: [
    { name: '阿波晩茶', genre: '茶', desc: '徳島の発酵茶。世界的に珍しい乳酸菌発酵茶', reason: '健康茶として需要が増加中', portable: true, season: '通年', affiliate: true, keywords: ['阿波晩茶', '徳島発酵茶', '阿波茶'] },
    { name: '鳴門金時', genre: '食品', desc: '徳島産の高品質さつまいも', reason: 'さつまいもスイーツの素材として人気', portable: true, season: '秋冬', affiliate: true, keywords: ['鳴門金時', '徳島さつまいも', '鳴門芋'] },
    { name: 'すだち', genre: '果物・調味料', desc: '徳島特産の柑橘類。ポン酢の原料', reason: 'ユニークな柑橘として料理好きに人気', portable: true, season: '秋', affiliate: true, keywords: ['すだち', '徳島すだち', 'すだちポン酢'] },
  ],

  kagawa: [
    { name: '讃岐うどん', genre: '麺類', desc: '日本一のうどん産地・香川の讃岐うどん', reason: '讃岐うどんは全国的知名度が最高', portable: true, season: '通年', affiliate: true, keywords: ['讃岐うどん', '香川うどん', 'うどん通販'] },
    { name: 'オリーブオイル（小豆島）', genre: '調味料', desc: '小豆島産のオリーブオイル・オリーブ商品', reason: '国産オリーブのブランドとして人気上昇', portable: true, season: '通年', affiliate: true, keywords: ['小豆島オリーブ', '香川オリーブ', '国産オリーブオイル'] },
    { name: '和三盆', genre: '砂糖・菓子', desc: '讃岐の伝統砂糖・和三盆を使った干菓子', reason: '高級和菓子の素材として料理愛好家に人気', portable: true, season: '通年', affiliate: true, keywords: ['和三盆', '香川銘菓', '讃岐干菓子'] },
  ],

  ehime: [
    { name: '蛇口みかんジュース', genre: '飲料', desc: '松山空港の蛇口から出るみかんジュースが有名な愛媛の柑橘ジュース', reason: 'SNSで話題となり認知度が上昇', portable: true, season: '通年', affiliate: true, keywords: ['愛媛みかんジュース', '蛇口みかん', '愛媛柑橘'] },
    { name: '道後温泉グッズ', genre: '雑貨', desc: '日本最古の温泉・道後温泉のグッズ・入浴剤', reason: '道後温泉の知名度が非常に高い', portable: true, season: '通年', affiliate: false, keywords: ['道後温泉', '愛媛土産', '道後グッズ'] },
    { name: '砥部焼', genre: '工芸品', desc: '愛媛の伝統陶器・白磁に藍色の絵付け', reason: '日本茶器として人気', portable: true, season: '通年', affiliate: false, keywords: ['砥部焼', '愛媛陶器', '砥部焼通販'] },
  ],

  kochi: [
    { name: 'カツオたたき', genre: '海産物', desc: '高知の名物・藁焼きカツオのたたき', reason: '高知グルメの代名詞として通販でも人気', portable: true, season: '通年', affiliate: true, keywords: ['カツオのたたき', '高知カツオ', '鰹土佐'] },
    { name: 'ユズ製品（土佐の柚子）', genre: '食品', desc: '高知は全国最大のゆず産地', reason: 'ゆずポン酢・ゆず茶など用途が広い', portable: true, season: '秋冬', affiliate: true, keywords: ['高知ゆず', '土佐ゆず', 'ゆずポン酢'] },
    { name: '土佐和紙', genre: '工芸品', desc: '伝統的な和紙産地・高知の和紙', reason: '文具・アート需要で注目されている', portable: true, season: '通年', affiliate: false, keywords: ['土佐和紙', '高知和紙', '高知工芸品'] },
  ],

  fukuoka: [
    { name: '博多通りもん', genre: '洋菓子', desc: '博多を代表する白あん入り西洋まんじゅう', reason: '福岡土産の定番として全国的知名度', portable: true, season: '通年', affiliate: true, keywords: ['博多通りもん', '福岡土産', '博多銘菓'] },
    { name: '辛子明太子', genre: '食品', desc: '博多発の明太子。スケトウダラの卵の辛漬け', reason: '福岡土産の最高定番。通販でも大人気', portable: true, season: '通年', affiliate: true, keywords: ['博多明太子', '辛子明太子', '明太子通販'] },
    { name: 'とんこつラーメン（乾麺）', genre: '食品', desc: '博多豚骨ラーメンの乾麺・スープセット', reason: 'ラーメン土産は通販でも安定需要', portable: true, season: '通年', affiliate: true, keywords: ['博多ラーメン', 'とんこつラーメン', '福岡ラーメン'] },
  ],

  saga: [
    { name: '有田焼', genre: '工芸品', desc: '日本最古の磁器産地・有田焼', reason: '磁器の最高ブランドとして国内外で人気', portable: true, season: '通年', affiliate: true, keywords: ['有田焼', '佐賀陶器', '有田磁器'] },
    { name: '佐賀牛', genre: '肉類', desc: '全国ブランドの佐賀産和牛', reason: 'ブランド牛の通販需要が高い', portable: false, season: '通年', affiliate: true, keywords: ['佐賀牛', '九州牛', '和牛ギフト'] },
    { name: '呼子のイカ加工品', genre: '水産加工', desc: '呼子の活イカの干物・塩辛', reason: '呼子イカは全国的な知名度がある', portable: true, season: '通年', affiliate: true, keywords: ['呼子イカ', '佐賀イカ', 'イカ加工品'] },
  ],

  nagasaki: [
    { name: '長崎カステラ', genre: '洋菓子', desc: 'ポルトガル伝来の長崎銘菓・カステラ', reason: '日本を代表する洋菓子として全国的知名度', portable: true, season: '通年', affiliate: true, keywords: ['長崎カステラ', '文明堂', '長崎銘菓'] },
    { name: 'ハウステンボスグッズ', genre: '雑貨', desc: 'ハウステンボスの公式グッズ', reason: '長崎の有名テーマパークとして定番', portable: true, season: '通年', affiliate: false, keywords: ['ハウステンボス', '長崎テーマパーク', 'ハウステンボス土産'] },
    { name: 'チャンポン麺セット', genre: '食品', desc: '長崎ちゃんぽんの本場の麺・スープセット', reason: '長崎グルメとして全国で人気', portable: true, season: '通年', affiliate: true, keywords: ['長崎チャンポン', 'ちゃんぽん通販', '長崎麺'] },
  ],

  kumamoto: [
    { name: 'くまモングッズ', genre: '雑貨', desc: '熊本県の人気ゆるキャラ・くまモンの公式グッズ', reason: '全国で最も知名度の高いゆるキャラ', portable: true, season: '通年', affiliate: false, keywords: ['くまモン', '熊本土産', 'くまモングッズ'] },
    { name: '馬刺し', genre: '食品', desc: '熊本の名物・生馬刺し。冷凍で持ち帰りも', reason: '熊本の代名詞食文化として認知度が高い', portable: true, season: '通年', affiliate: true, keywords: ['熊本馬刺し', '馬刺し通販', '熊本グルメ'] },
    { name: '阿蘇の地サイダー・ミルク', genre: '飲料', desc: '阿蘇の牧草で育った牛のミルクや地ビール', reason: '阿蘇ブランドの商品は観光地として人気', portable: true, season: '通年', affiliate: true, keywords: ['阿蘇ミルク', '熊本地サイダー', '阿蘇ブランド'] },
  ],

  oita: [
    { name: '別府温泉グッズ・入浴剤', genre: '入浴剤・雑貨', desc: '日本一の温泉湧出量・別府の温泉グッズ', reason: '別府温泉の知名度が非常に高い', portable: true, season: '通年', affiliate: false, keywords: ['別府温泉', '大分土産', '別府グッズ'] },
    { name: 'とり天（鳥天）調理セット', genre: '食品', desc: '大分の名物・とり天の素・調味料セット', reason: '大分独自の食文化として認知度がある', portable: true, season: '通年', affiliate: true, keywords: ['とり天', '大分グルメ', '鳥天'] },
    { name: '関あじ・関さば（加工品）', genre: '水産加工', desc: '豊後水道のブランド魚・関あじ・関さばの干物', reason: '高級魚のブランドとして通販需要がある', portable: true, season: '通年', affiliate: true, keywords: ['関あじ', '関さば', '大分海産物'] },
  ],

  miyazaki: [
    { name: '宮崎マンゴー', genre: '果物', desc: '「太陽のタマゴ」ブランドの高級マンゴー', reason: '超高級フルーツギフトとして需要が高い', portable: false, season: '5〜7月', affiliate: true, keywords: ['宮崎マンゴー', '太陽のタマゴ', 'マンゴーギフト'] },
    { name: '地鶏の炭火焼き（レトルト）', genre: '食品', desc: '宮崎地鶏の炭火焼きをレトルトで', reason: '宮崎グルメとして全国でも知名度がある', portable: true, season: '通年', affiliate: true, keywords: ['宮崎地鶏', '炭火焼き', '宮崎グルメ'] },
    { name: 'チキン南蛮（タルタルソース）', genre: '食品', desc: '宮崎発祥・チキン南蛮のソースセット', reason: '全国的に広まった宮崎発祥料理', portable: true, season: '通年', affiliate: true, keywords: ['チキン南蛮', '宮崎料理', 'タルタルソース'] },
  ],

  kagoshima: [
    { name: 'さつまあげ', genre: '水産加工', desc: '鹿児島の薩摩揚げ。黒豚入りなども人気', reason: '鹿児島の代表的水産加工品', portable: true, season: '通年', affiliate: true, keywords: ['さつまあげ', '鹿児島土産', '薩摩揚げ'] },
    { name: 'いも焼酎（薩摩焼酎）', genre: '酒類', desc: '鹿児島の芋焼酎。薩摩焼酎は地理的表示あり', reason: '芋焼酎の本場として全国的需要', portable: false, season: '通年', affiliate: true, keywords: ['薩摩焼酎', '鹿児島焼酎', '芋焼酎ギフト'] },
    { name: 'かるかん', genre: '和菓子', desc: '山芋を使った鹿児島の銘菓', reason: '鹿児島の定番和菓子土産', portable: true, season: '通年', affiliate: false, keywords: ['かるかん', '鹿児島銘菓', '鹿児島土産'] },
  ],

  okinawa: [
    { name: '紅芋タルト（御菓子御殿）', genre: '洋菓子', desc: '沖縄の紅芋を使ったタルト。定番土産', reason: '沖縄土産の代名詞として最高の知名度', portable: true, season: '通年', affiliate: true, keywords: ['紅芋タルト', '御菓子御殿', '沖縄土産'] },
    { name: 'ちんすこう', genre: '和菓子', desc: '沖縄の伝統菓子・豚脂を使ったサクサクのお菓子', reason: '沖縄土産の定番として長年の実績', portable: true, season: '通年', affiliate: false, keywords: ['ちんすこう', '沖縄銘菓', '沖縄お菓子'] },
    { name: '泡盛', genre: '酒類', desc: '沖縄の伝統蒸留酒。古酒（クース）が高級品', reason: '沖縄の独自文化として酒類ギフト需要', portable: false, season: '通年', affiliate: true, keywords: ['泡盛', '沖縄泡盛', '古酒クース'] },
    { name: '琉球ガラス', genre: '工芸品', desc: '沖縄の廃瓶を再利用した鮮やかなガラス工芸品', reason: 'インテリアとして人気の工芸品', portable: true, season: '通年', affiliate: true, keywords: ['琉球ガラス', '沖縄工芸品', '沖縄雑貨'] },
  ],

};
