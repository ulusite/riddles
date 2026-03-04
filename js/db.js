const DB = {
    0: {
        question: '正月十五為上元。上元夜為元宵。七月十五為中元。是否有下元？',
        choices: [
            {
                answer: '有。八月十五中秋亦稱下元',
            },
            {
                answer: '有。臘月十五為下元'
            },
            {
                answer: '有。十月十五為下元',
                correct: true
            },
	        {
		        answer: '沒有下元',
            }
        ]
    },
    1: {
        // question: '皇',
        question: '看圖拆字猜題',
        hint: '打一成語（4字）',
        moreHints: ['喻十全十美', '一種美石'],
        imageId: 'char-huang.jpg',
        choices: [
            {
                answer: ['白玉無瑕', '白玉无瑕'],
            }
        ]
    },
    2: {
        question: '看圖組字',
        hint: '打一初春開花植物 （2字）',
        moreHints: ['觀查圖中元素', '以一字描述一元素', '組合所有元素成二字答案'],
        imageId: 'water-fall-tall.jpeg',
        choices: [
            {
                answer: ['水仙', '水仙花'],
                notes: '一水一人一山，合為水仙'
            },
        ]
    },
    3: {
        question: '我欲乘風歸去，高處不甚寒',
        hint: '打一元宵節應景活動時使用的物品 （2字）',
        choices: [
            {
                answer: ['天燈', '天灯'],
            }
        ]
    },
    4: {
        question: '清風徐來 水波不興',
        hint: '打一新北市觀光地名 （2字）',
        moreHints: ['有老街', '有鐵路'],
        choices: [
            {
                answer: '平溪',
            }
        ]
    },
    5: {
        question: '美國西部有哪四個州，州界四角接連在一起？',
        choices: [
            {
                answer: '加州, 奧勒岡, 內華達, 愛德荷',
            },
            {
                answer: '奧勒岡，華盛頓，內華達，懷俄明',
            },
            {
                answer: '內華達，亞利桑那，新墨西哥，科羅拉多',
            },
            {
                answer: '亞利桑那，新墨西哥，科羅拉多，猶他',
                correct: true,
            },
            {
                answer: '加州， 亞利桑那， 新墨西哥， 科羅拉多',
            }
        ]
    },
    6: {
        question: '美國【五大湖】名字，哪一個在英文字母中最先出現？',
        choices: [
            {
                answer: '安大略湖',
            },
            {
                answer: '密西根湖',
            },
            {
                answer: '衣律湖',
                correct: true
            },
            {
                answer: '太浩湖',
            },
            {
                answer: '伊麗莎白湖',
            }
        ]
    },
    7: {
        // question: '一根棍子，吊著方箱；一把梯子，搭在中央',
        question: '看圖猜題',
        hint: '打一字',
        moreHints: ['每人都有', '丟了的話會很糗'],
        imageId: 'char-mien.jpg',
        choices: [
            {
                answer: '面',
            }
        ]
    },
    8: {
        question: '墾丁之北，爾濱之南',
        hint: '看江山如此多嬌，猜四時不謝之花',
        moreHints: ['兩地名有一字相同'],
        choices: [
            {
                answer: '百合花',
            },
            {
                answer: '桔梗花',
            },
            {
                answer: '日日春',
                correct: true,
                notes: '墾丁之北為恆春，爾濱之南為長春，日日皆春'
            },
            {
                answer: '魯冰花',
            },
            {
                answer: '以上皆非',
            },
        ]
    },
    9: {
        question: '智齒',
        hint: '打一傳統祭祀與慶祝活動 （2字）',
        moreHints: ['近代盛行於閩臺一帶', '年終'],
        choices: [
            {
                answer: '尾牙'
            }
        ]
    },
    10: {
        // question: '一邊是紅，一邊是綠。一邊喜風，一邊喜雨',
        question: '看題組字',
        hint: '打一字',
        moreHints: ['此字在24節氣中出現2次', '季節'],
        imageId: 'char-qiu.jpg',
        choices: [
            {
                answer: '秋',
		        notes: '禾：禾是水稻，水稻是綠色，喜歡雨水。火：火是红色，遇風則長'
            }
        ]
    },
    11: {
        question: '立春',
        hint: '打一音樂活動名 （2字）拆字格',
        moreHints: ['可陽春白雪', '可下里巴人'],
        choices: [
            {
                answer: '合唱',
                notes: '立春拆為三人立日，即众/眾【三人】音【立日】，合唱也'
            }
        ]
    },
    12: {
        question: '柴門聞犬吠，風雪夜歸人',
        hint: '打一節氣',
        moreHints: ['冬季'],
        choices: [
            {
                answer: '冬至',
                notes: '風雪，冬也。夜歸，至也。風雪夜歸，冬至也。'
            }
        ]
    },
    13: {
        question: '2024美國總統大選的“柯文哲”',
        hint: '打一人名。1. 在超級星期天足球大賽的廣告中出現過 2. 出生於美國政治世家 3. 伯父和父親都參加過美國總統競選',
        choices: [
            {
                answer: ['robert kennedy jr.', 'Robert f. Kennedy jr.', 'rfk jr.', 'robert kennedy jr', 'robert f. kennedy jr', 'rfk jr'],
            }
        ]
    },
    14: {
        question: '白髮三千丈，會須一飲三百杯',
        hint: '打一數學名詞 （3字）',
        moreHints: ['一種數系'],
        choices: [
            {
                answer: ['無理數', '无理数'],
            }
        ]
    },
    15: {
        question: '開會',
        hint: '打一物理學名詞 （3字）',
        moreHints: ['愛因斯坦'],
        choices: [
            {
                answer: ['相對論', '相对论'],
            }
        ]
    },
    16: {
        question: '開大會',
        hint: '打一物理學名詞 （5字）',
        moreHints: ['承上題'],
        choices: [
            {
                answer: ['廣義相對論', '广义相对论'],
            }
        ]
    },
    17: {
        question: ' ',
        hint: '打一人際行爲 （2字）',
        moreHints: ['兩人', '通常是一男一女'],
        choices: [
            {
                answer: ['約會', '约会'],
            }
        ]
    },
    18: {
        question: '百家爭鳴',
        hint: '打一物理學名詞 （4字）',
        moreHints: ['百家者，何人也？', '公說公有理，婆說婆有理', '剪不斷，理還亂'],
        choices: [
            {
                answer: ['量子糾纏', '量子纠缠'],
            }
        ]
    },
    19: {
        question: '下列哪幾行詩句是描寫元宵的情景?',
        imageId: 'poems-yuan-xiao.png',
        choices: [
            {
                answer: '1，3，4',
            },
	        {
                answer: '1，2，3，4',
            },
            {
                answer: '1，2，4',
                correct: true,
                notes: '第1行第1句：蘇味道《正月十五夜》。第1行第2句及第2行1，2句：歐陽修《生查子·元夕》。第4行：辛棄疾《青玉案·元夕》。第3行，第1句改崔灝《黃鶴樓》日暮鄉關何處是，第2句出自崔護《題都城南莊》'
            },
            {
                answer: '以上皆非',
            }
        ]
    },
    20: {
        question: '跑旱船',
        hint: '打一南宋愛國詩人名 （2字）',
        choices: [
            {
                answer: ['陸游', '陸放翁', '陆游', '陆放翁', '放翁'],
            }
        ]
    },
    21: {
        question: '衣錦還鄉',
        hint: '打一明朝文人名 （3字）',
        moreHints: ['擅作抒情文', '江蘇崑山人'],
        choices: [
            {
                answer: ['歸有光', '归有光'],
            }
        ]
    },
    22: {
        question: '老子曰',
        hint: '打一唐朝大詩人名 （2字）',
        choices: [
            {
                answer: ['李白', '李太白'],
		        notes: '老子姓李名耳，老子曰即李白'
            }
        ]
    },
    23: {
        question: '子曰',
        hint: '打一書名 （2字）',
        moreHints: ['不是論語', '不是中國的'],
        choices: [
            {
                answer: ['聖經', '圣经'],
		        notes: '孔子聖人，聖人所言即聖經'
            }
        ]
    },
    24: {
        question: '胖子泡溫泉',
        hint: '打一應時食品 （2字）',
        moreHints: ['通常是甜的'],
        choices: [
            {
                answer: ['湯圓', '汤圆'],
            }
        ]
    },
    25: {
        question: '川味髮型',
        hint: '打一食品（3字）',
        moreHints: ['出於西南', '盛於東北', '近來流行遍灣區'],
        choices: [
            {
                answer: ['麻辣燙', '麻辣烫'],
            }
        ]
    },
    26: {
        question: '少林寺運動會',
        hint: '打一年節菜名 （3字）',
        choices: [
            {
                answer: ['佛跳墻', '佛跳墙']
            }
        ]
    },
    27: {
        question: '剖腹生產',
        hint: '打一物理學/化學名詞 （2字）',
        moreHints: ['小', '很小'],
        choices: [
            {
                answer: '分子'
            }
        ]
    },
    28: {
        question: '親生的',
        hint: '打一物理學/化學名詞 （2字）',
        moreHints: ['極小'],
        choices: [
            {
                answer: '原子'
            }
        ]
    },
    29:{
        question: '呱呱墜地',
        hint: '承上題打一物理學/化學名詞 （2字）',
        moreHints: ['虛無縹緲'],
        choices: [
            {
                answer: '光子'
            }
        ]
    },
    30: {
        question: '美國阿拉斯加州，可以找到下列何物?',
        choices: [
            {
                answer: '冰河',
                correct: true
            },
            {
                answer: '北極熊',
                correct: true
            },
            {
                answer: '愛斯基摩人',
                correct: true
            },
            {
                answer: ['三文魚'],
                correct: true
            },
            {
                answer: '企鵝'
            }
        ]
    },
    31: {
        question: '油管聽歌猜題',
        link: 'https://www.youtube.com/watch?v=4YTzFDxqOAY&list=RD4YTzFDxqOAY&start_radio=1',
        hint: '打一台灣地名',
        moreHints: ['電影邊城主題曲--熱烘烘的太陽'],
        choices: [
            {
                answer: '春日',
                notes: '屏東'
            },
            {
                answer: '烏日',
                notes: '台中'
            },
            {
                answer: '佳冬',
                notes: '屏東'
            },
            {
                answer: '暖暖',
                correct: true,
                notes: '基隆'
            },
            {
                answer: '以上皆非',
            }
        ]
    },
    32: {
        question: '狹義相對論 ',
        hint: '打一人際行爲 （2字）',
        moreHints: ['兩人', '通常是一男一女'],
        choices: [
            {
                answer: ['約會', '约会'],
            }
        ]
    },
    33: {
        question: '辛棄疾《青玉案·元夕》：“鳳簫聲動，玉壺光轉”詞中舞的是什麽燈？',
        choices: [
            {
                answer: '天燈',
            },
            {
                answer: '龍燈',
                correct: true,
            },
            {
                answer: '魚燈',
                correct: true,
                notes: '“鳳簫聲動，玉壺光轉，一夜魚龍舞”'
            },
	        {
		        answer: '水燈',
            },
            {
                answer: '以上皆非',
            }
        ]
    },
    34: {
        question: '樓閣玲瓏五雲起，一騎紅塵妃子笑',
        choices: [
            {
                answer: '成都',
                notes: '四川'
            },
            {
                answer: '重慶',
                correct: true,
                notes: '生產荔枝的山城'
            },
            {
                answer: '莆田',
                notes: '福建'
            },
            {
                answer: '增城',
                notes: '廣東'
            },
        ]
    },
    35: {
        question: '小樓一夜聽春雨，賭書潑得永日香',
        moreHints: ['美食家大都愛', '愈早的愈好'],
        choices: [
            {
                answer: '酒'
            },
            {
                answer: '茶',
                correct: true,
                notes: '放翁“晴窗細乳戲分茶”，易安《金石錄後序》賭書潑茶'
            },
            {
                answer: '筍',
            },
            {
                answer: '河豚',
            },
        ]
    },
    36: {
        question: '竹杖芒鞋輕勝馬，一蓑煙雨任平生',
        hint: '打一小説人物',
        moreHints: ['出家', '武藝高強'],
        choices: [
            {
                answer: '賈寶玉',
            },
            {
                answer: '武松',
            },
            {
                answer: '令狐冲',
            },
            {
                answer: ['魯達', '魯智深', '鲁达', '鲁智深'],
                correct: true,
                notes: '清，邱圓《魯智深醉鬧五台山》《寄生草·漫揾英雄淚》：煙蓑雨笠卷單行，一任俺，芒鞋破缽隨緣化'
            },
        ]
    },
    37: {
        question: '山在虛無縹緲間',
        hint: '打一台灣地名 （2字）',
        skip: false,
        textBox: false,
        choices: [
            {
                answer: '萬巒',
                notes: '屏東'
            },
            {
                answer: '霧社',
                notes: '南投'
            },
            {
                answer: ['霧峰', '雾峰'],
                correct: true,
                notes: '台中'
            },
            {
                answer: '五峰',
                notes: '新竹'
            },
        ]
    },
    38: {
        question: '舍南舍北皆春水',
        hint: '打一台灣地名',
        skip: false,
        choices: [
            {
                answer: '平溪',
            },
            {
                answer: '四湖',
            },
            {
                answer: '四重溪',
            },
            {
                answer: '雙溪',
                correct: true
            },
        ]
    },
    39: {
        question: '兩個黃鷂鳴翠柳',
        hint: '打一台灣地名',
        skip: false,
        textBox: true,
        choices: [
            {
                answer: '燕巢',
                notes: '高雄'
            },
            {
                answer: ['鶯歌', '莺歌'],
                correct: true,
                notes: '新北'
            },
            {
                answer: '鳥松',
                notes: '高雄'
            },
            {
                answer: '鳳山',
                notes: '高雄'
            },
        ]
    },
    40: {
        question: '星探',
        hint: '打一信息時代新興人物 （2字）',
        moreHints: ['主要工作是博人眼球'],
        choices: [
            {
                answer: ['網美', '网美'],
                notes: '星探職在[網]羅[美]人'
            }
        ]
    },
    41: {
        question: '減肥',
        hint: '打一應節食品 （2字）',
        moreHints: ['諧音梗'],
        choices: [
            {
                answer: '元宵',
                notes: '圓消',
            }
        ]
    },
    42: {
        question: '那時風雨聲，花落知多少',
        hint: '打一過年時電視節目名 （2字）',
        choices: [
            {
                answer: '春晚',
                notes: '孟浩然《春曉》：春眠不覺曉，處處聞啼鳥。夜來風雨聲，花落知多少。風雨花落之時即春晚',
            }
        ]
    },
    43: {
        question: '全中國最喜歡以十二生肖動物納入地名的省',
        choices: [
            {
                answer: '四川，山東，河北',
                correct: true
            },
            {
                answer: '貴州，雲南，廣東',
            },
            {
                answer: '海南，寧夏，上海',
            },
            {
                answer: '以上皆非'
            }
        ]
    },
    44: {
        question: '十二生肖動物地名中，出現最多的前三名',
        choices: [
            {
                answer: '牛，馬，龍',
            },
            {
                answer: '龍，馬，虎',
            },
            {
                answer: '龍，馬，牛',
                correct: true
            },
            {
                answer: '以上皆非'
            }
        ]
    },
    45: {
        question: '十二生肖動物地名中，出現最少的前三名',
        choices: [
            {
                answer: '鼠，蛇，狗',
                correct: true
            },
            {
                answer: '鼠，猴，豬',
            },
            {
                answer: '豬，狗，蛇',
            },
            {
                answer: '以上皆非'
            }
        ]
    },
    46: {
        question: '千山響杜鵑，樹杪百重泉',
        hint: '打一節氣',
        moreHints: ['杜鵑別名', '春季'],
        choices: [
            {
                answer: ['穀雨', '谷雨'],
                notes: '王維《送梓州李使君》：万壑樹參天，千山響杜鵑，山中一夜雨，樹杪百重泉'
            }
        ]
    },
    47: {
        question: '退燒',
        hint: '打一節氣',
        moreHints: ['秋季'],
        choices: [
            {
                answer: ['處暑', '处暑'],
            }
        ]
    },
    48: {
        question: '蟋蟀入我床下',
        hint: '打一節氣',
        moreHints: ['只待新雷第一声', '春季'],
        choices: [
            {
                answer: ['驚蟄', '惊蛰'],
            }
        ]
    },
    49: {
        question: '舜何人也，禹何人也',
        hint: '打一節氣',
        moreHints: ['禪讓', '夏季'],
        choices: [
            {
                answer: '立夏',
            }
        ]
    },
    50: {
        question: '潤無細無聲，泉眼惜細流',
        hint: '打一節氣',
        moreHints: ['似牛毛，似花針', '春季'],
        choices: [
            {
                answer: '雨水',
            }
        ]
    },
    51: {
        question: '家家麥飯美，處處插秧忙',
        hint: '打一節氣',
        moreHints: ['黛玉葬花', '夏季'],
        choices: [
            {
                answer: ['芒種', '芒种'],
                notes: '陸遊《時雨》時雨及芒種，四野皆插秧。家家麥飯美，處處菱歌長。'
            }
        ]
    },
    52: {
        question: '子在川上曰，湘江北去，橘子洲頭',
        hint: '打一節氣',
        moreHints: ['秋季'],
        choices: [
            {
                answer: '立秋',
                notes: '毛澤東《沁園春•長沙》獨立寒秋'
            }
        ]
    },
    53: {
        question: '青杏枝頭花漸少，乳鴨池塘水欲深',
        hint: '打一節氣',
        moreHints: ['飯吃七分飽，話留三分好', '夏季'],
        choices: [
            {
                answer: '小滿',
                notes: '趙慶熹《台城路其二》：枝头青杏尚小。戴敏《初夏游張園》：乳鴨池塘水淺深'
            }
        ]
    },
    54: {
        question: '多情應笑我，早生華髮',
        hint: '打一節氣',
        moreHints: ['秋季'],
        choices: [
            {
                answer: '白露',
            }
        ]
    },
    55: {
        question: '白髮三千丈，疑是銀河落九天',
        hint: '打一節氣',
        moreHints: ['秋季'],
        choices: [
            {
                answer: '霜降',
            }
        ]
    },
    56: {
        question: '地瘦栽松柏，家貧子讀書',
        hint: '打一節氣',
        moreHints: ['秋季'],
        choices: [
            {
                answer: '寒露',
                notes: '紹興八年，高宗問莆仙眾進士“卿土何奇？”，榜眼陳俊卿之答'
            }
        ]
    },
    57: {
        question: '黃狗身上白',
        hint: '打一節氣',
        moreHints: ['冬季'],
        choices: [
            {
                answer: '小雪',
            }
        ]
    },
    58: {
        question: '白狗身上腫',
        hint: '打一節氣',
        moreHints: ['冬季'],
        choices: [
            {
                answer: ['大雪'],
            }
        ]
    },
    59: {
        question: '二胖',
        hint: '打一節氣',
        moreHints: ['拆字格', '春季'],
        choices: [
            {
                answer: '春分',
            }
        ]
    },
    60: {
        question: '南雁北囘，又伴艷陽歸',
        hint: '打一節氣',
        moreHints: ['夏季'],
        choices: [
            {
                answer: '夏至',
            }
        ]
    },
    61: {
        question: '熱未央，午夢長，映日荷花別樣紅',
        hint: '打一節氣',
        moreHints: ['夏季'],
        choices: [
            {
                answer: ['小暑'],
            }
        ]
    },
    62: {
        question: '荔枝熟，汗難收，浮瓜沉李待三秋',
        hint: '打一節氣',
        moreHints: ['夏季'],
        choices: [
            {
                answer: ['大暑'],
            }
        ]
    },
    63: {
        question: '學海無涯勤作岸，尊師有道程門雪',
        hint: '打一節氣',
        moreHints: ['冬季'],
        choices: [
            {
                answer: '立冬',
            }
        ]
    },
    64: {
        question: '一簞食，一瓢飲，居陋巷，囘也不改其樂',
        hint: '打一節氣',
        moreHints: ['冬季'],
        choices: [
            {
                answer: '小寒',
            }
        ]
    },
    65: {
        question: '青女素娥俱耐冷，月中霜裏鬥嬋娟',
        hint: '打一節氣',
        moreHints: ['月宮', '冬季'],
        choices: [
            {
                answer: '大寒',
                notes: '月宮又名廣寒宮，廣者，大也',
            }
        ]
    },
    66: {
        question: '小樓聼春雨，深巷賣杏花，素衣風塵嘆，何日可到家',
        hint: '打一節氣',
        moreHints: ['杏帘招客飲', '春季'],
        choices: [
            {
                answer: '清明',
            }
        ]
    },
    67: {
        question: '人逢喜事精神爽，月待何時分外明',
        hint: '打一節氣',
        moreHints: ['北方：白露早，寒露遲，此時種麥正當時', '秋季'],
        choices: [
            {
                answer: '秋分',
            }
        ]
    },
    68: {
        question: '十二生肖動物地名中，出現最多的前三名',
        choices: [
            {
                answer: '龍',
                correct: true
            },
            {
                answer: '馬',
                correct: true
            },
            {
                answer: '牛',
                correct: true
            },
            {
                answer: '狗'
            }
        ]
    },
    69: {
        question: '下列哪些花名相關？',
        moreHints: ['芙蓉'],
        choices: [
            {
                answer: '荷花',
                imageId: 'lotus.jpg',
                correct: true,
                notes: '荷花又稱芙蓉。王昌齡《采蓮曲》：荷葉羅裙一色裁，芙蓉向臉兩邊開',
            },
            {
                answer: '月季',
                imageId: 'rose.jpg',
            },
            {
                answer: '木槿',
                imageId: 'hibiscus3.jpg',
                correct: true,
                notes: '木槿即木芙蓉',
            },
            {
                answer: '辛夷',
                imageId: 'magnolia.jpg',
                correct: true,
                notes: '王維《辛夷塢》：木末芙蓉花，山中發紅萼。故辛夷可稱芙蓉。',
            }
        ]
    },
    70: {
        question: ['列出詩中所有動植物：', '山路多躑躅', '松鼠攀流蘇' ,'依依春深處', '子規聲聲呼'],
        exactMultiChoice: true,
        choices: [
            {
                answer: ['子規', '躑躅', '依依', '松鼠', '流蘇'], //鹧鸪, 踯躅, 松鼠 流苏, 依依
                notes: '杜鵑花又稱躑躅。詩經《採薇》：昔我往矣，楊柳依依。',
            },
        ]
    },
    71: {
        question: '以下哪些不是詠梅：',
        choices: [
            {
                answer: '侵天香氣對晴空',
            },
            {
                answer: '偷來梨蕊三分白',
                correct: true,
                notes: '《紅樓夢‧詠白海棠》：偷來梨蕊三分白，借得梅花一縷魂',
            },
            {
                answer: '此花開盡更無花',
                correct: true,
                notes: '元稹《菊花》：不是花中偏愛菊，此花開盡更無花。',
            },
            {
                answer: '竹籬茅舍自甘心',
            }
        ]
        // choices: [
        //     {
        //         answer: '侵天香氣對晴空（清‧惲壽平）',
        //     },
        //     {
        //         answer: '偷來梨蕊三分白（清‧曹雪芹）',
        //         correct: true,
        //     },
        //     {
        //         answer: '此花開盡更無花（唐‧元稹）',
        //         correct: true,
        //     },
        //     {
        //         answer: '竹籬茅舍自甘心（宋‧王淇）',
        //     }
        // ]
    },
    72: {
        question: '“孤標傲世偕誰隱，一樣花開為底遲”詠的是？',
        moreHints: ['《朱惺公·瘞？記》：性原冷淡，骨本崢嶸；生既兀傲，死亦堅貞', '不為五斗米折腰'],
        choices: [
            {
                answer: '梅',
            },
            {
                answer: '菊',
                correct: true,
                notes: '曹雪芹《紅樓夢‧問菊》'
            },
            {
                answer: '芙蓉',
            },
            {
                answer: '茱萸',
            }
        ]
    },
    73: {
        question: '以下哪句詩詠的花與其它不同？',
        moreHints: ['牡丹'],
        choices: [
            {
                answer: '花開時節動京城',
            },
            {
                answer: '一枝紅艷露凝香',
            },
            {
                answer: '我花開後百花殺',
                correct: true,
                notes: '黄巢《不第後賦菊》：待到秋來九月八，我花開後百花殺。劉禹錫《賞牡丹》：唯有牡丹真國色，花開時節動京城。《清平调》：一枝紅艷露凝香，玄宗貴妃沉香亭賞牡丹，李白奉詔作。羅隱《牡丹花》：若教解語應傾國，任是無情也動人。',
            },
            {
                answer: '任是無情也動人',
            }
            // {
            //     answer: '花開時節動京城（唐‧劉禹錫）',
            // },
            // {
            //     answer: '一枝紅艷露凝香（唐‧李白）',
            // },
            // {
            //     answer: '我花開後百花殺（唐‧黄巢）',
            //     correct: true,
            //     notes: '黄巢《不第后赋菊》',
            // },
            // {
            //     answer: '任是無情也動人（唐‧羅隱）',
            // }
        ]
    },
    74: {
        question: '“只恐夜深花睡去”詠的是？',
        moreHints: ['紅樓夢史湘雲抽中的花簽', '玄宗言貴妃有如此花“睡未足耳”'],
        choices: [
           {
                answer: '牡丹',
                imageId: 'poeny.jpg',
            },
            {
                answer: '杏花',
                imageId: 'xing5.jpg',
            },
            {
                answer: '秋海棠',
                imageId: 'qiu-haitang2.jpg',
            },
            {
                answer: '海棠',
                imageId: 'haitang2.jpg',
                correct: true,
                notes: '蘇軾《海棠詩》：只恐夜深花睡去，故燒高燭照紅妝。',
            },
        ]
    },
    75: {
        question: '“白日不到處，青春恰自來”詠的是？',
        moreHints: ['如米小'],
        // moreHints: ['如米小', '問紅葉，何物是斜陽？'],
        choices: [
            {
                answer: '勿忘我',
            },
            {
                answer: '苔花',
                correct: true,
                notes: '袁枚《苔》'
            },
            {
                answer: '酢漿草',
            },
            {
                answer: '蒲公英',
            },
        ]
    },
    76: {
        question: '“淡極始知花更艷”詠的是？',
        moreHints: ['紅樓夢薛寶釵作', '通常在三至四月開花'],
        choices: [
            {
                answer: '白梅花',
                imageId: 'mei-bai1.jpg',
            },
            {
                answer: '白杏花',
                imageId: 'xing8.jpg',
            },
            {
                answer: '白海棠',
                imageId: 'haitang-bai1.jpg',
                correct: true,
                notes: '曹雪芹《紅樓夢詠白海棠》：淡極始知花更艷，愁多焉得玉無痕。梅花約一月末至二月中開放。杏花約二月中至三月初開放。牡丹約四月下旬至五月開放。',
            },
            {
                answer: '白牡丹',
                imageId: 'peony-white3.jpg',
            },
        ]
    },
    77: {
        question: '以下哪些活動的時節相同？',
        choices: [
            {
                answer: '舞雩歌詠',
                correct: true,
            },
            {
                answer: '曲水流觴',
                correct: true,
            },
            {
                answer: '三月三日天氣新，長安水邊多麗人',
                correct: true,
                notes: '上巳節'
            },
            {
                answer: '放紙鳶',
            },
        ]
    },
    78: {
        question: '相片猜一大詞人',
        imageId: 'li.jpg',
        // imageId: 'li-zi.png',
        moreHints: ['桃？不言，下自成蹊', '南北宋之際', '女性'],
        choices: [
            {
                answer: '李清照',
                notes: '“李”花“獨”“照”，是謂“李清照”',
            },
        ]
    },
    79: {
        question: '我爸爸的哥哥',
        hint: '猜亞洲國名',
        moreHints: ['寧波/上海話', '在西亞', '石油大國'],
        choices: [
            {
                answer: '阿拉伯',
            },
        ]
    },
    80: {
        question: '任是無人也自香，千古幽貞是此花',
        hint: '猜歐洲國名',
        moreHints: ['在北歐', 'Nokia'],
        choices: [
            {
                answer: ['芬蘭', '芬兰'],
                notes: '頌“芬”，詠“蘭”'
            },
        ]
    },
    81: {
        question: '番石榴',
        hint: '猜非洲國名',
        moreHints: ['在中非','產鑽石','英語簡稱也是ROC'],
        choices: [
            {
                answer: ['剛果', '刚果'],
            },
        ]
    },
    82: {
        question: '寒流襲台灣',
        hint: '猜歐洲國名',
        moreHints: ['時常爆發火山', '靠近北極'],
        choices: [
            {
                answer: ['冰島', '冰岛'],
            },
        ]
    },
    83: {
        question: '紅高粱',
        hint: '猜歐洲國名',
        moreHints: ['海盜', '安徒生'],
        choices: [
            {
                answer: ['丹麥', '丹麦'],
            },
        ]
    },
    84: {
        question: '越南',
        hint: '猜某機構舊名簡稱',
        moreHints: ['教育機構', '在和平東路二段'],
        choices: [
            {
                answer: '北小',
                notes: '越往南，北越小',
            },
        ]
    },
    85: {
        question: '《戰國策》：虎與狐行，獸見之皆走。虎不知獸畏己而走也，以為畏狐也。',
        hint: '猜歐洲國名',
        moreHints: ['養殖鮭魚', '王儲妃據傳有作風問題'],
        choices: [
            {
                answer: '挪威',
                notes: '狐假虎威，即狐“挪”虎“威”'
            },
        ]
    },
    86: {
        question: '川普并吞格陵蘭',
        hint: '猜美國地名',
        moreHints: ['不在美東', '和墨西哥接壤'],
        multiAnswer: true,
        choices: [
            {
                answer: ['加州', '得州'],
                notes: '多加一州即“加”州，或又得一州即“得”州',
            },
        ]
    },
    87: {
        question: '冬天的暖氣，火鍋，熱水澡',
        hint: '猜三種植物',
        moreHints: ['都是好朋友'],
        choices: [
            {
                answer: '松竹梅',
                notes: '都是歲寒三友'
            },
        ]
    },
    88: {
        question: '人生七十才開始',
        hint: '猜四字成語',
        moreHints: ['時光倒流'],
        choices: [
            {
                answer: ['返老還童', '返老还童'],
            },
        ]
    },
    89: {
        question: '三星堆',
        hint: '猜美洲國名',
        moreHints: ['中美洲', '四川', '先秦國名'],
        choices: [
            {
                answer: '古巴',
                notes: '四川，巴蜀也。川地古文明三星堆，簡稱古巴'
            },
        ]
    },
    90: {
        question: '看圖猜題',
        hint: '猜亞洲國名',
        moreHints: ['東南亞', '華人多'],
        imageId: 'horse.png',
        choices: [
            {
                answer: '馬來西亞',
            }
        ]
    },
    100: {
        question: '雙喜臨門',
        hint: '打華西城市名',
        moreHints: ['直轄市', '山城'],
        choices: [
            {
                answer: ['重慶','重慶市', '重庆', '重庆市'],
            },
        ]
    },
    101: {
        question: '天無三日晴',
        hint: '打華西南城市名',
        moreHints: ['省會', '珍惜難得日光'],
        choices: [
            {
                answer: ['貴陽','貴陽市', '贵阳', '贵阳市']
            },
        ]
    },
    102: {
        question: '地無三里平',
        hint: '打華北歷史郡名',
        moreHints: ['趙子龍', '北岳'],
        choices: [
            {
                answer: ['常山','常山郡'],
            },
        ]
    },
    103: {
        question: '人無三兩銀',
        hint: '打韓國城市名',
        moreHints: ['在半島南部', '曾發生抗議全斗煥事件'],
        choices: [
            {
                answer: ['光州','光州廣域市', '光州市'],
            },
        ]
    },
    104: {
        question: '媽祖顯靈',
        hint: '打華東沿海城市名',
        moreHints: ['平風', '靜浪'],
        multiAnswer: true,
        choices: [
            {
                answer: ['寧波','海寧'],
                notes:'按《三寶太監西洋記》：且說那三寶太監下西洋，在海上行了幾日，那一夜忽然狂風大作，巨浪滔天，那西洋的怪獸惡魚都出來作亂，要把那船隻翻覆。三寶太監大驚小怪，忙忙叫合船上的人，燒香點燭，跪在地下，求神求佛。忽然只見船頭頂上，有一盞紅燈，高高的掛著，照耀得滿天明亮。那大風也不刮了，那巨浪也平靜了。三寶太監看見，忙叫道：“這是天妃娘娘顯聖了！”'
            },
        ]
    },
    105: {
        question: '關公',
        hint: '打華中城市名',
        moreHints: ['長江中游', '萬里長江第一橋', '男子大丈夫'],
        choices: [
            {
                answer: ['武漢','武漢市', '武汉', '武汉市'],
                notes: '關公武聖男子漢，簡稱武漢',
            },
        ]
    },
    106: {
        question: '蟬噪林逾靜，鳥鳴山更幽',
        hint: '打中國西北行政區名',
        moreHints: ['回族自治', '塞上江南', '盛產枸杞'],
        choices: [
            {
                answer: ['寧夏', '宁夏'],
            },
        ]
    },
    108: {
        question: '成都好雨',
        hint: '打傳統假日名稱',
        moreHints: ['杜甫草堂詠物', '必在立春前後'],
        choices: [
            {
                answer: ['春節', '春节'],
                notes:'好雨知時“節”，當“春”乃發生'
            },
        ]
    },

    109: {
        question: '去年今日此門中，人面桃花相映紅',
        hint: '打群眾活動的名稱',
        moreHints: ['地表最大遷徙'],
        choices: [
            {
                answer: ['春運', '春运'],
                notes:'人面不知何處去，桃花依舊笑春風，一面之緣的“春”天桃花“運”'
            },
        ]
    },

    110: {
        question: '綠州',
        hint: '打華北城市名',
        moreHints: ['啤酒', '山東'],
        choices: [
            {
                answer: ['青島','青島市', '青岛', '青岛市'],
            },
        ]
    },
    111: {
        question: '野人獻曝',
        hint: '打華北城市名',
        moreHints: ['產鹽', '山東' ],
        choices: [
            {
                answer: ['日照','日照市'],
            },
        ]
    },
    112: {
        question: '烽燧',
        hint: '打華北城市名',
        moreHints: ['周幽王', '褒姒'],
        choices: [
            {
                answer: '煙台',
            },
        ]
    },
    113: {
        question: '穆斯林女裝',
        hint: '打大陸城市',
        choices: [
            {
                answer: '包頭',
            },
        ]
    },
    114: {
        question: '滄桑',
        hint: '猜美洲國名',
        moreHints: ['加勒比海'],
        choices: [
            {
                answer: ' 海地',
                notes: '滄海桑田，海水變陸地即“海地”'
            },
        ]
    },
    115: {
        question: '移動二根牙籖使等式成立',
        imageId: 'number-question.jpg',
        skipInput: true,
        choices: [
            {
                answerImageId: 'number-answer.jpg',
                notes: '五三正月十五，歡樂今宵，明朝再少年：七十歲專用',
            },
        ]
    },
    116: {
        question: '猜一種食物（不是涼拌茄子）',
        imageId: 'eggplant.jpg',
        moreHints: ['海產', '植物'],
        choices: [
            {
                answer: '紫菜',
            },
        ]
    },
};
// 移動二根牙籖使等式成立
/*
    riddle structure example:

    // required field, a unique id for the riddle, used as the key in the db object
    75: {

        // required field, string or array of strings, when it is an array, each string is display in a new line
        question: '“白日不到處，青春恰自來”詠的是？',

        // optional field of a string, when appears it is display as under the question
        hint: '如米小',

        // optional field, array of strings, each string is display as a hint in order when the user click "more hints" button
        moreHints: ['如米小', '問紅葉，何物是斜陽？'],

        // required field, array of objects, each object has a required answer field and optional imageid, correct and notes fields
        choices: [
            {
                answer: '勿忘我',
            },
            {
                answer: '苔花',
                imageId: 'moss-flower.jpg',
                correct: true,
                notes: '袁枚《苔》' // the notes field is supported for input questions and single selection questions only
            },
            {
                answer: '酢漿草',
            },
            {
                answer: '蒲公英',
            },
        ]
    },

*/
const db2026 = [
    69,116,79,81,82,83,114,84,80,85,86,87,88,89,90,115,100,101,102,103,104,105,106,107,108,109,110,111,70,77,78,75,72,73,71,74,76
];

const db2024bx = [
    0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30
];

const db2024 = [
    31,4,8,2,14,15,16,32,27,28,29,18,24,26,25,11,19,0,12,9,22,23,20,21,33,34,35,36
];

const db2019 = [
    37, 38, 39
];

const dbJieqi = [
    46,48,49,47,57,58,12,50,51,52,53,54,55,56,11,59,60,61,62,63,64,65,66,67
];

const dbWarmup = [
    68,40,41,42,43,44,45
];

const riddlesDB = {
    masterDB: DB,
    defaultDBId: '2026',
    '2026': {
        subtitle: '2026 丙午馬年',
        db: db2026
    },
    '2024bx': {
        subtitle: '2024 甲辰龍年',
        db: db2024bx
    },
    '2024': {
        subtitle: '2024 甲辰龍年',
        db: db2024
    },
    '2019': {
        subtitle: '2019 己亥豬年',
        db: db2019
    },
    jieqi: {
        title: '二十四節氣',
        db: dbJieqi,
    },
    warmup: {
        title: '益智問答',
        subtitle: '模擬暖身',
        db: dbWarmup
    },
};
