import authReducer from '../../reducers/auth';

test('set uid for login test', () => {
    const action = {
        type: 'LOGIN',
        uid: '123abc'
    };
    const state = authReducer({}, action);
    expect(state.uid).toBe(action.uid);
});

test('set uid for logout test', () => {
    const action = {
        type: 'LOGOUT',
        uid: '123abc'
    };
    const state = authReducer({uid: '123abc'}, action);
    expect(state).toEqual({});
});