const defaultValues = [
    {
        type: 'text',
        id: 'fname',
        value: '',
        label: 'First name'
    },
    {
        type: 'number',
        id: 'age',
        value: '',
        label: 'Age'
    },
    {
        type: 'date',
        id: 'bdate',
        value: '',
        label: 'Birth date'
    },
    {
        type: 'dropdown',
        id: 'ss',
        value: '',
        label: 'Category'
    }
]

const form = (req, res) => {
    res.status(200).send(defaultValues);
};

export default form;