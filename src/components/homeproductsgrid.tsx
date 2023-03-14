import { Product } from "@/pages";
import { Box, Grid } from "@chakra-ui/react";
import { Productcard } from "./productcard";

type Props = {
    products: Product[]
}

export function Homeproductsgrid(props: Props) {
    return (<Grid gridTemplateColumns={{
        base: "repeat(auto-fit, 255px)",
        md: "repeat(auto-fit, minmax(255px, 1fr))"
    }} gridAutoFlow={{
        base: "column",
        md: "row"
    }} alignItems="stretch" 
    overflowX="scroll" 
    gridAutoRows="1fr" 
    gridAutoColumns="255px" 
    scrollSnapType="x mandatory" 
    scrollSnapStop='always' 
    gap="30px">
        {props.products.map((product, i) => {
            return <Box marginLeft={{
                base: i == 0 ? "16px" : "0",
                md: "0"
            }} key={product.id} scrollSnapAlign="center" border={"solid 1px"} borderColor={"gray.200"} padding={"16px"}>
                <Productcard {...product} />
            </Box>;
        })}
    </Grid>);
}
