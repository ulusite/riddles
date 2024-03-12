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
        imageId: 'char1',
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
        imageId: 'waterFall',
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
        imageId: 'char3',
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
        imageId: 'char2',
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
        question: '2024美國總統大選的【柯文哲】',
        hint: '打一人名。1. 在超級星期天足球大賽的廣告中出現過 2. 出生於美國政治世家 3. 伯父和父親都參加過美國總統競選',
        choices: [
            {
                answer: ['robert kennedy jr.', 'robert f. kennedy jr.', 'rfk jr.', 'robert kennedy jr', 'robert f. kennedy jr', 'rfk jr'],
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
        imageId: 'poems',
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
                notes: '冰河，北極熊，愛斯基摩人，三文魚',
                correct: true
            },
            {
                answer: '北極熊',
                notes: '冰河，北極熊，愛斯基摩人，三文魚',
                correct: true
            },
            {
                answer: '愛斯基摩人',
                notes: '冰河，北極熊，愛斯基摩人，三文魚',
                correct: true
            },
            {
                answer: ['三文魚', '冰河', '北極熊', '愛斯基摩人'],
                notes: '冰河，北極熊，愛斯基摩人，三文魚',
                correct: true
            },
            {
                answer: '企鵝'
            }
        ]
    },
    31: {
        question: '油管聼歌猜題',
        link: 'https://www.youtube.com/watch?v=ijOZRKla6yg',
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
        question: '辛棄疾《青玉案·元夕》：【鳳簫聲動，玉壺光轉】詞中舞的是什麽燈？',
        choices: [
            {
                answer: '天燈',
            },
            {
                answer: '龍燈',
                correct: true,
                notes: '龍燈或魚燈，【鳳簫聲動，玉壺光轉，一夜魚龍舞】'
            },
            // for radio inputs and allow milti correct selections, the last correct answer
            // must have all correct answers in an array with the displayed answer placed at first
            {
                answer: ['魚燈', '龍燈'],
                correct: true,
                notes: '龍燈或魚燈，【鳳簫聲動，玉壺光轉，一夜魚龍舞】'
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
            {
                answer: '以上皆非',
            }
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
                notes: '放翁【晴窗細乳戲分茶】，易安《金石錄後序》賭書潑茶'
            },
            {
                answer: '筍',
            },
            {
                answer: '河豚',
            },
            {
                answer: '以上皆非',
            }
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
            {
                answer: '以上皆非',
            }
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
            {
                answer: '以上皆非',
            }
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
            {
                answer: '以上皆非',
            }
        ]
    },
    39: {
        question: '兩個黃鷂鳴翠柳',
        hint: '打一台灣地名',
        skip: false,
        textBox: false,
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
            {
                answer: '以上皆非',
            }
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
};

const db2024feb = [
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
    40,41,42,43,44,45,
];

const riddlesDB = {
    masterDB: DB,
    '2024feb': {
        subtitle: '2024 甲辰龍年',
        db: db2024feb
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
