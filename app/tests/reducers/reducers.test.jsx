var expect = require('expect');
var df = require('deep-freeze-strict');

var reducers = require('reducers');

describe('Reducers', () =>{
  describe('searchTextReducer', ()=>{
    it('Should set searchText', () =>{
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'Some text to search'
      };
      var res = reducers.searchTextReducer(df(''), df(action));

      expect(res).toEqual(action.searchText);
    });
  });
});

describe('showCompletedReducer', () =>{
  it('should toggle showComplete', ()=>{
    var action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    };
    var res = reducers.showCompletedReducer(df(false), df(action));

    expect(res).toEqual(true);
  });

  describe('todosReducer', () =>{
    it('should add new todo', ()=>{
      var action = {
        type: 'ADD_TODO',
        todo: {
          id: '123',
          text: 'asdasd',
          completed: false,
          createdAt: 123123123
        }
      };
      var res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(action.todo);
    });
  });

  it('Should toggle todo', () => {
    var todos = [{
      id: '123',
      text: 'Something',
      completed: true,
      createdAt: 123,
      completedAt: 125
    }];
    var action = {
      type: 'TOGGLE_TODO',
      id: '123'
    };
    var res = reducers.todosReducer(df(todos), df(action));

    expect(res[0].completed).toEqual(false);
    expect(res[0].completedAt).toEqual(undefined);
  });

  it('Should add existing todos', () => {
    var todos = [{
      id: '111',
      text: 'Teste',
      completed: false,
      completedAt: undefined,
      createdAt: 33000
    }];
    var action = {
      type: 'ADD_TODOS',
      todos
    };
    var res = reducers.todosReducer(df([]), df(action));

    expect(res.length).toEqual(1);
    expect(res[0]).toEqual(todos[0]);
  });

});
