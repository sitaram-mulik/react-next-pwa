import { useState, useEffect } from "react";
import FormBuilder from "./form/FormBuilder";
import { faEdit } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Editor(props) {
    const [fields, setFields] = useState();
    const [showBox, setShowBox] = useState(false);
    useEffect(() => {
        if(!Array.isArray(props)) {
            const _fields = Object.keys(props)?.map((key) => {
                return {
                    id: key,
                    value: props[key]
                }
            });
            setFields(_fields);
        } else {
            setFields(props);
        }
    }, [props]);



    return <div className="editable">
    <button onClick={() => setShowBox((state) => !state )}><FontAwesomeIcon icon={faEdit} className="w-7 h-7" /></button>
    {showBox ? <FormBuilder fields={fields} /> : <></>}</div>
};

export default Editor;