'use client'

import { MoonIcon, SettingsIcon, SunIcon } from "@chakra-ui/icons";
import Header from "../components/Header";
import { Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react';
import StackCard from "../components/StackCard";
import { Wrap, WrapItem } from '@chakra-ui/react';

import AngularLogo from '../../public/images/angular.png';
import SymfonyLogo from '../../public/images/symfony.svg';
import DockerLogo from '../../public/images/docker.png';
import VueJsLogo from '../../public/images/vuejs.png';
import NodeJsLogo from '../../public/images/nodejs.png';
import ReactJsLogo from '../../public/images/reactjs.png';
import NextJsLogo from '../../public/images/nextjs.png';
import ChakraUiLogo from '../../public/images/chakraui.png';
import MongoDbLogo from '../../public/images/mongodb.png';
import PostgresLogo from '../../public/images/postgres.png';
import MySqlLogo from '../../public/images/mysql.png';
import GitLogo from '../../public/images/git.png';
import TailwindLogo from '../../public/images/tailwind.svg';
import LaravelLogo from '../../public/images/laravel.png';

export default function Stacks() {
    return (
        <>
            <Header />
            <main className='main'>
                <Text textDecoration='underline' fontWeight='bold' letterSpacing='wider' color='white' fontSize='4xl' textAlign='center'>
                    Stacks
                </Text>
                <Text color='white' fontSize='medium' letterSpacing='wider' marginTop='4' marginBottom='10' textAlign='center'>
                    Explorez mon arsenal technologique personnel, la palette d'outils et de compétences qui alimentent mes projets. 
                    Découvrez les technologies, les langages de programmation, et les frameworks que j'utilise.
                </Text>
                <Tabs variant='soft-rounded' colorScheme='green' align="center">
                    <TabList gap='4' flexWrap='wrap'>
                        <Tab backgroundColor='gray.800' _selected={{bg: "green.400", color: 'white'}}>All</Tab>
                        <Tab backgroundColor='gray.800' gap='2' _selected={{bg: "green.400", color: 'white'}}><SunIcon />Front-end</Tab>
                        <Tab backgroundColor='gray.800' gap='2' _selected={{bg: "green.400", color: 'white'}}><MoonIcon />Back-end</Tab>
                        <Tab backgroundColor='gray.800' gap='2' _selected={{bg: "green.400", color: 'white'}}><SettingsIcon /> DevOps</Tab>
                    </TabList>
                    <TabPanels marginTop='10'>
                        <TabPanel>
                            <Wrap justify='center' spacing='20px'>
                                <StackCard title='Angular' describe='Framework JS' imageUrl={AngularLogo} favorite backgroundColor='rgba(253, 132, 124, 0.20)' />
                                <StackCard title='Symfony' describe='Framework PHP' imageUrl={SymfonyLogo} favorite backgroundColor='rgba(255, 255, 255, 0.20)' />
                                <StackCard title='Docker' describe='DevOps' imageUrl={DockerLogo} favorite={false} backgroundColor='rgba(36, 150, 237, 0.20)' />
                                <StackCard title='VueJs' describe='Framework JS' imageUrl={VueJsLogo} favorite={false} backgroundColor='rgba(63, 185, 132, 0.20)' />
                                <StackCard title='NodeJs' describe='Framework JS' imageUrl={NodeJsLogo} favorite={false} backgroundColor='rgba(83, 158, 67, 0.20)' />
                                <StackCard title='ReactJs' describe='Library JS' imageUrl={ReactJsLogo} favorite={false} backgroundColor='rgba(97, 219, 251, 0.20)' />
                                <StackCard title='NextJs' describe='Framework JS' imageUrl={NextJsLogo} favorite={false} backgroundColor='rgba(255, 255, 255, 0.35)' />
                                <StackCard title='ChakraUi' describe='Framework CSS' imageUrl={ChakraUiLogo} favorite={true} backgroundColor='rgba(115, 203, 209, 0.20)' />
                                <StackCard title='MongoDb' describe='Base de donnée' imageUrl={MongoDbLogo} favorite={false} backgroundColor='rgba(19, 170, 82, 0.20)' />
                                <StackCard title='PostgresSql' describe='Base de donnée' imageUrl={PostgresLogo} favorite={true} backgroundColor='rgba(47, 103, 146, 0.20)' />
                                <StackCard title='MySql' describe='Base de donnée' imageUrl={MySqlLogo} favorite={false} backgroundColor='rgba(47, 103, 146, 0.20)' />
                                <StackCard title='Git' describe='Monitoring' imageUrl={GitLogo} favorite={false} backgroundColor='rgba(240, 80, 48, 0.20)' />
                                <StackCard title='TailWind' describe='Framework CSS' imageUrl={TailwindLogo} favorite={false} backgroundColor='rgba(56, 189, 248, 0.20)' />
                                <StackCard title='Laravel' describe='Framework PHP' imageUrl={LaravelLogo} favorite={false} backgroundColor='rgba(255, 41, 26, 0.20)' />
                            </Wrap>
                        </TabPanel>
                        <TabPanel>
                            <Wrap justify='center' spacing='20px'>
                                <StackCard title='Angular' describe='Framework JS' imageUrl={AngularLogo} favorite backgroundColor='rgba(253, 132, 124, 0.20)' />
                                <StackCard title='VueJs' describe='Framework JS' imageUrl={VueJsLogo} favorite={false} backgroundColor='rgba(63, 185, 132, 0.20)' />
                                <StackCard title='ReactJs' describe='Library JS' imageUrl={ReactJsLogo} favorite={false} backgroundColor='rgba(97, 219, 251, 0.20)' />
                                <StackCard title='NextJs' describe='Framework JS' imageUrl={NextJsLogo} favorite={false} backgroundColor='rgba(255, 255, 255, 0.35)' />
                                <StackCard title='ChakraUi' describe='Framework CSS' imageUrl={ChakraUiLogo} favorite={true} backgroundColor='rgba(115, 203, 209, 0.20)' />
                                <StackCard title='TailWind' describe='Framework CSS' imageUrl={TailwindLogo} favorite={false} backgroundColor='rgba(56, 189, 248, 0.20)' />
                            </Wrap>
                        </TabPanel>
                        <TabPanel>
                            <Wrap justify='center' spacing='20px'>
                                <StackCard title='Symfony' describe='Framework PHP' imageUrl={SymfonyLogo} favorite backgroundColor='rgba(255, 255, 255, 0.20)' />
                                <StackCard title='NodeJs' describe='Framework JS' imageUrl={NodeJsLogo} favorite={false} backgroundColor='rgba(83, 158, 67, 0.20)' />
                                <StackCard title='MongoDb' describe='Base de donnée' imageUrl={MongoDbLogo} favorite={false} backgroundColor='rgba(19, 170, 82, 0.20)' />
                                <StackCard title='PostgresSql' describe='Base de donnée' imageUrl={PostgresLogo} favorite={true} backgroundColor='rgba(47, 103, 146, 0.20)' />
                                <StackCard title='MySql' describe='Base de donnée' imageUrl={MySqlLogo} favorite={false} backgroundColor='rgba(47, 103, 146, 0.20)' />
                                <StackCard title='Laravel' describe='Framework PHP' imageUrl={LaravelLogo} favorite={false} backgroundColor='rgba(255, 41, 26, 0.20)' />
                            </Wrap>
                        </TabPanel>
                        <TabPanel>
                            <Wrap justify='center' spacing='20px'>
                                <StackCard title='Docker' describe='DevOps' imageUrl={DockerLogo} favorite={false} backgroundColor='rgba(36, 150, 237, 0.20)' />
                                <StackCard title='Git' describe='Monitoring' imageUrl={GitLogo} favorite={false} backgroundColor='rgba(240, 80, 48, 0.20)' />
                            </Wrap>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </main>
        </>
    )
}