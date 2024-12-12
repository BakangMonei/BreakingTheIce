// src/components/Button.tsx
import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  TouchableOpacityProps,
} from "react-native";
import { COLORS } from "../theme/colors";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  variant?: "primary" | "secondary";
}

export const Button: React.FC<ButtonProps> = ({
  title,
  variant = "primary",
  style,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        variant === "primary" ? styles.primaryButton : styles.secondaryButton,
        style,
      ]}
      {...props}
    >
      <Text
        style={[
          styles.buttonText,
          variant === "primary" ? styles.primaryText : styles.secondaryText,
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  primaryButton: {
    backgroundColor: COLORS.PRIMARY_RED,
  },
  secondaryButton: {
    backgroundColor: COLORS.WHITE,
    borderWidth: 1,
    borderColor: COLORS.PRIMARY_BLACK,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
  },
  primaryText: {
    color: COLORS.WHITE,
  },
  secondaryText: {
    color: COLORS.PRIMARY_BLACK,
  },
});
