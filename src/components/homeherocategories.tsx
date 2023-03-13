import Image from "next/image";
import { Categories } from "@/models/categories";
import { slugify } from "@/util/sluglify";
import { Grid, GridItemProps, GridItem } from "@chakra-ui/react";
import { CenteredLabel } from "./centeredlabel";


type Props = {
  categories: Categories[]
}

export function Homeherocategories({categories}: Props) {
    return (<Grid templateColumns={{
      base:"1fr 1fr",
      sm:"2fr 1fr 1fr" 
    }}  templateRows= {{
      base:"130px 154px 130px",
      sm:"200px 260px"
    }} gap={{
      base:"8px", 
      sm:"16px",
      lg:"32px" 
    }} 
      templateAreas={{
      base:`
       "cat1 cat1"
       "cat2 cat3"
       "cat4 cat4" 
       `,
       sm: `
       "cat1 cat2 cat3"
       "cat1 cat4 cat4"`
    }}>
      {categories.map((cat, index) => {
        const slug = slugify(cat);
        const imageUrl = `/pic-categories-${slug}.jpg`;
  
        return <GridItem fontSize={{
          base:"13px",
          sm:"18px"
        }} position="relative" w="100%" h="100%" gridArea={`cat${index+1}`} key={index}><Image src={imageUrl} style={{objectFit: "cover"}} fill={true} alt={cat} /> <CenteredLabel> {cat}</CenteredLabel> </GridItem>;
      })}
    </Grid>);
   }
  