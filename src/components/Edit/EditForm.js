import { useState } from "react";
import { updateContact } from "../../redux/contactSlice";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Input, InputGroup, InputLeftElement, Button } from "@chakra-ui/react";
import { PhoneIcon, AtSignIcon } from "@chakra-ui/icons";

function EditForm({ contact }) {
  const history = useHistory();

  const [name, setName] = useState(contact.name);
  const [number, setNumber] = useState(contact.phone_number);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !number) return false;
    dispatch(
      updateContact({
        id: contact.id,
        changes: {
          name,
          phone_number: number,
        },
      })
    );
    history.goBack();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        /> */}
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<AtSignIcon color="white" />}
          />
          <Input
            color="#eaf8e6"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            marginBottom="2"
            focusBorderColor="lime"
            _placeholder={{ opacity: 0.74, color: 'white' }}

          />
        </InputGroup>
        {/* <br/> */}
        {/* <input
          placeholder="Phone Number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        /> */}
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<PhoneIcon color="white" />}
          />
          <Input
            color="#eaf8e6"
            type="tel"
            placeholder="Phone Number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            focusBorderColor="lime"
            _placeholder={{ opacity: 0.74, color: 'white' }}

          />
        </InputGroup>
        <br />
        {/* <div className="btn">
        <button type="submit">Update</button>
        </div> */}
        <div style={{ display: "flex", justifyContent: "end" }}>
          <Button
            type="submit"
            w="100px"
            rightIcon={<PhoneIcon />}
            color="white"
            colorScheme="cyan"
            variant="outline"
            _hover={{ color: "#2e7646", bg: "white" }}
          >
            Update
          </Button>
          {/* <button type="submit">Add</button> */}
        </div>
      </form>
    </div>
  );
}

export default EditForm;
