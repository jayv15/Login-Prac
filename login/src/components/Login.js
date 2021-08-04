import { Flex } from "@chakra-ui/layout";
import { Input } from "@chakra-ui/input";
import { Button, FormControl, Heading, useToast } from "@chakra-ui/react";
import { useRef } from "react";
import axios from "axios";
import Cookies from "js-cookie";


export default function Login() {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const toast = useToast();

  const Login = () => {
    let username = usernameRef.current.value;
    let password = passwordRef.current.value;

    axios
      .post("http://localhost:1337/auth/local", {
        identifier: username,
        password,
      })
      .then(({ data }) => {
        if (data.jwt) {
          Cookies.set("jwt", data.jwt);
          toast({
            status: "success",
            title: "Successfully logged in",
            
          });
          console.log(data.jwt);
          setTimeout(() => (window.location = "/main  "), 1200);
          return;
        }
        console.log(data.jwt);
      })
      .catch((err) => {
        toast({
          status: "error",
          title: "An error occured",
          description: `${err.response.data.message[0].messages[0].message}`,
         
        });
        console.log(err.response);
      });
  };

  return (
    <Flex
      height="100vh"
      alignItems="center"
      justifyContent="center"
      bgGradient="linear(to-r, green.200, pink.500)"
    >
      
      <Flex direction="column"  p={12} h="50%" rounded={1000} bgGradient="linear(to-r, green.200, pink.500)">
        <Heading mb={6}>Login If You Can</Heading>
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
        <Button onClick={Login} colorScheme="blackAlpha" mb={3} ml="82" width={120}>
          Test your luck
        </Button>
        <Button as="a" href="/register" variant="link" colorScheme="whiteAlpha">
          If your luck is not with you.
        </Button>
      </Flex>
    </Flex>
  );
}
