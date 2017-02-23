var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');
var AddTodo = require('AddTodo');

describe('TodoForm', () =>{
    it('Should exist', () => {
      expect(AddTodo).toExist();
    });

    it('should call onAddTodo when a value has been entered', () => {
      var spy = expect.createSpy();
      var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy} />);
      var $el = $(ReactDOM.findDOMNode(addTodo));

      addTodo.refs.todoitem.value = 'teste';
      TestUtils.Simulate.submit($el.find('form')[0]);

      expect(spy).toHaveBeenCalledWith('teste');
    });

    it('should not call onAddTodo if nothing has been entered', () => {
      var spy = expect.createSpy();
      var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy} />);
      var $el = $(ReactDOM.findDOMNode(addTodo));

      addTodo.refs.todoitem.value = '';
      TestUtils.Simulate.submit($el.find('form')[0]);

      expect(spy).toNotHaveBeenCalled();
    });

});
