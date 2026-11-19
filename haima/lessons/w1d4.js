// Built from w1d4.yaml by scripts/build_lesson.py — edit the plan or library, not this file.
window.LESSON = {
 "id": "w1d4",
 "title": "Day 4 · Farm animals + measure words",
 "reward": [{"e": "🐄", "label": "cow"}],
 "finishText": "一头牛! A cow just joined your farm. 🐄 You learned measure words — that's real Chinese grammar.",
 "week": 1,
 "day": 4,
 "steps": [
  {"type": "read-after", "title": "🐄 Counting the animals", "lines": [
   {"zh": "爷爷|yéye ， 农场|nóngchǎng 里|lǐ 有|yǒu 多少|duōshao 动物|dòngwù ？", "en": "Grandpa, how many animals are on the farm?", "v": "boy"},
   {"zh": "有|yǒu 两|liǎng 头|tóu 牛|niú 、 一|yì 头|tóu 猪|zhū ， 还有|hái_yǒu 十|shí 只|zhī 羊|yáng 。", "en": "Two cows, one pig, and ten sheep.", "v": "grandpa"},
   {"zh": "鸭子|yāzi 和|hé 鹅|é 呢|ne ？", "en": "What about ducks and geese?", "v": "boy"},
   {"zh": "八|bā 只|zhī 鸭子|yāzi ， 两|liǎng 只|zhī 鹅|é 。 河|hé 里|lǐ 还有|hái_yǒu 很多|hěn_duō 条|tiáo 鱼|yú ！", "en": "Eight ducks and two geese. And lots of fish in the river!", "v": "grandpa"},
   {"zh": "哇|wā ！ 我|wǒ 家|jiā 只有|zhǐyǒu 四|sì 口|kǒu 人|rén 和|hé 一|yì 条|tiáo 狗|gǒu 。", "en": "Wow! My family only has four people and one dog.", "v": "boy"}
  ]},
  {"type": "new-words", "intro": "Farm animals and the little words that count them. Listen, look, and say each one.", "title": "🆕 New words", "items": [
   ["牛", "niú", "cow"],
   ["猪", "zhū", "pig"],
   ["鹅", "é", "goose"],
   ["鱼", "yú", "fish"],
   ["只", "zhī", "(measure word for most animals)"],
   ["头", "tóu", "(measure word for cows, pigs); head"],
   ["条", "tiáo", "(measure word: long things — fish, rivers, roads)"],
   ["已经", "yǐjīng", "already"]
  ]},
  {"type": "grammar-card", "title": "📏 Measure words: 一头牛, not 一牛", "intro": "In English: <i>a cow, three sheep</i>. In Chinese a number <b>can't touch the noun</b> — a measure word goes in between:<div class='formula'>number + measure word + noun</div> <table class='mw'> <tr><td>只 zhī</td><td>birds and small/medium animals: 鸡 鸭 鹅 羊 猫 狗</td></tr> <tr><td>头 tóu</td><td>big farm animals: 牛 猪</td></tr> <tr><td>条 tiáo</td><td>long, thin things: 鱼 河 路 (dogs can use 条 too)</td></tr> <tr><td>口 kǒu</td><td>people in a family: 我家有四口人</td></tr> <tr><td>个 gè</td><td>people and most other things: 一个人 一个苹果</td></tr></table>", "examples": [
   {"zh": "一|yì 头|tóu 牛|niú", "en": "a cow"},
   {"zh": "三|sān 只|zhī 羊|yáng", "en": "three sheep"},
   {"zh": "两|liǎng 条|tiáo 鱼|yú", "en": "two fish", "note": "Before a measure word, 2 is <b>两</b>, not 二."},
   {"zh": "我|wǒ 家|jiā 有|yǒu 四|sì 口|kǒu 人|rén 。", "en": "There are four people in my family."},
   {"zh": "两|liǎng 个|gè 学生|xuésheng", "en": "two students"}
  ]},
  {"type": "fill", "title": "📏 Measure words", "intro": "Which measure word fits?", "items": [
   {"zh": "农场|nóngchǎng 里|lǐ 有|yǒu 三|sān 头|tóu 牛|niú 。", "opts": ["只|zhī", "条|tiáo", "口|kǒu"], "en": "There are three cows on the farm.", "why": "头 for big farm animals: 牛, 猪.", "blank": 4},
   {"zh": "奶奶|nǎinai 养|yǎng 了|le 十|shí 只|zhī 鹅|é 。", "opts": ["头|tóu", "条|tiáo", "口|kǒu"], "en": "Grandma raises ten geese.", "why": "只 for birds and small or medium animals.", "blank": 4},
   {"zh": "河|hé 里|lǐ 有|yǒu 两|liǎng 条|tiáo 鱼|yú 。", "opts": ["只|zhī", "头|tóu", "口|kǒu"], "en": "There are two fish in the river.", "why": "条 for long, thin things: fish, rivers, roads.", "blank": 4},
   {"zh": "我|wǒ 家|jiā 有|yǒu 四|sì 口|kǒu 人|rén 。", "opts": ["只|zhī", "头|tóu", "条|tiáo"], "en": "There are four people in my family.", "why": "口 counts the people in a family: 你家有几口人？", "blank": 4},
   {"zh": "我们|wǒmen 班|bān 有|yǒu 二十|èrshí 个|gè 学生|xuésheng 。", "opts": ["口|kǒu", "只|zhī", "条|tiáo"], "en": "There are twenty students in our class.", "why": "个 for people (outside “how many in your family”) and most things.", "blank": 4},
   {"zh": "我|wǒ 有|yǒu 两|liǎng 个|gè 姐姐|jiějie 。", "opts": ["二|èr"], "en": "I have two older sisters.", "why": "Before a measure word, 2 is 两 (两个), not 二.", "blank": 2}
  ]},
  {"type": "grammar-card", "title": "🧩 Word order #2: WHERE (在…) goes before the verb", "intro": "English: <i>I eat <b>at home</b>.</i> Chinese puts <b>在 + place</b> before the verb:<div class='formula'>Who + When + 在 Where + Do what</div><br>❌ <span class='bad-ex'>我吃饭在家。</span> &nbsp; ✅ 我在家吃饭。", "examples": [
   {"zh": "我|wǒ 在|zài 家|jiā 吃饭|chīfàn 。", "en": "I eat at home.", "note": "我 + 在家 + 吃饭"},
   {"zh": "奶奶|nǎinai 在|zài 院子|yuànzi 里|lǐ 种|zhòng 菜|cài 。", "en": "Grandma plants vegetables in the yard.", "note": "奶奶 + 在院子里 + 种菜"},
   {"zh": "我|wǒ 明天|míngtiān 在|zài 农场|nóngchǎng 喂|wèi 鸡|jī 。", "en": "Tomorrow I'll feed the chickens on the farm.", "note": "who → when → where → do"}
  ]},
  {"type": "order", "title": "🧩 Word order: where before the verb", "items": [
   {"zh": "我|wǒ 在家|zài_jiā 吃饭|chīfàn 。", "en": "I eat at home.", "rule": "📍 在 + WHERE goes before the verb.", "check": ["在家", "吃饭"]},
   {"zh": "奶奶|nǎinai 每天|měitiān 在院子里|zài_yuànzi_li 种菜|zhòng_cài 。", "en": "Grandma plants vegetables in the yard every day.", "rule": "📍 who → when → 在 where → do.", "alts": ["每天奶奶在院子里种菜"], "check": ["在院子里", "种菜"]},
   {"zh": "我|wǒ 明天|míngtiān 在农场|zài_nóngchǎng 喂鸡|wèi_jī 。", "en": "Tomorrow I'll feed the chickens on the farm.", "rule": "📍 who → when → 在 where → do.", "alts": ["明天我在农场喂鸡"], "check": ["在农场", "喂鸡"]}
  ]},
  {"type": "read-aloud", "title": "📖 Read it yourself", "peek": true, "intro": "Read the sentence aloud — <b>no pinyin</b>. Stuck on a word? Tap it to peek. Try first; then you can hear it.", "items": [
   "农场|nóngchǎng 里|lǐ 有|yǒu 两|liǎng 头|tóu 牛|niú 和|hé 五|wǔ 只|zhī 鹅|é 。",
   "河|hé 里|lǐ 有|yǒu 很多|hěn_duō 鱼|yú 。",
   "我|wǒ 家|jiā 有|yǒu 四|sì 口|kǒu 人|rén ， 还有|hái_yǒu 一|yì 条|tiáo 狗|gǒu 。",
   "我|wǒ 已经|yǐjīng 吃饭|chīfàn 了|le 。"
  ]},
  {"type": "listen-check", "title": "👂 Listening", "intro": "Listen (no words on screen) and pick the best answer. You can replay or play it slowly.", "items": [
   {"zh": "奶奶|nǎinai 养|yǎng 了|le 三|sān 头|tóu 猪|zhū 、 六|liù 只|zhī 鹅|é 。", "opts": ["Grandma raises 3 pigs and 6 geese.", "Grandma raises 6 pigs and 3 geese.", "Grandma raises 3 cows and 6 ducks.", "Grandma raises 3 pigs and 6 ducks."], "v": "grandpa"},
   {"zh": "奶奶|nǎinai 养|yǎng 了|le 八|bā 只|zhī 鸭子|yāzi 和|hé 两|liǎng 只|zhī 鹅|é 。", "opts": ["Grandma keeps 8 ducks and 2 geese.", "Grandma keeps 2 ducks and 8 geese.", "Grandma keeps 8 chickens and 2 ducks.", "Grandpa keeps 8 ducks."], "v": "grandpa"},
   {"zh": "这|zhè 条|tiáo 鱼|yú 多少钱|duōshao_qián ？ 二十|èrshí 块|kuài 。 太|tài 贵|guì 了|le ， 十五|shíwǔ 块|kuài 行|xíng 吗|ma ？", "opts": ["The fish is 20; he thinks that's too much and offers 15.", "The fish is 15, and he pays 20.", "He wants two fish for 20.", "The fish is cheap, so he buys it."], "v": "boy"},
   {"zh": "我|wǒ 哥哥|gēge 已经|yǐjīng 十七|shíqī 岁|suì 了|le ， 他|tā 想|xiǎng 当|dāng 医生|yīshēng 。", "opts": ["His older brother is already 17 and wants to be a doctor.", "His older brother is 7 and is sick.", "His older brother is 17 and is a teacher.", "His younger brother is 17 and wants to be a doctor."], "v": "boy"}
  ]},
  {"type": "free-speak", "title": "💬 Answer Grandpa", "intro": "Answer in a full Chinese sentence with measure words. Use the 💡 start. Stuck? Hear an example — then say <b>your own</b>.", "items": [
   {"q": "农场|nóngchǎng 里|lǐ 有|yǒu 什么|shénme 动物|dòngwù ？", "en": "What animals are on the farm?", "hint": "农场|nóngchǎng 里|lǐ 有|yǒu … 头|tóu 牛|niú 、 … 只|zhī …", "example": "农场|nóngchǎng 里|lǐ 有|yǒu 两|liǎng 头|tóu 牛|niú 、 十|shí 只|zhī 鸡|jī 和|hé 一|yì 条|tiáo 狗|gǒu 。", "exampleEn": "There are two cows, ten chickens and a dog on the farm.", "need": ["只", "头", "条"]},
   {"q": "你|nǐ 想|xiǎng 养|yǎng 什么|shénme 动物|dòngwù ？ 养|yǎng 几|jǐ 只|zhī ？", "en": "What animal would you like to raise? How many?", "hint": "我|wǒ 想|xiǎng 养|yǎng …", "example": "我|wǒ 想|xiǎng 养|yǎng 三|sān 只|zhī 鹅|é 和|hé 一|yì 头|tóu 牛|niú 。", "exampleEn": "I'd like to raise three geese and a cow.", "need": ["养"]}
  ]},
  {"type": "type-check", "title": "⌨️ Typing", "intro": "Switch to the Chinese keyboard (Ctrl + Space). Type the pinyin, then <b>check that you picked the right characters</b> (on Day 2 you typed 金天 instead of 今天).", "items": [
   {"en": "I'm not going to school today.", "py": "wǒ jīntiān bú qù xuéxiào", "ans": ["我今天不去学校。"]},
   {"see": "今天", "py": "jīntiān", "ans": ["今天"]},
   {"see": "老师", "py": "lǎoshī", "ans": ["老师"]},
   {"see": "农场", "py": "nóngchǎng", "ans": ["农场"]}
  ]},
  {"type": "char-check", "ask": "pinyin", "title": "📖 Word check", "intro": "How do you say this word? Pick the <b>exact</b> pinyin — watch the tones! Or click “I don't know.” No sound on purpose: this checks reading.", "items": [
   ["牛", "niú", "cow"],
   ["鱼", "yú", "fish"],
   ["只", "zhī", "(measure word for most animals)"],
   ["头", "tóu", "(measure word for cows, pigs); head"],
   ["条", "tiáo", "(measure word: long things — fish, rivers, roads)"],
   ["猪", "zhū", "pig"],
   ["鹅", "é", "goose"],
   ["已经", "yǐjīng", "already"],
   ["名字", "míngzi", "name"],
   ["动物", "dòngwù", "animal"],
   ["一起", "yìqǐ", "together"],
   ["现在", "xiànzài", "now"]
  ]},
  {"type": "paper-writing", "title": "✏️ Paper writing", "chars": [
   ["只", "zhī", "(measure word for most animals)"],
   ["头", "tóu", "(measure word for cows, pigs); head"],
   ["条", "tiáo", "(measure word: long things — fish, rivers, roads)"],
   ["牛", "niú", "cow"],
   ["羊", "yáng", "sheep; goat"],
   ["鱼", "yú", "fish"]
  ]},
 ]
};
