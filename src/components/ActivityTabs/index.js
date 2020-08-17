import React from "react";
import { Text } from "react-native";

import { TabBar } from "react-native-tab-view";

const SuggestionTabs = (props) => (
  <TabBar
    {...props}
    indicatorStyle={{
      backgroundColor: "#2c3537",
      width: 60,
      left: "10%",
    }}
    style={{
      backgroundColor: "#fff",
      width: 200,
      elevation: 0,
    }}
    renderLabel={({ route, focused, color }) => (
      <Text
        style={{
          textTransform: "capitalize",
          color: "#252a2d",
          fontWeight: "700",
          fontSize: 14,
        }}
      >
        {route.title}
      </Text>
    )}
  />
);

export default SuggestionTabs;
