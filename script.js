const foodRecommendations = {
  기쁨: ['초콜릿 케이크', '피자', '아이스크림'],
  행복: ['따뜻한 수프','스초생'],
  슬픔: ['뜨끈한 국물', '죽', '찜닭'],
  피곤함: ['커피', '에너지 바', '샌드위치'],
  '에너지 넘침': ['버거', '핫윙', '스무디']
};

function recommendFood(mood) {
  const foodList = foodRecommendations[mood];
  const foodListElement = document.getElementById('food-list');
  foodListElement.innerHTML = ''; // 이전에 표시된 음식을 지우기

  if (foodList) {
    foodList.forEach(food => {
      const listItem = document.createElement('li');
      listItem.textContent = food;
      foodListElement.appendChild(listItem);
    });
  } else {
    foodListElement.textContent = '추천할 음식이 없습니다.';
  }
}
