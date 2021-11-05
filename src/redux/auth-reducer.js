//определяем типы экшенов
// Вынесли строковые типы в константы, чтоб в случе ошибочного написания, появилась подсказка об ошибке!!!
const SET_USER_DATA = 'SET_USER_DATA';
// const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';


//определяем стэйт в котором будет массив юзеров users, количество юзеров на странице pageSize,
//общее количество юзеров по гетзапросу с сервера totalUsersCount, текущая выбранная страница юзеров currentPage.
let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};


//определяем функцию редюсер выбора экшена по типу, в котором текущий стэйт будет стэйт определенный выше.
//функция принимает в себя текущий стэйт и экшен.
const authReducer = (state = initialState, action) => {
    // debugger;

    //через свитч кэйс выполняется выбор типа экшена
    
    switch (action.type) {
        // тип ПОДРУЖИТЬСЯ с юзером
        case SET_USER_DATA: 
            return {
                ...state, 
                ...action.data,
                isAuth: true
                
            }


        // если нет изменений, то вернуть тот стэйт который был
        default:
            return state;
        
    };
}


// ЭКШЕН КРЕАТОРЫ создают объект с принимаемым в себя типом экшена со своими свойствами 
// функции которые возвращают экшен объект.

//Для упрщения кода, изменим имена экшен креаторов на более простые, из-за избавления функции  mapDispatchToProps в UserCantainer
export const setAuthUserData = (userId, email, login) => ({type: SET_USER_DATA, data:{userId, email, login}});

export default authReducer;