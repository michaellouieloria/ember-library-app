import Route from '@ember/routing/route';

export default Route.extend({

  model() {
    return this.store.createRecord('contact');
  },

  actions: {

    saveContact(newContact) {
      newContact.save().then(() => this.refresh());
      this.controller.set('responseMessage', 'We got your message and we’ll get in touch soon');

    },

    willTransition() {
      // rollbackAttributes() removes the record from the store
      // if the model 'isNew'
      this.controller.get('model').rollbackAttributes();
    }
  }
});
