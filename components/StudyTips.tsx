import React, { useState } from 'react';
import { BookOpen, BrainCircuit, Calculator, Globe, History, Zap, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const studyTipsData = [
  {
    id: 'chinese',
    title: '國文科',
    icon: <BookOpen className="w-5 h-5" />,
    color: 'text-rose-500',
    bgColor: 'bg-rose-50',
    borderColor: 'border-rose-200',
    content: '語感與課外閱讀，也是得分關鍵！許多人認為國文只要靠語感就好，但會考國文的準備絕非如此簡單。除了基本的文言文與國學常識，更重要的是閱讀理解能力。',
    fullStrategy: [
      { subtitle: '最困擾學生的難點', text: '長篇文言文閱讀（缺乏背景知識常放棄）、素養導向的閱讀題（抓不到重點）、雙文本題型（需要進階文本評鑑能力，分析跨文本的同異性）。此外，近年題目也大幅增加了跨領域的圖表判讀，許多學生看到生硬的資訊或數據便會下意識抗拒，進而失去耐心。面對這些困難，往往不是單字看不懂，而是「文章結構」與「作者邏輯」無法有效對應。這需要透過系統性的閱讀訓練來改善，而非單純的死記硬背。' },
      { subtitle: '【C衝B 搶救基本分】基礎複習建議', text: '熟記課文、作者、題解等三年基礎內容。語文知識題是必考題型，包含形音義、成語、文化與國學常識、標點符號的運用，這些都需要長期累積與大量記憶。建議每天花10~15分鐘針對字詞進行背誦，不要想著考前再抱佛腳。把歷屆試題出現過的易錯字、字義釐清並整理在專屬筆記本中。掌握基本的修辭（如譬喻、擬人、轉化）及應用，遇到語文常識題時務必確保拿到分數，因為這些是完全不需要推論的「送分題」。' },
      { subtitle: '【B衝A 突破瓶頸】進階複習建議', text: '大量閱讀課外文章，培養語感和對長篇文章的理解力。熟悉各種會考題型的解題邏輯。每天花時間閱讀並做題目，建議每日至少做 5 篇維持手感。可以多閱讀現代散文、新聞評論或是科普文章，讓自己習慣不同風格的文本。在練習長篇閱讀時，嘗試自己為每一段寫下一句話的「段落大意」，這能幫助你快速掌握文章主旨。對於文言文，不要只看翻譯，要學會自己抓動詞與主詞，嘗試推敲文意，培養「猜字義」的能力。' },
      { subtitle: '做題目的關鍵能力', text: '具備一定語文知識量，能正確擷取文章重點，推論跨段落、跨文本關係。確實執行錯題分析，找到自己容易錯的題型補強。在閱讀測驗時，建議先看題目再看文章，帶著問題去尋找答案，能大幅提升解題速度與正確率。遇到雙文本或圖表題，先找出兩篇文章的「交集點」與「相異處」，並把重點圈畫出來。' },
      { subtitle: '⭐ 特別收錄：會考作文準備', text: '會考作文常讓學生焦慮「沒想法」。平時可透過「隨筆練習」記錄情境與反思，累積屬於自己的寫作素材庫，例如：難忘的挫折、親情互動、對社會現象的觀察等。模擬會考形式練習審題與構思，拿到題目先花 5 分鐘列大綱。保持每週寫 1 篇並請老師批改，針對結構與用詞進行優化。寫作時要注意知性與情意平衡，將個人情感融入理性論述中，結尾必須扣緊題旨，提出自己的獨特見解或人生體悟，切忌空泛的口號式結尾。' }
    ]
  },
  {
    id: 'english',
    title: '英文科',
    icon: <Globe className="w-5 h-5" />,
    color: 'text-blue-500',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    content: '單字、文法、閱讀三管齊下！單字與文法並重，同時培養語感與表達、溝通等能力，對語言整體的嫻熟程度會反映在學科成績上。',
    fullStrategy: [
      { subtitle: '最困擾學生的難點', text: '生字量太大，記憶並應用單字是學習難點。閱讀篇幅長，容易失去耐心。克漏字無法推敲文意，缺乏語彙知識、文法與邏輯推斷能力。聽力測驗速度有時較快，容易因為聽不懂一兩個字就卡住，導致後面的題目全部漏聽。此外，許多學生容易被相似詞彙混淆，或者知道單字意思卻不懂如何在句子中正確使用。' },
      { subtitle: '【C衝B 搶救基本分】基礎複習建議', text: '每天固定背誦單字，累積足夠的1200個基礎詞彙量。背單字不要只背中文意思，要連同詞性、常見搭配詞一起記。多聽英文廣播、影片，反覆進行聽力練習，熟悉語調與節奏。每天固定閱讀短文，培養閱讀習慣。基礎文法如時態（現在、過去、未來、完成式）、被動語態、關係代名詞必須徹底弄懂，這些在單題與克漏字中是拿基本分的絕對關鍵。' },
      { subtitle: '【B衝A 突破瓶頸】進階複習建議', text: '寫閱讀測驗，訓練自己在有限時間內理解長篇閱讀的能力。練習克漏字與翻譯，檢驗自己的文法與詞彙量。多聽多讀，並將閱讀和聽力中遇到的生字整理成專屬筆記本。挑戰較長篇的英語素養題或生活情境題（如：菜單、時刻表、信件、廣告），並學會快速從中擷取所需資訊（Scanning）。每天保持 30 分鐘的沉浸式閱讀，讓大腦習慣英文的邏輯運作。' },
      { subtitle: '做題目的關鍵能力', text: '單字量是閱讀與聽力的基礎。閱讀理解要能掌握文章主旨、細節和作者意圖。文法應用需正確判斷時態、句型與詞性，並能從上下文中推敲單字意義。聽力測驗時，利用空檔先掃描選項，預測可能對話情境，有助於精準抓取關鍵資訊。做題時若遇到不會的單字，學會透過「前後文（Context Clues）」或「字根字首」來推測字義，不要輕易放棄。' }
    ]
  },
  {
    id: 'math',
    title: '數學科',
    icon: <Calculator className="w-5 h-5" />,
    color: 'text-amber-500',
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-200',
    content: '分類錯誤，找出癥結點！數學會考成績不理想，不一定是能力不好。善用錯題分類，精準找出自己的盲點、弱點，並對症下藥。',
    fullStrategy: [
      { subtitle: '最困擾學生的難點', text: '幾何解題缺乏聯想與邏輯推理能力，常常找不到輔助線的畫法。素養題文字冗長，容易遺漏細節或錯誤判讀。題目敘述不易理解，難以抓取關鍵字。常見難題單元：幾何、級數、圓、三心、二次函數，以及近年常考的統計與機率。許多學生往往在看到落落長的文字敘述後就舉白旗投降，無法將文字轉換為數學語言。' },
      { subtitle: '【C衝B 搶救基本分】基礎複習建議', text: '每天固定練習維持數學手感。觀念要搞懂不要死背，理解能加深記憶。規劃每週複習進度確實執行。放棄過於艱澀的難題，先把課本與習作的基礎題型練到滾瓜爛熟，確保基礎分數全拿。對於常考的基本公式（如一元二次方程式解法、畢氏定理、扇形面積、乘法公式）必須要能反射性地寫出並應用。計算過程中務必保持版面整潔，減少因為自己字跡潦草而算錯的低級失誤。' },
      { subtitle: '【B衝A 突破瓶頸】進階複習建議', text: '錯題問到懂，問完後要能「自己遮住解答再解一遍」，確保大腦真的吸收了邏輯。多做歷屆試題並建立個人專屬錯題本，定期回顧自己在哪個單元最常跌倒。大量刷題，增加接觸題目的廣度與深度。特別加強非選擇題（手寫題）的解題步驟訓練，力求過程嚴謹不被扣分，即使最後答案算不出來，也要盡可能寫出相關的公式或推導過程以爭取部分給分。' },
      { subtitle: '做題關鍵能力與錯題分類', text: '培養觀察力找出隱藏線索，讀懂圖表與複雜敘述，學會將題意轉換為數學公式（列方程式）。分析錯題原因是：題目判讀錯誤（看錯條件）、解題邏輯卡關（想不到方法）、列式失敗、公式誤用，還是單純的粗心計算失誤。針對不同的錯誤類型，制定不同的改善策略。例如：若是常因為敘述冗長而錯，平常練習就要養成「圈關鍵字」與「畫簡易示意圖」的習慣。' }
    ]
  },
  {
    id: 'science',
    title: '自然科',
    icon: <Zap className="w-5 h-5" />,
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-50',
    borderColor: 'border-emerald-200',
    content: '不只理解，關鍵字更是高分祕訣！如果沒有掌握知識點關鍵字，很容易在題目中迷失方向。關鍵字是幫助你將龐雜知識系統化、記憶化的橋樑。',
    fullStrategy: [
      { subtitle: '最困擾學生的難點', text: '知識內容有太多細節要記憶（尤其是生物和地科）。會考素養題冗長，跨章節整合困難。許多學生不熟悉實驗步驟或圖表，導致實驗題難以判斷。理化的計算題常常找不到帶入的公式，或是單位換算錯誤。自然科的圖表往往隱藏許多細節（如座標軸的單位、曲線的斜率），一旦看漏就容易選錯答案。' },
      { subtitle: '【C衝B 搶救基本分】基礎複習建議', text: '花時間熟記內容（生物細胞構造、人體系統、理化元素週期表、地科板塊與天氣）。熟悉理化科的公式和定義，理解符號意義和應用情境，例如：速度與速率的差異、質量與重量的不同。讀書時養成「圈出關鍵字」並整理在筆記中的習慣，善用樹狀圖或表格來釐清層級與對比關係。把課本出現過的實驗圖與裝置圖看熟，理解每個器材的用途。' },
      { subtitle: '【B衝A 突破瓶頸】進階複習建議', text: '做歷屆會考題熟悉出題模式和節奏。進行跨章節整合（如把生物呼吸作用和理化學反應結合、地科的大氣與理化的密度結合）。會考準備時建議自然 3 科（生物、理化、地科）同步進行，不要偏廢任何一科。深入理解實驗設計的變因控制（操作變因、控制變因、應變變因），並能從數據表格中找出規律。練習判讀複雜的關係圖與實驗結果圖表。' },
      { subtitle: '做題目的關鍵能力', text: '拿到題目先找出專有名詞、數據或圖示等關鍵字，腦中要立刻聯想到對應的章節和概念。對於跨章節題目，需要能將不同單元知識整合起來，進行邏輯推理。計算題務必將單位寫下並檢查是否一致（如：公分換公尺、克換公斤）。遇到不會的題目，可以善用「刪去法」，先將明顯違背自然科學常理的選項剃除，增加答對機率。' }
    ]
  },
  {
    id: 'social',
    title: '社會科',
    icon: <History className="w-5 h-5" />,
    color: 'text-violet-500',
    bgColor: 'bg-violet-50',
    borderColor: 'border-violet-200',
    content: '告別死背，用圖表建立知識網路！會考社會科的重點在於觀念連結與理解，而不要勉強自己死記硬背。',
    fullStrategy: [
      { subtitle: '最困擾學生的難點', text: '記憶量大、事件太瑣碎，很難全部記住。跨章節連結困難，缺乏將不同單元的知識串聯起來的能力。常見難題單元：歷史的朝代更迭與世界史年代、地理的地形判讀與氣候變遷、公民的法律位階與經濟學的供需法則。現代會考題目常以長篇的情境或史料出現，考驗學生從繁雜文字中萃取資訊的能力，單純背誦課本文字已無法應付。' },
      { subtitle: '【C衝B 搶救基本分】基礎複習建議', text: '利用圖表記憶，將複雜概念轉化為易於理解的圖表或心智圖。製作歷史年表整理年代事件，掌握「時代背景」比死記精確年份更重要。用地圖輔助學習，將地理位置、歷史事件發生地標註在地圖上，加強空間感與歷史感。公民科則要釐清基本名詞定義（如民法、刑法、行政法之差異，以及中央與地方政府的職權分配），這些觀念是解題的核心判斷依據。' },
      { subtitle: '【B衝A 突破瓶頸】進階複習建議', text: '多寫題本檢驗知識掌握程度。利用素養題（結合時事與圖表）檢驗知識實際應用能力。進行跨科整合，例如討論一個國家的經濟發展時，同時思考其地理位置氣候條件（地理）與過去的殖民歷史背景（歷史）。平時多關注國際新聞與社會時事，將課本知識與現實生活連結，例如用供需法則解釋近期物價波動。' },
      { subtitle: '做題目的關鍵能力', text: '能從地圖、統計圖表、照片中讀取有效資訊。能將不同事件、概念進行比較，找出異同。能理清事件發生的來龍去脈與彼此的因果關係。學會判斷題目的核心考點，不被冗長的情境敘述所迷惑。看到史料時，先找尋關鍵字（如：特定人名、制度名稱或年份），再推論是哪個時期的事件，從而選出正確答案。' }
    ]
  },
  {
    id: 'mindset',
    title: '心態與作息',
    icon: <BrainCircuit className="w-5 h-5" />,
    color: 'text-teal-500',
    bgColor: 'bg-teal-50',
    borderColor: 'border-teal-200',
    content: '考前100天到當天的全方位攻略！從讀書計畫、身心狀態調整，到考場應試細節，幫你打造最強的應試穩定力，滿血應戰！',
    fullStrategy: [
      { subtitle: 'OBEAR 7大會考讀書方法', text: '1. 建立讀書習慣與題目練習：保持穩定的節奏，每天固定時間念書，養成大腦的專注慣性。\n2. 錯題訂正與回顧：不要害怕面對錯誤，每次訂正都是進步的階梯。\n3. 安排時間管理與讀書計畫：切割大目標為小任務，讓進度看得見。\n4. 建立學習動機與明確升學目標：找到自己為何而戰的理由。\n5. 善用提問式思考與筆記學習：不要被動接收知識，主動歸納整理。\n6. 重視情緒覺察與身心狀態調整：適時釋放壓力，不要把自己逼到臨界點。\n7. 善用線上課程或補習等學習資源：有問題一定要問到懂，不要累積疑問。' },
      { subtitle: '【考前100天】強化弱科，大量練習', text: '將大部分時間分配給弱科，針對性做題目，不要只讀自己喜歡或已經很強的科目，因為將C提升到B的效益遠大於從B++提升到A。開始寫大量模擬試題和歷屆考古題，並嚴格計時，掌握每科作答時間與配速。制定包含讀書、休息、運動和娛樂的合理時間表，確保身心平衡，避免考前過度燃燒導致彈性疲乏。記得定期檢視計畫並進行微調。' },
      { subtitle: '【考前1週】穩定情緒，保持手感', text: '維持正常作息絕對避免熬夜，按照會考的考試時間表調整生理時鐘（例如：早上考社會和數學，就讓大腦習慣在早上處理這些邏輯）。將錯題本拿出來再次複習，做簡單或中等難度的題目維持解題手感，千萬不要再鑽研艱澀難題來打擊自己的信心。提前準備好准考證、透明筆袋、2B鉛筆、橡皮擦、手錶等考試物品，確認文具狀態良好。飲食以清淡為主，避免攝取過多咖啡因或生冷食物導致腸胃不適。' },
      { subtitle: '應試當天的重要步驟', text: '提早 30-40 分鐘抵達考場，熟悉環境、動線與洗手間位置。留意考試時程與試場規則（遲到20分鐘不得入場，電子產品必須關機且絕對不能隨身攜帶，手錶不能有聲響功能）。入座後先深呼吸幾次，確認座位並檢查試題本是否缺漏，確實填寫准考證號碼。答題時遇到卡關的題目先做記號跳過，千萬不要死磕一題而浪費時間，掌握好作答與檢查的交卷時間，保持平常心發揮最佳實力。如果覺得題目很難，告訴自己「別人也覺得很難」，穩定軍心才是致勝關鍵。' }
    ]
  }
];

const StudyTips: React.FC = () => {
  const [activeTab, setActiveTab] = useState(studyTipsData[0].id);

  const activeContent = studyTipsData.find(t => t.id === activeTab);

  return (
    <div className="w-full h-full flex flex-col group mt-6">
      <div className="flex flex-col mb-8 px-4">
        <div className="flex items-center gap-4 mb-2">
           <div className="h-8 w-2 bg-gradient-to-b from-orange-400 to-rose-500 rounded-full"></div>
           <h2 className="text-3xl font-black text-slate-800 tracking-tight">高分秘笈與各科研讀攻略</h2>
        </div>
        <p className="text-slate-500 font-medium ml-6">獨家整理，助你掌握得分關鍵</p>
      </div>

      <div className="flex-grow rounded-[3rem] border border-white/80 bg-white/60 backdrop-blur-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 sm:p-10 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 relative overflow-hidden">
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-200/20 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-200/20 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

        <div className="relative z-10 flex flex-col lg:flex-row gap-8 lg:gap-12 h-full">
          
          {/* Navigation */}
          <div role="tablist" aria-label="會考各科準備攻略" className="w-full lg:w-[280px] shrink-0 grid grid-cols-2 sm:grid-cols-3 lg:flex lg:flex-col gap-3 lg:gap-4">
            {studyTipsData.map((tip) => (
              <button
                key={tip.id}
                role="tab"
                aria-selected={activeTab === tip.id}
                aria-controls={`panel-${tip.id}`}
                id={`tab-${tip.id}`}
                onClick={() => setActiveTab(tip.id)}
                className={`flex items-center justify-center lg:justify-start gap-3 lg:gap-5 w-full px-4 py-4 lg:px-5 lg:py-4 rounded-2xl transition-all duration-300 ${
                  activeTab === tip.id 
                    ? `${tip.bgColor} ${tip.borderColor} border-2 shadow-md scale-[1.02] lg:scale-100` 
                    : 'bg-white/80 border-2 border-transparent hover:bg-white hover:border-slate-200 shadow-sm'
                }`}
              >
                <div className={`w-10 h-10 shrink-0 rounded-full flex items-center justify-center ${activeTab === tip.id ? 'bg-white shadow-sm' : 'bg-slate-50'} ${tip.color} transition-colors duration-300`}>
                  {tip.icon}
                </div>
                <span className={`font-black text-sm lg:text-lg ${activeTab === tip.id ? 'text-slate-800' : 'text-slate-500'}`}>
                  {tip.title}
                </span>
              </button>
            ))}
          </div>

          {/* Right Content Area */}
          <div 
            role="tabpanel"
            id={`panel-${activeContent?.id}`}
            aria-labelledby={`tab-${activeContent?.id}`}
            className="w-full flex-grow flex flex-col"
          >
            {activeContent && (
              <div className={`h-full rounded-[2rem] border-2 p-8 sm:p-12 flex flex-col justify-center transition-all duration-500 bg-white/80 shadow-sm hover:shadow-md ${activeContent.borderColor} relative overflow-hidden group/content`}>
                <div className={`absolute top-0 right-0 w-32 h-32 ${activeContent.bgColor} rounded-bl-[100px] opacity-50 transition-transform duration-500 group-hover/content:scale-110 pointer-events-none`}></div>
                
                <div className="relative z-10">
                   <div className="flex items-center gap-5 mb-8">
                     <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-white shadow-md border-2 ${activeContent.borderColor} ${activeContent.color}`}>
                       {activeContent.icon}
                     </div>
                     <h3 className="text-3xl font-black text-slate-800">{activeContent.title}攻略</h3>
                   </div>
                   
                   <p className="text-slate-600 leading-relaxed text-lg sm:text-xl font-medium mb-12">
                     {activeContent.content}
                   </p>
   
                   <div className="pt-8 border-t-2 border-slate-100 flex items-center justify-end">
                     
                     <Link 
                       to={`/strategy/${activeContent.id}`}
                       className={`flex items-center gap-2 px-6 py-3 rounded-full text-base font-bold bg-slate-800 text-white hover:bg-slate-700 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5`}
                     >
                       閱讀更多詳情 <ChevronRight className="w-5 h-5" />
                     </Link>
                   </div>
                </div>
              </div>
            )}
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default StudyTips;
