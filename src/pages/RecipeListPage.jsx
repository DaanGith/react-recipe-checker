import { Center, Heading, Flex } from "@chakra-ui/react";
import { RecipeItemCard } from "../components/RecipeItemCard";
//import { useState } from "react";
import { data } from "../utils/data"; // is de JSON file
import { TextInput } from "../components/ui/TextInput";


//1ste pagina waar ALLE recepten in overzicht moeten staan!!
export const RecipeListPage = ({ clickFn }) => {
  // You can play around with the console log, but ultimately remove it once you are done
  // console.log(data.hits[0].recipe.label);
  /* Body */
  return (
    <>
        <Center className="recipe-page" bgColor="blue.500">
          <Heading color="white" mt="2rem" fontSize="3xl">
            Winc Recipe Checker
          </Heading>
        </Center>

        <Center p="2em" bgColor="blue.500">
          <TextInput />
        </Center>
        
        {/* Recipe Items  */}
        <Center flexDir="column" w="100vw" bg="blue.500">
          <Flex
            gap="2rem"
            alignItems="center"
            justify="center"
            flexWrap="wrap"
            flexDir="row"
          >
            {data.hits.map((recipe) => (
              <RecipeItemCard
                key={recipe.id}
                recipe={recipe}
                clickFn={clickFn}
                
              />
            ))}
          </Flex>
        </Center>
    </>
  );
};
