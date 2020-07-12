import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  preImage: {
    width: "50%",
    height: "50%",
  },
  textInput: {
    height: 35,
    borderBottomColor: "teal",
    borderBottomWidth: 2,
    marginBottom: 30,
    width: "80%",
  },
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    bottom: "10%",
  },
  button: {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width: "50%",
  },
  preregister: {
    backgroundColor: "#F0FFFF",
    borderRadius: 20,
    margin: 10,
    paddingHorizontal: 40,
    color: "teal",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
  buttonText: {
    fontSize: 18,
    color: "white",
    textAlign: "center",
  },
});
