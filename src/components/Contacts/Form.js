import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactSlice";
// import {addContacts } from "../../redux/contactSlice";
import { Input, InputGroup, InputLeftElement, Button } from "@chakra-ui/react";
import { PhoneIcon, AtSignIcon } from "@chakra-ui/icons";

function Form() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !number) return false;

    //çoklu contact ekleme
    // const names = name.split(",");
    // const data = names.map((name) => ({ id: nanoid(10), name }))
    // dispatch(addContacts(data));

    dispatch(addContact({ id: nanoid(10), name, phone_number: number }));

    setName("");
    setNumber("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
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
            maxLength={22}
          />
        </InputGroup>
        {/* <br /> */}
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
            maxLength={22}

          />
        </InputGroup>

        <br />
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
            Add
          </Button>
          {/* <button type="submit">Add</button> */}
        </div>
      </form>
    </div>
  );
}

export default Form;
