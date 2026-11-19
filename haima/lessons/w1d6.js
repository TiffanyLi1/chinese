// Built from w1d6.yaml by scripts/build_lesson.py — edit the plan or library, not this file.
window.LESSON = {
 "id": "w1d6",
 "title": "Saturday test · Week 1",
 "reward": [{"e": "🏆", "label": "week 1 trophy"}],
 "finishText": "Test done — 🏆 your Week 1 trophy is on the farm! Mom will see how you did, and next week's lessons will be built from it.",
 "week": 1,
 "day": 6,
 "steps": [
  {"type": "story", "title": "🏆 Saturday test", "intro": "This test checks what you learned this week: reading, listening, word order, measure words, radicals, speaking and typing. About 20–25 minutes.<br><b>Do your best and don't guess wildly</b> — if you really don't know, click “I don't know.” That helps Mom plan next week.", "next": "Start the test ▶"},
  {"type": "char-check", "ask": "pinyin", "title": "📖 Word check", "intro": "How do you say this word? Pick the <b>exact</b> pinyin — watch the tones! Or click “I don't know.” No sound on purpose: this checks reading.", "items": [
   ["农场", "nóngchǎng", "farm"],
   ["爷爷", "yéye", "grandpa (dad's dad)"],
   ["牛", "niú", "cow"],
   ["奶奶", "nǎinai", "grandma (dad's mom)"],
   ["哥哥", "gēge", "older brother"],
   ["名字", "míngzi", "name"],
   ["现在", "xiànzài", "now"],
   ["动物", "dòngwù", "animal"],
   ["一起", "yìqǐ", "together"],
   ["已经", "yǐjīng", "already"],
   ["但是", "dànshì", "but"],
   ["医生", "yīshēng", "doctor"],
   ["商店", "shāngdiàn", "store"],
   ["多少钱", "duōshao qián", "how much (money)?"],
   ["中国", "Zhōngguó", "China"],
   ["吃饭", "chīfàn", "to eat (a meal)"],
   ["河", "hé", "river"],
   ["花", "huā", "flower"],
   ["鱼", "yú", "fish"],
   ["只", "zhī", "(measure word for most animals)"]
  ]},
  {"type": "read-check", "title": "📚 Sentence reading", "intro": "Read the sentence (no pinyin, no sound). What does it mean?", "items": [
   {"zh": "农场|nóngchǎng 里|lǐ 的|de 动物|dòngwù 都|dōu 很|hěn 可爱|kě'ài 。", "opts": ["The animals on the farm are all cute.", "There are no animals on the farm.", "The farm animals are all big.", "I like the animals at the zoo."]},
   {"zh": "这个|zhège 西瓜|xīguā 多少钱|duōshao_qián ？", "opts": ["How much is this watermelon?", "How many watermelons are there?", "Is this watermelon sweet?", "Where did you buy this watermelon?"]},
   {"zh": "姐姐|jiějie 在|zài 院子|yuànzi 里|lǐ 洗|xǐ 菜|cài 。", "opts": ["My older sister is washing vegetables in the yard.", "My older sister is planting vegetables in the yard.", "My older sister is washing clothes at home.", "My older sister is eating vegetables in the yard."]},
   {"zh": "我|wǒ 明天|míngtiān 和|hé 哥哥|gēge 一起|yìqǐ 去|qù 农场|nóngchǎng 。", "opts": ["Tomorrow I'm going to the farm with my older brother.", "Today I went to the farm with my older brother.", "Tomorrow my older brother is going to school.", "My older brother lives on the farm."]},
   {"zh": "因为|yīnwèi 下雨|xiàyǔ 了|le ， 所以|suǒyǐ 鸭子|yāzi 很|hěn 高兴|gāoxìng 。", "opts": ["Because it rained, the ducks are happy.", "Because the ducks are happy, it rained.", "It rained, so the ducks are sad.", "The ducks don't like rain."]}
  ]},
  {"type": "listen-check", "title": "👂 Listening", "intro": "Listen (no words on screen) and pick the best answer. You can replay or play it slowly.", "items": [
   {"zh": "你|nǐ 什么|shénme 时候|shíhou 有|yǒu 空|kòng ？ 我们|wǒmen 一起|yìqǐ 去|qù 钓鱼|diàoyú 吧|ba 。", "opts": ["When are you free? Let's go fishing together.", "Where are you? Let's go fishing.", "Are you free today? Let's go swimming.", "When did you go fishing?"], "v": "boy"},
   {"zh": "我|wǒ 不|bù 喜欢|xǐhuan 喝|hē 牛奶|niúnǎi ， 因为|yīnwèi 我|wǒ 觉得|juéde 不|bù 好喝|hǎohē 。", "opts": ["She doesn't like milk because she thinks it doesn't taste good.", "She likes milk because it's healthy.", "She doesn't like milk because it's too cold.", "She thinks milk tastes great."], "v": "girl"},
   {"zh": "这些|zhèxiē 东西|dōngxi 都|dōu 是|shì 爷爷|yéye 的|de ， 你|nǐ 别|bié 拿|ná 。", "opts": ["These things are all Grandpa's — don't take them.", "These are all yours — take them.", "Grandpa gave you all these things.", "Grandpa wants to buy these things."], "v": "girl"},
   {"zh": "我|wǒ 哥哥|gēge 比|bǐ 我|wǒ 大|dà 三|sān 岁|suì ， 可是|kěshì 我|wǒ 比|bǐ 他|tā 高|gāo 。", "opts": ["His brother is 3 years older, but he is taller than his brother.", "His brother is 3 years older and taller.", "He is 3 years older than his brother.", "His brother is 3 years younger but taller."], "v": "boy"},
   {"zh": "你|nǐ 觉得|juéde 这|zhè 件|jiàn 衣服|yīfu 怎么样|zěnmeyàng ？ 我|wǒ 觉得|juéde 颜色|yánsè 不|bú 太|tài 好看|hǎokàn 。", "opts": ["She thinks the color of the clothes isn't very nice.", "She thinks the clothes are too expensive.", "She loves the color of the clothes.", "She asks where to buy the clothes."], "v": "girl"}
  ]},
  {"type": "fill", "title": "📏 Measure words", "items": [
   {"zh": "河|hé 里|lǐ 有|yǒu 八|bā 只|zhī 鸭子|yāzi 。", "opts": ["头|tóu", "条|tiáo", "口|kǒu"], "en": "There are eight ducks in the river.", "why": "只 for birds: 鸡, 鸭, 鹅.", "blank": 4},
   {"zh": "我|wǒ 想|xiǎng 养|yǎng 一|yì 头|tóu 牛|niú 。", "opts": ["只|zhī", "条|tiáo", "个|gè"], "en": "I want to raise a cow.", "why": "头 for big farm animals: 牛, 猪.", "blank": 4},
   {"zh": "我|wǒ 家|jiā 有|yǒu 四|sì 口|kǒu 人|rén 。", "opts": ["只|zhī", "头|tóu", "条|tiáo"], "en": "There are four people in my family.", "why": "口 counts the people in a family: 你家有几口人？", "blank": 4}
  ]},
  {"type": "order", "title": "🧩 Word order", "items": [
   {"zh": "我们|wǒmen 星期六|xīngqīliù 在河边|zài_hébiān 钓鱼|diàoyú 。", "en": "On Saturday we go fishing by the river.", "rule": "📍 who → when → 在 where → do.", "alts": ["星期六我们在河边钓鱼"], "check": ["在河边", "钓鱼"]},
   {"zh": "爸爸|bàba 晚上|wǎnshang 在家|zài_jiā 做饭|zuòfàn 。", "en": "Dad cooks at home in the evening.", "rule": "⏰📍 who → when → 在 where → do.", "alts": ["晚上爸爸在家做饭"], "check": ["晚上", "做饭"]},
   {"zh": "爷爷|yéye 早上|zǎoshang 喂|wèi 小鸡|xiǎojī 。", "en": "Grandpa feeds the chicks in the morning.", "rule": "⏰ WHEN goes before the verb: who → when → do.", "alts": ["早上爷爷喂小鸡"], "check": ["早上", "喂"]}
  ]},
  {"type": "quiz", "title": "🔍 Radicals", "items": [
   {"show": "汤", "q": "汤 (soup) — which radical does it have?", "opts": ["氵 water", "女 woman", "口 mouth", "艹 plants"], "why": "氵 = water — soup is watery! 汤 tāng.", "say": "汤"},
   {"show": "菜", "q": "What is 菜 probably about?", "opts": ["plants", "water", "a woman", "the mouth"], "why": "艹 = plants. 菜 cài = vegetables.", "say": "菜"},
   {"show": "骂", "q": "骂 has <b>马</b> at the bottom. How might it sound?", "opts": ["mà", "kǒu", "hé", "cǎo"], "why": "马 is the sound part: 骂 mà (to scold).", "say": "骂"},
   {"show": "叫", "q": "What is 叫 probably about?", "opts": ["the mouth", "water", "plants", "a woman"], "why": "口 = mouth. 叫 jiào = to call, to be named (我叫海马).", "say": "叫"}
  ]},
  {"type": "read-aloud", "title": "📖 Read aloud", "peek": true, "intro": "Read the sentence aloud — no pinyin. Tap a word only if you really need its pinyin (peeks are counted).", "items": [
   "我们|wǒmen 晚上|wǎnshang 一起|yìqǐ 吃饭|chīfàn 。",
   "河|hé 里|lǐ 有|yǒu 很多|hěn_duō 鱼|yú 。",
   "这个|zhège 西瓜|xīguā 多少钱|duōshao_qián ？"
  ]},
  {"type": "free-speak", "title": "💬 Speaking", "intro": "Answer in Chinese with full sentences. Say as much as you can!", "items": [
   {"q": "请|qǐng 介绍|jièshào 一下|yíxià 你|nǐ 的|de 家|jiā 。", "en": "Please introduce your family.", "hint": "我|wǒ 家|jiā 有|yǒu … 口|kǒu 人|rén 。", "need": ["家"], "min": 6},
   {"q": "你|nǐ 明天|míngtiān 在|zài 哪儿|nǎr ？ 做|zuò 什么|shénme ？", "en": "Where will you be tomorrow? What will you do?", "hint": "我|wǒ 明天|míngtiān 在|zài …", "need": ["明天"], "min": 6}
  ]},
  {"type": "type-check", "title": "⌨️ Typing", "intro": "Switch to the Chinese keyboard (Ctrl + Space). Type the pinyin, then pick the right characters.", "items": [
   {"en": "I'm at home now.", "py": "wǒ xiànzài zài jiā", "ans": ["我现在在家。"]},
   {"see": "农场", "py": "nóngchǎng", "ans": ["农场"]},
   {"see": "一起", "py": "yìqǐ", "ans": ["一起"]}
  ]},
  {"type": "paper-writing", "title": "✏️ Paper writing", "chars": [
   ["爷", "yé", "(in 爷爷 = grandpa (dad's dad))"],
   ["名", "míng", "(in 名字 = name)"],
   ["现", "xiàn", "(in 现在 = now)"],
   ["牛", "niú", "cow"],
   ["河", "hé", "river"]
  ]},
 ]
};
