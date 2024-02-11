import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/Logo/logo.webp";

const NavBar = () => {
  return (
    <>
      <HStack>
        <Image src={logo} boxSize='50px' borderRadius= '30px' />
        <Text> Nav Bar</Text>
      </HStack>
    </>
  );
};

export default NavBar;
