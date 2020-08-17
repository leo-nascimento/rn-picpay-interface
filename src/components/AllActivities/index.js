import React from "react";

import ActivityItem from "../ActivityItem";
import Tips from "../Tips";
import Banner from "../Banner";
import { Container, Wrapper } from "./styles";
import { ACTIVITIES as activities } from "../../constants/activities";

const AllActivities = ({ isActiveTab }) => {
  if (!isActiveTab) {
    return <Wrapper />;
  }

  return (
    <Wrapper>
      <Container>
        {activities.map(
          (item, key) =>
            key === 0 && <ActivityItem key={item.key} item={item} />
        )}

        <Tips />

        {activities.map(
          (item, key) =>
            key > 0 && key < 4 && <ActivityItem key={item.key} item={item} />
        )}

        <Banner />

        {activities.map(
          (item, key) =>
            key > 0 && key > 3 && <ActivityItem key={item.key} item={item} />
        )}
      </Container>
    </Wrapper>
  );
};

export default AllActivities;
