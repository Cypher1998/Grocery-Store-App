import bgOne from '../../assets/bg-image/bg1.webp';
import bgTwo from '../../assets/bg-image/bg2.jpg';
import bgFour from '../../assets/bg-image/bg4.jpg';
import bgFive from '../../assets/bg-image/bg5.jpg';

export const backgroundText = [
  {
    url: bgFour,
    bigText: 'the best quality products',
    smallText: 'Dramatically facilitate effective total linkage...',
    variant: 'success',
    onClick: () => console.log(222),
  },
  {
    url: bgFive,
    bigText: 'best different type of grocery',
    smallText: 'Quickly aggregate empowered networks...',
    variant: 'dark',
    onClick: () => console.log(333),
  },
  {
    url: bgTwo,
    bigText: 'quality freshness guaranteed',
    smallText: 'Intrinsically fashion performance...',
    variant: 'success',
    transform: 'translateX(13rem)',
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
