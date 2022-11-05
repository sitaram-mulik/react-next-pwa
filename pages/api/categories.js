let categories = {
    "styles": {
        "columns": "4",
        "gap": "7",
    },
    "list": [
        {
            "id": "beauty",
            "title": "Beauty products",
            "description": "Lorem ipsum dolor sit amet consectetur adipiscing elit, urna consequat felis vehicula class ultricies mollis dictumst, aenean non a in donec nulla. Phasellus ante pellentesque erat cum risus consequat imperdiet aliquam, integer placerat et turpis mi eros nec lobortis taciti, vehicula nisl litora tellus ligula porttitor metus.",
            "type": "category",
            "styles": {
                "start-x": "1",
                "end-x": "3",
                "start-y": "auto",
                "end-y": "auto",
            },
        },
        {
            "id": "clothes",
            "title": "Mens clothes",
            "description": "Lorem ipsum dolor sit amet consectetur adipiscing elit, urna consequat felis vehicula class ultricies mollis dictumst, aenean non a in donec nulla. Phasellus ante pellentesque erat cum risus consequat imperdiet aliquam, integer placerat et turpis mi eros nec lobortis taciti, vehicula nisl litora tellus ligula porttitor metus.",
            "type": "category",
            "styles": {
                "start-x": 3,
                "end-x": "5",
                "start-y": "auto",
                "end-y": "auto",   
            }
        },
        {
            "id": "fitness",
            "title": "Fitness products",
            "description": "Lorem ipsum dolor sit amet consectetur adipiscing elit, urna consequat felis vehicula class ultricies mollis dictumst, aenean non a in donec nulla. Phasellus ante pellentesque erat cum risus consequat imperdiet aliquam, integer placerat et turpis mi eros nec lobortis taciti, vehicula nisl litora tellus ligula porttitor metus.",
            "type": "category",
            "styles": {
                "span": "full",
            }

        },
        {
            "id": "footware",
            "title": "Footwares",
            "description": "Lorem ipsum dolor sit amet consectetur adipiscing elit, urna consequat felis vehicula class ultricies mollis dictumst, aenean non a in donec nulla. Phasellus ante pellentesque erat cum risus consequat imperdiet aliquam, integer placerat et turpis mi eros nec lobortis taciti, vehicula nisl litora tellus ligula porttitor metus.",
            "type": "category",
            "styles": {
                "start-x": "auto",
                "end-x": "auto",
                "start-y": "auto",
                "end-y": "auto"
            }

        },
        {
            "id": "furnicher",
            "title": "Home furnichers",
            "description": "Lorem ipsum dolor sit amet consectetur adipiscing elit, urna consequat felis vehicula class ultricies mollis dictumst, aenean non a in donec nulla. Phasellus ante pellentesque erat cum risus consequat imperdiet aliquam, integer placerat et turpis mi eros nec lobortis taciti, vehicula nisl litora tellus ligula porttitor metus.",
            "type": "category",
            "styles": {
                "start-x": "3",
                "end-x": "5",
                "start-y": "3",
                "end-y": "4"
     
            }
        },
        {
            "id": "groceries",
            "title": "Groceries",
            "description": "Lorem ipsum dolor sit amet consectetur adipiscing elit, urna consequat felis vehicula class ultricies mollis dictumst, aenean non a in donec nulla. Phasellus ante pellentesque erat cum risus consequat imperdiet aliquam, integer placerat et turpis mi eros nec lobortis taciti, vehicula nisl litora tellus ligula porttitor metus.",
            "type": "category",
            "styles": {
                "start-x": "auto",
                "end-x": "auto",
                "start-y": "auto",
                "end-y": "auto",
            }
        },
        {
            "id": "laptops",
            "title": "Laptops",
            "description": "Lorem ipsum dolor sit amet consectetur adipiscing elit, urna consequat felis vehicula class ultricies mollis dictumst, aenean non a in donec nulla. Phasellus ante pellentesque erat cum risus consequat imperdiet aliquam, integer placerat et turpis mi eros nec lobortis taciti, vehicula nisl litora tellus ligula porttitor metus.",
            "type": "category"
        },
        {
            "id": "mobiles",
            "title": "Mobiles",
            "description": "Lorem ipsum dolor sit amet consectetur adipiscing elit, urna consequat felis vehicula class ultricies mollis dictumst, aenean non a in donec nulla. Phasellus ante pellentesque erat cum risus consequat imperdiet aliquam, integer placerat et turpis mi eros nec lobortis taciti, vehicula nisl litora tellus ligula porttitor metus.",
            "type": "category",
            "styles": {
                "start-x": "auto",
                "end-x": "auto",
                "start-y": "auto",
                "end-y": "auto",
            }
        },
        {
            "id": "toys",
            "title": "Toys for children",
            "description": "Lorem ipsum dolor sit amet consectetur adipiscing elit, urna consequat felis vehicula class ultricies mollis dictumst, aenean non a in donec nulla. Phasellus ante pellentesque erat cum risus consequat imperdiet aliquam, integer placerat et turpis mi eros nec lobortis taciti, vehicula nisl litora tellus ligula porttitor metus.",
            "type": "category",
            "styles": {
                "start-x": "auto",
                "end-x": "auto",
                "start-y": "auto",
                "end-y": "auto",
            }
        },
        {
            "id": "watches",
            "title": "Watches",
            "description": "Lorem ipsum dolor sit amet consectetur adipiscing elit, urna consequat felis vehicula class ultricies mollis dictumst, aenean non a in donec nulla. Phasellus ante pellentesque erat cum risus consequat imperdiet aliquam, integer placerat et turpis mi eros nec lobortis taciti, vehicula nisl litora tellus ligula porttitor metus.",
            "type": "category",
            "styles": {
                "start-x": "1",
                "end-x": "5",
                "start-y": "auto",
                "end-y": "auto",
            }
        }
    ]
}


export default function Categories(req, res) {
    res.status(200).send(categories);
}