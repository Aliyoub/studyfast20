// import { useMemo, GestureResponderEvent, StyleSheet } from "react";
import { screenWidth, screenHeight } from "../myConstants/dimensions";
import { AntDesign } from "@expo/vector-icons";
import { myColors } from "../myConstants/colors/index";
import { useMemo } from "react";

export default function PlusButton(props: {
  onClick: ((event: any) => void) | undefined;
  // onClick: ((event: GestureResponderEvent) => void) | undefined;
}) {
  return useMemo(
    () => (
      <button
        style={{
          position: "fixed",
          bottom: 70,
          left: '80%',
          // bottom: screenWidth * 0.05,
          // right: screenWidth * 0.05,
          // width: screenWidth * 0.14,
          width: 40,
          // height: screenWidth * 0.14,
          height: 40,
          justifyContent: "center",
          alignItems: "center",
          // borderRadius: screenWidth * 0.07,
          borderRadius: 20,
          backgroundColor: myColors.lightPink, // 'lightblue'
          boxShadow: '0px 3px 6px #989796; 0px 3px 6px rgba(0, 0, 0, 0.23)',
          // boxShadow: '1px 1px 10px 0px #989796',
          // shadowColor: "#000000",
          // shadowOffset: {
          //   width: 0,
          //   height: 2,
          // },
          // shadowOpacity: 0.25,
          // shadowRadius: 4,
          // elevation: 5,
        }}
        onClick={props.onClick}
      >
        {/* <button onClick={props.onClick} style={styles.buttonContainerStyle}> */}
        <div
          style={{
            textAlign: "center",
            fontSize: 20,
            color: "#FFF", // PRIMARY_COLOR_LIGHT,
          }}
        >
          +
        </div>
        {/* <div style={styles.buttonTitleStyle}>+</div> */}
        {/* <AntDesign name="plus" color="white" style={styles.buttonTitleStyle} /> */}
      </button>
    ),
    []
  );
}

// .elevation-1 {
//   box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 2px rgba(0, 0, 0, 0.24);
// }

// .elevation-2 {
//   box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16), 0px 3px 6px rgba(0, 0, 0, 0.23);
// }

// .elevation-3 {
//   box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.19), 0px 6px 6px rgba(0, 0, 0, 0.23);
// }

// const styles = {
//   position: "absolute",
//   alignItems: "center",
//   justifyContent: "center",
//   backgroundColor: myColors.lightPink, // 'lightblue'
// }

// const styles = StyleSheet.create({
//   buttonContainerStyle: {
//     position: "absolute",
//     bottom: screenWidth * 0.05,
//     right: screenWidth * 0.05,
//     width: screenWidth * 0.14,
//     height: screenWidth * 0.14,
//     justifyContent: "center",
//     alignItems: "center",
//     borderRadius: screenWidth * 0.07,
//     backgroundColor: myColors.lightPink, // 'lightblue'
//     shadowColor: "#000000",
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//     elevation: 5,
//   },
//   buttonTitleStyle: {
//     textAlign: "center",
//     fontSize: 20,
//     color: "#FFF", // PRIMARY_COLOR_LIGHT,
//   },
// });
