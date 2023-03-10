import Image from "next/image";
import { Categories } from "@/models/categories";
import { slugify } from "@/util/sluglify";
import { Grid, GridItemProps, GridItem } from "@chakra-ui/react";
import { CenteredLabel } from "./centeredlabel";


type Props = {
  categories: Categories[]
}

export function Homeherocategories({categories}: Props) {
    return (<Grid templateColumns="540px 255px 255px" gap="8px" templateRows="200px 260px">
      {categories.map((cat, key) => {
        const slug = slugify(cat);
        const imageUrl = `/pic-categories-${slug}.jpg`;

        const gridItemsProp: GridItemProps = {
          position: "relative",
          w: "100%",
          h: "100%"
        };
  
        if (key == 0) {
            gridItemsProp.rowSpan = 2;
        }
  
        if (key == categories.length - 1) {
            gridItemsProp.colSpan = 2;
        }
  
        {
          /*if (key == 0) {
          return <GridItem position="relative" w="100%" h="100%" rowSpan={2} key={key}><Image src={imageUrl} fill={true} alt="{cat}"/> <CenteredLabel>{cat}</CenteredLabel> </GridItem>
          }
          if (key== categories.length-1){
          return <GridItem  position="relative" w="100%" h="100%" colSpan={2} key={key}><Image src={imageUrl} fill={true} alt="{cat}"/></GridItem>
          }*/
        }
        return <GridItem {...gridItemsProp} key={key}><Image src={imageUrl} fill={true} alt={cat} /> <CenteredLabel> {cat}</CenteredLabel> </GridItem>;
      })}
    </Grid>);
  }
  