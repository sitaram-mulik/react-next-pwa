function Field(props) {
    const { type, label } = {...props};
    switch (type) {
        default: return <div className="field-wrapper">
            <label>{!!label ?  label : props.id}</label>
            <input {...{...props}} />
        </div> 
    }
}

export default Field;