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
      summary: "磷酸二酯酶（phosphodiesterase, PDE）負責分解環狀腺苷單磷酸（cyclic AMP, cAMP）。咖啡因（caffeine）能抑制 PDE，使 cAMP 無法正常被降解，細胞內 cAMP 濃度因而上升。cAMP 是重要的第二傳訊者（second messenger），參與許多訊號傳遞途徑，包括促進肝醣分解。當 cAMP 升高後，會活化蛋白激酶 A（protein kinase A, PKA），PKA 再去磷酸化各種蛋白質產生生理反應。注意：cAMP 由 ATP 合成（腺苷酸環化酶催化），被 PDE 分解，PDE 被抑制時堆積的是受質 cAMP，而非上游的 ATP。",
      logic: "咖啡因 → 抑制 PDE → cAMP 無法分解 → [cAMP] ↑ → 活化 PKA → 蛋白質磷酸化 皮皮",
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
      summary: "生物時鐘（circadian clock）並非真核生物特有，原核生物（如藍綠藻 cyanobacteria）也具有晝夜節律（circadian rhythm）調控機制，故C選項錯誤。哺乳類的生物時鐘主要由下視丘（hypothalamus）中的「視交叉上核（suprachiasmatic nucleus, SCN）」調控，SCN 接收視網膜的光訊號，協調全身各器官的節律，故D選項（說靠海馬迴調控）也是錯誤敘述——「海馬迴」是翻譯錯誤，原文應為下視丘。因此 CD 都是錯誤敘述，本題為複選。",
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
      summary: "神經傳導物質依功能分為興奮性（excitatory）和抑制性（inhibitory）。常見抑制性傳導物：GABA（gamma-aminobutyric acid，γ-胺基丁酸，開 Cl⁻ 通道造成超極化）和甘胺酸（glycine，同樣開 Cl⁻ 通道）。血清素（serotonin）主要調節情緒、睡眠，以抑制或調節為主。P 物質（substance P）是由 11 個胺基酸組成的神經胜肽（neuropeptide），與痛覺傳遞（pain transmission）密切相關，是興奮性傳導物質，能使突觸後膜去極化，傳遞傷害性刺激。",
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
      summary: "海馬迴（hippocampus）是將短期記憶（short-term memory）轉化為長期記憶（long-term memory）的關鍵腦區，此過程稱為記憶固化（memory consolidation）。著名案例 H.M.（Henry Molaison）因海馬迴切除後無法形成新的長期記憶，證明了海馬迴在記憶固化中的核心地位。視丘（thalamus）是感覺訊號的轉接站；下視丘（hypothalamus）調控自律神經和內分泌；黑質（substantia nigra）與多巴胺分泌和運動控制有關，是帕金森氏症的相關腦區。",
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
      summary: "乙醯膽鹼（ACh）受體分兩大類：菸鹼性受體（nicotinic AChR, nAChR）和蕈毒鹼性受體（muscarinic AChR, mAChR）。自主神經節的節後神經元使用 nAChR；副交感節後纖維作用於效應器（平滑肌、心肌、腺體）使用 mAChR；體運動神經元（somatic motor neuron）釋放的 ACh 與骨骼肌（skeletal muscle）神經肌肉接合處（neuromuscular junction, NMJ）的 nAChR 結合，而非 mAChR——這是選項C的錯誤所在。",
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
      summary: "中央前迴（precentral gyrus）位於額葉（frontal lobe）後部，中央溝（central sulcus）前方，是初級運動皮質（primary motor cortex）所在地，負責控制對側半身的隨意運動（voluntary movement）。中央前迴確實參與吞嚥控制（B）、語言發聲（D）及臉部表情控制（E）。「參與內臟疼痛感覺（A）」不屬於中央前迴的功能，內臟疼痛的感覺處理主要在頂葉（parietal lobe）的中央後迴（postcentral gyrus，初級體感皮質）及島葉（insula）。",
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
      summary: "轉移疼痛（referred pain）是因為內臟傳入痛覺的神經和特定體表皮節（dermatome）的感覺神經，匯聚在脊髓同一個二階背角神經元（second-order dorsal horn neuron），大腦誤以為疼痛來自體表。轉移疼痛通常發生在相同胚段（embryonic segment）或皮節，選項B的描述基本正確。輸尿管（ureter）的疼痛通常轉移到鼠蹊部（groin）和下腹部，而非背部，因此C選項才是「最不正確」的選項。常見轉移痛對應：心臟→左胸/左臂；肝膽→右肩；腎臟→腰背；輸尿管→鼠蹊。",
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
      summary: "副交感神經（parasympathetic division）的節前神經元源自頭部（腦幹 cranial）和薦椎（sacral），非胸腰椎，故(1)說「胸椎頸部薦椎」不完全正確。(2)副交感的神經傳導物質為乙醯膽鹼（ACh）✓；(3)交感神經會抑制胃及胰臟作用（fight-or-flight 時抑制消化）✓；(4)副交感對肝臟釋放葡萄糖無直接作用——血糖調節主要由交感神經驅動，副交感對肝臟的直接影響在教科書中無充分證據，故(4)不納入；(5)交感節後神經元釋放正腎上腺素（norepinephrine, NE）✓。正確答案為 D(2)(3)(5)。",
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
      summary: "頭足綱動物（Cephalopoda，如章魚、烏賊、鸚鵡螺）是無脊椎動物（invertebrates）中神經系統最發達的一群，擁有高度組織化的腦（brain）和小腦（cerebellum-like structure），智能相當高。然而，牠們並不具有脊椎動物（vertebrates）特有的「背根神經節（dorsal root ganglion, DRG）」——DRG 是脊椎動物脊髓背角感覺神經元（sensory neurons）細胞體聚集的地方，只存在於脊椎動物。",
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
      summary: "中腦邊緣多巴胺系統（mesolimbic dopamine system）是大腦「酬賞迴路（reward circuit）」的核心路徑：腹側被蓋區（ventral tegmental area, VTA）→ 釋放多巴胺（dopamine）→ 伏隔核（nucleus accumbens）→ 產生愉悅感（pleasure）。幾乎所有成癮藥物都會直接或間接增加伏隔核的多巴胺濃度，強化此迴路。黑質紋狀體多巴胺系統（nigrostriatal dopamine system）主要與隨意運動控制有關，缺損導致帕金森氏症（Parkinson's disease）的僵硬和震顫。",
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
      summary: "迷走神經（vagus nerve, CN X）是最主要的副交感神經，其末梢釋放乙醯膽鹼（acetylcholine, ACh），作用於心臟竇房結（sinoatrial node）上的 M2 型蕈毒鹼受體（muscarinic M2 receptor），開放 K⁺ 通道，使竇房結超極化，心跳減慢（bradycardia），而非加速。刺激迷走神經的實驗可明顯使心跳變慢，甚至短暫停止。運動終板（motor end plate）使用的是菸鹼性受體（nAChR），ACh 使骨骼肌收縮。",
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
      summary: "心跳的自律神經調控：交感神經（sympathetic nerve）末梢分泌正腎上腺素（norepinephrine, NE），作用於心肌細胞的 β1 腎上腺素受體（β1-adrenergic receptor），活化腺苷酸環化酶，增加 cAMP，進而活化 PKA，促進 L-型鈣離子通道（L-type Ca²⁺ channel）開放，Ca²⁺ 大量內流，引發動作電位，心跳加速（tachycardia）。副交感（迷走神經）釋放 ACh，作用於 M2 受體，抑制 cAMP，減少 Ca²⁺ 內流，心跳減慢。B選項說副交感造成「Ca²⁺ 流出」方向錯誤，應是「減少 Ca²⁺ 內流」。",
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
      summary: "第五對顱神經「三叉神經（trigeminal nerve, CN V）」分三支：眼神經（ophthalmic, V1）、上頜神經（maxillary, V2）、下頜神經（mandibular, V3）。其中 V3（下頜神經）負責下頜區域的一般感覺，並控制咀嚼肌群（muscles of mastication），包括嚼肌（masseter）、顳肌（temporalis）、翼內肌和翼外肌。第七對顱神經「顏面神經（facial nerve, CN VII）」控制的是臉部表情肌（muscles of facial expression），與咀嚼無關。外展神經（CN VI）控制外直肌（眼球運動）；迷走神經（CN X）管理內臟自律神經。",
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
      summary: "基底核（basal ganglia）是大腦深部的神經核群，包括尾狀核（caudate nucleus）、殼核（putamen）、蒼白球（globus pallidus）、視丘下核（subthalamic nucleus）和黑質（substantia nigra）。基底核主要功能為調控隨意運動（voluntary movement）的啟動與精細化，以及抑制不必要的非隨意運動。當基底核功能異常（如多巴胺神經元退化），會導致：肌肉僵硬（rigidity）、靜止性震顫（resting tremor）、運動遲緩（bradykinesia）——這三項是帕金森氏症（Parkinson's disease）的核心症狀。小腦病變通常導致共濟失調（ataxia），不是僵硬。",
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
      summary: "彩虹腦（Brainbow）是由哈佛大學發展的神經科學技術，透過基因工程讓不同神經元隨機組合表現多種「螢光蛋白（fluorescent protein）」（如 GFP 及其衍生色系），使每個神經元在螢光顯微鏡下呈現獨特顏色，從而追蹤和辨認大腦中複雜的神經迴路（neural circuit）。螢光染劑（fluorescent dye）是外加的化學物質，無法個別標記每個神經元。螢光抗體（fluorescent antibody）用於免疫組織化學染色（IHC），需特異性抗體，無法產生彩虹般的多色效果。",
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
      summary: "愛憶欣（Aricept，學名 donepezil）是治療阿茲海默症（Alzheimer's disease）的第一線藥物，屬於可逆性乙醯膽鹼酯酶抑制劑（reversible acetylcholinesterase inhibitor, AChEI）。乙醯膽鹼酯酶（acetylcholinesterase, AChE）負責在突觸間隙（synaptic cleft）迅速水解乙醯膽鹼（ACh）。愛憶欣抑制 AChE，使 ACh 無法被及時分解，突觸間隙中的 ACh 濃度維持在較高水平，改善膽鹼性神經元（cholinergic neuron）的訊號傳遞，從而緩解阿茲海默症患者的認知功能退化症狀。阿茲海默症患者腦中膽鹼性神經元大量減少，ACh 不足是重要病理之一。",
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
