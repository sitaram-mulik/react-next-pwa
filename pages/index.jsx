import CardList from '../components/cards/CardsList';
import WithDynamicItemsSection from '../components/hoc/WithItemsSection';

const CategorySection1 = WithDynamicItemsSection(CardList, {url: '/categories'});

export default function Home({navProps}) {
  return <CategorySection1 />
}

// export async function getServerSideProps(context) {
//   const navProps = await axiosInstance('/nav');
//   console.log('navProps 122 ', navProps);
//   //useR
//   return {
//       props: {navProps}
//   }
// }