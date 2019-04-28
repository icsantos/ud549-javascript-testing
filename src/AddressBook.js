class AddressBook {
  constructor() {
    this.contacts = [];
    this.initialComplete = false;
  }

  getInitialContacts(callback) {
    setTimeout(() => {
      this.initialComplete = true;
      if (callback) {
        return callback();
      }
    }, 3);
  }

  addContact(contact) {
    this.contacts.push(contact);
  }

  getContact(index) {
    return this.contacts[index];
  }

  deleteContact(index) {
    this.contacts.splice(index, 1);
  }
}
