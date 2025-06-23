const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalLinks = document.getElementById("modal-links");

const downloadData = {
  bo6: {
    title: "Black Ops 6",
    links: [
      {
        img: "./img/PlatformIcon-microsoft.5e342052.svg",
        url: "https://apps.microsoft.com/detail/9PNCL2R6G8D0?hl=ru&gl=UA&ocid=pdpshare",
      },
      {
        img: "./img/PlatformIcon-battlenet.d799bce3.svg",
        url: "https://eu.shop.battle.net/ru-ru/product/call-of-duty-black-ops-6?p=1847633",
      },
      {
        img: "./img/PlatformIcon-xbox.ec3f5924.svg",
        url: "https://www.xbox.com/uk-ua/games/store/call-of-duty-black-ops-6-standard-edition-windows/9pncl2r6g8d0",
      },
      {
        img: "./img/PlatformIcon-ps.be51c8e4.svg",
        url: "https://www.playstation.com/en-us/games/call-of-duty-black-ops-6/",
      },
      {
        img: "./img/PlatformIcon-steam.228d9456.svg",
        url: "https://store.steampowered.com/app/2933620/Call_of_Duty_Black_Ops_6/",
      },
    ],
  },
  warzone: {
    title: "Warzone",
    links: [
      {
        img: "./img/PlatformIcon-microsoft.5e342052.svg",
        url: "https://www.xbox.com/et-ee/games/store/call-of-duty-warzone/9nnfg8bqrcxl",
      },
      {
        img: "./img/PlatformIcon-battlenet.d799bce3.svg",
        url: "https://eu.shop.battle.net/ru-ru/product/call-of-duty-warzone-2?p=1953561",
      },
      {
        img: "./img/PlatformIcon-xbox.ec3f5924.svg",
        url: "https://www.xbox.com/et-ee/games/store/call-of-duty-warzone/9nnfg8bqrcxl",
      },
      {
        img: "./img/PlatformIcon-ps.be51c8e4.svg",
        url: "https://www.playstation.com/en-us/games/call-of-duty-warzone/",
      },
      {
        img: "./img/PlatformIcon-steam.228d9456.svg",
        url: "https://store.steampowered.com/app/1962663/Call_of_Duty_Warzone/",
      },
    ],
  },
  mwiii: {
    title: "Modern Warfare III",
    links: [
      {
        img: "./img/PlatformIcon-microsoft.5e342052.svg",
        url: "https://www.xbox.com/et-ee/games/store/call-of-duty-modern-warfare-iii-standard-edition/9p697qf6gsvv",
      },
      {
        img: "./img/PlatformIcon-battlenet.d799bce3.svg",
        url: "https://eu.shop.battle.net/ru-ru/product/call-of-duty-modern-warfare-iii%3Fp%3D1524117",
      },
      {
        img: "./img/PlatformIcon-xbox.ec3f5924.svg",
        url: "https://www.xbox.com/et-ee/games/store/call-of-duty-modern-warfare-iii-standard-edition/9p697qf6gsvv",
      },
      {
        img: "./img/PlatformIcon-ps.be51c8e4.svg",
        url: "https://www.playstation.com/en-us/games/call-of-duty-modern-warfare-iii/",
      },
      {
        img: "./img/PlatformIcon-steam.228d9456.svg",
        url: "https://store.steampowered.com/app/2519060/Call_of_Duty_Modern_Warfare_III/",
      },
    ],
  },
  mwii: {
    title: "Modern Warfare II",
    links: [
      {
        img: "./img/PlatformIcon-microsoft.5e342052.svg",
        url: "https://www.xbox.com/et-ee/games/store/call-of-duty-modern-warfare-ii-standard-edition-windows/9n56hlk0nz50",
      },
      {
        img: "./img/PlatformIcon-battlenet.d799bce3.svg",
        url: "https://eu.shop.battle.net/ru-ru/product/call-of-duty-modern-warfare-ii?p=1051129",
      },
      {
        img: "./img/PlatformIcon-xbox.ec3f5924.svg",
        url: "https://www.xbox.com/et-ee/games/store/call-of-duty-modern-warfare-ii-standard-edition-windows/9n56hlk0nz50",
      },
      {
        img: "./img/PlatformIcon-ps.be51c8e4.svg",
        url: "https://www.playstation.com/en-us/games/call-of-duty-modern-warfare-ii/",
      },
      {
        img: "./img/PlatformIcon-steam.228d9456.svg",
        url: "https://store.steampowered.com/app/1962660/Call_of_Duty_Modern_Warfare_II/",
      },
    ],
  },
  vanguard: {
    title: "Vanguard",
    links: [
      {
        img: "./img/PlatformIcon-battlenet.d799bce3.svg",
        url: "https://eu.shop.battle.net/ru-ru/product/call-of-duty-vanguard%3Fp%3D389379?p=810196",
      },
      {
        img: "./img/PlatformIcon-xbox.ec3f5924.svg",
        url: "https://www.xbox.com/en-us/games/store/call-of-duty-vanguard-cross-gen-bundle/9PDPD158GLKD",
      },
      {
        img: "./img/PlatformIcon-ps.be51c8e4.svg",
        url: "https://www.playstation.com/en-us/games/call-of-duty-vanguard/",
      },
      {
        img: "./img/PlatformIcon-steam.228d9456.svg",
        url: "https://store.steampowered.com/app/1985820/Call_of_Duty_Vanguard/",
      },
    ],
  },
  codm: {
    title: "COD Mobile",
    links: [
      {
        img: "./img/PlatformIcon-apple.d775afcf.svg",
        url: "https://apps.apple.com/us/app/call-of-duty-mobile/id1287282214",
      },
      {
        img: "./img/PlatformIcon-googleplay.895cc516.svg",
        url: "https://play.google.com/store/search?q=call+of+duty+mobile&c=apps",
      },
    ],
  },
};

document.querySelectorAll(".container-game").forEach((card) => {
  card.addEventListener("click", () => {
    const gameKey = card.dataset.game;
    const game = downloadData[gameKey];
    if (!game) return;

    modalTitle.textContent = `Скачать ${game.title}`;
    modalLinks.innerHTML = game.links
      .map(
        (link) =>
          `<a href="${link.url}" target="_blank"><img src="${link.img}" alt=""></a>`
      )
      .join("");

    modal.classList.remove("closing");
    modal.classList.add("active");
  });
});

function closeModal() {
  modal.classList.remove("active");
  modal.classList.add("closing");
  setTimeout(() => {
    modal.classList.remove("closing");
  }, 300); // Должно совпадать с transition в CSS
}

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".pack-card");
  const buttons = document.querySelectorAll(".packs-filter button");

  const revealCards = () => {
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add("show");
      }, index * 100);
    });
  };

  const filterCards = (type) => {
    cards.forEach((card) => {
      const cardType = card.getAttribute("data-type");

      if (type === "all" || cardType === type) {
        card.style.display = "block";
        setTimeout(() => card.classList.add("show"), 10);
      } else {
        card.classList.remove("show");
        setTimeout(() => {
          card.style.display = "none";
        }, 300);
      }
    });
  };

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      filterCards(btn.getAttribute("data-filter"));
    });
  });

  // 👉 Наведение + переход + клик
  cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.classList.add("glitch-hover");
    });

    card.addEventListener("mouseleave", () => {
      card.classList.remove("glitch-hover");
    });

    card.addEventListener("click", () => {
      const map = {
        "ГОЛОДНАЯ МАКО": "Tracer Pack: Mako Me Hungry",
        "ЧЕРНИЛА И ДЫМ": "Tracer Pack: Ink and Smoke",
        "ВЗЛОМ СИСТЕМЫ": "Tracer Pack: System Breach",
        "РЕМЕСЛО РАЗВЕДЧИКА": "Tracer Pack: Craftwork Recon",
        "СВАЛИЛОСЬ С НЕБА": "Falling from the Sky",
        КИБЕРВЗЛОМ: "Cyber Hack",
        "ПРОЧНЫЙ ПАНЦИРЬ": "Hardshell",
        "АБСОЛЮТНЫЙ НОЛЬ": "Absolute Zero",
        "БЕСПЛАТНЫЙ ПОДАРОК": "Call of Duty Free Gift",
        "ОЦЕНЩИК УГРОЗ": "Threat Evaluator",
        "ПОТЕРЯННОЕ СПОКОЙСТВИЕ": "Tranquility Lost",
        СВЕЖАК: "Starter Pack",
        "ОБЪЕДИНЕННЫЕ СИЛЫ": "Call of Duty Endowment United Force",
        РЕАНИМАЦИЯ: "Tracer Pack: Reanimation",
        "ATLANTA FAZE 2025": "Atlanta Faze 2025",
        "НАБОР КОМАНДЫ LOS ANGELES GUERRILLAS 2025":
          "Los Angeles Guerrillas 2025",
        "НАБОР КОМАНДЫ MIAMI HERETICS 2025": "Miami Heretics 2025",
        "НАБОР КОМАНДЫ MINNESOTA ROKKR 2025": "Minnesota Rokkr 2025",
        "НАБОР КОМАНДЫ CLOUD9 NEW YORK 2025": "Cloud9 New York 2025",
        "НАБОР КОМАНДЫ VANCOUVER SURGE 2025": "Vancouver Surge 2025",
        "НАБОР КОМАНДЫ LOS ANGELES THIEVES 2025": "Los Angeles Thieves 2025",
      };

      const title = card.querySelector("h3").innerText.trim();
      const mappedTitle = map[title] || `Call of Duty ${title}`;
      const searchURL = `https://store.steampowered.com/search/?term=${encodeURIComponent(
        mappedTitle
      )}`;
      window.open(searchURL, "_blank");
    });
  });

  revealCards();
});

