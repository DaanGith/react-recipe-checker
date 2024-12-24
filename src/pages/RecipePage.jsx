import {
  Card,
  CardBody,
  Center,
  Flex,
  Image,
  Stack,
  Text,
  List,
  ListItem,
  Box,
  Container,

} from "@chakra-ui/react";
import { ArrowLeftIcon } from "@chakra-ui/icons";


//import { Button } from "../components/ui/Button";
//import { Tag } from "../components/ui/RecipeItemPage";

// Dit is de 2de pagina waar recepten zichtbaar moeten zijn na klik.
// items met voedingswaarden en ect...

export const RecipePage = ({ recipe, clickfn}) => {
 

  return (
    <>
      <Center bg="blue.500" h="100%">
        <Container 
          maxW="4xl"
          minH="100vh"
          bg="white"
        >

        {/* Return Button */}
        <Card  
           w="xxl" 
           h="100%" 
           mt="3rem"
          //  bg="green.200"
          >
            <Box
           w="100%"
           h="75%"
        >
          <ArrowLeftIcon
            boxSize={5}
            color="blue.200"
            p=""
            mt="2em"
            ml="2rem"
            size="md"
            fontWeight="10"
            _hover={{ transform: "scale(1.01)" }}
            onClick={() => (clickfn)}
            
          >
          </ArrowLeftIcon>
        </Box>
        
          <CardBody>
            
              {/* image */}
            <Image
              src={recipe.image}
              h="20rem"
              w="100%"
              objectFit={"cover"}
            />
            
            
            {/* Text linkerkant */}
            <Flex>
              <Box w="25rem" >
                <Stack 
                  mt="5" 
                >
            
            {/*  meal type */}
            <Text 
              size="md"
              textTransform="uppercase"
              fontSize="13px"
              color="gray.500"
              >
                Mealtype
                {recipe.mealType}
                
              </Text>
              
              {/* label */}
              <Text 
                fontFamily="sans-serif"
                fontSize="20px"
              >
                {recipe.label}
              </Text>
              
              {/* cooking time */}
              <List 
                mt="0.5rem"
              >
              <ListItem>
                  Total cooking time: {recipe.totalTime} minutes
              </ListItem>

              {/* servings */}
               <ListItem>Servings: {recipe.yield}</ListItem>
                 
                 {/* ingredients  */}
                 <Text
                  mt="0.5rem"
                  fontWeight="600"
                 >
                   Ingredients:
                 </Text>
              {recipe.ingredientLines}
                
              </List>
              
            </Stack>
            </Box>

            {/* healtlabel = rechterkant */}
            
              <Box 
                w="25rem" 
              >
              <Text
                mt="6" 
                fontWeight="600"
              >
                  Health labels:
              </Text>
                  
                   {recipe.healthLabels}
              {/* diet */}
              <Text
               fontWeight="500"
              >
                  Diet:
              </Text>
                    {recipe.dietLabels}

              {/* cautions */}
              <Text>
                Cautions:
              </Text>
                   {recipe.cautions}

                total nutrients:
             {recipe.totalNutrients}
                  
            </Box>
            </Flex>
            
          </CardBody>
        </Card>
        </Container>
      </Center>
    </>
  );
};
