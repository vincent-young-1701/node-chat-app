const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {

    var users;

    beforeEach(() => {
        users = new Users();
        users.users = [
            {
                id:1,
                name:'Mike',
                room:'Node Course'
            },
            {
                id:2,
                name:'Jen',
                room:'React Course'
            },
            {
                id:3,
                name:'Freddie',
                room:'Node Course'
            }
        ]
    })

    it('should add new user', () => {
        var users = new Users();
        var user = {
            id: '123',
            name: 'Vincent',
            room: 'Star Trek'
        };
        var resUser = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user]);
    });

    it('should remove a user', () => {
        var user = users.removeUser(1);
        expect(user.id).toBe(1);
        expect(users.users.length).toBe(2);
    });

    it('should not remove a user', () => {
        var user = users.removeUser(4);
        expect(user).toBeUndefined();
        expect(users.users.length).toBe(3);
    });
    
    it('should find a user', () => {
        var user = users.getUser(1);
        expect(user).toEqual({
            id:1,
            name:'Mike',
            room:'Node Course'
        });
    });

    it('should not find a user', () => {
        var user = users.getUser(4);
        expect(user).toBeUndefined();
    });

    it('should return names for node course', () => {
        var userList = users.getUserList('Node Course');
        expect(userList).toEqual(['Mike', 'Freddie']);
    });

    it('should return names for react course', () => {
        var userList = users.getUserList('React Course');
        expect(userList).toEqual(['Jen']);
    });

});