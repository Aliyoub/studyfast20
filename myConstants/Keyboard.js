import { Keyboard } from "react-native";
export const keyBoard = () => {
  const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
    setKeyboardStatus("Keyboard Shown");
    // console.log("clavier visible");
  });
  const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
    setKeyboardStatus("Keyboard Hidden");
    // console.log("clavier chaché");
  });

  return () => {
    showSubscription.remove();
    hideSubscription.remove();
  };
};
