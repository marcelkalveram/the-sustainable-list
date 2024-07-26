import React from "react";
import { className, styles } from "./styles";
import { Pane, Link, UnorderedList, ListItem, majorScale } from "evergreen-ui";
import { colors } from "theme/constants";
import { useRouter } from "next/router";

export const BackgroundImage = () => {
  const router = useRouter();
  return (
    <>
      <Pane
        background="url(./forest-silhouette.jpg) top center no-repeat"
        style={{ backgroundSize: "cover" }}
        width="100%"
        opacity={0.75}
        height="33vw"
        position="relative"
        className={`footer ${className}`}
      >
        <Pane
          className="footer__menu"
          position="absolute"
          width="100%"
          height="100"
          bottom={0}
          left={0}
          backgroundColor="rgba(35,40,46,0.1)"
          display="flex"
          justifyContent="space-between"
          padding={majorScale(2)}
        >
          <UnorderedList className="ul" display="flex" marginLeft={0}>
            <ListItem color={colors.grey}>
              © Copyright 2022 The Sustainable List
            </ListItem>
          </UnorderedList>
          <UnorderedList className="ul" display="flex">
            <ListItem color={colors.grey}>
              {" "}
              <Link
                href="/terms"
                style={{ opacity: router.pathname === "/terms" ? 0.5 : 1 }}
              >
                Terms & Conditions
              </Link>
            </ListItem>
            <ListItem color={colors.grey}>
              {" "}
              <Link
                href="/privacy"
                style={{ opacity: router.pathname === "/privacy" ? 0.5 : 1 }}
              >
                Privacy policy
              </Link>
            </ListItem>
          </UnorderedList>
        </Pane>
      </Pane>
      {styles}
    </>
  );
};
