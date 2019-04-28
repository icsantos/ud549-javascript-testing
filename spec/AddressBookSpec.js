/* global AddressBook, Contact */
describe('Address Book', function() {
  let addressBook = {};
  let thisContact = {};

  beforeEach(function() {
    addressBook = new AddressBook();
    thisContact = new Contact();
  });

  it('should be able to add a contact', function() {
    addressBook.addContact(thisContact);

    expect(addressBook.getContact(0)).toBe(thisContact);
  });

  it('should be able to delete a contact', function() {
    addressBook.addContact(thisContact);
    addressBook.deleteContact(0);

    expect(addressBook.getContact(0)).not.toBeDefined();
  });
});

describe('Async Address Book', function() {
  const addressBook = new AddressBook();

  // `done` tells the framework our async function has completed
  beforeEach(function(done) {
    addressBook.getInitialContacts(function() {
      done();
    });
  });

  // `done` tells the framework which tests rely upon async execution
  it('should grab initial contacts', function(done) {
    expect(addressBook.initialComplete).toBe(true);
    done();
  });
});
