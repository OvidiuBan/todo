define([
  'views/new_todo_view',
  'collection/todos',
  'ejs'

], function (ToDoView, ToDos) {
  var instance, subject;

  beforeEach(function () {
    instance = new ToDoView({model: new ToDos()});
    subject = function () {
      return instance;
    }
  });

  describe('render', function () {
    beforeEach(function () {
      subject = function () {
        instance.render();
      }
    });

    it('will render a text input', function () {
      subject();
      expect(instance.$('input[type="text"]').length).toEqual(1);
    });

    it('will render a button', function () {
      subject();
      expect(instance.$('input[type="submit"]').length).toEqual(1);
    });
  });

  describe('events', function () {
    beforeEach(function () {
      instance.render();
    });

    describe('click add button', function () {
      beforeEach(function () {
        subject = function () {
          instance.$('#newToDo').click();
        }
      });

      describe('when input has value', function () {
        beforeEach(function () {
          instance.$('input[type="text"]').val('nu');
        });

        it('adds item to collection', function () {
          subject();
          expect(instance.model.length).toEqual(1);
        });

        it('sets title on the added todo', function () {
          subject();
          expect(instance.model.first().get("title")).toEqual('nu');
        });

        it('clears the input after adding', function () {
          subject();
          expect(instance.$('input[type="text"]').val()).toEqual('');
        });
      });

      describe('when input has no value', function () {
        beforeEach(function () {
          instance.$('input[type="text"]').val('');
        });

        it('does not add item to collection', function () {
          subject();
          expect(instance.model.length).toEqual(0);
        })
      })
    });
  });
});
