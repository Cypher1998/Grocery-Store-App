import bgOne from '../../assets/bg-image/bg1.webp';
import bgTwo from '../../assets/bg-image/bg2.jpg';
import bgFour from '../../assets/bg-image/bg4.jpg';
import bgFive from '../../assets/bg-image/bg5.jpg';

export const backgroundText = [
  {
    url: bgFour,
    bigText: 'the best quality products guaranteed!',
    smallText:
      'Dramatically facilitate effective total linkage for go forward process',
    variant: 'success',
    onClick: () => console.log(222),
  },
  {
    url: bgFive,
    bigText: 'best different type of grocery store.',
    smallText: 'Quickly aggregate empowered networks after emerging products',
    variant: 'dark',
    onClick: () => console.log(333),
  },
  {
    url: bgTwo,
    bigText: 'quality freshness guaranteed!',
    smallText:
      'Intrinsically fashion performance based products rather than accurate benefits',
    variant: 'success',
    transform: 'translateX(10rem)',
    onClick: () => console.log(444),
  },
  {
    url: bgOne,
    bigText: 'the best you can get',
    smallText: 'Live healthy...',
    variant: 'info',
    color: 'rgb(220, 220, 250)',
    onClick: () => console.log(555),
  },
];
