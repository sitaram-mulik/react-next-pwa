import Cards from "./Cards";

function CardList({items, styles}) {
    const { cols, gap } = {...styles};
    return (
        <div className="container my-24 px-6 mx-auto">
            <section className={`mb-32 text-gray-800 text-center grid grid-cols-${cols} gap-${gap}`}>
                <Cards items={items} />
            </section>
        </div>
    );
};

export default CardList;


