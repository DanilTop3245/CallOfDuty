const slides = document.querySelectorAll(".slide");
const titles = [
  "КРЭШ",
  "NUKETOWN 2",
  "ВЗЛОМ",
  "ДОМ СМЕРТИ",
  "СТРЕЛЬБИЩЕ",
  "ПЕРЕКРЕСТНЫЙ ОГОНЬ",
];

let current = 0;

function updateSlides() {
  slides.forEach((slide, i) => {
    slide.className = "slide";

    if (i === current) {
      slide.classList.add("center");
    } else if (i === (current - 1 + slides.length) % slides.length) {
      slide.classList.add("left");
    } else if (i === (current + 1) % slides.length) {
      slide.classList.add("right");
    }
  });

  document.getElementById("title").textContent = titles[current];
}

document.querySelector(".nav.left").addEventListener("click", () => {
  current = (current - 1 + slides.length) % slides.length;
  updateSlides();
});

document.querySelector(".nav.right").addEventListener("click", () => {
  current = (current + 1) % slides.length;
  updateSlides();
});

updateSlides();

const characters = [
  {
    name: "JOHN PRICE",
    description: `Член британских сил особого назначения и глава групп "Браво" и "Антитеррор 141". Прайс заслужил свою славу, расправившись с печально известным торговцем оружием Захаевым и его протеже Макаровым.`,
    backgroundUrl: "../img/characters-price.jpg",
    // замените на реальный url для Джона Прайса
  },
  {
    name: "ДЭВИД МЕЙСОН",
    description: `Участник "Морских котиков" и сын агента ЦРУ Алекса Мейсона, этот лейтенант-командор быстро продвинулся по службе до чина начальника ОКСО.`,
    backgroundUrl: "../img/characters-david-mason.jpg",
    // замените на реальный url для Дэвида Мейсона
  },
  {
    name: "АЛЕКС МЕЙСОН",
    description: `Оперативник ЦРУ и капитан морской пехоты в отставке, Мейсон был участником отряда ликвидаторов, который выполнял задания на Кубе, во Вьетнаме и Лаосе.`,
    backgroundUrl: "../img/characters-alex-mason.jpg",
    // замените на реальный url для Алекса Мейсона
  },
  {
    name: 'САЙМОН "ГОУСТ" РАЙЛИ',
    description: `Заместитель командующего "Антитеррор 141", известный своей балаклавой с черепом, Призрак командовал группой, вторгшейся в убежище Макарова и добывшей бесценные данные.`,
    backgroundUrl: "../img/characters-ghost.jpg",
    // замените на реальный url для Саймона
  },
  {
    name: "ТОМАС МЕРРИК",
    description: `Полевой командир в 2027, Меррик заработал свою репутацию во время операции "Пустынная гадюка", защитив гражданский госпиталь от более чем пяти сотен солдат противника, имея под командованием лишь шестьдесят.`,
    backgroundUrl: "../img/characters-merrick.jpg",
    // замените на реальный url для Томаса
  },
];

// Для теста я подставил одну картинку — поменяй на реальные URL картинок персонажей

const hero = document.getElementById("hero");

characters.forEach(({ name, description, backgroundUrl }) => {
  const card = document.createElement("div");
  card.className = "card";
  card.style.backgroundImage = `url(${backgroundUrl})`;

  card.innerHTML = `
    <div class="title-card-hero">${name}</div>
    <div class="content">
      <h2>${name}</h2>
      <p>${description}</p>
    </div>
  `;

  hero.appendChild(card);
});
