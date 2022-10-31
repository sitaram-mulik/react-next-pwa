import useDynamicItems from "../../utilities/hooks/useDynamicItems";

export default function WithDynamicItemsSection(Component, {url}) {
    return (props) => {
        const dynamicItemsConfig = useDynamicItems(url);
        return <section className="items-section">
            <Component {...{...props, ...dynamicItemsConfig} }  />
        </section>
    }
};