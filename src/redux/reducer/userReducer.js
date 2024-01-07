import {FETCH_USER_LOGIN_SUCCESS} from "../action/userAction";

const INITIAL_STATE = {
    account: {
        accessToken: null,
        refreshToken: null,
        username: null,
        image: null,
        role: null

    },
    isAuthenticated: false
};
const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_USER_LOGIN_SUCCESS:
            console.log("action FETCH_USER_LOGIN_SUCCESS", action)
        return {
            ...state,account: {
                accessToken: action?.payload?.DT?.access_token,
                refreshToken:  action?.payload?.DT?.refresh_token,
                username:  action?.payload?.DT?.username,
                image:  action?.payload?.DT?.image,
                role:  action?.payload?.DT?.role
            },
            isAuthenticated: true
        };
        default:
            return state;
    }
};

export default userReducer;