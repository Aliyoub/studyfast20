import React, { PropsWithChildren, useState } from "react";

type Props = PropsWithChildren<{
  props?: any;
  clearText: any;
  handleSearch: any;
  searchQuery: any;
}>;

const MySearch = ({ clearText, handleSearch, searchQuery }: Props) => {
  const [data, setData] = useState([]);
  return (
    <div
      style={{
        flex: 1,
        flexDirection: "row",
        flexWrap: "nowrap",
        margin: "7px 0 7px 0",
        padding: 1,
        borderRadius: 50,
        backgroundColor: "#A105CA",
      }}
    >
      <input
        placeholder="Rechercher"
        // placeholderTextColor="#F1EBEB"
        autoCapitalize="none"
        // autoCorrect={false}
        value={searchQuery}
        onChange={handleSearch}
        style={{
          padding: "10px 7px 10px 7px",

          borderRadius: 50,

          backgroundColor: "#FCA4F0",
          color: "#FFF",
          fontWeight: "bold",
          width: "100%",
        }}
      />

      <div
        style={{
          alignSelf: "center",
          color: "#FFF",
          position: "absolute",
          left: "92%",
        }}
        onClick={clearText}
      >
        X
      </div>
    </div>
  );
};

export default MySearch;
