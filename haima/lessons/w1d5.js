// Built from w1d5.yaml by scripts/build_lesson.py — edit the plan or library, not this file.
window.LESSON = {
 "id": "w1d5",
 "title": "Day 5 · Radicals — read characters like a detective",
 "reward": [{"e": "🌻", "label": "sunflower"}],
 "finishText": "Detective work! Now you can guess what a character means from its radical. 🌻 A sunflower is growing on your farm. Tomorrow is the Saturday test.",
 "week": 1,
 "day": 5,
 "steps": [
  {"type": "read-after", "title": "🌊 What's in my name?", "lines": [
   {"zh": "爷爷|yéye ， 我|wǒ 的|de 名字|míngzi 为什么|wèishénme 叫|jiào 海马|Hǎimǎ ？", "en": "Grandpa, why is my name Haima?", "v": "boy"},
   {"zh": "海马|hǎimǎ 是|shì 海|hǎi 里|lǐ 的|de 一|yì 种|zhǒng 鱼|yú ， 很|hěn 可爱|kě'ài 。", "en": "A seahorse is a kind of fish in the sea. It's very cute.", "v": "grandpa"},
   {"zh": "你|nǐ 看|kàn ， “ 海|hǎi ” 的|de 左边|zuǒbian 是|shì 水|shuǐ 。 海|hǎi 里|lǐ 都|dōu 是|shì 水|shuǐ ！", "en": "Look, the left side of 海 is water. The sea is all water!", "v": "grandpa"},
   {"zh": "“ 马|mǎ ” 也|yě 在|zài “ 妈|mā ” 字|zì 里|lǐ ， 所以|suǒyǐ 它们|tāmen 的|de 声音|shēngyīn 很|hěn 像|xiàng 。", "en": "马 is also inside the character 妈, so they sound alike.", "v": "grandpa"},
   {"zh": "太|tài 好玩|hǎowán 了|le ！ 我|wǒ 的|de 名字|míngzi 里|lǐ 有|yǒu 大海|dàhǎi 和|hé 马|mǎ ！", "en": "So cool! My name has the sea and a horse in it!", "v": "boy"}
  ]},
  {"type": "grammar-card", "title": "🔍 Radicals: the part that hints the MEANING", "intro": "Many characters have a <b>radical</b> (部首 bùshǒu) that tells you what the word is about. Learn a few and you can guess new characters! <div class='radgrid'> <div><b>氵</b>water (3 drops)<br><span>海河洗汤</span></div> <div><b>女</b>woman<br><span>妈奶姐妹好</span></div> <div><b>口</b>mouth<br><span>吃喝叫吗</span></div> <div><b>艹</b>grass, plants<br><span>草花菜茶</span></div></div>", "examples": [
   {"zh": "海|hǎi", "en": "sea — 氵 water", "note": "Your name! 海马 = sea + horse = seahorse"},
   {"zh": "河|hé", "en": "river — 氵 water"},
   {"zh": "妈|mā", "en": "mom — 女 woman"},
   {"zh": "吃|chī", "en": "eat — 口 mouth"},
   {"zh": "草|cǎo", "en": "grass — 艹 plants"}
  ]},
  {"type": "quiz", "title": "🔍 Radical detective", "intro": "You've never learned these characters. Use the radical to guess!", "items": [
   {"show": "河", "q": "河 has <b>氵</b>. What is it probably about?", "opts": ["water", "a woman", "the mouth", "plants"], "why": "氵 = water. 河 hé = river.", "say": "河"},
   {"show": "妹", "q": "妹 has <b>女</b>. What is it probably about?", "opts": ["a woman or girl", "water", "the mouth", "plants"], "why": "女 = woman. 妹 mèi = younger sister (妹妹).", "say": "妹"},
   {"show": "喝", "q": "What is 喝 probably about? Look at the left side.", "opts": ["the mouth", "water", "a woman", "plants"], "why": "口 = mouth. 喝 hē = to drink.", "say": "喝"},
   {"show": "花", "q": "What is 花 probably about? Look at the top.", "opts": ["plants", "water", "the mouth", "a woman"], "why": "艹 = grass/plants. 花 huā = flower.", "say": "花"},
   {"show": "洗", "q": "What is 洗 probably about?", "opts": ["water", "plants", "a woman", "the mouth"], "why": "氵 = water. 洗 xǐ = to wash.", "say": "洗"},
   {"show": "姐", "q": "What is 姐 probably about?", "opts": ["a woman or girl", "the mouth", "water", "plants"], "why": "女 = woman. 姐 jiě = older sister (姐姐).", "say": "姐"}
  ]},
  {"type": "grammar-card", "title": "🔊 Sound parts: the part that hints the SOUND", "intro": "Most characters = <b>meaning part + sound part</b>. 妈 = 女 (woman) + 马 (mǎ → mā).<br>The sound part is only a <b>hint</b>: the tone, and sometimes the first letter, can change. 每 měi → 海 hǎi.", "examples": [
   {"zh": "马|mǎ", "en": "horse — the sound part"},
   {"zh": "妈|mā", "en": "mom = 女 + 马"},
   {"zh": "吗|ma", "en": "(question word) = 口 + 马"},
   {"zh": "骂|mà", "en": "to scold = 口口 + 马"},
   {"zh": "码|mǎ", "en": "number, code = 石 (stone) + 马"}
  ]},
  {"type": "quiz", "title": "🔊 Sound detective", "intro": "Use the sound part to guess.", "items": [
   {"show": "码", "q": "码 has <b>马 (mǎ)</b> inside. How do you think 码 sounds?", "opts": ["mǎ", "hǎi", "nǚ", "kǒu"], "why": "马 is the sound part: 码 mǎ (号码 = number).", "say": "码"},
   {"show": "吗", "q": "吗 = 口 + 马. Which part gives the <b>sound</b>?", "opts": ["马 (mǎ → ma)", "口 (kǒu)"], "why": "马 gives the sound; 口 shows it's a mouth/speaking word (a question sound).", "say": "吗"}
  ]},
  {"type": "new-words", "intro": "More words you know by ear. Spot the radicals! Listen, look, and say each one.", "title": "🆕 New words", "items": [
   ["河", "hé", "river"],
   ["洗", "xǐ", "to wash"],
   ["草", "cǎo", "grass"],
   ["花", "huā", "flower"],
   ["但是", "dànshì", "but"],
   ["医生", "yīshēng", "doctor"],
   ["商店", "shāngdiàn", "store"],
   ["多少钱", "duōshao qián", "how much (money)?"]
  ]},
  {"type": "tone-check", "title": "🎵 Tone check — tone 1 vs 2 vs 3", "items": [
   ["汤", "tāng", 1],
   ["糖", "táng", 2],
   ["躺", "tǎng", 3],
   ["衣", "yī", 1],
   ["姨", "yí", 2],
   ["椅", "yǐ", 3],
   ["书", "shū", 1],
   ["鼠", "shǔ", 3],
   ["树", "shù", 4]
  ]},
  {"type": "read-aloud", "title": "📖 Read it yourself", "peek": true, "intro": "Read the sentence aloud — <b>no pinyin</b>. Stuck on a word? Tap it to peek. Try first; then you can hear it.", "items": [
   "草地|cǎodì 上|shàng 有|yǒu 很多|hěn_duō 花|huā 。",
   "商店|shāngdiàn 里|lǐ 的|de 东西|dōngxi 很|hěn 贵|guì 。",
   "因为|yīnwèi 下雨|xiàyǔ 了|le ， 所以|suǒyǐ 鸭子|yāzi 很|hěn 高兴|gāoxìng 。",
   "小明|Xiǎo_Míng 的|de 妈妈|māma 是|shì 医生|yīshēng ， 她|tā 现在|xiànzài 在|zài 医院|yīyuàn 。",
   "我|wǒ 想|xiǎng 去|qù 河边|hébiān 钓鱼|diàoyú ， 但是|dànshì 我|wǒ 没有|méiyǒu 时间|shíjiān 。"
  ]},
  {"type": "listen-check", "title": "👂 Listening", "intro": "Listen (no words on screen) and pick the best answer. You can replay or play it slowly.", "items": [
   {"zh": "你|nǐ 先|xiān 洗手|xǐshǒu ， 然后|ránhòu 我们|wǒmen 一起|yìqǐ 吃饭|chīfàn 。", "opts": ["Wash your hands first, then we'll eat together.", "Eat first, then wash your hands.", "Wash the vegetables first, then cook.", "Let's go out to eat together."], "v": "grandpa"},
   {"zh": "虽然|suīrán 今天|jīntiān 很|hěn 冷|lěng ， 但是|dànshì 鸭子|yāzi 还是|háishi 在|zài 河|hé 里|lǐ 游泳|yóuyǒng 。", "opts": ["Even though it's cold today, the ducks are still swimming in the river.", "It's cold today, so the ducks stayed in the barn.", "It's warm today, and the ducks are swimming.", "The ducks don't like the cold river."], "v": "grandpa"},
   {"zh": "从|cóng 这儿|zhèr 往|wǎng 前|qián 走|zǒu ， 第一个|dì_yī_gè 路口|lùkǒu 往|wǎng 右|yòu 拐|guǎi ， 商店|shāngdiàn 就|jiù 在|zài 左边|zuǒbian 。", "opts": ["Go straight, turn right at the first intersection; the store is on the left.", "Go straight, turn left at the first intersection; the store is on the right.", "Turn right at the second intersection; the store is on the left.", "The store is right behind you."], "v": "girl"},
   {"zh": "因为|yīnwèi 小鸡|xiǎojī 晚上|wǎnshang 怕|pà 冷|lěng ， 所以|suǒyǐ 奶奶|nǎinai 给|gěi 它们|tāmen 开|kāi 了|le 一|yì 盏|zhǎn 灯|dēng 。", "opts": ["The chicks get cold at night, so Grandma turned on a lamp for them.", "The chicks are afraid of the dark, so Grandma closed the door.", "Grandma fed the chicks at night.", "The chicks are warm, so Grandma turned off the lamp."], "v": "grandpa"}
  ]},
  {"type": "free-speak", "title": "💬 Answer Grandpa", "intro": "Answer in a full Chinese sentence. Use the 💡 start. Stuck? Hear an example — then say <b>your own</b>.", "items": [
   {"q": "你|nǐ 喜欢|xǐhuan 什么|shénme 动物|dòngwù ？ 为什么|wèishénme ？", "en": "What animal do you like? Why?", "hint": "我|wǒ 喜欢|xǐhuan … ， 因为|yīnwèi …", "example": "我|wǒ 喜欢|xǐhuan 狗|gǒu ， 因为|yīnwèi 狗|gǒu 很|hěn 聪明|cōngming 。", "exampleEn": "I like dogs because dogs are smart.", "need": ["因为"]},
   {"q": "你|nǐ 周末|zhōumò 常常|chángcháng 做|zuò 什么|shénme ？", "en": "What do you usually do on weekends?", "hint": "我|wǒ 周末|zhōumò 常常|chángcháng …", "example": "我|wǒ 周末|zhōumò 常常|chángcháng 去|qù 河边|hébiān 钓鱼|diàoyú 。", "exampleEn": "On weekends I often go fishing by the river.", "need": ["周末", "常常"]}
  ]},
  {"type": "char-check", "ask": "pinyin", "title": "📖 Word check", "intro": "How do you say this word? Pick the <b>exact</b> pinyin — watch the tones! Or click “I don't know.” No sound on purpose: this checks reading.", "items": [
   ["河", "hé", "river"],
   ["花", "huā", "flower"],
   ["草", "cǎo", "grass"],
   ["洗", "xǐ", "to wash"],
   ["但是", "dànshì", "but"],
   ["医生", "yīshēng", "doctor"],
   ["商店", "shāngdiàn", "store"],
   ["多少钱", "duōshao qián", "how much (money)?"],
   ["已经", "yǐjīng", "already"],
   ["中文", "Zhōngwén", "Chinese (language)"],
   ["睡觉", "shuìjiào", "to sleep"],
   ["晚上", "wǎnshang", "evening, night"]
  ]},
  {"type": "paper-writing", "title": "✏️ Paper writing", "chars": [
   ["河", "hé", "river"],
   ["洗", "xǐ", "to wash"],
   ["草", "cǎo", "grass"],
   ["花", "huā", "flower"],
   ["妈", "mā", "(in 妈妈 = mom)"],
   ["姐", "jiě", "(in 姐姐 = older sister)"]
  ]},
 ]
};
