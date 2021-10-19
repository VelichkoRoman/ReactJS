//определяем типы экшенов
// Вынесли строковые типы в константы, чтоб в случе ошибочного написания, появилась подсказка об ошибке!!!
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';

//определяем стэйт в котором будет массив юзеров users, количество юзеров на странице pageSize,
//общее количество юзеров по гетзапросу с сервера totalUsersCount, текущая выбранная страница юзеров currentPage.
let initialState = {
    users: [ ],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1
};


//определяем функцию редюсер выбора экшена по типу, в котором текущий стэйт будет стэйт определенный выше.
//функция принимает в себя текущий стэйт и экшен.
const usersReducer = (state = initialState, action) => {
    // debugger;

    //через свитч кэйс выполняется выбор типа экшена
    
    switch (action.type) {
        // тип ПОДРУЖИТЬСЯ с юзером
        case FOLLOW: 
            return {
                ...state, 
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }

            // users: [...state.users];
            // users: state.users.map(u=>u)

        //  тип ОТДРУЖИТЬСЯ от юзера
        case UNFOLLOW:
            return {
                ...state, 
                users: state.users.map(u=>{
                            if (u.id === action.userId) {
                                return {...u, followed: false}
                    }
                    return u;
                })
            }
        
        //  тип ЮЗЕРЫ - выводит из стэйта юзеров на страницу, постоянно перезатирая список юзеров на странице,
        // после выбора другого номера страницы выведенных юзеров
        case SET_USERS:
            return { ...state, users:action.users}

        // тип ТЕКУЩАЯ СТРАНИЦА - выбранная страница выведенных юзеров
        case SET_CURRENT_PAGE:
            return { 
                ...state, 
                currentPage: action.currentPage
            }
            
        // тип ОБЩЕЕ КОЛ_ВО ЮЗЕРОВ из гет запроса получаем
        case SET_TOTAL_USERS_COUNT:
            return { 
                ...state, 
                totalUsersCount: action.count
            }  

        // если нет изменений, то вернуть тот стэйт который был
        default:
            return state;
        
    };
}


// ЭКШЕН КРЕАТОРЫ создают объект с принимаемым в себя типом экшена со своими свойствами 
// функции которые возвращают экшен объект.
export const followActionCreator = (userId) => ({type: FOLLOW, userId});
export const unfollowActionCreator = (userId) => ({type: UNFOLLOW, userId});
export const setUsersActionCreator = (users) => ({type: SET_USERS, users});
export const setCurrentPageActionCreator = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCountActionCreator = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount});




export default usersReducer;