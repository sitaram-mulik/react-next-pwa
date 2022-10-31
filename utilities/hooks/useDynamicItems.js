import { useEffect, useMemo, useState } from "react";
import axiosInstance from "../http/axiosInstance";

const useDynamicItems = (url) => {
    const [config, setConfig] = useState([]);
    const {list: items, styles} = useMemo(() => { return {...config} }, [config]);
    useEffect(() => {
        axiosInstance(url).then((data) => {
            console.log('categories data', data);
            setConfig(data);
        }, (err) => {
            console.log('err', err);
        })
        
    }, []);
    return {items, styles};
}

export default useDynamicItems;
