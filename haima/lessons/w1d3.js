// Built from w1d3.yaml by scripts/build_lesson.py — edit the plan or library, not this file.
window.LESSON = {
 "id": "w1d3",
 "title": "Day 3 · Family words + Chinese word order",
 "reward": [{"e": "🌽", "label": "corn"}],
 "finishText": "Great work! You learned 8 words and the #1 rule of Chinese word order. 🌽 Corn is growing on your farm!",
 "week": 1,
 "day": 3,
 "steps": [
  {"type": "read-after", "title": "🌅 Morning on the farm", "lines": [
   {"zh": "现在|xiànzài 是|shì 早上|zǎoshang 六|liù 点|diǎn 。", "en": "It's six in the morning now.", "v": "boy"},
   {"zh": "爷爷|yéye 早上|zǎoshang 喂|wèi 小鸡|xiǎojī ， 奶奶|nǎinai 早上|zǎoshang 喂|wèi 鸭子|yāzi 。", "en": "Grandpa feeds the chicks in the morning; Grandma feeds the ducks.", "v": "boy"},
   {"zh": "海马|Hǎimǎ ， 你|nǐ 现在|xiànzài 做|zuò 什么|shénme ？", "en": "Haima, what are you doing now?", "v": "grandpa"},
   {"zh": "我|wǒ 现在|xiànzài 喂|wèi 狗|gǒu 。 我们|wǒmen 一起|yìqǐ 吃|chī 早饭|zǎofàn 吧|ba ！", "en": "I'm feeding the dog now. Let's eat breakfast together!", "v": "boy"},
   {"zh": "好|hǎo ！ 吃完|chīwán 早饭|zǎofàn ， 我们|wǒmen 一起|yìqǐ 去|qù 看|kàn 牛|niú 。", "en": "OK! After breakfast, let's go see the cows together.", "v": "grandpa"}
  ]},
  {"type": "new-words", "intro": "These are words you already <b>know by ear</b> — now learn to <b>read</b> them. Listen, look, and say each one.", "title": "🆕 New words", "items": [
   ["爷爷", "yéye", "grandpa (dad's dad)"],
   ["奶奶", "nǎinai", "grandma (dad's mom)"],
   ["哥哥", "gēge", "older brother"],
   ["名字", "míngzi", "name"],
   ["现在", "xiànzài", "now"],
   ["农场", "nóngchǎng", "farm"],
   ["动物", "dòngwù", "animal"],
   ["一起", "yìqǐ", "together"]
  ]},
  {"type": "grammar-card", "title": "🧩 Word order #1: WHEN goes before the verb", "intro": "In English the time often goes at the end: <i>I go to the farm <b>tomorrow</b>.</i><br>In Chinese the time goes <b>before the verb</b>:<div class='formula'>Who + When + Do what</div><br>❌ <span class='bad-ex'>我去农场明天。</span> &nbsp; ✅ 我明天去农场。", "outro": "Remember: <b>time is never at the end</b> in Chinese.", "examples": [
   {"zh": "我|wǒ 明天|míngtiān 去|qù 农场|nóngchǎng 。", "en": "I'm going to the farm tomorrow.", "note": "我 + 明天 + 去农场"},
   {"zh": "爷爷|yéye 早上|zǎoshang 喂|wèi 小鸡|xiǎojī 。", "en": "Grandpa feeds the chicks in the morning.", "note": "爷爷 + 早上 + 喂小鸡"},
   {"zh": "明天|míngtiān 我|wǒ 去|qù 学校|xuéxiào 。", "en": "Tomorrow I go to school.", "note": "The time can also go first — but never after the verb."}
  ]},
  {"type": "order", "title": "🧩 Word order: when before the verb", "items": [
   {"zh": "我|wǒ 明天|míngtiān 去|qù 农场|nóngchǎng 。", "en": "I'm going to the farm tomorrow.", "rule": "⏰ WHEN goes before the verb: who → when → do.", "alts": ["明天我去农场"], "check": ["明天", "去"]},
   {"zh": "爷爷|yéye 早上|zǎoshang 喂|wèi 小鸡|xiǎojī 。", "en": "Grandpa feeds the chicks in the morning.", "rule": "⏰ WHEN goes before the verb: who → when → do.", "alts": ["早上爷爷喂小鸡"], "check": ["早上", "喂"]},
   {"zh": "我们|wǒmen 晚上|wǎnshang 一起|yìqǐ 吃饭|chīfàn 。", "en": "We eat together in the evening.", "rule": "⏰ WHEN goes before the verb — and 一起 (together) too: 我们 + 晚上 + 一起 + 吃饭.", "alts": ["晚上我们一起吃饭"], "check": ["晚上", "吃饭"]},
   {"zh": "我|wǒ 今天|jīntiān 不|bú 去|qù 学校|xuéxiào 。", "en": "I'm not going to school today.", "rule": "⏰ WHEN goes before the verb, and 不 goes right before the verb.", "alts": ["今天我不去学校"], "check": ["今天", "去"]},
   {"zh": "哥哥|gēge 现在|xiànzài 喂|wèi 狗|gǒu 。", "en": "My older brother is feeding the dog now.", "rule": "⏰ WHEN (现在 = now) goes before the verb.", "alts": ["现在哥哥喂狗"], "check": ["现在", "喂"]}
  ]},
  {"type": "grammar-card", "title": "👅 zh ch sh vs z c s", "intro": "On Day 2 you mixed these up (中 Zhōng → Zōng, 四 sì → cì). They sound different and you need them to type!<br> <b>zh ch sh</b> — tongue curled back (the <b>h</b> means curl).<br><b>z c s</b> — tongue flat behind your teeth. <b>c</b> sounds like the <i>ts</i> in <i>cats</i>.", "examples": [
   {"zh": "四|sì", "en": "four — s (flat)"},
   {"zh": "十|shí", "en": "ten — sh (curled)"},
   {"zh": "字|zì", "en": "character — z (flat)"},
   {"zh": "中|zhōng", "en": "middle — zh (curled)"},
   {"zh": "菜|cài", "en": "vegetables — c = ts (flat)"},
   {"zh": "吃|chī", "en": "eat — ch (curled)"}
  ]},
  {"type": "pinyin-check", "title": "🔤 zh ch sh vs z c s", "intro": "Listen. Which pinyin is it? Curled tongue (zh ch sh) or flat (z c s)?", "items": [
   {"say": "中", "opts": ["zhōng", "zōng", "chōng"]},
   {"say": "四", "opts": ["sì", "cì", "shì"]},
   {"say": "吃", "opts": ["chī", "cī", "qī"]},
   {"say": "草", "opts": ["cǎo", "chǎo", "zǎo"]},
   {"say": "十", "opts": ["shí", "sí", "xí"]},
   {"say": "字", "opts": ["zì", "zhì", "cì"]},
   {"say": "菜", "opts": ["cài", "chài", "sài"]},
   {"say": "书", "opts": ["shū", "sū", "xū"]}
  ]},
  {"type": "read-aloud", "title": "📖 Read it yourself", "peek": true, "intro": "Read the sentence aloud — <b>no pinyin this time</b>. If you get stuck on a word, tap it to peek at its pinyin. Try first; then you can hear it.", "items": [
   "我|wǒ 现在|xiànzài 在|zài 家|jiā 。",
   "爷爷|yéye 早上|zǎoshang 喂|wèi 小鸡|xiǎojī 。",
   "你|nǐ 奶奶|nǎinai 叫|jiào 什么|shénme 名字|míngzi ？",
   "我们|wǒmen 晚上|wǎnshang 一起|yìqǐ 吃饭|chīfàn 。",
   "我|wǒ 明天|míngtiān 和|hé 哥哥|gēge 一起|yìqǐ 去|qù 农场|nóngchǎng 。"
  ]},
  {"type": "listen-check", "title": "👂 Listening", "intro": "Listen (no words on screen) and pick the best answer. You can replay or play it slowly.", "items": [
   {"zh": "我|wǒ 家|jiā 有|yǒu 四|sì 口|kǒu 人|rén ： 爸爸|bàba 、 妈妈|māma 、 哥哥|gēge 和|hé 我|wǒ 。", "opts": ["Four people: Dad, Mom, his older brother, and him.", "Five people: Dad, Mom, his brother, his sister, and him.", "Four people: Mom, Grandma, his brother, and him.", "Three people: Dad, Mom, and him."], "v": "boy"},
   {"zh": "我|wǒ 明天|míngtiān 早上|zǎoshang 和|hé 爷爷|yéye 一起|yìqǐ 去|qù 河边|hébiān 钓鱼|diàoyú 。", "opts": ["Tomorrow morning he's going fishing by the river with Grandpa.", "This morning he went fishing with Grandpa.", "Tomorrow morning Grandpa is going to the store.", "Tomorrow evening he's going swimming with Grandpa."], "v": "boy"},
   {"zh": "爷爷|yéye 说|shuō 今天|jīntiān 天气|tiānqì 好|hǎo ， 我们|wǒmen 要|yào 在|zài 院子|yuànzi 里|lǐ 种|zhòng 西红柿|xīhóngshì 。", "opts": ["Grandpa says the weather is nice, so they'll plant tomatoes in the yard.", "They'll pick tomatoes because it's sunny.", "Grandpa says it will rain, so they'll stay inside.", "They'll plant potatoes in the yard."], "v": "boy"},
   {"zh": "不好意思|bù_hǎo_yìsi ， 我|wǒ 现在|xiànzài 很|hěn 忙|máng ， 晚上|wǎnshang 再|zài 给|gěi 你|nǐ 打电话|dǎ_diànhuà 吧|ba 。", "opts": ["She's busy now and will call back tonight.", "She's free now and wants to talk.", "She called this morning, but nobody answered.", "She'll be busy all night."], "v": "girl"}
  ]},
  {"type": "free-speak", "title": "💬 Answer Grandpa", "intro": "Answer in a full Chinese sentence. Use the 💡 start. Stuck? Hear an example — then say <b>your own</b> answer.", "items": [
   {"q": "你|nǐ 家|jiā 有|yǒu 几|jǐ 口|kǒu 人|rén ？ 有|yǒu 谁|shéi ？", "en": "How many people are in your family? Who?", "hint": "我|wǒ 家|jiā 有|yǒu … 口|kǒu 人|rén ：", "example": "我|wǒ 家|jiā 有|yǒu 四|sì 口|kǒu 人|rén ： 爸爸|bàba 、 妈妈|māma 、 哥哥|gēge 和|hé 我|wǒ 。", "exampleEn": "There are four people in my family: Dad, Mom, my older brother and me.", "need": ["口"]},
   {"q": "你|nǐ 现在|xiànzài 在|zài 哪儿|nǎr ？", "en": "Where are you now?", "hint": "我|wǒ 现在|xiànzài 在|zài …", "example": "我|wǒ 现在|xiànzài 在|zài 家|jiā 。", "exampleEn": "I'm at home now.", "need": ["在"]},
   {"q": "你|nǐ 明天|míngtiān 做|zuò 什么|shénme ？", "en": "What are you doing tomorrow?", "hint": "我|wǒ 明天|míngtiān …", "example": "我|wǒ 明天|míngtiān 去|qù 学校|xuéxiào ， 晚上|wǎnshang 喂|wèi 小鸡|xiǎojī 。", "exampleEn": "Tomorrow I'm going to school, and in the evening I'll feed the chicks.", "need": ["明天"]}
  ]},
  {"type": "char-check", "ask": "pinyin", "title": "📖 Word check", "intro": "How do you say this word? Pick the <b>exact</b> pinyin — watch the tones! Or click “I don't know.” No sound on purpose: this checks reading.", "items": [
   ["爷爷", "yéye", "grandpa (dad's dad)"],
   ["奶奶", "nǎinai", "grandma (dad's mom)"],
   ["农场", "nóngchǎng", "farm"],
   ["名字", "míngzi", "name"],
   ["现在", "xiànzài", "now"],
   ["什么", "shénme", "what"],
   ["动物", "dòngwù", "animal"],
   ["一起", "yìqǐ", "together"],
   ["学校", "xuéxiào", "school"],
   ["哥哥", "gēge", "older brother"],
   ["今天", "jīntiān", "today"],
   ["明天", "míngtiān", "tomorrow"],
   ["中国", "Zhōngguó", "China"],
   ["吃饭", "chīfàn", "to eat (a meal)"]
  ]},
  {"type": "paper-writing", "title": "✏️ Paper writing", "chars": [
   ["爷", "yé", "(in 爷爷 = grandpa (dad's dad))"],
   ["奶", "nǎi", "(in 奶奶 = grandma (dad's mom))"],
   ["哥", "gē", "(in 哥哥 = older brother)"],
   ["名", "míng", "(in 名字 = name)"],
   ["字", "zì", ""],
   ["现", "xiàn", "(in 现在 = now)"]
  ]},
 ]
};
