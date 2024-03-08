import {  HStack, Image } from "@chakra-ui/react";
import logo from "../assets/Logo/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (serachText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <>
      <HStack padding= "10px">
        <Image src={logo} boxSize='50px' borderRadius= '30px' />
        <SearchInput onSearch = {onSearch}/>
        <ColorModeSwitch/>
      </HStack>
    </>
  );
};

export default NavBar;
