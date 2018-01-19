import Controller from '@ember/controller';
import { match, not, gte, notEmpty, and } from '@ember/object/computed';

export default Controller.extend({
  headerMessage: 'Coming Soon',
  responseMessage: '',
  emailAddress: '',
  message: '',
  isValidEmail: match('emailAddress', /^.+@.+\..+$/),
  isValidMessage: notEmpty('message'),
  isLenght5OrMore: gte('message.length', 5) ,
  isValidForm: and('isValidEmail', 'isValidMessage', 'isLenght5OrMore'),
  isDisabled: not('isValidForm'),
  actions: {
    saveInvitation() {
      this.set('responseMessage', 'We got your message and we’ll get in touch soon');
      this.set('emailAddress', '');
    }
  }
});
