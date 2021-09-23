
let initialState = {
    ava: [{ id: 1, nickname: 'Liz', photo: require("../img/woman.svg").default },
         { id: 2, nickname: 'Alla',photo: require("../img/girl.svg").default },
         { id: 3, nickname: 'Alex',photo: require("../img/man.svg").default }]
     
};

const sideBarReducer = (state = initialState, action) => {
    

    return state;
}

export default sideBarReducer;
