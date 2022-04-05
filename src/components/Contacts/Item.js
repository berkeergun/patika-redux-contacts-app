import React from "react";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactSlice";
import { Link } from "react-router-dom";
import { Button, GridItem, SimpleGrid, Text } from "@chakra-ui/react";

function Item({ item }) {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    if (window.confirm("are you sure?")) {
      dispatch(deleteContact(id));
    }
  };

  return (
    <li>
      <SimpleGrid columns={3} spacing={1}>
        <GridItem>
          <Text textAlign="start">{item.name}</Text>
        </GridItem>

        <GridItem>
          <Text textAlign="end">{item.phone_number}</Text>
        </GridItem>

        <GridItem>
          <Text textAlign="end">

            <Link
              style={{ textDecoration: "none", color: "#ffffff" }}
              to={`/edit/${item.id}`}
            >
              <Button
                colorScheme="whiteAlpha"
                size="xs"
                variant="outline"
                _hover={{ bg: "#adff2f80", color: "#fff" }}
              >
                Edit
              </Button>
            </Link>
            <Button
              type="submit"
              colorScheme="whiteAlpha"
              size="xs"
              variant="outline"
              _hover={{ bg: "#adff2f80", color: "#fff" }}
              onClick={() => handleDelete(item.id)}
              marginLeft="2"
            >
              X
            </Button>
          </Text>
        </GridItem>
      </SimpleGrid>
    </li>
  );
}

export default Item;
