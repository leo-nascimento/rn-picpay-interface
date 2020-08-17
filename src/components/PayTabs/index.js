import React from "react";
import { Text } from "react-native";

import { TabBar } from "react-native-tab-view";

const PayTabs = (props) => (
  <TabBar
    {...props}
    indicatorStyle={{ backgroundColor: "#25a95d" }}
    style={{
      backgroundColor: "#fff",
    }}
    renderLabel={({ route, focused, color }) => (
      <Text
        style={{
          textTransform: "capitalize",
          color: focused ? "#20292d" : "#747c80",
          fontWeight: "700",
          fontSize: 17,
        }}
      >
        {route.title}
      </Text>
    )}
  />
);

export default PayTabs;
