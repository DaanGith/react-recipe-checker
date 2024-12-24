import { Input } from "@chakra-ui/react";

export const TextInput = ({ ChangeFn, ...props}) => (
    <Input 
    w={700}
    variant="outline"
    bgColor="white"
    onChange={ChangeFn}
    {...props} />
  );

