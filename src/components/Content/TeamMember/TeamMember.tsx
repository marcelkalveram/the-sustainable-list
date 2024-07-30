import React from "react";
import { Heading, Paragraph, Pane, minorScale, majorScale } from "evergreen-ui";
import { colors } from "theme/constants";
import { className, styles } from "./styles";
import Image from "next/image";

export const TeamMember = ({ image, name, role, description }) => (
  <>
    <Pane
      display="flex"
      marginBottom={majorScale(4)}
      className={`team-member ${className}`}
    >
      <Image
        alt={"Image of " + name}
        src={image}
        width={128}
        height={128}
        style={{
          maxHeight: "128px",
          minWidth: "128px",
          borderRadius: "50%",
          marginRight: majorScale(3),
        }}
      />
      <Pane display="flex" flexDirection="column" marginTop={majorScale(3)}>
        <Heading
          size={500}
          color={colors.secondary}
          paddingBottom={minorScale(1)}
        >
          <b>{name}</b>
          <span
            style={{
              color: colors.secondary,
              paddingLeft: minorScale(1),
              opacity: 0.5,
            }}
          >
            ({role})
          </span>
        </Heading>
        <Paragraph>{description}</Paragraph>
      </Pane>
    </Pane>
    {styles}
  </>
);
