'use client';

import Header from "../components/Header";
import { Text, Divider, List, ListItem, ListIcon, OrderedList, UnorderedList, Button } from '@chakra-ui/react';
import { UpDownIcon } from '@chakra-ui/icons'
import CareerCard from "../components/CareerCard";
import { useState } from 'react';

export default function Stacks() {

    const [reverseList, setReverseList] = useState(false);

    const toggleListDirection = () => {
        setReverseList(!reverseList);
    };

    return (
        <>
            <Header />
            <main className='main'>
                <Text textDecoration='underline' fontWeight='bold' letterSpacing='wider' color='white' fontSize='4xl' textAlign='center'>
                    Career
                </Text>
                <Text color='white' fontSize='medium' letterSpacing='wider' marginTop='4' marginBottom='10' textAlign='center'>
                    Cette section résume votre formation académique et votre expérience professionnelle.
                </Text>
                <Button backgroundColor='green.400' gap='3' colorScheme='green' size='sm' onClick={toggleListDirection} marginBottom='10'>
                    <UpDownIcon />
                    <Text>Sort</Text>
                </Button>
                <List gap='10' alignItems='center' display='flex' flexDirection={reverseList ? 'column-reverse' : 'column'}>
                    <ListItem>
                        <CareerCard currentWork={true} currentYearOfStudy={false} school={false} title="Developpeur Full-Stack chez Juridifeel" year='2022 - 20xx' description="pas encore de description... pas encore de description... pas encore de description... pas encore de description... pas encore de description..." />
                    </ListItem>
                    <ListItem>
                        <Divider width='50px' />
                    </ListItem>
                    <ListItem>
                        <CareerCard currentWork={false} currentYearOfStudy={true} school={true} title="Master en ingénierie du Web" year='2022 - 2024' description="pas encore de description... pas encore de description... pas encore de description... pas encore de description... pas encore de description..." />
                    </ListItem>
                    <ListItem>
                        <Divider width='50px' />
                    </ListItem>
                    <ListItem>
                        <CareerCard currentWork={false} currentYearOfStudy={false} school={false} title="Developpeur Front-end chez HappyDevFactory" year='2021 - 2022' description="En décembre 2021 je découvre le 'monde' de la startup car je commence mon alternance chez HappyDevFactory. Je réalise..." />
                    </ListItem>
                    <ListItem>
                        <Divider width='50px' />
                    </ListItem>
                    <ListItem>
                        <CareerCard currentWork={false} currentYearOfStudy={false} school={true} title="1er année d'ingénierie du Web" year='2021 - 2022' description="Septembre 2021, début de ma 1er année en ingénierie du Web (qui est en réalité ma 3e année d'étude supérieur). En premier année..." />
                    </ListItem>
                    <ListItem>
                        <Divider width='50px' />
                    </ListItem>
                    <ListItem>
                        <CareerCard currentWork={false} currentYearOfStudy={false} school={true} title='BTS SIO' year='2019 - 2021' description="J'ai eu mon BTS SIO (Services Informatiques aux Organisations) option SLAM (Solutions Logicielles et Applications Métiers). Pendant ces 2 années, j'ai survolé..." />
                    </ListItem>
                    <ListItem>
                        <Divider width='50px' />
                    </ListItem>
                    <ListItem margin='0 !important'>
                        <CareerCard currentWork={false} currentYearOfStudy={false} school={true} title='Terminal STI2D' year='2018 - 2019' description="J'ai eu mon BAC STI2D option SIN (Système d'Information et Numérique) avec mention assez-bien... Durant cette dernière année de lycée j'ai eu l'occasion..." />
                    </ListItem>
                </List>
                
            </main>
        </>
    )
}