import Card from './Card';
import { ECardProps } from './utilities';

function Cards({items}) {
    return (<>{items?.map((item) => {
        const styles = item?.styles || {};
        return <Card
            key={item.id}
            item={item}
            classes={`col-start-${
                styles[ECardProps.START_X]
            } col-end-${
                styles[ECardProps.END_X]
            } row-start-${
                styles[ECardProps.START_Y]
            } row-end-${item[ECardProps.END_Y]} col-span-${
                styles[ECardProps.SPAN]
            }`}
        />
        })}</>)
}

export default Cards;