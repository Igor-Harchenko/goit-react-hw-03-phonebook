import PropTypes from "prop-types";
import s from "./ContactList.module.css";

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul className={s.list}>
      {contacts.map((contact) => {
        return (
          <li className={s.item} key={contact.id}>
            <span>
              {contact.name}: {contact.number}
            </span>
            <button
              className={s.button}
              type="button"
              id={contact.id}
              onClick={() => deleteContact(contact.id)}
            >
              remove
            </button>
          </li>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array,
  deleteContact: PropTypes.func,
};

export default ContactList;
