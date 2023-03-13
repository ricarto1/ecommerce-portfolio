import Link from "next/link";
import Image from "next/image";
import { Container, Flex, IconButton, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { HamburgerIcon } from "@chakra-ui/icons";

const menu = [
    {
        title: "About Us",
        href: "#"
    },
    {
        title: "Woman",
        href: "#"
    },
    {
        title: "Men",
        href: "#"
    },
    {
        title: "Beauty",
        href: "#"
    },
    {
        title: "Accesories",
        href: "#"
    },
    {
        title: "Blog",
        href: "#"
    },
    {
        title: "Contact",
        href: "#"
    },
]

export function Header() {
    return (<Flex as="header" w="100%" borderBottom="solid 2px" borderColor="gray.100">
        <Container as={Flex} justifyContent={"space-between"} alignItems="center" size="lg">
            <Flex gap={"8px"} margin="16px 0">
                <Box as="nav" display={{ md: "none" }}>
                    <Menu>
                        <MenuButton
                            as={IconButton}
                            aria-label='Options'
                            icon={<HamburgerIcon />}
                            variant='outline'
                        />
                        <MenuList>
                            {
                                menu.map((item, index) => {
                                    return <MenuItem key={index}>
                                        <Link href={item.href}>{item.title}</Link>
                                    </MenuItem>
                                })
                            }
                        </MenuList>
                    </Menu>
                </Box>
                <Image src="/logo.svg" alt="" width={100} height={48} />
            </Flex>
            <Box as="nav" display={{ base: "none", sm: "block" }} >
                <Flex as="ul" listStyleType="none" gap="32px">
                    {
                        menu.map((item, index) => {
                            return <li key={index}><Link href={item.href}>{item.title}</Link></li>
                        })
                    }
                </Flex>
            </Box>

            <div className='commerce-menu'>
                <Flex as="ul" listStyleType="none" gap="24px">
                    <li>
                        <Link href=""><Image src="/ico-search.svg" width="24" height="24" alt="" /></Link>
                    </li>
                    <li>
                        <Link href=""><Image src="/ico-globe.svg" width="24" height="24" alt="" /></Link>
                    </li>
                    <li>
                        <Link href=""><Image src="/ico-user.svg" width="24" height="24" alt="" /></Link>
                    </li>
                    <li>
                        <Link href=""><Image src="/ico-bag.svg" width="24" height="24" alt="" /></Link>
                    </li>
                </Flex>
            </div>
        </Container>
    </Flex>);
}