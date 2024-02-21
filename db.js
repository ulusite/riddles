const db2024 = [
    {
        question: '熱烘烘的太陽往上爬哟',
        hint: '台灣地名',
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
    {
        question: '墾丁之北，爾濱之南',
        hint: '看江山如此多嬌，猜四時不謝之花',
        choices: [
            {
                answer: '報春花',
            },
            {
                answer: '迎春花',
            },
            {
                answer: '日日春',
                correct: true,
                notes: '墾丁之北為恆春，爾濱之南為長春，皆日日春也'
            },
            {
                answer: '仙草',
            },
            {
                answer: '以上皆非',
            },
        ]
    },
    {
        question: '清風徐來 水波不興',
        hint: '台灣觀光地名 （2字）',
        choices: [
            {
                answer: '平溪',
            }
        ]
    },
    {
        question: '白髮三千丈，會須一飲三百杯',
        hint: '數學名詞 （3字）',
        choices: [
            {
                answer: ['無理數', '无理数'],
            }
        ]
    },
    {
        question: '開會',
        hint: '物理學名詞 （3字）',
        choices: [
            {
                answer: ['相對論', '相对论'],
            }
        ]
    },
    {
        question: '開大會',
        hint: '物理學名詞 （5字）',
        choices: [
            {
                answer: ['廣義相對論', '广义相对论'],
            }
        ]
    },
    {
        question: ' ',
        hint: '人際行爲 （2字）',
        choices: [
            {
                answer: ['約會', '约会'],
            }
        ]
    },
    {
        question: '百家爭鳴',
        hint: '物理學名詞 （4字）',
        choices: [
            {
                answer: ['量子糾纏', '量子纠缠']
            }
        ]
    },
    {
        question: '正月十五為上元，是夜為元宵。七月十五為中元。是否有下元？',
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
    {
        question: '智齒',
        hint: '中國傳統祭祀活動。近代在閩臺一帶盛行 （2字）',
        choices: [
            {
                answer: '尾牙'
            }
        ]
    },
    {
        question: '立春',
        hint: '音樂活動 （2字）',
        choices: [
            {
                answer: '合唱',
                notes: '立春字解為三人立日，即众【三人】音【立日】，合唱也'
            }
        ]
    },
    {
        question: '古時女子鮮少外出抛頭露面。只有元宵前後三五夜，她們可以自由的和閨蜜結伴出游嬉玩。看花賞燈之外，偶爾也遇到邂逅異性的機緣。下列哪些詩句是描寫的元宵情景?金吾不禁夜，花市燈如晝，月上柳梢頭，人約黃昏後，只見桃花不見人，桃花潭水深千尺，驀然回首 那人正在燈火闌珊，水中沚',
        choices: [
            {
                answer: '2,3,5',
            },
	        {
                answer: '1,2,6',
            },
            {
                answer: '1,2,5',
                correct: true
            },
            {
                answer: '以上皆非',
            }
        ]
    },
    {
        question: '竹杖芒鞋輕勝馬，一蓑煙雨任平生',
        hint: '小説人物',
        choices: [
            {
                answer: '賈寶玉',
            },
            {
                answer: '令狐冲',
            },
            {
                answer: '林冲',
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
    {
        question: '跑旱船',
        hint: '南宋著名詩人 （2字）',
        choices: [
            {
                answer: ['陸游', '陸放翁', '陆游', '陆放翁', '放翁'],
            }
        ]
    },
    {
        question: '衣錦還鄉',
        hint: '明朝文人，擅作抒情文 （3字）',
        choices: [
            {
                answer: ['歸有光', '归有光'],
            }
        ]
    },
    {
        question: '老子曰',
        hint: '唐朝著名詩人 （2字）',
        choices: [
            {
                answer: ['李白', '李太白'],
		        notes: '老子姓李名耳，老子曰即李白'
            }
        ]
    },
    {
        question: '子曰',
        hint: '書名（不是論語， 2字）',
        choices: [
            {
                answer: ['聖經', '圣经'],
		        notes: '孔子聖人，聖人説話即聖經'
            }
        ]
    },
    {
        question: '辛棄疾《青玉案·元夕》：[鳳簫聲動，玉壺光轉] 玩的是什麽燈？',
        choices: [
            {
                answer: '天燈',
            },
            {
                answer: '龍燈',
                correct: true,
                notes: '龍燈或魚燈，[鳳簫聲動，玉壺光轉，一夜魚龍舞]'
            },
            {
                answer: ['魚燈', '龍燈'],
                correct: true,
                notes: '龍燈或魚燈，[鳳簫聲動，玉壺光轉，一夜魚龍舞]'
            },
	        {
		        answer: '水燈',
            },
            {
                answer: '以上皆非',
            }
        ]
    },
    {
        question: '看圖猜謎',
        hint: '初春植物 （2或3字）',
        imageId: 'photo1',
        choices: [
            {
                answer: ['水仙', '水仙花'],
            },
        ]
    },
    {
        question: '我欲乘風歸去，高處不再寒',
        hint: '元宵節應景活動所用物品 （2字）',
        choices: [
            {
                answer: ['天燈', '天灯'],
            }
        ]
    },
    {
        question: '胖子泡溫泉',
        hint: '應時食品 （2字）',
        choices: [
            {
                answer: ['湯圓', '汤圆'],
            }
        ]
    },
    {
        question: '川味髮型',
        hint: '食品。生長在西南，茁壯於東北。最近流行遍灣區 （3字）',
        choices: [
            {
                answer: ['麻辣燙', '麻辣烫'],
            }
        ]
    },
    {
        question: '少林寺運動會',
        hint: '年節菜名 （3字）',
        choices: [
            {
                answer: ['佛跳墻', '佛跳墙']
            }
        ]
    },
    {
        question: '樓閣玲瓏五雲起，一騎紅塵妃子笑',
        hint: '城市',
        skip: true,
        choices: [
            {
                answer: '成都',
                notes: '四川'
            },
            {
                answer: '重慶',
                correct: true
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
    {
        question: '小樓一夜聽春雨，賭書潑得永日香',
        hint: '美食家多愛',
        skip: true,
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
];

const db2019 = [
    {
        question: '山在虛無縹緲間',
        hint: '台灣地名 （2字）',
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
    {
        question: '舍南舍北皆春水',
        hint: '台灣地名',
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
    {
        question: '兩個黃鷂鳴翠柳',
        hint: '台灣地名',
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
];
const dbWarmup = [
    {
        question: '星探',
        hint: '信息時代新興人物。主要工作是博人眼球 （2字）',
        choices: [
            {
                answer: ['網美', '网美'],
                notes: '星探職在[網]羅[美]人'
            }
        ]
    },
    {
        question: '減肥',
        hint: '應節食品。諧音梗 （2字）',
        choices: [
            {
                answer: '元宵',
                notes: '圓消',
            }
        ]
    },
    {
        question: '那時風雨聲，花落知多少',
        hint: '過年時電視節目名 （2字）',
        choices: [
            {
                answer: '春晚',
                notes: '孟浩然《春曉》：春眠不覺曉，處處聞啼鳥。夜來風雨聲，花落知多少。風雨花落之時即春晚',
            }
        ]
    },
    {
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
    {
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
    {
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
    }
];

const riddlesDB = {
    warmup: {
        title: '模擬暖身',
        db: dbWarmup
    },
    '2024': {
        title: '2024 甲辰龍年',
        db: db2024
    },
    '2019': {
        title: '2019 己亥豬年',
        db: db2019
    }
};