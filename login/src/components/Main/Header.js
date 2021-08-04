import { Heading,Box,Spacer } from "@chakra-ui/layout";
import { Avatar,AvatarBadge, Menu,MenuButton,MenuList,MenuItem,Portal} from "@chakra-ui/react";
import Cookies from "js-cookie";
import { useUser } from "../useUser";


export default function Header() {

    const user = useUser();
   
    return (
        <Box p={4} shadow="md" d='flex' >
        <Heading >Test App</Heading>
        <Spacer/>
        {!user.loading && (
            <Menu>
            <MenuButton mr={2} ><Avatar><AvatarBadge boxSize="1.2em" bg="green.500" /></Avatar></MenuButton>
            <Portal>
            <MenuList>
                <Heading size="lg" ml={3} mb={3}>Hi, {user.username}</Heading>
                <MenuItem>Profile</MenuItem>
                <MenuItem backgroundColor="gray.200"
                    w="full"
                    onClick={() => {
                        window.location = "/";
                        Cookies.remove("user-data");
                        Cookies.remove("jwt");
                    }}
                    _hover={{ bg:"red.600"}}
                >
                    Logout
                </MenuItem>
            </MenuList>
            </Portal>
            </Menu>
        )}
        </Box>
    );
}