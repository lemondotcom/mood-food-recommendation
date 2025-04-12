// 음식 추천을 위한 간단한 알고리즘
const foodRecommendations = {
  기쁨: ['초콜릿 케이크', '피자', '아이스크림'],
  슬픔: ['뜨끈한 국물', '죽', '찜닭'],
  피곤함: ['커피', '에너지 바', '샌드위치'],
  '에너지 넘침': ['버거', '핫윙', '스무디'],
};

// 기분 입력에 따른 음식 추천을 처리하는 함수
function recommendFood() {
  const moodInput = document.getElementById('mood-input').value.trim().toLowerCase();
  const foodListElement = document.getElementById('food-list');
  
  // 기분 입력이 없으면 경고 메시지 표시
  if (moodInput === '') {
    foodListElement.innerHTML = '<li>기분을 입력해주세요.</li>';
    return;
  }

  // 기분에 맞는 음식 추천
  const recommendation = foodRecommendations[moodInput];

  // 추천된 음식이 없으면 메시지 표시
  if (!recommendation) {
    foodListElement.innerHTML = `<li>"${moodInput}"에 맞는 추천 음식이 없습니다.</li>`;
    return;
  }

  // 추천된 음식 목록 출력
  foodListElement.innerHTML = '';
  recommendation.forEach(food => {
    const listItem = document.createElement('li');
    listItem.textContent = food;
    foodListElement.appendChild(listItem);
  });
}
