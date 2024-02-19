const DB = [
    {
        question: '白髮三千丈，會須一飲三百杯',
        hint: '數學名詞',
        choices: [
            {
                answer: '無理數',
            }
        ]
    },
    {
        question: '開會',
        hint: '物理學名詞',
        choices: [
            {
                answer: '相對論',
            }
        ]
    },
    {
        question: '開大會',
        hint: '物理學名詞',
        choices: [
            {
                answer: '廣義相對論',
            }
        ]
    },
    {
        question: ' ',
        hint: '人際行爲',
        choices: [
            {
                answer: '約會',
            }
        ]
    },
    {
        question: '百家爭鳴',
        hint: '物理學名詞',
        choices: [
            {
                answer: '量子糾纏'
            }
        ]
    },
    {
        question: '正月十五為上元，是夜為元宵。七月十五為中元。是否有下元？',
        textBox: false,
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
                correct: false
            }
        ]
    },
    {
        question: '智齒',
        hint: '中國傳統祭祀活動。近代在閩臺一帶盛行。',
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
                answer: '合唱'
            }
        ]
    },
    {
        question: '古時女子鮮少外出抛頭露面。只有元宵前後三五夜，她們可以自由的和閨蜜結伴出游嬉玩。看花賞燈之外，偶爾也遇到邂逅異性的機緣。下列哪些詩句是描寫的元宵情景?金吾不禁夜，花市燈如晝，月上柳梢頭，人約黃昏後，只見桃花不見人，桃花潭水深千尺，驀然回首 那人正在燈火闌珊，水中沚',
        hint: '',
        textBox: false,
        choices: [
            {
                answer: '2,3,5',
                correct: false
            },
	        {
                answer: '1,2,6',
                correct: false
            },
            {
                answer: '1,2,5',
                correct: true
            },
            {
                answer: '以上皆非',
                correct: false
            }
        ]
    },
    {
        question: '竹杖芒鞋輕勝馬，一蓑煙雨任平生',
        hint: '小説人物',
        textBox: false,
        choices: [
            {
                answer: '賈寶玉',
                correct: false
            },
            {
                answer: '令狐冲',
                correct: false
            },
            {
                answer: '林冲',
                correct: false
            },
            {
                answer: ['魯達', '魯智深', '鲁达', '鲁智深'],
                correct: true,
                notes: '清，邱圓，魯智深醉鬧五台山寄生草：煙蓑雨笠卷單行，一任俺，芒鞋破缽隨緣化'
            },
            {
                answer: '以上皆非',
                correct: false
            }
        ]
    },
    {
        question: '樓閣玲瓏五雲起，一騎紅塵妃子笑',
        hint: '城市',
        hide: true,
        textBox: false,
        choices: [
            {
                answer: '成都',
                correct: false,
                notes: '四川'
            },
            {
                answer: '重慶',
                correct: true
            },
            {
                answer: '莆田',
                correct: false,
                notes: '福建'
            },
            {
                answer: '增城',
                correct: false,
                notes: '廣東'
            },
            {
                answer: '以上皆非',
                correct: false
            }
        ]
    },
    {
        question: '小樓一夜聽春雨',
        hint: '美食家多愛',
        hide: true,
        textBox: false,
        choices: [
            {
                answer: '酒',
                correct: true,
                notes: '深巷明朝賣杏花，牧童遥指杏花村，酒香不怕巷子深'
            },
            {
                answer: '茶',
                correct: false
            },
            {
                answer: '河豚',
                correct: false
            },
            {
                answer: '莼菜',
                correct: false
            },
            {
                answer: '以上皆非',
                correct: false
            }
        ]
    },
    {
        question: '墾丁之北',
        hint: '植物名',
        textBox: false,
        choices: [
            {
                answer: '報春花',
                correct: false
            },
            {
                answer: '迎春花',
                correct: false
            },
            {
                answer: '吉祥草',
                correct: false
            },
            {
                answer: '仙草',
                correct: false
            },
            {
                answer: '以上皆非',
                correct: true,
                notes: '墾丁之北為恆春，即日日春也'
            },
        ]
    },
    {
        question: '熱烘烘的太阳往上爬哟',
        hint: '台灣地名',
        textBox: true,
        choices: [
            {
                answer: '春日',
                correct: false,
                notes: '屏東'
            },
            {
                answer: '烏日',
                correct: false,
                notes: '台中'
            },
            {
                answer: '佳冬',
                correct: false,
                notes: '屏東'
            },
            {
                answer: '暖暖',
                correct: true,
                notes: '基隆'
            },
            {
                answer: '以上皆非',
                correct: false
            }
        ]
    },
    {
        question: '山在虛無縹緲間',
        hint: '台灣地名',
        hide: true,
        textBox: true,
        choices: [
            {
                answer: '萬巒',
                correct: false,
                notes: '屏東'
            },
            {
                answer: '霧社',
                correct: false,
                notes: '南投'
            },
            {
                answer: ['霧峰', '雾峰'],
                correct: true,
                notes: '台中'
            },
            {
                answer: '五峰',
                correct: false,
                notes: '新竹'
            },
            {
                answer: '以上皆非',
                correct: false
            }
        ]
    },
    {
        question: '舍南舍北皆春水',
        hint: '台灣地名',
        hide: true,
        textBox: false,
        choices: [
            {
                answer: '平溪',
                correct: false
            },
            {
                answer: '四湖',
                correct: false
            },
            {
                answer: '四重溪',
                correct: false
            },
            {
                answer: '雙溪',
                correct: true
            },
            {
                answer: '以上皆非',
                correct: false
            }
        ]
    },
    {
        question: '兩個黃鷂鳴翠柳',
        hint: '台灣地名',
        hide: true,
        textBox: true,
        choices: [
            {
                answer: '燕巢',
                correct: false,
                notes: '高雄'
            },
            {
                answer: ['鶯歌', '莺歌'],
                correct: true,
                notes: '新北'
            },
            {
                answer: '鳥松',
                correct: false,
                notes: '高雄'
            },
            {
                answer: '鳳山',
                correct: false,
                notes: '高雄'
            },
            {
                answer: '以上皆非',
                correct: false
            }
        ]
    },
];
