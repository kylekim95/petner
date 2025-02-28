const generateURL = (address: string) => {
  return new URL(address, import.meta.url).href;
};

const PNG_IMAGES = Object.freeze({
  recommendRoom: generateURL('./images/recommendRoom.png'),
  cat: generateURL('./images/cat.png'),
  adoptionHero: generateURL('./images/adoption-main-hero.png'),
  alertBell: generateURL('./images/alert-bell.png'),
  adoptionChart: generateURL('./images/adoption-chart.png'),
});
export default PNG_IMAGES;
