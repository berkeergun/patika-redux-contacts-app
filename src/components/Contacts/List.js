import { Button } from "@chakra-ui/react";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { contactSelectors } from "../../redux/contactSlice";
import { deleteAllContacts } from "../../redux/contactSlice";

import Item from "./Item";

function List() {
  const contacts = useSelector(contactSelectors.selectAll);
  const total = useSelector(contactSelectors.selectTotal);
  console.log(contacts);

  const dispatch = useDispatch();

  const handleDeleteAll = () => {
    if (window.confirm("are you sure?")) {
      dispatch(deleteAllContacts());
    }
  };

  return (
    <div>
      <ul className="list">
        {contacts.map((contact) => (
          <Item key={contact.id} item={contact} />
        ))}
      </ul>
      {total > 1 && (
        <div style={{ textAlign: "right", marginBottom: "5px" }}>
          <Button
            type="submit"
            colorScheme="whiteAlpha"
            cursor="pointer"
            size="xs"
            variant="outline"
            _hover={{ bg: "#adff2f80", color: "#fff" }}
            // fontSize="12px"
            onClick={() => handleDeleteAll()}
          >
            Delete All
          </Button>
        </div>
      )}
    </div>
  );
}

export default List;
