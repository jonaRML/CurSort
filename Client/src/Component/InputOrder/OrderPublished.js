import React from 'react'
import { Grid, GridItem, Button } from '@chakra-ui/react'

const OrderPublished = ({handleOrderByPublished}) => {
  return (
    <div>
      <Grid gridTemplateRows="repeat(3, 45px)" p={0}>
        <GridItem p={0}>
          <Button onClick={handleOrderByPublished} value="all">All</Button>
        </GridItem>
        <GridItem>
          <Button onClick={handleOrderByPublished} value="desc">New</Button>
        </GridItem>
        <GridItem>
          <Button onClick={handleOrderByPublished} value="asc">Old</Button>
        </GridItem>
      </Grid>
    </div>
  );
}

export default OrderPublished