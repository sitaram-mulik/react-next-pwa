import { useState, useEffect } from "react";
import FormBuilder from "../form/FormBuilder";
import { faEdit } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";

function WithEditable(Component) {
    return (props) => {
        const [fields, setFields] = useState();
        const [showBox, setShowBox] = useState(false);
        
        useEffect(() => {
            let styles = []
            if(!Array.isArray(styles)) {
                const _fields = Object.keys(styles)?.map((key) => {
                    return {
                        id: key,
                        value: styles[key]
                    }
                });
                setFields(_fields);
            } else {
                setFields(styles);
            }
        }, []);
    
        return (<><div className="editable">
        <button onClick={() => setShowBox((state) => !state )}><FontAwesomeIcon icon={faEdit} className="w-7 h-7" /></button>
        {showBox ? <FormBuilder fields={fields} /> : <></>}
            
        </div>
        <Component {...props}/>
        </>)
    }

};

export default WithEditable;