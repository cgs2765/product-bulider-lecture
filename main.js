document.addEventListener('DOMContentLoaded', () => {
    // Recommendation Data
    const products = {
        bathroom: {
            title: "화장실(타일/실리콘) 솔루션",
            items: [
                { name: "아스토니쉬 곰팡이 제거제", desc: "뿌려두고 5분 뒤 물로 씻어내면 타일 줄눈 곰팡이가 마법처럼 사라집니다." },
                { name: "홈스타 바르는 곰팡이 싹", desc: "실리콘 깊숙이 박힌 검은 곰팡이에 발라두면 흘러내리지 않고 뿌리까지 제거합니다." }
            ],
            tips: ["샤워 후 스퀴지로 물기를 제거하세요.", "화장실 문을 항상 조금 열어두어 환기하세요."]
        },
        wallpaper: {
            title: "거실/방 벽지 솔루션",
            items: [
                { name: "에코후레쉬 곰팡이 제거제", desc: "벽지 손상을 최소화하면서 곰팡이 균을 사멸시킵니다. 무염소 제품을 추천합니다." },
                { name: "샤움 무염소 곰팡이 제거제", desc: "냄새가 적어 실내 벽지에 사용하기 적합하며 변색 위험이 낮습니다." }
            ],
            tips: ["가구를 벽에서 5~10cm 정도 떼어서 배치하세요.", "하루 3번 30분씩 맞바람 환기를 권장합니다."]
        },
        veranda: {
            title: "베란다/창틀 솔루션",
            items: [
                { name: "스칼프 곰팡이 제거제", desc: "페인트 벽면에 생긴 강력한 곰팡이를 제거하는 전문가용 제품입니다. 환기 필수!" },
                { name: "3M 결로방지 테이프", desc: "창틀에 물방울이 맺혀 벽으로 흐르는 것을 방지하여 재발을 막아줍니다." }
            ],
            tips: ["겨울철에도 하루 한 번은 베란다 창문을 열어 환기하세요.", "탄성코트 시공을 고려해 보는 것도 방법입니다."]
        },
        appliance: {
            title: "가전(세탁기/에어컨) 솔루션",
            items: [
                { name: "홈스타 세탁조 클리너", desc: "눈에 보이지 않는 세탁조 뒷면의 곰팡이와 찌꺼기를 강력하게 분해합니다." },
                { name: "산도깨비 에어컨 세정제", desc: "에어컨 냉각핀의 먼지와 곰팡이를 제거하여 냄새를 없애고 효율을 높입니다." }
            ],
            tips: ["세탁 후에는 반드시 세탁기 문과 세제 투입구를 열어두세요.", "에어컨 종료 전 10분간 송풍 모드로 내부를 말려주세요."]
        }
    };

    const situationTips = {
        condensation: "결로 현상은 실내외 온도차 때문에 발생합니다. 창문에 단열 에어캡을 붙이고 제습기를 활용하세요.",
        humidity: "장마철에는 실내 습도를 50% 이하로 유지하는 것이 중요합니다. 에어컨 제습 모드나 제습기를 상시 가동하세요.",
        movein: "입주 전에는 곰팡이 방지 코팅 시공을 미리 해두면 향후 관리가 매우 편해집니다.",
        routine: "일상적인 환기가 가장 좋은 예방법입니다. 공기청정기보다는 자연 환기가 곰팡이 억제에 효과적입니다."
    };

    // State
    let selectedPlace = null;
    let selectedSituation = null;

    // DOM Elements
    const step1Cards = document.querySelectorAll('.choice-card');
    const step2Section = document.getElementById('step-2');
    const step2Btns = document.querySelectorAll('.choice-btn');
    const resultArea = document.getElementById('result-area');
    const productResult = document.getElementById('product-result');
    const tipList = document.getElementById('tip-list');
    const resetBtn = document.getElementById('reset-btn');

    // Step 1 Selection
    step1Cards.forEach(card => {
        card.addEventListener('click', () => {
            selectedPlace = card.dataset.place;
            
            // UI Update
            step1Cards.forEach(c => c.classList.remove('active'));
            card.classList.add('active');
            
            // Show Step 2
            step2Section.classList.remove('hidden');
            step2Section.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Step 2 Selection
    step2Btns.forEach(btn => {
        btn.addEventListener('click', () => {
            selectedSituation = btn.dataset.situation;
            
            // UI Update
            step2Btns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Show Result
            showResult();
        });
    });

    function showResult() {
        const data = products[selectedPlace];
        const situationTip = situationTips[selectedSituation];

        // Clear previous results
        productResult.innerHTML = `<h4>${data.title}</h4>`;
        tipList.innerHTML = '';

        // Add Products
        data.items.forEach(item => {
            const div = document.createElement('div');
            div.className = 'product-card';
            div.innerHTML = `
                <h4>${item.name}</h4>
                <p>${item.desc}</p>
            `;
            productResult.appendChild(div);
        });

        // Add Tips
        const sitLi = document.createElement('li');
        sitLi.style.fontWeight = 'bold';
        sitLi.innerHTML = `<strong>현재 상황 팁:</strong> ${situationTip}`;
        tipList.appendChild(sitLi);

        data.tips.forEach(tip => {
            const li = document.createElement('li');
            li.textContent = tip;
            tipList.appendChild(li);
        });

        // UI Update
        resultArea.classList.remove('hidden');
        resultArea.scrollIntoView({ behavior: 'smooth' });
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
});