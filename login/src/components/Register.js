import { Flex } from "@chakra-ui/layout";
import { Input } from "@chakra-ui/input";
import { Button, FormControl, Heading, useToast } from "@chakra-ui/react";
import { useRef } from "react";
import axios from "axios";
import Cookies from "js-cookie";

export default function Register() {
  const emailRef = useRef();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const toast = useToast();

  const Register = () => {
    let username = usernameRef.current.value;
    let email = emailRef.current.value;
    let password = passwordRef.current.value;

    axios
      .post("http://localhost:1337/auth/local/register", {
        username,
        email,
        password,
      })
      .then(({ data }) => {
        if (data.jwt) {
          Cookies.set("jwt", data.jwt);
          toast({
            status: "success",
            title: "Successfully Registerd",
          });
          return;
        }
        console.log(data);
      })
      .catch((err) => {
        toast({
          status: "error",
          title: "An error occured",
        });
        console.log(err.response);
      });


  };

  return (
    <Flex
      height="100vh"
      alignItems="center"
      justifyContent="center"
      background="#121221"
    >
      <Flex direction="column" background="teal" p={12} rounded={5}>
        <Heading mb={6}>Register Your A$$</Heading>
        <FormControl>
          <Input
            placeholder="Email Id"
            variant="filled"
            ref={emailRef}
            type="email"
            mb={3}
          />
        </FormControl>
        <FormControl>
          <Input
            placeholder="Username"
            variant="filled"
            ref={usernameRef}
            type="username"
            mb={3}
          />
        </FormControl>
        <FormControl>
          <Input
            placeholder="Password"
            variant="filled"
            ref={passwordRef}
            type="password"
            mb={3}
          />
        </FormControl>
        <Button onClick={Register} colorScheme="blackAlpha" mb={3}>
          Lesss Goo
        </Button>
        <Button as="a" href="/" variant="link" colorScheme="whiteAlpha">
          Test your luck.
        </Button>
      </Flex>
    </Flex>
  );
}
