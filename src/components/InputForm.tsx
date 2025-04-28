import { Box, Field, Input, defineStyle } from "@chakra-ui/react";

const floatingStyles = defineStyle({
  pos: "absolute",
  bg: "bg",
  px: "0.5",
  top: "-3",
  insetStart: "2",
  fontWeight: "normal",
  pointerEvents: "none",
  transition: "position",
  _peerPlaceholderShown: {
    color: "fg.muted",
    top: "2.5",
    insetStart: "3",
  },
  _peerFocusVisible: {
    color: "fg",
    top: "-3",
    insetStart: "2",
  },
});

type InputFormProps = {
  text: string;
  type?: string;
  value: string | number | undefined;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputForm = ({ text, type, value, onChange }: InputFormProps) => {
  return (
    <Field.Root>
      <Box pos="relative" w="full">
        <Input
          type={type}
          className="peer"
          placeholder=""
          mb="3"
          value={value}
          onChange={onChange}
        />
        <Field.Label css={floatingStyles}>{text}</Field.Label>
      </Box>
    </Field.Root>
  );
};

export default InputForm;
