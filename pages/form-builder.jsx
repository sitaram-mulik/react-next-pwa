import { useEffect } from "react";
import FormBuilder from "../components/form/FormBuilder";
import axiosInstance from "../utilities/http/axiosInstance";

export default function FormBuilderContainer({ payload }) {
    useEffect(() => {
        console.log('payload ', payload)
    }, [payload]);
    return <FormBuilder fields={payload} />;
};

export async function getStaticProps() {
    return axiosInstance('/form').then((payload) => {
        return {
            props: { payload }
        }
    }, (err) => {
        return {
            props: {}
        }
    })
};