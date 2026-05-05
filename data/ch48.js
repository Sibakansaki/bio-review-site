// ═══════════════════════════════════════
// CH48 — 神經系統
// 新增日期：2026-05-05
// 卡片數：12
// ═══════════════════════════════════════
const CH48 = {
  id: "ch48",
  title: "神經系統",
  color: "#FF6B6B",
  emoji: "🧠",
  cards: [
    {
      id: "ch48-001",
      status: "needs",
      concept: "cAMP 與磷酸二酯酶（PDE）的關係",
      tags: ["cAMP", "PDE", "咖啡因", "訊號傳遞"],
      summary: "磷酸二酯酶（PDE）負責分解 cAMP。咖啡因抑制 PDE，使 cAMP 無法被分解，導致細胞內 cAMP 濃度上升。",
      logic: "咖啡因 → 抑制 PDE → cAMP 無法分解 → [cAMP] ↑",
      pitfall: "「抑制酶」容易誤選產物（磷酸化蛋白質），但酶被抑制時，受質才是堆積的——應選 cAMP。",
      sourceQuestion: {
        school: "104 慈濟",
        question: "咖啡因(caffeine)是一種磷酸二酯酶(phosphodiesterase)的抑制劑；故咖啡因可能會造成細胞內哪種分子的數量上升？",
        options: { A: "環狀腺核苷單磷酸(cyclic AMP)", B: "磷酸化的蛋白質(phosphorylated proteins)", C: "腺核苷三磷酸(ATP)", D: "活化的 G 蛋白" },
        wrong: "B", correct: "A"
      }
    },
    {
      id: "ch48-002",
      status: "needs",
      concept: "突觸電位的空間總和",
      tags: ["EPSP", "空間總和", "時間總和", "axon hillock"],
      summary: "當多個 EPSP 從「不同樹突」同時到達軸突丘，造成去極化達閾值，稱為空間總和(spatial summation)。時間總和是同一突觸在短時間內連續刺激所產生。",
      logic: "不同樹突 → 不同空間來源 → 空間總和；同一突觸連續 → 時間總和",
      pitfall: "題目說「從不同樹突到達軸突丘」，這是空間概念；refractory 狀態是膜在恢復，非加總機制。",
      sourceQuestion: {
        school: "105 慈濟",
        question: "當幾個 excitatory postsynaptic potential(EPSP)從不同樹突到達軸突丘(axon hillock)，造成突觸後細胞去極化達到閾值而引發動作電位，這種現象下列何者最有可能？",
        options: { A: "refractory 狀態", B: "時間總和(temporal summation)", C: "空間總和(spatial summation)", D: "適應性(adaptation)" },
        wrong: "A", correct: "C"
      }
    },
    {
      id: "ch48-003",
      status: "needs",
      concept: "延腦呼吸中樞感測 H⁺ 濃度",
      tags: ["延腦", "呼吸調節", "CO₂", "H⁺"],
      summary: "延腦呼吸中樞的化學受器偵測的是 H⁺ 濃度（非直接偵測 CO₂）。CO₂ 通過血腦障壁後與水結合形成 H₂CO₃，再解離出 H⁺ 才刺激受器。",
      logic: "CO₂ 穿越血腦障壁 → 與水結合成 H₂CO₃ → 解離 H⁺ → 延腦感測 H⁺ ↑ → 加速呼吸",
      pitfall: "直覺選 CO₂，但 CO₂ 無法直接被化學受器感測；H⁺ 才是真正刺激源。",
      sourceQuestion: {
        school: "106 義守",
        question: "位於延腦呼吸中樞內的化學受器，可根據下列何離子濃度調節呼吸速率？",
        options: { A: "Na⁺", B: "K⁺", C: "H⁺", D: "Mg²⁺" },
        wrong: "A", correct: "C"
      }
    },
    {
      id: "ch48-004",
      status: "needs",
      concept: "感覺受體的種類分類",
      tags: ["感覺受體", "機械受體", "化學受體", "電磁受體"],
      summary: "味覺受體是化學受體；肌梭是偵測肌肉拉伸的機械受體；感光受體是電磁受體。纖毛偵測物理形變，屬機械受體。",
      logic: "味覺→化學；肌梭→機械（偵測拉伸）；感光→電磁；纖毛→機械",
      pitfall: "肌梭容易誤配電磁受體，但肌梭偵測的是肌肉長度變化（物理拉伸），屬機械受體。",
      sourceQuestion: {
        school: "106 私醫",
        question: "感覺受體與其類別之配對，下列何者最為正確？",
        options: { A: "味覺受體---機械受體(mechanoreceptor)", B: "肌梭(muscle spindle)---電磁受體(electromagnetic receptor)", C: "纖毛(cilia)---機械受體", D: "感光受體---化學受體(chemoreceptor)" },
        wrong: "B", correct: "C"
      }
    },
    {
      id: "ch48-005",
      status: "needs",
      concept: "生物時鐘的調控中樞（SCN）",
      tags: ["生物時鐘", "SCN", "視交叉上核", "哺乳類"],
      summary: "哺乳類的生物時鐘主要由下視丘的「視交叉上核（SCN）」調控，而非海馬迴。原核生物也有晝夜節律，並非真核生物特有。",
      logic: "哺乳類生物時鐘 → 下視丘 SCN（視交叉上核）→ 非海馬迴",
      pitfall: "選項將調控中樞寫成「海馬迴」是翻譯陷阱；「真核生物特有」也錯，原核生物亦有晝夜節律。",
      sourceQuestion: {
        school: "107 中國",
        question: "關於生物時鐘的敘述，何者錯誤？",
        options: { A: "當植物移到暗室後，其生物時鐘不會停止", B: "候鳥的季節性遷徙會受生物時鐘影響", C: "生物時鐘是真核生物特有的機制", D: "哺乳類的生物時鐘主要是靠海馬迴裡的一群神經細胞所調控", E: "生物時鐘1天的定義不一定相等於24小時" },
        wrong: "D", correct: "CD"
      }
    },
    {
      id: "ch48-006",
      status: "needs",
      concept: "腦波與睡眠分期",
      tags: ["腦波", "REM", "NREM", "δ波"],
      summary: "入睡初期腦波呈 θ 波；NREM 第三期（深睡）呈 δ 波；REM 睡眠（作夢期）腦波反而類似清醒呈 β 波，不是 δ 波。",
      logic: "清醒放鬆→α波；深睡（NREM3）→δ波；REM（作夢）→β波（類清醒）",
      pitfall: "「作夢＝深睡＝δ波」是常見錯誤。δ波是深睡，作夢在 REM，REM 腦波類似清醒。",
      sourceQuestion: {
        school: "103 慈濟",
        question: "下列有關人類腦波的敘述，何者錯誤？",
        options: { A: "閉眼清醒，處於休息狀態，腦波呈現 α 波", B: "閉眼清醒，將心智轉移到特定活動，則腦波會呈現 β 波", C: "入睡初期，全身放鬆，呼吸均勻，腦波會呈現 δ 波", D: "腦波呈現 δ 波的動眼睡眠期(rapid eye movement sleep)常伴隨著作夢" },
        wrong: "C", correct: "CD"
      }
    },
    {
      id: "ch48-007",
      status: "needs",
      concept: "轉移疼痛的神經機制",
      tags: ["轉移疼痛", "referred pain", "脊髓背角"],
      summary: "轉移疼痛是因為內臟痛和皮膚痛的神經在脊髓同一個二階背角神經元匯聚，大腦誤判疼痛來源。輸尿管痛通常轉移到鼠蹊部，而非背部。",
      logic: "內臟痛神經 + 皮膚痛神經 → 匯聚同一脊髓背角 → 大腦誤判位置 → 轉移疼痛",
      pitfall: "「輸尿管膀胱引起背疼痛」是錯的，輸尿管痛通常轉移到鼠蹊部，而非背部。",
      sourceQuestion: {
        school: "102 義守",
        question: "關於轉移疼痛(referred pain)，下列何者最不正確？",
        options: { A: "心臟疼痛、左手臂痛", B: "通常是同一個結構或相同的胚段或皮節", C: "輸尿管膀胱引起背疼痛", D: "可能機制是軀體痛和內臟痛在同一個二階背角神經元纖維聚合" },
        wrong: "B", correct: "C"
      }
    },
    {
      id: "ch48-008",
      status: "needs",
      concept: "中腦邊緣多巴胺系統與成癮",
      tags: ["多巴胺", "成癮", "mesolimbic", "行為酬賞"],
      summary: "與行為酬賞和藥物成癮最相關的是「中腦邊緣多巴胺系統(mesolimbic dopamine system)」，即 VTA 投射到 nucleus accumbens 的路徑。",
      logic: "VTA → nucleus accumbens → 多巴胺釋放 → 酬賞感 → 成癮機制",
      pitfall: "內生性類鴉片系統也與快感有關，但成癮核心在於多巴胺的中腦邊緣系統，兩者不同。",
      sourceQuestion: {
        school: "109 義守",
        question: "下列何者的活化與行為酬賞(behavioral reward)以及藥物濫用(drug abuse)最為相關？",
        options: { A: "網狀活化系統(reticular activating system)", B: "內生性類鴉片系統(endogenous-opioid system)", C: "黑質紋狀體多巴胺系統(nigrostriatal dopamine system)", D: "中腦邊緣多巴胺系統(mesolimbic dopamine system)" },
        wrong: "B", correct: "D"
      }
    },
    {
      id: "ch48-009",
      status: "needs",
      concept: "顱神經控制咀嚼肌",
      tags: ["三叉神經", "顏面神經", "咀嚼肌", "顱神經"],
      summary: "控制咀嚼肌的是「三叉神經（第五對）」的下頜分支。顏面神經（第七對）控制的是臉部表情肌，兩者不同。",
      logic: "三叉神經（V）→ 下頜神經分支 → 控制咀嚼肌；顏面神經（VII）→ 臉部表情",
      pitfall: "顏面神經與顏面有關，容易和咀嚼肌混淆。咀嚼需要三叉神經的下頜支，非顏面神經。",
      sourceQuestion: {
        school: "111 義守",
        question: "下列何顱神經控制咀嚼肌(chewing muscles)的運動？",
        options: { A: "外展神經(abducens nerve)", B: "三叉神經(trigeminal nerve)", C: "顏面神經(facial nerve)", D: "迷走神經(vagal nerve)" },
        wrong: "C", correct: "B"
      }
    },
    {
      id: "ch48-010",
      status: "needs",
      concept: "嗅覺訊號不經視丘直接傳遞",
      tags: ["嗅覺", "視丘", "直接傳遞", "感覺路徑"],
      summary: "嗅覺是唯一不需要經由視丘轉接就能直接傳到大腦皮質的感覺。其他感覺（視、聽、觸、味）均需先經過視丘。",
      logic: "視覺/聽覺/觸覺/味覺 → 先到視丘 → 再到皮質；嗅覺 → 嗅球 → 直接到皮質",
      pitfall: "直覺可能選聽覺，但聽覺要經視丘的內側膝狀體。嗅覺才是不經視丘的例外。",
      sourceQuestion: {
        school: "110 義守",
        question: "下列何種感覺形式是直接傳遞至腦皮質，而不需要經由視丘轉接？",
        options: { A: "聽覺", B: "視覺", C: "嗅覺", D: "觸覺" },
        wrong: "A", correct: "C"
      }
    },
    {
      id: "ch48-011",
      status: "needs",
      concept: "彩虹腦（Brainbow）技術原理",
      tags: ["Brainbow", "螢光蛋白", "神經網絡", "神經科學技術"],
      summary: "彩虹腦（Brainbow）技術是讓神經細胞表現不同的「螢光蛋白（fluorescent protein）」，使各神經元帶有不同顏色，藉此辨認神經網絡結構。",
      logic: "不同螢光蛋白 → 神經元發出不同顏色 → 追蹤個別神經元路徑 → 辨認神經網絡",
      pitfall: "「螢光染劑（dye）」是外加化學染料；Brainbow 使用的是基因表現的螢光蛋白（protein），兩者不同。",
      sourceQuestion: {
        school: "113 慈濟",
        question: "彩虹腦(brainbow)是透過下列哪項核心技術，使神經細胞帶有不同的色彩，用來辨認大腦的神經網絡？",
        options: { A: "神經元專一性螢光染劑(fluorescent dye)", B: "螢光蛋白(fluorescent protein)", C: "神經元專一螢光抗體(fluorescent antibody)", D: "基因探針(gene probe)" },
        wrong: "A", correct: "B"
      }
    },
    {
      id: "ch48-012",
      status: "needs",
      concept: "副交感神經阻斷後的效應",
      tags: ["副交感神經", "蕈毒鹼受體", "心跳", "骨骼肌"],
      summary: "阻斷副交感（蕈毒鹼受體）等同交感效應出現：心跳加速、瞳孔放大、胃腸蠕動↓。骨骼肌用的是菸鹼性受體，不受蕈毒鹼阻斷影響。",
      logic: "副交感阻斷 → 等同交感興奮 → 心跳快、瞳孔大、胃腸↓；骨骼肌→菸鹼性→不受影響",
      pitfall: "骨骼肌受體是菸鹼性受體（nicotinic），非蕈毒鹼性，阻斷蕈毒鹼受體不影響骨骼肌收縮。",
      sourceQuestion: {
        school: "103 義守",
        question: "當蕈毒受體(muscarinic receptors)受阻斷時，則______。",
        options: { A: "眼睛的瞳孔會縮小", B: "心跳會變快(tachycardia)", C: "骨骼肌的收縮會明顯抑制", D: "胃腸蠕動會受刺激" },
        wrong: "C", correct: "B"
      }
    }
  ]
};
