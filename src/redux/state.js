
let state = {
    profilePage: {
        posts: [
            {id: 1, message: "Hi, it's first message from react app", likesCount: 16},
            {id: 2, message: 'New user catch', likesCount: 3},
            {id: 3, message: 'I see u', likesCount: 5},
            {id: 4, message: 'whassup men', likesCount: 1},
            {id: 5, message: 'Woww', likesCount: 35},
        ],
        
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Romich'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Anton'},
            {id: 5, name: 'Anna'},
        ],
        messages: [
            {id: 1, message: 'hi'},
            {id: 2, message: 'Как дела?'},
            {id: 3, message: 'Куку'},
            {id: 4, message: 'Чо происходит?'},
            {id: 5, message: 'Сегодня 1сентября'},
        ]
    },
    sideBar: 
    // { 
        // friends: [
        //     {id: 1, name: 'Alex'},
        //     {id: 2, name: 'Alla'},
        //     {id: 3, name: 'Liz'},
        // ],
        // avatar: [
           [{ id: 1, nickname: 'Liz', photo: require("../img/woman.svg").default },
            { id: 2, nickname: 'Alla',photo: require("../img/girl.svg").default },
            { id: 3, nickname: 'Alex',photo: require("../img/man.svg").default },]
        // ],
    // },
};

export default state;