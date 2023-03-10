import Link from "next/link";
import Image from "next/image";
import { Container, Flex } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'

export function Header() {
    return (<Flex as="header" w="100%"borderBottom="solid 2px" borderColor="gray.100">
        <Container as ={Flex} justifyContent={"space-between"} alignItems="center" size="lg">
        <Box margin="16px 0">
            <Image src="/logo.svg" alt="" width={100} height={48} />
        </Box>
        <nav>
            <Flex as="ul" listStyleType="none" gap="32px">
                <li><Link href="">About Us</Link></li>
                <li><Link href="">Woman</Link></li>
                <li><Link href="">Men</Link></li>
                <li><Link href="">Beauty</Link></li>
                <li><Link href="">Accesories</Link></li>
                <li><Link href="">Blog</Link></li>
                <li><Link href="">Contact</Link></li>
            </Flex>
        </nav>

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