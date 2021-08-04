import { Flex } from "@chakra-ui/layout";
import { Input } from "@chakra-ui/input";
import { Button, FormControl, Heading, useToast,Text } from "@chakra-ui/react";
import { useRef } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";


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
          description: `${err.response.data.message[0].messages[0].message}`,
          
        });
        
      });


  };

  return (
    <Flex
      height="100vh"
      alignItems="center"
      justifyContent="center"
      bgGradient="linear(to-r, green.200, pink.500)"
     
    >
      <Flex direction="column" background="green.400" p={12} rounded={1000} bgGradient="linear(to-r, green.200, pink.500)" border="GrayText">
        <Heading mb={6} ><Text 
  >Register Your A$$</Text></Heading>
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
        <Button onClick={Register} colorScheme="blackAlpha" mb={3} ml="90" width={120}>
          Lesss Goo
        </Button>
        <Button as="a" href="/" variant="link" colorScheme="whiteAlpha">
          <Link ></Link>
          Test your luck.
         
        </Button>
      </Flex>
    </Flex>
  );
}
