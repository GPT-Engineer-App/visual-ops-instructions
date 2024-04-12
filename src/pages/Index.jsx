import React, { useState } from "react";
import { Box, Heading, VStack, Button, Input, Image, Text, HStack, IconButton, useToast } from "@chakra-ui/react";
import { FaUpload, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Index = () => {
  const [jsonFile, setJsonFile] = useState(null);
  const [hmiImage, setHmiImage] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [operationSteps, setOperationSteps] = useState([]);
  const toast = useToast();

  const handleJsonUpload = (e) => {
    setJsonFile(e.target.files[0]);
  };

  const handleHmiUpload = (e) => {
    setHmiImage(e.target.files[0]);
  };

  const extractOperationSteps = () => {
    // TODO: Implement JSON parsing and name extraction logic
    // Extract operation steps from JSON and HMI image
    // Generate image sequence with overlaid instructions
    // Set operationSteps state with the generated steps
    setOperationSteps([
      {
        image: "https://images.unsplash.com/photo-1615522310480-a76fc24ee5da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxobWklMjBzY3JlZW5zaG90JTIwd2l0aCUyMHZhbHZlJTIwb3BlbnxlbnwwfHx8fDE3MTI5MTEwMzV8MA&ixlib=rb-4.0.3&q=80&w=1080",
        controller: "Controller 1",
        transition: "Transition 1",
        prompt: "Open valve",
        message: "Valve opened successfully",
      },
      {
        image: "https://images.unsplash.com/photo-1593491205049-7f032d28cf5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxobWklMjBzY3JlZW5zaG90JTIwd2l0aCUyMHB1bXAlMjBvbnxlbnwwfHx8fDE3MTI5MTEwMzZ8MA&ixlib=rb-4.0.3&q=80&w=1080",
        controller: "Controller 2",
        transition: "Transition 2",
        prompt: "Start pump",
        message: "Pump started",
      },
    ]);
    setCurrentStep(0);
    toast({
      title: "Operation steps generated",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  const handlePrevStep = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 0));
  };

  const handleNextStep = () => {
    setCurrentStep((prevStep) => Math.min(prevStep + 1, operationSteps.length - 1));
  };

  return (
    <Box p={8}>
      <Heading as="h1" size="xl" mb={8}>
        System Operation Visualizer
      </Heading>
      <VStack spacing={4} align="stretch">
        <HStack>
          <Input type="file" accept=".json" onChange={handleJsonUpload} />
          <Input type="file" accept="image/*" onChange={handleHmiUpload} />
          <Button leftIcon={<FaUpload />} colorScheme="blue" onClick={extractOperationSteps} disabled={!jsonFile || !hmiImage}>
            Generate Steps
          </Button>
        </HStack>
        {operationSteps.length > 0 && (
          <Box>
            <Image src={operationSteps[currentStep].image} mb={4} />
            <Text>
              <strong>Controller:</strong> {operationSteps[currentStep].controller}
            </Text>
            <Text>
              <strong>Transition:</strong> {operationSteps[currentStep].transition}
            </Text>
            <Text>
              <strong>Prompt:</strong> {operationSteps[currentStep].prompt}
            </Text>
            <Text>
              <strong>Message:</strong> {operationSteps[currentStep].message}
            </Text>
            <HStack mt={4}>
              <IconButton icon={<FaArrowLeft />} onClick={handlePrevStep} disabled={currentStep === 0} />
              <IconButton icon={<FaArrowRight />} onClick={handleNextStep} disabled={currentStep === operationSteps.length - 1} />
            </HStack>
          </Box>
        )}
      </VStack>
    </Box>
  );
};

export default Index;
