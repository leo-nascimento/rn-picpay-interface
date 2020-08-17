import React, { useState } from "react";

import { Feather, MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import {
  Card,
  CardHeader,
  Bold,
  Description,
  Avatar,
  CardFooter,
  Details,
  DateLabel,
  Option,
  OptionLabel,
  Actions,
} from "./styles";

const ActivityItem = ({ item }) => {
  const [like, setLike] = useState(false);

  return (
    <Card>
      <CardHeader>
        <Avatar source={{ uri: item.icon }} />
        <Description>
          <Bold>{item.user}</Bold> pagou a<Bold> {item.payTo}</Bold>
        </Description>
      </CardHeader>

      <CardFooter>
        <Details>
          <Feather name={"users"} color={"#ccc"} size={14} />
          <DateLabel>Há {item.time}</DateLabel>
        </Details>

        <Actions>
          <Option>
            <MaterialCommunityIcons
              size={19}
              color="#ccc"
              name="comment-outline"
            />
            <OptionLabel>{item.comments}</OptionLabel>
          </Option>
          {like ? (
            <Option onPress={() => setLike(false)}>
              <AntDesign size={19} color="#00ac4a" name="heart" />
              <OptionLabel>{item.likes}</OptionLabel>
            </Option>
          ) : (
            <Option onPress={() => setLike(true)}>
              <AntDesign size={19} color="#ccc" name="hearto" />
              <OptionLabel>{item.likes}</OptionLabel>
            </Option>
          )}
        </Actions>
      </CardFooter>
    </Card>
  );
};

export default ActivityItem;
