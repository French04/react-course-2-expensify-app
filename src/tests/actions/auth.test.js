import {login, logout} from '../../actions/auth';

test('generate login action object test', () => {
    const action = login('abc123');
    expect(action).toEqual({
        type: 'LOGIN',
        uid: 'abc123'
    });
});

test('generate logout action object test', () => {
    const action = logout();
    expect(action).toEqual({
        type: 'LOGOUT'
    });
});