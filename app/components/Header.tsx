'use client'

import { IconButton, useDisclosure, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, List, ListItem } from '@chakra-ui/react'
import Link from 'next/link'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import React from 'react'

export default function Header() {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    return (
        <header className="header">
            <h1><Link href="/">Bourdel Théo</Link></h1>
            <nav className="header-nav">
                <ul className="header-nav-list">
                    <li className="header-nav-list-item"><Link href="/stacks">Stacks</Link></li>
                    <li className="header-nav-list-item"><Link href="/career">Career</Link></li>
                    <li className="header-nav-list-item"><Link href="/blog">Blog</Link></li>
                </ul>
            </nav>
            
            <IconButton className='burger-menu' onClick={onOpen} aria-label='Search database' icon={<HamburgerIcon />} />
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent backgroundColor='gray.800'>
                    <DrawerCloseButton color='white' />
                    <DrawerHeader color='white'>Navigation</DrawerHeader>

                    <DrawerBody>
                        <nav className="header-nav">
                            <List spacing={3}>
                                <ListItem color='white'>
                                    <Link onClick={onClose} href="/stacks">Stacks</Link>
                                </ListItem>
                                <ListItem color='white'>
                                    <Link onClick={onClose} href="/career">Career</Link>
                                </ListItem>
                                <ListItem color='white'>
                                    <Link onClick={onClose} href="/blog">Blog</Link>
                                </ListItem>
                            </List>
                        </nav>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </header>
    )
}