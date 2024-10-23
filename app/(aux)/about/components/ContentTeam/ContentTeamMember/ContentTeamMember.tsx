import Image from "next/image";
import React from "react";

import { Paragraph } from "components/content/Paragraph/Paragraph";

import styles from "./styles.module.css";

type Props = {
  image: string;
  name: string;
  role: string;
  description: string;
};

export const ContentTeamMember = ({
  image,
  name,
  role,
  description,
}: Props) => (
  <>
    <div className={styles.teamMember}>
      <Image
        alt={"Image of " + name}
        src={image}
        width={128}
        height={128}
        className={styles.teamMemberImage}
      />
      <div className={styles.teamMemberDetails}>
        <h3 className={styles.teamMemberDetailsHeading}>
          <b>{name}</b>
          <span className={styles.teamMemberDetailsRole}>({role})</span>
        </h3>
        <Paragraph>{description}</Paragraph>
      </div>
    </div>
  </>
);
