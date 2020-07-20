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
    borderBottomWidth: 1,
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
    borderRadius: 30,
    paddingVertical: 15,
    paddingHorizontal: 12,
    width: "80%",
  },
  preregister: {
    backgroundColor: "#F0FFFF",
    width: "50%",
    borderRadius: 20,
    margin: 10,
    width: "60%",
    color: "teal",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    color: "white",
    textAlign: "center",
  },
  centerItem: {
    justifyContent: "center",
    alignItems: "center",
  },
});
