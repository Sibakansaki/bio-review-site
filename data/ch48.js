// ═══════════════════════════════════════
// CH48 — 神經系統（Nervous System）
// 更新日期：2026-05-07
// 錯題數：16
// ⚠️ 必須用 var，不能用 const 或 let
// ═══════════════════════════════════════
var CH48 = {
  id: "ch48",
  title: "神經系統",
  color: "#FF6B6B",
  emoji: "🧠",
  cards: [

    {
      id: "ch48-001",
      status: "needs",
      qNum: 2,
      concept: "咖啡因抑制 PDE，cAMP 濃度上升",
      tags: ["cAMP", "磷酸二酯酶 PDE", "咖啡因 caffeine", "第二傳訊者 second messenger"],
      summary: "【角色分工】
・磷酸二酯酶（phosphodiesterase, PDE）→ 分解 cAMP
・cAMP（cyclic AMP）→ 重要的第二傳訊者（second messenger）

![圖片](https://res.cloudinary.com/dyfdvchdd/image/upload/v1778311473/un3uretocxty3fsjbdq9.jpg)

【咖啡因的作用】
・抑制 PDE → cAMP 無法被分解 → 細胞內 [cAMP] ↑
・cAMP ↑ → 活化蛋白激酶 A（protein kinase A, PKA）→ 蛋白質磷酸化

【注意】
・cAMP 由 ATP 合成（腺苷酸環化酶 adenylyl cyclase 催化）
・PDE 的受質是 cAMP，不是 ATP
・PDE 被抑制 → 堆積的是受質 cAMP，而非上游的 ATP",
      logic: "咖啡因 → 抑制 PDE → cAMP 無法分解 → [cAMP] ↑ → 活化 PKA → 蛋白質磷酸化",
      pitfall: "誤選C（ATP）。cAMP 由 ATP 合成，容易誤以為 PDE 被抑制後 ATP 會增加，但 PDE 的受質是 cAMP 而非 ATP，被抑制時堆積的是 cAMP。",
      sourceQuestion: {
        school: "104 慈濟",
        question: "咖啡因(caffeine)是一種磷酸二酯酶(phosphodiesterase)的抑制劑；故咖啡因可能會造成細胞內哪種分子的數量上升？",
        options: {
          A: "環狀腺核苷單磷酸(cyclic AMP)",
          B: "磷酸化的蛋白質(phosphorylated proteins)",
          C: "腺核苷三磷酸(ATP)",
          D: "活化的 G 蛋白"
        },
        wrong: "C",
        correct: "A"
      }
    },

    {
      id: "ch48-002",
      status: "needs",
      qNum: 23,
      concept: "生物時鐘非真核特有；哺乳類由 SCN 調控",
      tags: ["生物時鐘 circadian clock", "視交叉上核 SCN", "下視丘 hypothalamus", "原核生物"],
      summary: "【C 選項為何錯】\n・生物時鐘（circadian clock）並非真核生物特有\n・原核生物（如藍綠藻 cyanobacteria）也有晝夜節律（circadian rhythm）\n\n【D 選項為何錯】\n・哺乳類生物時鐘中樞 = 下視丘（hypothalamus）的視交叉上核（suprachiasmatic nucleus, SCN）\n・SCN 接收視網膜光訊號，協調全身節律\n・「海馬迴」是翻譯錯誤，原文應為下視丘\n\n【本題重點】\n・C 和 D 都是錯誤敘述 → 複選題需同時選 CD",
      logic: "原核生物（藍綠藻）→ 也有生物時鐘 → C錯；哺乳類時鐘中樞 → 下視丘 SCN → 非海馬迴 → D錯",
      pitfall: "只選C忘記選D。D選項說「靠海馬迴調控」是翻譯陷阱，實際上是視交叉上核（SCN）在下視丘，看到「海馬迴」要立刻警覺——哺乳類生物時鐘 = SCN = 下視丘，不是海馬迴。",
      sourceQuestion: {
        school: "107 中國",
        question: "生物時鐘(circadian clock)是調節許多生物體內生理反應的重要機制，其重要性也受到2017年諾貝爾生理醫學獎的肯定。關於生物時鐘的敘述，何者錯誤？",
        options: {
          A: "當植物移到暗室後，其生物時鐘不會停止",
          B: "候鳥的季節性遷徙會受生物時鐘影響",
          C: "生物時鐘是真核生物特有的機制",
          D: "哺乳類的生物時鐘主要是靠海馬迴裡的一群神經細胞所調控",
          E: "生物時鐘1天的定義不一定相等於24小時"
        },
        wrong: "C",
        correct: "CD"
      }
    },

    {
      id: "ch48-003",
      status: "needs",
      qNum: 28,
      concept: "P 物質為興奮性神經傳導物質",
      tags: ["興奮性傳導物 excitatory neurotransmitter", "P 物質 substance P", "GABA", "甘胺酸 glycine"],
      summary: "【抑制性傳導物質（inhibitory）】\n・GABA（gamma-aminobutyric acid，γ-胺基丁酸）→ 開 Cl⁻ 通道 → 超極化\n・甘胺酸（glycine）→ 同樣開 Cl⁻ 通道 → 超極化\n\n【調節性傳導物質】\n・血清素（serotonin）→ 調節情緒、睡眠，以抑制/調節為主\n\n【興奮性傳導物質（excitatory）】\n・P 物質（substance P）→ 11 個胺基酸組成的神經胜肽（neuropeptide）\n・與痛覺傳遞（pain transmission）相關\n・使突觸後膜去極化（depolarization）",
      logic: "GABA → 抑制性（Cl⁻ 內流 → 超極化）；甘胺酸 → 抑制性；血清素 → 調節/抑制為主；P 物質 → 興奮性（傳遞痛覺）",
      pitfall: "誤選A（血清素 serotonin）。血清素雖能在某些受體產生興奮效果，但在中樞神經的主要角色是情緒調節和抑制，不以「興奮性傳導物質」為主要分類。P 物質才是標準教科書中明確的興奮性痛覺傳導物質。",
      sourceQuestion: {
        school: "99 私醫",
        question: "以下何者為興奮型神經傳遞物質(excitatory neurotransmitter)？",
        options: {
          A: "血清素(serotonin)",
          B: "γ-丁基氨酸(GABA; gamma aminobutyric acid)",
          C: "甘胺酸(glycine)",
          D: "P 物質(substance P)"
        },
        wrong: "A",
        correct: "D"
      }
    },

    {
      id: "ch48-004",
      status: "needs",
      qNum: 33,
      concept: "海馬迴負責短期記憶轉換為長期記憶",
      tags: ["海馬迴 hippocampus", "短期記憶 short-term memory", "長期記憶 long-term memory", "記憶固化 memory consolidation"],
      summary: "【海馬迴（hippocampus）的功能】\n・將短期記憶（short-term memory）轉化為長期記憶（long-term memory）\n・此過程稱為記憶固化（memory consolidation）\n・著名案例：H.M.（Henry Molaison）切除海馬迴後無法形成新的長期記憶\n\n【其他腦區功能（勿混淆）】\n・視丘（thalamus）→ 感覺訊號的轉接站\n・下視丘（hypothalamus）→ 調控自律神經和內分泌\n・黑質（substantia nigra）→ 多巴胺合成、運動控制（帕金森氏症相關）",
      logic: "短期記憶 → 海馬迴（hippocampus）固化 → 長期記憶儲存於大腦皮質各區",
      pitfall: "誤選D（黑質 substantia nigra）。黑質屬於基底核，主要功能與多巴胺合成和運動控制相關，缺損導致帕金森氏症，與記憶固化無關。",
      sourceQuestion: {
        school: "101 義守",
        question: "下列何者是把短期記憶轉換成長期記憶的主要腦區？",
        options: {
          A: "下視丘",
          B: "視丘(thalamus)",
          C: "海馬(hippocampus)",
          D: "黑質(substantia nigra)"
        },
        wrong: "D",
        correct: "C"
      }
    },

    {
      id: "ch48-005",
      status: "needs",
      qNum: 35,
      concept: "體運動神經元與骨骼肌使用菸鹼性受體，非蕈毒鹼性",
      tags: ["自主神經 autonomic nervous system", "蕈毒鹼受體 muscarinic receptor", "菸鹼受體 nicotinic receptor", "神經肌肉接合 neuromuscular junction"],
      summary: "【乙醯膽鹼（ACh）受體兩大類】\n・菸鹼性受體（nicotinic AChR, nAChR）\n・蕈毒鹼性受體（muscarinic AChR, mAChR）\n\n【各部位使用的受體】\n・自主神經節（autonomic ganglia）節後神經元 → nAChR\n・副交感節後纖維 → 平滑肌/心肌/腺體 → mAChR\n・體運動神經元（somatic motor neuron）→ 骨骼肌神經肌肉接合處（neuromuscular junction, NMJ）→ nAChR\n\n【C 選項錯誤】\n・骨骼肌用的是 nAChR，而非 mAChR\n・mAChR 只在平滑肌、心肌、腺體上",
      logic: "自主節前 → nAChR；副交感節後 → mAChR（平滑肌/心肌）；體運動神經元 → nAChR（骨骼肌 NMJ）",
      pitfall: "漏寫未作答。C選項「體運動神經元的ACh與骨骼肌的蕈毒鹼性受體結合」是錯的，骨骼肌神經肌肉接合處用的是菸鹼性受體（nAChR），蕈毒鹼性受體只在平滑肌、心肌和腺體上。",
      sourceQuestion: {
        school: "101 義守",
        question: "關於自主神經系統(autonomic nervous system)，下列何者是錯的？",
        options: {
          A: "自主神經節(autonomic ganglia)節前神經元釋放乙醯膽鹼(acetylcholine, Ach)，並經由與菸鹼性乙醯膽鹼接受器(nicotinic Ach receptor)結合而刺激節後神經元",
          B: "副交感神經(parasympathetic nerve)節後神經纖維釋放乙醯膽鹼作用於平滑肌之蕈毒鹼性乙醯膽鹼接受器(muscarinic Ach receptor)",
          C: "體運動神經元釋放的乙醯膽鹼會與骨骼肌肉細胞之蕈毒鹼性乙醯膽鹼接受器結合以刺激收縮",
          D: "自主運動神經元(autonomic motor neuron)可以支配平滑肌"
        },
        wrong: "",
        correct: "C"
      }
    },

    {
      id: "ch48-006",
      status: "needs",
      qNum: 36,
      concept: "中央前迴為運動皮質，不參與內臟疼痛感覺",
      tags: ["中央前迴 precentral gyrus", "初級運動皮質 primary motor cortex", "額葉 frontal lobe", "內臟疼痛 visceral pain"],
      summary: "【中央前迴（precentral gyrus）的位置與功能】\n・位於額葉（frontal lobe）後部、中央溝（central sulcus）前方\n・是初級運動皮質（primary motor cortex）所在\n・負責控制對側半身隨意運動（voluntary movement）\n・確實參與：吞嚥控制、語言發聲、臉部表情控制\n\n【A 選項錯誤】\n・「參與內臟疼痛感覺」不屬於中央前迴功能\n・內臟疼痛感覺處理 → 中央後迴（postcentral gyrus，初級體感皮質）+ 島葉（insula）\n\n【記憶口訣】\n・前迴 = 運動；後迴 = 感覺",
      logic: "中央前迴 → 初級運動皮質（motor cortex）→ 控制隨意運動；內臟疼痛感覺 → 中央後迴（體感皮質）+ 島葉 → 非中央前迴",
      pitfall: "漏寫未作答。容易忘記「前迴=運動，後迴=感覺」的基本分區。A選項「參與內臟疼痛感覺」錯在把感覺功能放到了運動皮質，中央前迴是運動區，不負責感知疼痛。",
      sourceQuestion: {
        school: "105 中國",
        question: "有關大腦皮層中央前迴，下列敘述何者有誤？",
        options: {
          A: "參與內臟疼痛感覺",
          B: "參與吞嚥控制",
          C: "位於額葉",
          D: "參與語言發聲",
          E: "參與面部表情控制"
        },
        wrong: "",
        correct: "A"
      }
    },

    {
      id: "ch48-007",
      status: "needs",
      qNum: 45,
      concept: "轉移疼痛：輸尿管痛轉移到鼠蹊部，非背部",
      tags: ["轉移疼痛 referred pain", "脊髓背角 dorsal horn", "皮節 dermatome", "會聚理論 convergence theory"],
      summary: "【轉移疼痛（referred pain）的機制】\n・內臟傳入痛覺神經 + 體表皮節（dermatome）感覺神經\n・匯聚在脊髓同一個二階背角神經元（second-order dorsal horn neuron）\n・大腦誤判疼痛來自體表 → 轉移疼痛\n\n【常見轉移痛對應位置】\n・心臟（heart）→ 左胸/左手臂\n・肝膽（liver/gallbladder）→ 右肩\n・腎臟（kidney）→ 腰背部\n・輸尿管（ureter）→ 鼠蹊部（groin）、下腹部\n\n【C 選項錯誤】\n・「輸尿管引起背疼痛」是錯的\n・輸尿管痛 → 鼠蹊（不是背部，背部是腎臟的轉移位置）",
      logic: "內臟痛 + 皮膚痛 → 匯聚同一脊髓背角神經元 → 大腦誤判 → 轉移疼痛；輸尿管痛 → 轉移到鼠蹊部（非背部）",
      pitfall: "誤選B。B說「通常是同一個結構或相同胚段或皮節」——這其實是大致正確的描述（同胚段/皮節），所以B不是最不正確的。C說「輸尿管引起背疼痛」才是明確錯誤，輸尿管痛轉移到鼠蹊，不是背部（背部是腎臟痛的轉移位置）。",
      sourceQuestion: {
        school: "102 義守",
        question: "關於轉移疼痛(referred pain)，下列何者最不正確？",
        options: {
          A: "心臟疼痛、左手臂痛",
          B: "通常是同一個結構或相同的胚段或皮節",
          C: "輸尿管膀胱引起背疼痛",
          D: "可能機制是軀體痛和內臟痛在同一個二階背角神經元纖維聚合"
        },
        wrong: "B",
        correct: "C"
      }
    },

    {
      id: "ch48-008",
      status: "needs",
      qNum: 52,
      concept: "副交感源自頭部與薦椎；正確組合為 (2)(3)(5)",
      tags: ["副交感神經 parasympathetic", "交感神經 sympathetic", "正腎上腺素 norepinephrine", "乙醯膽鹼 acetylcholine"],
      summary: "【逐項分析】\n・(1) 副交感源自「胸椎頸部薦椎」→ ✗ 應為頭部（腦幹 cranial）+ 薦椎（sacral）\n・(2) 副交感傳導物質 = 乙醯膽鹼（acetylcholine, ACh）→ ✓\n・(3) 交感神經抑制胃及胰臟作用（fight-or-flight 時抑制消化）→ ✓\n・(4) 副交感抑制肝臟釋放葡萄糖 → ✗ 副交感對肝臟無直接作用，教科書無充分證據\n・(5) 交感節後神經元釋放正腎上腺素（norepinephrine, NE）→ ✓\n\n【正確答案】\n・D(2)(3)(5)",
      logic: "(1)錯：副交感來自頭部+薦椎；(2)✓ 副交感=ACh；(3)✓ 交感抑制消化；(4)×副交感對肝糖無直接作用；(5)✓ 交感節後=正腎上腺素",
      pitfall: "誤選C(2)(3)(4)(5)。(4)說「副交感抑制肝臟釋放葡萄糖」，但副交感對血糖的直接作用在標準教科書中不被認可，故(4)是混淆選項，應排除。記憶口訣：副交感傳導物=ACh；交感節後=NE（腎上腺素類）。",
      sourceQuestion: {
        school: "103 義守",
        question: "關於副交感(parasympathetic division)and 交感(sympathetic division)之描述下列何者正確？(1)前者主要源自於胸椎頸部薦椎 (2)前者的神經傳導物質為乙醯膽鹼(acetylcholine) (3)後者會抑制胃及胰臟作用 (4)前者會抑制肝臟釋放葡萄糖沒有直接作用 (5)後者之節後神經會刺激正腎上腺素(norepinephrine)之釋放",
        options: {
          A: "(1)(3)(5)",
          B: "(1)(2)(3)(4)(5)",
          C: "(2)(3)(4)(5)",
          D: "(2)(3)(5)"
        },
        wrong: "C",
        correct: "D"
      }
    },

    {
      id: "ch48-009",
      status: "needs",
      qNum: 62,
      concept: "頭足綱有小腦但無脊椎動物特有的背根神經節",
      tags: ["頭足綱 Cephalopods", "背根神經節 dorsal root ganglion", "無脊椎動物 invertebrate", "神經系統演化"],
      summary: "【頭足綱動物（Cephalopoda）的神經系統】\n・代表：章魚（octopus）、烏賊（squid）、鸚鵡螺\n・屬於無脊椎動物（invertebrates）\n・神經系統高度發達：有腦（brain）、有小腦樣構造（cerebellum-like structure）\n\n【C 選項錯誤】\n・頭足綱沒有「背根神經節（dorsal root ganglion, DRG）」\n・DRG = 脊椎動物脊髓背角感覺神經元細胞體聚集處\n・DRG 是脊椎動物特有構造，頭足綱不具備\n\n【記憶口訣】\n・DRG = 脊椎動物特有",
      logic: "頭足綱 → 無脊椎動物 → 有腦、有小腦樣構造 → 無背根神經節（DRG 是脊椎動物特有）",
      pitfall: "誤選D（扁形動物具有神經節）。扁形動物確實有神經節（ganglion），這是正確的。C才是錯的——頭足綱雖有腦和小腦，但沒有脊椎動物特有的背根神經節。需記住 DRG = 脊椎動物特有。",
      sourceQuestion: {
        school: "109 中國",
        question: "下列有關動物神經系統構造的敘述，何者錯誤？",
        options: {
          A: "節肢動物(Arthropods)具有腦(brain)及神經索(nerve cord)",
          B: "水母(Medusae)具有神經網(nerve net)及神經環(nerve ring)",
          C: "頭足綱動物(Cephalopods)具有腦、小腦(cerebellum)及背根神經節(dorsal root ganglion)",
          D: "扁形動物(Platyhelminthes)具有神經節(ganglion)",
          E: "刺胞動物(Cnidarians)具有神經網"
        },
        wrong: "D",
        correct: "C"
      }
    },

    {
      id: "ch48-010",
      status: "needs",
      qNum: 63,
      concept: "中腦邊緣多巴胺系統與行為酬賞和成癮最相關",
      tags: ["中腦邊緣系統 mesolimbic", "多巴胺 dopamine", "成癮 addiction", "伏隔核 nucleus accumbens", "VTA"],
      summary: "【兩條多巴胺路徑比較】\n\n・中腦邊緣系統（mesolimbic dopamine system）\n  腹側被蓋區（ventral tegmental area, VTA）→ 多巴胺 → 伏隔核（nucleus accumbens）\n  功能：產生愉悅感（pleasure）、行為酬賞（reward）、成癮（addiction）\n\n・黑質紋狀體系統（nigrostriatal dopamine system）\n  黑質（substantia nigra）→ 多巴胺 → 紋狀體（striatum）\n  功能：隨意運動控制；缺損 → 帕金森氏症（Parkinson's disease）\n\n【關鍵】\n・幾乎所有成癮藥物 → 增加伏隔核多巴胺濃度 → 強化酬賞迴路",
      logic: "VTA → 多巴胺 → 伏隔核（nucleus accumbens）= 中腦邊緣系統 → 酬賞/成癮；黑質 → 多巴胺 → 紋狀體 = 黑質紋狀體系統 → 運動控制",
      pitfall: "漏寫未作答。兩條多巴胺路徑要區分清楚：中腦邊緣（mesolimbic）= VTA → 伏隔核 → 酬賞成癮；黑質紋狀體（nigrostriatal）= 黑質 → 紋狀體 → 運動控制。成癮一定選中腦邊緣系統。",
      sourceQuestion: {
        school: "109 義守",
        question: "下列何者的活化與行為酬賞(behavioral reward)以及藥物濫用(drug abuse)最為相關？",
        options: {
          A: "網狀活化系統(reticular activating system)",
          B: "內生性類鴉片系統(endogenous-opioid system)",
          C: "黑質紋狀體多巴胺系統(nigrostriatal dopamine system)",
          D: "中腦邊緣多巴胺系統(mesolimbic dopamine system)"
        },
        wrong: "",
        correct: "D"
      }
    },

    {
      id: "ch48-011",
      status: "needs",
      qNum: 69,
      concept: "迷走神經釋放 ACh 使心跳減慢，非加速",
      tags: ["乙醯膽鹼 acetylcholine", "迷走神經 vagus nerve", "副交感神經", "蕈毒鹼受體 M2", "心跳調節"],
      summary: "【迷走神經（vagus nerve, CN X）的作用】\n・屬於副交感神經（parasympathetic）\n・末梢釋放乙醯膽鹼（acetylcholine, ACh）\n・ACh → 心臟竇房結（sinoatrial node）M2 型蕈毒鹼受體（muscarinic M2 receptor）\n・→ 開放 K⁺ 通道 → 竇房結超極化 → 心跳減慢（bradycardia）\n\n【A 選項錯誤】\n・「迷走神經釋放ACh使心跳變快」= 完全相反\n・心跳加速 = 交感神經（釋放正腎上腺素 norepinephrine, NE）的作用\n\n【其他選項補充】\n・B：運動終板（motor end plate）→ nAChR → 骨骼肌收縮 ✓\n・C：ACh 受體活化 → 瞳孔縮小（縮瞳）✓\n・D：竇房結 ACh 受體活化 → K⁺ 流出細胞外 ✓",
      logic: "迷走神經（副交感）→ ACh → 心臟 M2 受體 → K⁺ 外流 → 超極化 → 心跳減慢（bradycardia）",
      pitfall: "漏寫未作答。A選項說「迷走神經釋放ACh使心跳變快」是完全相反的——迷走神經是副交感，ACh 作用於 M2 受體使心跳減慢，「加速」是交感神經（釋放正腎上腺素 NE）的作用。",
      sourceQuestion: {
        school: "110 義守",
        question: "關於神經傳導物質乙醯膽鹼(acetylcholine)的性質與作用之敘述，何者為正確？",
        options: {
          A: "迷走神經(vagus nerve)末端釋放乙醯膽鹼，會使得心跳變快",
          B: "運動神經元的軸突末端釋放的乙醯膽鹼，會引起運動末端終版(motor end plate)產生去極化的現象",
          C: "乙醯膽鹼受體受活化時，會使眼睛的瞳孔縮小",
          D: "心臟竇房結細胞的乙醯膽鹼受體受活化時，細胞內的鉀離子會流出細胞外"
        },
        wrong: "",
        correct: "A"
      }
    },

    {
      id: "ch48-012",
      status: "needs",
      qNum: 77,
      concept: "交感釋放正腎上腺素使 Ca²⁺ 內流，心跳加速",
      tags: ["交感神經", "正腎上腺素 norepinephrine", "鈣離子 Ca²⁺", "β1 受體", "心跳調節"],
      summary: "【交感神經對心跳的作用（A 選項 = 正確）】\n・交感神經 → 正腎上腺素（norepinephrine, NE）\n・NE → β1 腎上腺素受體（β1-adrenergic receptor）\n・→ 腺苷酸環化酶（adenylyl cyclase）活化 → cAMP ↑ → PKA 活化\n・→ L-型鈣離子通道（L-type Ca²⁺ channel）開放 → Ca²⁺ 大量內流\n・→ 引發動作電位 → 心跳加速（tachycardia）\n\n【副交感神經對心跳的作用（B 選項 = 錯誤）】\n・副交感 → ACh → M2 受體 → cAMP ↓ → Ca²⁺ 內流減少 → 心跳減慢\n・B 選項錯在說「Ca²⁺ 流出」→ 應為「減少 Ca²⁺ 內流」（方向不同）",
      logic: "交感 NE → β1 受體 → cAMP ↑ → PKA → Ca²⁺ 通道開放 → Ca²⁺ 內流 → 心跳加速；副交感 ACh → M2 → cAMP ↓ → Ca²⁺ 內流減少 → 心跳減慢",
      pitfall: "誤選B（副交感ACh造成Ca²⁺流出）。副交感的作用是「抑制Ca²⁺內流」，而非主動讓Ca²⁺流出細胞，方向描述有誤。A才是正確的：交感NE → Ca²⁺內流 → 心跳加速。",
      sourceQuestion: {
        school: "102 私醫",
        question: "有關自主神經系統調控心跳與鈣離子角色的配對關係，下列何者正確？",
        options: {
          A: "交感神經末梢分泌正腎上腺素(norepinephrine)，造成鈣離子流入心臟肌肉，引發動作電位，心跳加速",
          B: "副交感神經末梢分泌乙醯膽鹼(acetylcholine)，造成鈣離子流出心臟肌肉，抑制動作電位，心跳變慢",
          C: "交感神經末梢分泌多巴胺(dopamine)，造成鈣離子流入心臟肌肉，引發動作電位，心跳加速",
          D: "副交感神經末梢分泌腎上腺素(epinephrine)，造成鈣離子流出心臟肌肉，抑制動作電位，心跳變慢"
        },
        wrong: "B",
        correct: "A"
      }
    },

    {
      id: "ch48-013",
      status: "needs",
      qNum: 80,
      concept: "三叉神經（CN V）控制咀嚼肌，顏面神經控制表情肌",
      tags: ["三叉神經 trigeminal nerve CN V", "顏面神經 facial nerve CN VII", "咀嚼肌 muscles of mastication", "顱神經 cranial nerve"],
      summary: "【三叉神經（trigeminal nerve, CN V）】\n・分三支：眼神經（ophthalmic, V1）、上頜神經（maxillary, V2）、下頜神經（mandibular, V3）\n・V3（下頜神經）→ 控制咀嚼肌群（muscles of mastication）\n・咀嚼肌群包括：嚼肌（masseter）、顳肌（temporalis）、翼內肌、翼外肌\n\n【顏面神經（facial nerve, CN VII）】\n・控制臉部表情肌（muscles of facial expression）\n・與咀嚼無關\n\n【其他顱神經】\n・外展神經（CN VI）→ 外直肌（眼球運動）\n・迷走神經（CN X）→ 內臟自律神經\n\n【記憶口訣】\n・咀嚼 = 三叉神經 V3；表情 = 顏面神經 VII",
      logic: "三叉神經（CN V）→ V3 下頜支 → 咀嚼肌（嚼肌、顳肌）；顏面神經（CN VII）→ 臉部表情肌（非咀嚼肌）",
      pitfall: "誤選C（顏面神經）。顏面神經（facial nerve）負責臉部「表情」，容易因為名稱含「顏面」而誤以為它控制所有臉部肌肉，包括咀嚼。記住：咀嚼 = 三叉神經 V3；表情 = 顏面神經 VII。",
      sourceQuestion: {
        school: "111 義守",
        question: "下列何顱神經控制咀嚼肌(chewing muscles)的運動？",
        options: {
          A: "外展神經(abducens nerve)",
          B: "三叉神經(trigeminal nerve)",
          C: "顏面神經(facial nerve)",
          D: "迷走神經(vagal nerve)"
        },
        wrong: "C",
        correct: "B"
      }
    },

    {
      id: "ch48-014",
      status: "needs",
      qNum: 87,
      concept: "基底核病變導致肌肉僵硬（rigidity）",
      tags: ["基底核 basal ganglia", "僵硬 rigidity", "帕金森氏症 Parkinson's disease", "運動控制"],
      summary: "【基底核（basal ganglia）的組成】\n・尾狀核（caudate nucleus）\n・殼核（putamen）\n・蒼白球（globus pallidus）\n・視丘下核（subthalamic nucleus）\n・黑質（substantia nigra）\n\n【基底核的功能】\n・調控隨意運動（voluntary movement）的啟動與精細化\n・抑制不必要的非隨意運動\n\n【基底核病變（多巴胺神經元退化）→ 帕金森氏症三大症狀】\n・肌肉僵硬（rigidity）\n・靜止性震顫（resting tremor）\n・運動遲緩（bradykinesia）\n\n【勿混淆】\n・小腦病變 → 共濟失調（ataxia），不是僵硬\n・額葉損傷 → 影響計畫、決策、人格",
      logic: "基底核（basal ganglia）→ 調控隨意運動、抑制不必要動作 → 病變（多巴胺↓）→ 僵硬（rigidity）+ 震顫 + 運動遲緩 = 帕金森氏症",
      pitfall: "誤選A（大腦額葉 frontal lobe）。額葉損傷影響計畫、決策、執行功能和人格，不直接導致肌肉僵硬。肌肉「僵硬（rigidity）」是基底核喪失對運動的抑制調節所致，是帕金森氏症的標誌性症狀。",
      sourceQuestion: {
        school: "107 義守",
        question: "最可能使肌肉張力發生僵硬(rigidity)的腦部病變位置，主要是在位於：",
        options: {
          A: "大腦額葉(frontal lobe)",
          B: "大腦枕葉(occipital lobe)",
          C: "小腦(cerebellum)",
          D: "基底核(basal ganglia)"
        },
        wrong: "A",
        correct: "D"
      }
    },

    {
      id: "ch48-015",
      status: "needs",
      qNum: 93,
      concept: "Brainbow 使用螢光蛋白標記神經元，非螢光抗體",
      tags: ["彩虹腦 Brainbow", "螢光蛋白 fluorescent protein", "GFP", "神經網絡 neural circuit", "神經科學技術"],
      summary: "【彩虹腦（Brainbow）技術】\n・由哈佛大學發展的神經科學技術\n・原理：基因工程讓不同神經元隨機表現不同「螢光蛋白（fluorescent protein）」\n・如 GFP（green fluorescent protein）及其衍生色系\n・結果：每個神經元在螢光顯微鏡下呈現獨特顏色\n・目的：追蹤和辨認複雜的神經迴路（neural circuit）\n\n【各技術比較】\n・螢光染劑（fluorescent dye）→ 外加化學物質，無法個別標記每個神經元\n・螢光抗體（fluorescent antibody）→ 免疫組織化學（IHC），標記特定抗原，無法多色\n・基因探針（gene probe）→ 用於核酸雜交，與神經元標記無關\n\n【關鍵區別】\n・Brainbow = 基因編碼的螢光蛋白，神經元自己發光，顏色由基因決定",
      logic: "Brainbow → 基因工程 → 神經元隨機表現不同螢光蛋白（fluorescent protein）→ 不同顏色 → 辨認神經迴路；螢光染劑/抗體 = 外加，無法達到個別標記效果",
      pitfall: "誤選C（螢光抗體）。螢光抗體是免疫組化的工具，標記的是特定抗原，無法讓每個神經元發出不同顏色。Brainbow 的核心是「基因編碼的螢光蛋白」，神經元自己表現不同的螢光蛋白，顏色由基因決定，而非外加染料。",
      sourceQuestion: {
        school: "113 慈濟",
        question: "彩虹腦(brainbow)是透過下列哪項核心技術，使神經細胞帶有不同的色彩，用來辨認大腦的神經網絡？",
        options: {
          A: "神經元專一性螢光染劑(fluorescent dye)",
          B: "螢光蛋白(fluorescent protein)",
          C: "神經元專一螢光抗體(fluorescent antibody)",
          D: "基因探針(gene probe)"
        },
        wrong: "C",
        correct: "B"
      }
    },

    {
      id: "ch48-016",
      status: "needs",
      qNum: 94,
      concept: "愛憶欣（Aricept）抑制 AChE，提升突觸間 ACh 濃度",
      tags: ["愛憶欣 Aricept donepezil", "乙醯膽鹼酯酶 AChE", "阿茲海默症 Alzheimer's disease", "膽鹼性神經傳遞"],
      summary: "【阿茲海默症（Alzheimer's disease）的病理】\n・腦中膽鹼性神經元（cholinergic neuron）大量減少\n・突觸間隙（synaptic cleft）乙醯膽鹼（ACh）不足\n\n【愛憶欣（Aricept，學名 donepezil）的作用機制】\n・屬於可逆性乙醯膽鹼酯酶抑制劑（reversible AChEI）\n・乙醯膽鹼酯酶（acetylcholinesterase, AChE）正常負責水解 ACh\n・愛憶欣抑制 AChE → ACh 無法被及時分解\n・→ 突觸間隙 [ACh] ↑ → 改善膽鹼性神經傳遞\n・→ 緩解認知功能退化症狀\n\n【記憶口訣】\n・AChE 抑制劑 = 讓 ACh 活更久 → 緩解阿茲海默症",
      logic: "阿茲海默症 → 膽鹼性神經元↓ → ACh 不足；愛憶欣 → 抑制 AChE → ACh 無法分解 → 突觸間 [ACh] ↑ → 改善神經傳遞",
      pitfall: "漏寫未作答。愛憶欣的作用機制是「抑制分解ACh的酶（AChE）」讓ACh維持更久，而非直接增加ACh分泌或增加神經細胞數目。記憶口訣：AChE 抑制劑 = 讓 ACh 活更久 → 緩解阿茲海默症症狀。",
      sourceQuestion: {
        school: "113 慈濟",
        question: "治療阿茲海默症(Alzheimer's disease)藥物愛憶欣(Aricept)如何發揮作用？",
        options: {
          A: "通過增加神經傳遞物質的分泌",
          B: "通過增加腦細胞的數目",
          C: "通過提高血壓",
          D: "通過抑制乙醯膽鹼(acetylcholine)的降解，增加乙醯膽鹼的水平，以改善神經傳遞"
        },
        wrong: "",
        correct: "D"
      }
    }

  ]
};
