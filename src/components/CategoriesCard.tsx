import styled from "@emotion/native";
import React from "react";
import { Text } from "react-native";
import { colors, radii } from "src/constants";

const CategoriesCardContainer = styled.View({
    backgroundColor: colors.white,
    borderRadius: radii.polished,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOpacity: 1,
    shadowOffset: { height: 2 },
    elevation: 3,
    margin: 16,
    padding: 16,
    alignItems: "center",
    width: "25%",
    height: 100,
    justifyContent: "center",
});

type Props = {
    category: string;
};

export const CategoriesCard: React.FC<Props> = ({ category }) => {
    return (
        <CategoriesCardContainer>
            <Text>{category}</Text>
        </CategoriesCardContainer>
    );
};
