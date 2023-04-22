import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

const App = () => {
  return (
    <div className="box">
      <div className="form">
        <h1>Phonebook</h1>
        <ContactForm />
      </div>

      <div className="contact">
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </div>
  );
};
export default App;
