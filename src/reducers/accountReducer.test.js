import accountReducer from "./accountReducer";
import * as actions from "../actions/accountActions";

it("should set login true when passed LOGIN_SUCCESS", () => {

    // arrange
    const action = actions.loginSuccess({
        username:"admin"
    })

    // act
    const newState = accountReducer({}, action);

    // assert
    expect(newState.isLogin).toEqual(true);
    expect(newState.user).toBeDefined();
});

it("should set login false when passed LOGOUT_SUCCESS", () => {
    
    // arrange
    const action = actions.logoutSuccess(null);
    
    // act 
    const newState = accountReducer({}, action);

    // assert
    expect(newState.isLogin).toEqual(false);
    expect(newState.user).toEqual(null);
});
