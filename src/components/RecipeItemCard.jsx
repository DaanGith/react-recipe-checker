// import React from 'react';

import {
  Center,
  Card,
  CardBody,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  Tag,
  Box,
} from "@chakra-ui/react";
//import { Tag } from "./ui/RecipeItemPage";

//1ste pagina waar cards in staan. In RecipeListPage!
export const RecipeItemCard = ({ recipe, clickFn }) => {
  return (
    <Center>
      <Card
        mb="3em"
        bg="white"
        borderRadius="xl"
        maxW="sm" // = sm! afblijven, anders 5 op rij!
        h="40rem"
        onClick={() => clickFn(recipe)}
        _hover={{ transform: "scale(1.01)" }}
      >
        {/* image */}
        <CardBody>
          <Image
            h={60}
            w="md"
            objectFit="cover"
            src={recipe.image}
            borderTopRadius="xl"
          />

          {/* mealtype = lunch/dinner/...*/}
          <Stack mt="6">
            <Text
            >
              {recipe.mealType}
            </Text>

            {/* recipe label */}
            <Heading fontSize="25px" fontWeight="600" mb="2px">
              Recipe Label
              {recipe.label}
            </Heading>

            <Text fontSize="5px" textTransform="uppercase">
              <Tag m="2" bg="purple.200">
                Veggie or not
                {recipe.healthLabels}
              </Tag>
            </Text>

            {/* healthlabel */}
            <Text>healthLabels</Text>

            {/* diet label */}
            <Text>
              <Tag m="1" bg="green.200">
                {recipe.dietLabels}
              </Tag>
            </Text>

            <Flex gap={2}></Flex>

            {/* dish type */}
            <Text>Dish: {recipe.dishType}</Text>

            {/* cautions */}
            <Text mt="3">Cautions:</Text>
            <Box>
              {recipe.cautions}
                <Tag
              
                >
                  
                </Tag>
              
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </Center>
  );
};
