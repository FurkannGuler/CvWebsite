"use client"
import React from 'react'
import { AiOutlineMenuFold } from "react-icons/ai";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Input,
  useDisclosure,
} from "@chakra-ui/react";




const Menu = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef<HTMLButtonElement>(null);
  return (
    <div className="min-[1200px]:hidden text-4xl hover:text-normal transition-colors delay-100">
    
      <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
        <AiOutlineMenuFold />
      </Button>
      <Drawer

        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
         size={"lg"}

      >
        <DrawerOverlay />
        <DrawerContent >
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Input placeholder="Type here..." />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export default Menu