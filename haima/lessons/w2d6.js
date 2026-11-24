// Built from w2d6.yaml by scripts/build_lesson.py — edit the plan or library, not this file.
window.LESSON = {
 "id": "w2d6",
 "title": "Saturday test · Week 2 (Units 1–2)",
 "reward": [{"e": "🏆", "label": "week 2 trophy"}],
 "finishText": "Test done — 🏆 your Week 2 trophy is on the farm! Mom will see how you did, and next week is built from it.",
 "week": 2,
 "day": 6,
 "steps": [
  {"type": "story", "title": "🏆 Saturday test — Units 1 and 2", "intro": "This test is like the real STAMP test: reading short notes, listening, grammar, speaking, and <b>typing a short paragraph</b>. About 20–25 minutes.<br>Peeking at pinyin opens only after your first try. If you really don't know, click “I don't know” — don't guess wildly.", "next": "Start the test ▶"},
  {"type": "char-check", "ask": "pinyin", "title": "📖 Word check", "intro": "How do you say this word? Pick the <b>exact</b> pinyin — watch the tones! Or click “I don't know.” No sound on purpose: this checks reading.", "items": [
   ["农场", "nóngchǎng", "farm"],
   ["爷爷", "yéye", "grandpa (dad's dad)"],
   ["牛", "niú", "cow"],
   ["颜色", "yánsè", "color"],
   ["黑色", "hēisè", "black"],
   ["绿色", "lǜsè", "green"],
   ["可爱", "kě'ài", "cute"],
   ["聪明", "cōngming", "smart"],
   ["尾巴", "wěiba", "tail"],
   ["耳朵", "ěrduo", "ear"],
   ["鸡蛋", "jīdàn", "egg"],
   ["牛奶", "niúnǎi", "milk"],
   ["虽然", "suīrán", "although"],
   ["谁", "shéi", "who"],
   ["哪儿", "nǎr", "where"],
   ["休息", "xiūxi", "to rest"]
  ]},
  {"type": "read-check", "title": "📚 Reading", "intro": "Read (no pinyin, no sound) and answer.", "items": [
   {"zh": "海马|Hǎimǎ ： 我|wǒ 今天|jīntiān 下午|xiàwǔ 去|qù 商店|shāngdiàn 。 你|nǐ 先|xiān 喂|wèi 小鸡|xiǎojī ， 然后|ránhòu 写|xiě 作业|zuòyè 。 晚上|wǎnshang 我们|wǒmen 一起|yìqǐ 吃饭|chīfàn 。 —— 妈妈|māma", "opts": ["Feed the chicks", "Do his homework", "Go to the store", "Cook dinner"], "q": "What should Haima do FIRST?"},
   {"zh": "我|wǒ 家|jiā 有|yǒu 一|yì 只|zhī 狗|gǒu ， 叫|jiào 豆豆|Dòudou 。 它|tā 是|shì 白色|báisè 的|de ， 耳朵|ěrduo 很|hěn 长|cháng 。 豆豆|Dòudou 很|hěn 聪明|cōngming ， 可是|kěshì 不|bú 爱|ài 洗澡|xǐzǎo 。", "opts": ["Taking a bath", "Going outside", "Eating", "Playing with other dogs"], "q": "What doesn't Doudou like?"},
   {"zh": "这个|zhège 周末|zhōumò 天气|tiānqì 很|hěn 好|hǎo 。 星期六|xīngqīliù 我们|wǒmen 去|qù 森林|sēnlín 里|lǐ 走路|zǒulù ， 星期天|xīngqītiān 在|zài 河边|hébiān 钓鱼|diàoyú 。", "opts": ["Fish by the river", "Walk in the forest", "Stay home because of the rain", "Go to the store"], "q": "What will they do on Sunday?"},
   {"zh": "它|tā 的|de 眼睛|yǎnjing 是|shì 蓝色|lánsè 的|de 。", "opts": ["Its eyes are blue.", "Its eyes are black.", "Its ears are blue.", "Its eyes are big."]},
   {"zh": "谁|shéi 在|zài 院子|yuànzi 里|lǐ ？", "opts": ["Who is in the yard?", "What's in the yard?", "Where is the yard?", "Is anyone at home?"]}
  ]},
  {"type": "listen-check", "title": "👂 Listening", "intro": "Listen (no words on screen) and pick the best answer. You can replay or play it slowly.", "items": [
   {"zh": "你好|nǐ_hǎo ， 是|shì 海马|Hǎimǎ 吗|ma ？ 我|wǒ 是|shì 小美|Xiǎoměi 。 明天|míngtiān 下午|xiàwǔ 你|nǐ 有|yǒu 空|kòng 吗|ma ？ 我们|wǒmen 一起|yìqǐ 去|qù 图书馆|túshūguǎn 吧|ba 。", "opts": ["Xiaomei calls to invite him to the library tomorrow afternoon.", "Xiaomei calls to invite him to the park tomorrow morning.", "Xiaomei asks to borrow his book.", "Xiaomei says she's busy tomorrow."], "v": "girl"},
   {"zh": "农场|nóngchǎng 一共|yígòng 有|yǒu 三十|sānshí 只|zhī 鸡|jī ， 今天|jīntiān 卖|mài 了|le 十|shí 只|zhī 。", "opts": ["There were 30 chickens; 10 were sold today, so 20 are left.", "There were 13 chickens; 10 were sold today.", "There were 30 chickens; 10 more were bought today.", "There are 40 chickens now."], "v": "grandpa"},
   {"zh": "我|wǒ 本来|běnlái 想|xiǎng 养|yǎng 一|yì 只|zhī 猫|māo ， 可是|kěshì 妈妈|māma 说|shuō 狗|gǒu 更|gèng 好|hǎo ， 所以|suǒyǐ 我们|wǒmen 养|yǎng 了|le 一|yì 只|zhī 狗|gǒu 。", "opts": ["He wanted a cat, but Mom thought a dog was better, so they got a dog.", "He wanted a dog, but Mom said a cat, so they got a cat.", "They got a cat and a dog.", "Mom didn't let him get any pet."], "v": "boy"},
   {"zh": "请|qǐng 大家|dàjiā 注意|zhùyì ： 明天|míngtiān 的|de 农场|nóngchǎng 参观|cānguān 改|gǎi 到|dào 星期五|xīngqīwǔ 了|le ， 早上|zǎoshang 八|bā 点|diǎn 在|zài 学校|xuéxiào 门口|ménkǒu 集合|jíhé 。", "opts": ["The farm visit moved to Friday; meet at the school gate at 8 a.m.", "The farm visit is tomorrow at 8, at the farm.", "The farm visit moved to Friday; meet at the farm at 9.", "The farm visit is canceled."], "v": "girl"},
   {"zh": "虽然|suīrán 我|wǒ 已经|yǐjīng 七十|qīshí 岁|suì 了|le ， 但是|dànshì 我|wǒ 每天|měitiān 还是|háishi 走路|zǒulù 去|qù 河边|hébiān 。", "opts": ["Although he's 70, he still walks to the river every day.", "He's 70, so he doesn't walk to the river anymore.", "He's 17 and walks to the river every day.", "He drives to the river every day."], "v": "grandpa"}
  ]},
  {"type": "fill", "title": "📝 Grammar", "intro": "Which word fits?", "items": [
   {"zh": "我|wǒ 昨天|zuótiān 没有|méiyǒu 喂|wèi 小鸡|xiǎojī 。", "opts": ["不|bù"], "en": "I didn't feed the chicks yesterday.", "why": "Yesterday = past → 没(有).", "blank": 2},
   {"zh": "虽然|suīrán 我|wǒ 很|hěn 累|lèi ， 但是|dànshì 我|wǒ 很|hěn 高兴|gāoxìng 。", "opts": ["所以|suǒyǐ", "因为|yīnwèi"], "en": "Although I'm tired, I'm happy.", "why": "虽然 pairs with 但是.", "blank": 5},
   {"zh": "这|zhè 只|zhī 小狗|xiǎogǒu 很|hěn 胖|pàng 。", "opts": ["是|shì"], "en": "This puppy is fat.", "why": "Describing word → 很.", "blank": 3},
   {"zh": "树|shù 上|shàng 有|yǒu 三|sān 只|zhī 鸟|niǎo 。", "opts": ["头|tóu", "条|tiáo", "口|kǒu"], "en": "There are three birds in the tree.", "why": "Birds → 只.", "blank": 4}
  ]},
  {"type": "order", "title": "🧩 Word order", "items": [
   {"zh": "我姐姐|wǒ_jiějie 也|yě 很|hěn 喜欢|xǐhuan 小狗|xiǎogǒu 。", "en": "My older sister really likes puppies too.", "rule": "也 and 很 go BEFORE the verb.", "check": ["也", "喜欢"]},
   {"zh": "你|nǐ 明天|míngtiān 在哪儿|zài_nǎr 吃饭|chīfàn ？", "en": "Where are you eating tomorrow?", "rule": "📍❓ who → when → 在 where → do. The question word doesn't move.", "alts": ["明天你在哪儿吃饭"], "check": ["在哪儿", "吃饭"]}
  ]},
  {"type": "quiz", "title": "🔍 Radicals", "items": [
   {"show": "狐", "q": "What is 狐 probably?", "opts": ["an animal", "water", "a tree", "a bird"], "why": "犭 = animal. 狐狸 húli = fox.", "say": "狐"},
   {"show": "睛", "q": "What is 睛 about? Look at the left side carefully.", "opts": ["the eye", "the sun", "water", "a tree"], "why": "目 (not 日!) = eye: 眼睛 yǎnjing.", "say": "睛"},
   {"show": "板", "q": "What is 板 probably made of?", "opts": ["wood", "water", "a person", "a bird"], "why": "木 = wood. 木板 mùbǎn = wooden board.", "say": "板"},
   {"show": "伴", "q": "What is 伴 probably about?", "opts": ["a person", "a tree", "an animal", "water"], "why": "亻 = person. 伙伴 huǒbàn = buddy, partner.", "say": "伴"}
  ]},
  {"type": "read-aloud", "title": "📖 Read aloud", "peek": "after", "intro": "Read aloud on your own first. You can peek only after your first try.", "items": [
   "你|nǐ 喜欢|xǐhuan 什么|shénme 颜色|yánsè ？",
   "我|wǒ 有|yǒu 一|yì 只|zhī 黄色|huángsè 的|de 小鸭子|xiǎo_yāzi 。",
   "鸟|niǎo 在|zài 树|shù 上|shàng 唱歌|chànggē 。"
  ]},
  {"type": "free-speak", "title": "💬 Speaking", "intro": "Answer with <b>2–3 sentences</b>. Click the mic, talk, then click again when you're done.", "items": [
   {"q": "请|qǐng 介绍|jièshào 一下|yíxià 你|nǐ 最|zuì 喜欢|xǐhuan 的|de 动物|dòngwù 。", "en": "Describe your favorite animal (what it looks like, and why you like it).", "hint": "我|wǒ 最|zuì 喜欢|xǐhuan … 。 它|tā 很|hěn …", "need": ["很"], "min": 10},
   {"q": "你|nǐ 周末|zhōumò 常常|chángcháng 做|zuò 什么|shénme ？", "en": "What do you usually do on weekends? (先… 然后…)", "hint": "周末|zhōumò 我|wǒ 先|xiān … ， 然后|ránhòu …", "need": ["然后", "先"], "min": 10}
  ]},
  {"type": "free-write", "title": "✍️ Writing", "intro": "Type a short paragraph (3 sentences or more). Use the Chinese keyboard (Ctrl + Space).", "items": [
   {"q": "给|gěi 你|nǐ 的|de 新|xīn 朋友|péngyou 写|xiě 几|jǐ 句|jù 话|huà ， 介绍|jièshào 一下|yíxià 你|nǐ 的|de 家|jiā 和|hé 你|nǐ 的|de 动物|dòngwù 。", "en": "Write a few sentences to a new friend about your family and your animals.", "hint": "我|wǒ 家|jiā 有|yǒu … 口|kǒu 人|rén 。 我|wǒ 喜欢|xǐhuan …", "need": ["家"], "min": 20}
  ]},
  {"type": "paper-writing", "title": "✏️ Paper writing", "chars": [
   ["红", "hóng", "(in 红色 = red)"],
   ["毛", "máo", "fur, hair, wool"],
   ["鸡", "jī", "(in 小鸡 = chick)"],
   ["谁", "shéi", "who"],
   ["住", "zhù", "to live (somewhere)"]
  ]},
 ]
};
