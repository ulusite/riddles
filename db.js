const DB = [
    {
        question: '熱烘烘的太陽往上爬哟',
        hint: '台灣地名',
        textBox: false,
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
        textBox: false,
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
        hint: '台灣觀光地名',
        choices: [
            {
                answer: '平溪',
            }
        ]
    },
    {
        question: '白髮三千丈，會須一飲三百杯',
        hint: '數學名詞',
        choices: [
            {
                answer: ['無理數', '无理数'],
            }
        ]
    },
    {
        question: '開會',
        hint: '物理學名詞',
        choices: [
            {
                answer: ['相對論', '相对论'],
            }
        ]
    },
    {
        question: '開大會',
        hint: '物理學名詞',
        choices: [
            {
                answer: ['廣義相對論', '广义相对论'],
            }
        ]
    },
    {
        question: ' ',
        hint: '人際行爲',
        choices: [
            {
                answer: ['約會', '约会'],
            }
        ]
    },
    {
        question: '百家爭鳴',
        hint: '物理學名詞',
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
        hint: '中國傳統祭祀活動。近代在閩臺一帶盛行',
        choices: [
            {
                answer: '尾牙'
            }
        ]
    },
    {
        question: '立春',
        hint: '音樂活動',
        choices: [
            {
                answer: '合唱',
                notes: '立春字解為三人立日，即众（三人）音（立日），合唱也'
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
                notes: '清，邱圓，魯智深醉鬧五台山寄生草：煙蓑雨笠卷單行，一任俺，芒鞋破缽隨緣化'
            },
            {
                answer: '以上皆非',
            }
        ]
    },
    {
        question: '跑旱船',
        hint: '南宋著名詩人',
        choices: [
            {
                answer: ['陸游', '陸放翁', '陆游', '陆放翁', '放翁'],
            }
        ]
    },
    {
        question: '衣錦還鄉',
        hint: '明朝文人，擅作抒情文',
        choices: [
            {
                answer: ['歸有光', '归有光'],
            }
        ]
    },
    {
        question: '老子曰',
        hint: '唐朝著名詩人',
        choices: [
            {
                answer: '李白',
		        notes: '老子姓李名耳，老子曰即李白'
            }
        ]
    },
    {
        question: '子曰',
        hint: '書名（不是論語）',
        choices: [
            {
                answer: ['聖經', '圣经'],
		        notes: '孔子聖人，聖人説話即聖經'
            }
        ]
    },
    {
        question: '辛棄疾青玉案元夕中，[鳳簫聲動，玉壺光轉] 玩的是什麽燈？',
        choices: [
            {
                answer: '天燈',
            },
            {
                answer: '龍燈',
                correct: true,
                notes: '或魚燈，[鳳簫聲動，玉壺光轉，一夜魚龍舞]'
            },
            {
                answer: ['魚燈', '龍燈'],
                correct: true,
                notes: '或龍燈，[鳳簫聲動，玉壺光轉，一夜魚龍舞]'
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
        hint: '初春植物',
        imageId: 'photo1',
        choices: [
            {
                answer: ['水仙', '水仙花'],
            },
        ]
    },
    {
        question: '我欲乘風歸去，高處不再寒',
        hint: '元宵節應景活動所用物品',
        choices: [
            {
                answer: ['天燈', '天灯'],
            }
        ]
    },
    {
        question: '胖子泡溫泉',
        hint: '應時食品',
        choices: [
            {
                answer: ['湯圓', '汤圆'],
            }
        ]
    },
    {
        question: '川味髮型',
        hint: '食品。生長在西南，茁壯於東北。最近流行遍灣區',
        choices: [
            {
                answer: ['麻辣燙', '麻辣烫'],
            }
        ]
    },
    {
        question: '少林寺運動會',
        hint: '年節菜名',
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
        question: '小樓一夜聽春雨',
        hint: '美食家多愛',
        skip: true,
        choices: [
            {
                answer: '酒',
                correct: true,
                notes: '深巷明朝賣杏花，牧童遥指杏花村，酒香不怕巷子深'
            },
            {
                answer: '茶',
            },
            {
                answer: '河豚',
            },
            {
                answer: '莼菜',
            },
            {
                answer: '以上皆非',
            }
        ]
    },
    {
        question: '山在虛無縹緲間',
        hint: '台灣地名',
        skip: true,
        textBox: true,
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
        skip: true,
        choices: [
            {
                answer: '平溪',
            },
            {
                answer: '四湖',
            },
            {
                answer: '二重溪',
                correct: true
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
        skip: true,
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
