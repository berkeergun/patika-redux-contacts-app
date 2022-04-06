import React from "react";
import { Link } from "react-router-dom";
import { Button, Text } from "@chakra-ui/react";

function Error404() {
  return (
    <div>
      <Text textAlign="center">This route was not found... </Text>
      <Text textAlign="center">
        <Link style={{ textDecoration: "none", color: "#ffffff" }} to="/">
          <Button
            color="white"
            size="xs"
            colorScheme="cyan"
            variant="outline"
            _hover={{ color: "#2e7646", bg: "white" }}
          >
            Go Home
          </Button>
        </Link>
      </Text>
    </div>
  );
}

export default Error404;
