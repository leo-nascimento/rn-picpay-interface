import React from "react";

import ActivityItem from "../ActivityItem";
import { Container, Wrapper } from "./styles";
import { ACTIVITIES as activities } from "../../constants/activities";

const MyActivities = ({ isActiveTab }) => {
  if (!isActiveTab) {
    return <Wrapper />;
  }

  return (
    <Wrapper>
      <Container>
        {activities.map(
          (item, key) =>
            item.isMy && <ActivityItem key={item.key} item={item} />
        )}
      </Container>
    </Wrapper>
  );
};

export default MyActivities;
