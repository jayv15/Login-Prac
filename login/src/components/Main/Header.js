import { Heading,Box,Spacer,Center } from "@chakra-ui/layout";
import { Avatar, Button,  Menu,
    MenuButton,
    MenuList,
    MenuItem,Portal} from "@chakra-ui/react";
import {Dropdown} from "react-bootstrap"
import Cookies from "js-cookie";
import { useUser } from "../useUser";


export default function Header() {

    const user = useUser();
    const userInfo = () => {!user.loading && (
        <Box position="fixed">
            <Center>
                <Heading mb={2} size="md">Hi, {user.username}</Heading>

            </Center>
            <Button
                w="full"
                onClick={() => {
                    window.location = "/";
                    Cookies.remove("user-data");
                    Cookies.remove("jwt");
                }}
            >
                Logout
            </Button>
            
        </Box>
    )}

    return (<Box p={4} shadow="md" d='flex'>
    <Heading>Test App</Heading>
    <Spacer/>
    {!user.loading && (
        <Menu>
        <MenuButton ><Avatar /></MenuButton>
        <Portal>
          <MenuList>
            <MenuItem><Heading size="lg">Hi,{user.username}</Heading></MenuItem>
            <MenuItem>Profile</MenuItem>
            <MenuItem backgroundColor="gray.200"
                w="full"
                onClick={() => {
                    window.location = "/";
                    Cookies.remove("user-data");
                    Cookies.remove("jwt");
                }}
            >
                Logout
            </MenuItem>
          </MenuList>
        </Portal>
      </Menu>
        
           
            
            
        
    )}
    
    
    
    
  
    
</Box>);
}