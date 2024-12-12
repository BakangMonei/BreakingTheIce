import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    paddingHorizontal: 30,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    paddingVertical: 20,
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
  },
  formContainer: {
    width: "100%",
  },
  input: {
    backgroundColor: "#222",
    color: "#fff",
    borderWidth: 1,
    borderColor: "#333",
    borderRadius: 5,
    padding: 15,
    marginBottom: 15,
  },
  inputError: {
    borderColor: "#ff3333",
  },
  errorText: {
    color: "#ff3333",
    fontSize: 10,
    marginBottom: 10,
  },
  forgotPasswordContainer: {
    alignSelf: "flex-end",
    marginBottom: 15,
  },
  forgotPasswordText: {
    color: "#ff3333",
    fontSize: 12,
  },
  loginButton: {
    backgroundColor: "#ff3333",
    padding: 15,
    borderRadius: 5,
    marginBottom: 20,
  },
  loginButtonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  socialImageButton: {
    backgroundColor: "#222",
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  socialIcon: {
    width: 40,
    height: 40,
  },
  registerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  registerText: {
    color: "#fff",
  },
  registerLinkText: {
    color: "#ff3333",
    fontWeight: "bold",
  },
  backToLoginContainer: {
    marginTop: 15,
    alignItems: "center",
  },
  backToLoginText: {
    color: "#ff3333",
  },
  inputGroup: {
    width: "100%",
  },
});
