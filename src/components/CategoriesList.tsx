import styled from "@emotion/native";
import React from "react";
import { categories, fontSizes } from "src/constants";
import { CategoriesCard } from "./CategoriesCard";
import { ScrollView } from "react-native";

const CategoriesContainer = styled.View({
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
});

const Header = styled.Text({
    fontSize: fontSizes.header,
    fontWeight: "bold",
    textAlign: "center",
    margin: 16,
});

export const CategoriesList: React.FC = () => {
    return (
        <ScrollView>
            <Header>Select a category</Header>
            <CategoriesContainer>
                {categories?.map((category, index) => (
                    <CategoriesCard key={index} category={category} />
                ))}
            </CategoriesContainer>
        </ScrollView>
    );
};
