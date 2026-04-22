document.addEventListener('DOMContentLoaded', () => {
    // Advanced Recommendation Data with Rich Content
    const products = {
        bathroom: {
            title: "화장실 및 욕실 솔루션",
            analysis: "화장실은 높은 습도와 비누 찌꺼기 등 유기물이 많아 곰팡이가 번식하기 가장 완벽한 환경입니다. 특히 실리콘과 타일 줄눈은 기공이 많아 곰팡이 뿌리가 깊게 박히기 쉽습니다.",
            items: [
                { name: "아스토니쉬 곰팡이 제거제 (뿌리는 타입)", desc: "빠른 침투력을 가진 거품형 제거제로, 타일 줄눈에 넓게 퍼진 곰팡이를 5분 만에 사멸시킵니다." },
                { name: "홈스타 바르는 곰팡이 싹 (젤 타입)", desc: "흐르지 않는 고농축 젤이 실리콘에 밀착하여 깊숙한 곳까지 박힌 곰팡이 뿌리를 제거합니다." }
            ],
            guide: `1. 작업 전 물기를 최대한 제거하여 제거제의 농도를 유지하세요.
2. 실리콘 부위는 젤 타입을 바른 후 최소 2~3시간 방치하는 것이 좋습니다.
3. 타일 줄눈은 거품형을 뿌리고 솔로 가볍게 문지른 뒤 뜨거운 물로 씻어내세요.
4. 작업 후에는 반드시 환풍기를 1시간 이상 가동하여 습기를 제거하세요.`,
            tips: ["샤워 후 찬물로 벽면을 헹구면 온도가 낮아져 곰팡이 번식이 억제됩니다.", "줄눈 코팅(줄눈 시공)을 하면 곰팡이가 거의 생기지 않습니다."]
        },
        wallpaper: {
            title: "거실 및 침실(벽지) 솔루션",
            analysis: "벽지 곰팡이는 주로 결로 현상이나 단열 부족으로 인해 발생합니다. 벽지 내부에 번식한 곰팡이는 포자를 공기 중으로 배출하여 호흡기 질환을 유발할 수 있으므로 즉각적인 조치가 필요합니다.",
            items: [
                { name: "에코후레쉬 무염소 곰팡이 제거제", desc: "락스 성분이 없어 냄새가 적고 벽지 변색을 최소화하면서 곰팡이 균사체를 사멸시킵니다." },
                { name: "샤움 곰팡이 방지제", desc: "제거 후 벽면에 코팅막을 형성하여 곰팡이 포자가 안착하는 것을 장기간 방지합니다." }
            ],
            guide: `1. 곰팡이가 생긴 부위의 가구를 벽에서 완전히 떼어내 공간을 확보하세요.
2. 마른 걸레로 겉면의 곰팡이를 가볍게 닦아낸 후(포자 비산 주의), 전용 제거제를 충분히 뿌리세요.
3. 제거제가 벽지에 충분히 스며들도록 자연 건조하세요.
4. 벽면이 완전히 마른 후 방지제를 2~3회 반복해서 뿌려 코팅막을 만드세요.`,
            tips: ["가구를 벽면에서 최소 10cm 이상 띄워 설치하여 공기 흐름을 만드세요.", "습도가 60%를 넘지 않도록 제습기나 제습제를 적극 활용하세요."]
        },
        veranda: {
            title: "베란다 및 다용도실 솔루션",
            analysis: "베란다는 외부 온도와 직접 맞닿는 곳으로 결로가 빈번합니다. 페인트 벽면은 습기를 흡수하는 성질이 있어 곰팡이가 페인트 층 내부로 파고드는 특징이 있습니다.",
            items: [
                { name: "스칼프 곰팡이 제거제 (전문가용)", desc: "매우 강력한 세정력을 가진 제품으로, 페인트 벽면에 고착된 검은 곰팡이를 완벽하게 분해합니다." },
                { name: "3M 결로방지 테이프", desc: "창틀 하단에 부착하여 결로로 인한 물방울이 벽면으로 흐르는 것을 차단합니다." }
            ],
            guide: `1. 베란다는 환기가 잘 되므로 날씨가 좋은 날 작업을 진행하세요.
2. 스칼프 제품은 원액 그대로 사용하되, 냄새가 강하므로 마스크와 보안경 착용을 권장합니다.
3. 곰팡이가 심한 곳은 붓을 이용해 원액을 바르고 10분 뒤 물걸레로 닦아내세요.
4. 창틀 실리콘의 물기를 수시로 닦아 결로수가 벽으로 스며들지 않게 하세요.`,
            tips: ["베란다 문을 항상 1~2cm 정도 열어두면 실내외 온도차를 줄여 결로를 예방할 수 있습니다.", "항균 페인트 시공은 곰팡이 방지에 큰 도움이 됩니다."]
        },
        appliance: {
            title: "생활 가전(세탁기/에어컨) 솔루션",
            analysis: "가전 내부는 어둡고 습하며 오염물이 축적되기 쉬워 곰팡이의 온상이 됩니다. 에어컨 냉각핀과 세탁기 고무패킹은 정기적인 관리가 필수적인 영역입니다.",
            items: [
                { name: "공공칠(007) 세탁조 클리너", desc: "세탁조 뒷면의 찌든 때와 곰팡이를 강력한 거품으로 불려 제거합니다." },
                { name: "산도깨비 에어컨 세정제", desc: "에어컨 냉각핀 사이사이에 분사하여 곰팡이 냄새의 원인을 제거하고 냉방 효율을 높입니다." }
            ],
            guide: `1. 세탁조 클리너는 온수를 가득 채워 1~2시간 충분히 불린 후 표준 코스로 돌리세요.
2. 세탁기 고무패킹 사이는 락스를 적신 키친타월을 끼워두면 곰팡이가 쉽게 제거됩니다.
3. 에어컨은 전원을 끄고 필터를 제거한 뒤 냉각핀에 세정제를 골고루 분사하세요.
4. 분사 후 20분 뒤 에어컨을 가동하여 응결수와 함께 오염물이 배출되게 하세요.`,
            tips: ["세탁 후 세탁기 문과 세제 투입구를 항상 열어 내부를 말리세요.", "에어컨 종료 전 10~20분간 송풍 모드(자동 건조)를 실행하세요."]
        }
    };

    const situationAnalysis = {
        condensation: "겨울철 실내외 온도차로 인한 결로가 원인입니다. 벽면 온도를 높여주는 단열 작업이 병행되어야 합니다.",
        humidity: "장마철 높은 공중 습도가 원인입니다. 제습기를 통해 실내 습도를 50% 이하로 강제 조절해야 합니다.",
        movein: "이전 거주자의 관리 부실로 인한 누적 오염입니다. 입주 전 강력한 살균 작업과 방지 코팅이 필요합니다.",
        routine: "일상적인 생활 습기가 원인입니다. 올바른 환기 습관만으로도 충분히 예방 가능한 상태입니다."
    };

    // State Management
    let selectedPlace = null;
    let selectedSituation = null;

    // DOM Elements
    const step1Cards = document.querySelectorAll('.choice-card');
    const step2Section = document.getElementById('step-2');
    const step2Btns = document.querySelectorAll('.choice-btn');
    const resultArea = document.getElementById('result-area');
    const analysisText = document.getElementById('analysis-text');
    const productResult = document.getElementById('product-result');
    const guideContent = document.getElementById('guide-content');
    const resetBtn = document.getElementById('reset-btn');

    // Step 1 Selection
    step1Cards.forEach(card => {
        card.addEventListener('click', () => {
            selectedPlace = card.dataset.place;
            step1Cards.forEach(c => c.classList.remove('active'));
            card.classList.add('active');
            
            step2Section.classList.remove('hidden');
            step2Section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });

    // Step 2 Selection
    step2Btns.forEach(btn => {
        btn.addEventListener('click', () => {
            selectedSituation = btn.dataset.situation;
            step2Btns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            showResult();
        });
    });

    function showResult() {
        const data = products[selectedPlace];
        const sitAnalysis = situationAnalysis[selectedSituation];

        // Fill Content
        analysisText.innerHTML = `<strong>[${data.title} x ${getSelectedSituationLabel()}]</strong><br>${sitAnalysis}<br><br>${data.analysis}`;
        
        productResult.innerHTML = '';
        data.items.forEach(item => {
            const div = document.createElement('div');
            div.className = 'product-card';
            div.innerHTML = `<h4>${item.name}</h4><p>${item.desc}</p>`;
            productResult.appendChild(div);
        });

        guideContent.textContent = data.guide;

        // UI Update
        resultArea.classList.remove('hidden');
        resultArea.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    function getSelectedSituationLabel() {
        const activeBtn = document.querySelector('.choice-btn.active');
        return activeBtn ? activeBtn.textContent : '';
    }

    // Reset
    resetBtn.addEventListener('click', () => {
        selectedPlace = null;
        selectedSituation = null;
        step1Cards.forEach(c => c.classList.remove('active'));
        step2Btns.forEach(b => b.classList.remove('active'));
        step2Section.classList.add('hidden');
        resultArea.classList.add('hidden');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Smooth scroll for nav links
    document.querySelectorAll('.nav-menu a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});