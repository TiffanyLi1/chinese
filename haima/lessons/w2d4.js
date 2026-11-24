// Built from w2d4.yaml by scripts/build_lesson.py — edit the plan or library, not this file.
window.LESSON = {
 "id": "w2d4",
 "title": "Week 2 · Day 4 · Questions + the forest",
 "reward": [{"e": "🌲", "label": "pine tree"}],
 "finishText": "你学会了问问题！(You learned to ask questions!) 🌲 A pine tree is growing on your farm.",
 "week": 2,
 "day": 4,
 "steps": [
  {"type": "new-words", "review": true, "title": "🌱 Farm review", "items": [
   ["鸡蛋", "jīdàn", "egg"],
   ["牛奶", "niúnǎi", "milk"],
   ["苹果", "píngguǒ", "apple"],
   ["虽然", "suīrán", "although"],
   ["可是", "kěshì", "but"],
   ["还是", "háishi", "still; or (in questions)"],
   ["鸟", "niǎo", "bird"],
   ["羊毛", "yángmáo", "wool"]
  ]},
  {"type": "read-after", "title": "🌲 Where is Xiao Hei?", "lines": [
   {"zh": "小黑|Xiǎo_Hēi 在|zài 哪儿|nǎr ？", "en": "Where is Xiao Hei?", "v": "boy"},
   {"zh": "它|tā 在|zài 树|shù 下面|xiàmian 吗|ma ？", "en": "Is it under the tree?", "v": "boy"},
   {"zh": "不|bú 在|zài 。 它|tā 去|qù 森林|sēnlín 了|le 。", "en": "No. It went to the forest.", "v": "grandpa"},
   {"zh": "森林|sēnlín 里|lǐ 怎么样|zěnmeyàng ？", "en": "What's it like in the forest?", "v": "boy"},
   {"zh": "森林|sēnlín 里|lǐ 有|yǒu 很多|hěn_duō 树|shù 。 你|nǐ 想|xiǎng 去|qù 吗|ma ？", "en": "There are lots of trees in the forest. Do you want to go?", "v": "grandpa"}
  ]},
  {"type": "new-words", "intro": "Question words and the forest. Listen, look, and say each one.", "title": "🆕 New words", "items": [
   ["谁", "shéi", "who"],
   ["哪儿", "nǎr", "where"],
   ["怎么样", "zěnmeyàng", "how is it? / what's it like?"],
   ["吗", "ma", "(yes/no question word)"],
   ["呢", "ne", "(what about…?)"],
   ["树", "shù", "tree"],
   ["森林", "sēnlín", "forest"],
   ["木头", "mùtou", "wood"]
  ]},
  {"type": "grammar-card", "title": "❓ Questions: don't move anything!", "intro": "English moves words to ask: <i>You are going there → <b>Where are</b> you going?</i><br>Chinese <b>doesn't move anything</b>. Put the question word exactly where the answer goes:<div class='formula'>你去哪儿？ → 我去河边。</div><br>Yes/no question: add <b>吗</b> at the end. “What about…?”: <b>呢</b>. A or B: <b>还是</b>. Or ask <b>A不A</b>: 去不去?", "examples": [
   {"zh": "你|nǐ 去|qù 哪儿|nǎr ？", "en": "Where are you going?", "note": "Answer: 我去河边。 — same order"},
   {"zh": "谁|shéi 在|zài 院子|yuànzi 里|lǐ ？", "en": "Who is in the yard?", "note": "Answer: 爷爷在院子里。"},
   {"zh": "你|nǐ 喜欢|xǐhuan 狗|gǒu 吗|ma ？", "en": "Do you like dogs?"},
   {"zh": "我|wǒ 喜欢|xǐhuan 猫|māo ， 你|nǐ 呢|ne ？", "en": "I like cats. What about you?"},
   {"zh": "你|nǐ 去不去|qù_bu_qù ？", "en": "Are you going or not?"}
  ]},
  {"type": "order", "title": "❓ Build the question", "items": [
   {"zh": "你|nǐ 去|qù 哪儿|nǎr ？", "en": "Where are you going?", "rule": "❓ Don't move the question word — it stays where the answer goes (我去河边 → 你去哪儿).", "check": ["去", "哪儿"]},
   {"zh": "小黑|Xiǎo_Hēi 在|zài 哪儿|nǎr ？", "en": "Where is Xiao Hei?", "rule": "❓ Same order as the answer: 小黑在河边 → 小黑在哪儿？", "check": ["在", "哪儿"]},
   {"zh": "你|nǐ 喜欢|xǐhuan 什么|shénme 动物|dòngwù ？", "en": "What animal do you like?", "rule": "❓ Same order as the answer: 我喜欢狗 → 你喜欢什么动物？", "check": ["喜欢", "什么"]},
   {"zh": "你|nǐ 什么时候|shénme_shíhou 去|qù 农场|nóngchǎng ？", "en": "When are you going to the farm?", "rule": "❓ “When” is a time word → before the verb, like 我明天去.", "alts": ["什么时候你去农场"], "check": ["什么时候", "去"]}
  ]},
  {"type": "fill", "title": "❓ Which question word?", "items": [
   {"zh": "我|wǒ 喜欢|xǐhuan 猫|māo ， 你|nǐ 呢|ne ？", "opts": ["吗|ma"], "en": "I like cats. What about you?", "why": "“What about you?” = 你呢？ 吗 makes a yes/no question.", "blank": 5},
   {"zh": "你|nǐ 喜欢|xǐhuan 狗|gǒu 吗|ma ？", "opts": ["呢|ne"], "en": "Do you like dogs?", "why": "Yes/no question → 吗 at the end.", "blank": 3},
   {"zh": "你|nǐ 喜欢|xǐhuan 狗|gǒu 还是|háishi 猫|māo ？", "opts": ["和|hé", "吗|ma"], "en": "Do you like dogs or cats?", "why": "“A or B?” in a question → 还是. (和 = and)", "blank": 3},
   {"zh": "谁|shéi 在|zài 院子|yuànzi 里|lǐ ？", "opts": ["什么|shénme", "哪儿|nǎr"], "en": "Who is in the yard?", "why": "Who = 谁 shéi.", "blank": 0}
  ]},
  {"type": "grammar-card", "title": "🔍 Radical 木 = tree, wood", "intro": "<div class='radgrid'><div><b>木</b>tree, wood<br><span>树林森桌校</span></div></div>One tree 木 → two trees 林 (woods) → three trees 森 (forest)!", "examples": [
   {"zh": "木头|mùtou", "en": "wood"},
   {"zh": "树|shù", "en": "tree"},
   {"zh": "森林|sēnlín", "en": "forest — 5 trees in two characters!"},
   {"zh": "学校|xuéxiào", "en": "school — 校 has 木 (old schools were wooden)"}
  ]},
  {"type": "quiz", "title": "🔍 Radical detective", "items": [
   {"show": "林", "q": "林 = two <b>木</b>. What does it mean?", "opts": ["woods (many trees)", "two people", "a river", "a field"], "why": "木 = tree. 林 lín = woods; 森林 = forest.", "say": "林"},
   {"show": "桌", "q": "桌 has <b>木</b> at the bottom. What is it probably made of?", "opts": ["wood", "water", "stone", "cloth"], "why": "桌子 zhuōzi = table (made of wood).", "say": "桌"},
   {"show": "狮", "q": "What is 狮 probably?", "opts": ["an animal", "water", "a tree", "an eye"], "why": "犭 = animal. 狮子 shīzi = lion.", "say": "狮"},
   {"show": "睡", "q": "Look at the left side of 睡. What is it about?", "opts": ["eyes (sleeping = closing your eyes)", "the mouth", "a tree", "water"], "why": "目 = eye. 睡觉 shuìjiào = sleep.", "say": "睡"}
  ]},
  {"type": "read-aloud", "title": "📖 Read it yourself", "peek": "after", "intro": "Read the question aloud <b>on your own first</b> — make it sound like a question! After your first try you can tap words to peek.", "items": [
   "你|nǐ 的|de 狗|gǒu 叫|jiào 什么|shénme 名字|míngzi ？",
   "小黑|Xiǎo_Hēi 在|zài 哪儿|nǎr ？",
   "你|nǐ 喜欢|xǐhuan 狗|gǒu 还是|háishi 猫|māo ？",
   "我|wǒ 喜欢|xǐhuan 猫|māo ， 你|nǐ 呢|ne ？"
  ]},
  {"type": "listen-check", "title": "👂 Listening", "intro": "Listen (no words on screen) and pick the best answer. You can replay or play it slowly.", "items": [
   {"zh": "这|zhè 本|běn 书|shū 是|shì 谁|shéi 的|de ？ 不|bú 是|shì 我|wǒ 的|de ， 可能|kěnéng 是|shì 哥哥|gēge 的|de 。", "opts": ["Whose book? — Not mine; maybe my older brother's.", "Whose book? — It's mine.", "Whose pen? — My older brother's.", "Where's the book? — With my brother."], "v": "boy"},
   {"zh": "今天|jīntiān 下午|xiàwǔ 三|sān 点|diǎn ， 我们|wǒmen 在|zài 河边|hébiān 见|jiàn ， 别|bié 忘|wàng 了|le 带|dài 水|shuǐ 。", "opts": ["Meet at the river at 3 this afternoon; bring water.", "Meet at the river at 3 tomorrow; bring food.", "Meet in the forest at 4 this afternoon.", "Go swimming in the river at 3."], "v": "grandpa"},
   {"zh": "谁|shéi 是|shì 你|nǐ 的|de 中文|Zhōngwén 老师|lǎoshī ？ 王|Wáng 老师|lǎoshī ， 她|tā 很|hěn 漂亮|piàoliang ， 也|yě 很|hěn 有意思|yǒu_yìsi 。", "opts": ["His Chinese teacher is Ms. Wang; she's pretty and fun.", "His Chinese teacher is Mr. Wang; he's strict.", "Ms. Wang is his math teacher.", "He doesn't have a Chinese teacher."], "v": "boy"},
   {"zh": "你|nǐ 去|qù 哪儿|nǎr ？ 我|wǒ 去|qù 河边|hébiān 看看|kànkan 鸭子|yāzi ， 你|nǐ 去不去|qù_bu_qù ？", "opts": ["He's going to the river to see the ducks and asks if you're coming.", "He's going to the store and asks for help.", "He asks where the ducks are.", "He doesn't want to go to the river."], "v": "boy"}
  ]},
  {"type": "free-speak", "title": "💬 Ask and answer", "intro": "Speak in full Chinese sentences. Use the 💡 start. Stuck? Hear an example — then say <b>your own</b>.", "items": [
   {"q": "你|nǐ 想|xiǎng 问|wèn 爷爷|yéye 什么|shénme ？ 问|wèn 他|tā 一个|yí_gè 问题|wèntí 。", "en": "Ask Grandpa a question (any question!).", "hint": "爷爷|yéye ， 你|nǐ …", "example": "爷爷|yéye ， 小黑|Xiǎo_Hēi 在|zài 哪儿|nǎr ？", "exampleEn": "Grandpa, where is Xiao Hei?", "need": ["吗", "呢", "谁", "哪儿", "什么", "怎么样", "几", "为什么", "还是"], "min": 4},
   {"q": "你|nǐ 家|jiā 附近|fùjìn 有|yǒu 森林|sēnlín 吗|ma ？ 那儿|nàr 怎么样|zěnmeyàng ？", "en": "Is there a forest near your home? What's it like?", "hint": "我|wǒ 家|jiā 附近|fùjìn 有|yǒu …", "example": "我|wǒ 家|jiā 附近|fùjìn 有|yǒu 森林|sēnlín ， 里面|lǐmiàn 有|yǒu 很多|hěn_duō 树|shù ， 很|hěn 安静|ānjìng 。", "exampleEn": "There's a forest near my home; there are lots of trees inside and it's very quiet.", "need": ["森林", "树"], "min": 8}
  ]},
  {"type": "free-write", "title": "✍️ Write questions", "items": [
   {"q": "你|nǐ 想|xiǎng 认识|rènshi 一个|yí_gè 新|xīn 朋友|péngyou 。 写|xiě 两个|liǎng_gè 问题|wèntí 问|wèn 他|tā 。", "en": "You want to get to know a new friend. Write TWO questions to ask him.", "hint": "你|nǐ 叫|jiào … ？ 你|nǐ 喜欢|xǐhuan … ？", "example": "你|nǐ 叫|jiào 什么|shénme 名字|míngzi ？ 你|nǐ 喜欢|xǐhuan 狗|gǒu 还是|háishi 猫|māo ？", "exampleEn": "What's your name? Do you like dogs or cats?", "need": ["吗", "呢", "谁", "哪儿", "什么", "怎么样", "几", "为什么", "还是"], "min": 8}
  ]},
  {"type": "char-check", "ask": "pinyin", "title": "📖 Word check", "intro": "How do you say this word? Pick the <b>exact</b> pinyin — watch the tones! Or click “I don't know.” No sound on purpose: this checks reading.", "items": [
   ["学校", "xuéxiào", "school"],
   ["一起", "yìqǐ", "together"],
   ["睡觉", "shuìjiào", "to sleep"],
   ["谁", "shéi", "who"],
   ["哪儿", "nǎr", "where"],
   ["怎么样", "zěnmeyàng", "how is it? / what's it like?"],
   ["树", "shù", "tree"],
   ["森林", "sēnlín", "forest"],
   ["木头", "mùtou", "wood"],
   ["今天", "jīntiān", "today"],
   ["明天", "míngtiān", "tomorrow"],
   ["中国", "Zhōngguó", "China"]
  ]},
  {"type": "paper-writing", "title": "✏️ Paper writing", "chars": [
   ["吗", "ma", "(yes/no question word)"],
   ["呢", "ne", "(what about…?)"],
   ["谁", "shéi", "who"],
   ["哪", "nǎ", "(in 哪儿 = where)"],
   ["树", "shù", "tree"],
   ["木", "mù", "(in 木头 = wood)"]
  ]},
 ]
};
