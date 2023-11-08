import React from 'react';
import { ColorModeSwitcher } from '../../../ColorModeSwitcher';
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  VStack,
  useDisclosure,
} from '@chakra-ui/react';
import {Link} from "react-router-dom"
import { RiDashboardFill, RiLogoutBoxLine, RiMenu5Fill } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { logout } from '../../../redux/actions/user.js';


const LinkButton = ({ url = '/', title = 'Home', onClose }) => (
  <Link onClick={onClose} to={url}>
    <Button variant={'ghost'}>{title}</Button>
  </Link>
);


const Header = ({isAuthenticated= false, user}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  

  const dispatch = useDispatch();

  const logoutHandler=()=>{
    onClose();
    dispatch(logout());
  }

  return (
    <>
      <ColorModeSwitcher />
      <Button
        onClick={onOpen}
        colorScheme="yellow"
        w={'12'}
        h={'12'}
        rounded={'full'}
        zIndex={'overlay'}
        position={'fixed'}
        top={'6'}
        left={'6'}
      >
        <RiMenu5Fill />
      </Button>

      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay backdropFilter={'blur(2px)'} />
        <DrawerContent>
          <DrawerHeader borderBottom={'1px'}>LearnEdge</DrawerHeader>
          <DrawerBody>
            <VStack spacing={'4'} alignItems={'flex-start'}>
              <LinkButton url="/" onClose={onClose} title="Home"></LinkButton>
              <LinkButton
                onClose={onClose}
                url="/courses"
                title="Browse All Courses"
              />
              <LinkButton onClose={onClose} url="/request" title="Request a Course"></LinkButton>
              <LinkButton onClose={onClose} url="/contact" title="Contact Us"></LinkButton>
              <LinkButton onClose={onClose} url="/about" title="About"></LinkButton>

              <HStack
                justifyContent={'space-evenly'}
                position={'absolute'}
                bottom={'2rem'}
                width={'80%'}
              >
                {isAuthenticated ? (
                  <>
                    <VStack>
                      <HStack>
                        <Link to={'/profile'} onClick={onClose}>
                          <Button colorScheme="yellow" variant={'ghost'}>
                            Profile
                          </Button>
                        </Link>

                        <Button variant={'ghost'} onClick={logoutHandler}>
                          <RiLogoutBoxLine />
                          Log Out
                        </Button>
                      </HStack>


                      {user && user.role === 'admin' && (
                <Link to="/admin/dashboard" onClick={onClose}>
                  <Button colorScheme='purple' variant={'ghost'}>
                    <RiDashboardFill style={{margin:'4px'}} />
                    Dashboard
                  </Button>
                </Link>
              )}

                    </VStack>
                  </>
                ) : (
                  <>
                    <Link onClick={onClose} to="/login">
                      <Button colorScheme={'yellow'}>Login</Button>
                    </Link>

                    <p>OR</p>

                    <Link onClick={onClose} to="/register">
                      <Button colorScheme={'yellow'}>Sign Up</Button>
                    </Link>
                  </>
                )}
              </HStack>

            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
