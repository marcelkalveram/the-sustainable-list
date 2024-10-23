import { Metadata } from "next";
import React from "react";

import { Article } from "components/content/Article/Article";
import { Container } from "components/content/Container/Container";
import { H2 } from "components/content/H2/H2";
import { H3 } from "components/content/H3/H3";
import { H4 } from "components/content/H4/H4";
import { List, ListItem } from "components/content/List/List";
import { Paragraph } from "components/content/Paragraph/Paragraph";

export const metadata: Metadata = {
  title: "Terms and conditions | the sustainable list",
};

const Terms = () => (
  <Container>
    <div>
      <div className="tsl_header">
        <H2>
          Terms and Conditions of <strong>thesustainablelist.com</strong>
        </H2>
        <Paragraph>These Terms govern</Paragraph>
        <List>
          <ListItem>the use of this Website, and,</ListItem>
          <ListItem>
            any other related Agreement or legal relationship with the Owner
          </ListItem>
        </List>
        <Paragraph>
          in a legally binding way. Capitalized words are defined in the
          relevant dedicated section of this document.
        </Paragraph>

        <Paragraph>The User must read this document carefully.</Paragraph>
      </div>
      <Paragraph>This Website is provided by:</Paragraph>
      <Paragraph>
        Marcel Kalveram <br />
        c/o The Sustainable List <br />
        Calle Sagunto 108-18 <br />
        46009 Valencia, España <br />
        VAT ID: ESY1711934N
      </Paragraph>
      <Paragraph>
        <b>Owner contact email:</b> marcel.kalveram@gmail.com
      </Paragraph>

      {/* <hr /> */}
      <H3 id="terms-of-use">TERMS OF USE</H3>
      <Article>
        <Paragraph>
          Unless otherwise specified, the terms of use detailed in this section
          apply generally when using this Website.
        </Paragraph>
        <Paragraph>
          Single or additional conditions of use or access may apply in specific
          scenarios and in such cases are additionally indicated within this
          document.
        </Paragraph>
        <p>
          By using this Website, Users confirm to meet the following
          requirements:
        </p>
      </Article>
      <H4 id="content-on-this_application">Content on this Website</H4>
      <Article>
        <Paragraph>
          Unless where otherwise specified or clearly recognizable, all content
          available on this Website is owned or provided by the Owner or its
          licensors.
        </Paragraph>
        <Paragraph>
          The Owner undertakes its utmost effort to ensure that the content
          provided on this Website infringes no applicable legal provisions or
          third-party rights. However, it may not always be possible to achieve
          such a result.
          <br />
          In such cases, without prejudice to any legal prerogatives of Users to
          enforce their rights, Users are kindly asked to preferably report
          related complaints using the contact details provided in this
          document.
        </Paragraph>
        <H4 id="access-to-external-resources">Access to external resources</H4>
        <Paragraph>
          Through this Website Users may have access to external resources
          provided by third parties. Users acknowledge and accept that the Owner
          has no control over such resources and is therefore not responsible
          for their content and availability.
        </Paragraph>
        <Paragraph>
          Conditions applicable to any resources provided by third parties,
          including those applicable to any possible grant of rights in content,
          result from each such third parties’ terms and conditions or, in the
          absence of those, applicable statutory law.
        </Paragraph>
        <H4 id="acceptable-use">Acceptable use</H4>
        <Paragraph>
          This Website and the Service may only be used within the scope of what
          they are provided for, under these Terms and applicable law.
        </Paragraph>
        <Paragraph>
          Users are solely responsible for making sure that their use of this
          Website and/or the Service violates no applicable law, regulations or
          third-party rights.
        </Paragraph>
      </Article>
      <H3 id="common-provisions">Common provisions</H3>
      <Article>
        <H4 id="no-waiver">No Waiver</H4>
        <Paragraph>
          The Owner’s failure to assert any right or provision under these Terms
          shall not constitute a waiver of any such right or provision. No
          waiver shall be considered a further or continuing waiver of such term
          or any other term.
        </Paragraph>
        <H4 id="service-interruption">Service interruption</H4>
        <Paragraph>
          To ensure the best possible service level, the Owner reserves the
          right to interrupt the Service for maintenance, system updates or any
          other changes, informing the Users appropriately.
        </Paragraph>
        <Paragraph>
          Within the limits of law, the Owner may also decide to suspend or
          terminate the Service altogether. If the Service is terminated, the
          Owner will cooperate with Users to enable them to withdraw Personal
          Data or information in accordance with applicable law.
        </Paragraph>
        <Paragraph>
          Additionally, the Service might not be available due to reasons
          outside the Owner’s reasonable control, such as “force majeure” (eg.
          labor actions, infrastructural breakdowns or blackouts etc).
        </Paragraph>
        <H4 id="service-reselling">Service reselling</H4>
        <Paragraph>
          Users may not reproduce, duplicate, copy, sell, resell or exploit any
          portion of this Website and of its Service without the Owner’s express
          prior written permission, granted either directly or through a
          legitimate reselling programme.
        </Paragraph>
        <H4 id="intellectual-property-rights">Intellectual property rights</H4>
        <Paragraph>
          Without prejudice to any more specific provision of these Terms, any
          intellectual property rights, such as copyrights, trademark rights,
          patent rights and design rights related to this Website are the
          exclusive property of the Owner or its licensors and are subject to
          the protection granted by applicable laws or international treaties
          relating to intellectual property.
        </Paragraph>
        <Paragraph>
          All trademarks — nominal or figurative — and all other marks, trade
          names, service marks, word marks, illustrations, images, or logos
          appearing in connection with this Website are, and remain, the
          exclusive property of the Owner or its licensors and are subject to
          the protection granted by applicable laws or international treaties
          related to intellectual property.
        </Paragraph>
        <H4 id="changes-to-these-terms">Changes to these Terms</H4>
        <Paragraph>
          The Owner reserves the right to amend or otherwise modify these Terms
          at any time. In such cases, the Owner will appropriately inform the
          User of these changes.
        </Paragraph>
        <Paragraph>
          Such changes will only affect the relationship with the User for the
          future.
        </Paragraph>
        <Paragraph>
          The continued use of the Service will signify the User’s acceptance of
          the revised Terms. If Users do not wish to be bound by the changes,
          they must stop using the Service. Failure to accept the revised Terms,
          may entitle either party to terminate the Agreement.
        </Paragraph>
        <Paragraph>
          The applicable previous version will govern the relationship prior to
          the User&apos;s acceptance. The User can obtain any previous version
          from the Owner.
        </Paragraph>
        <H4 id="assignment-of-contract">Assignment of contract</H4>
        <Paragraph>
          The Owner reserves the right to transfer, assign, dispose of by
          novation, or subcontract any or all rights or obligations under these
          Terms, taking the User’s legitimate interests into account. Provisions
          regarding changes of these Terms will apply accordingly.
        </Paragraph>
        <Paragraph>
          Users may not assign or transfer their rights or obligations under
          these Terms in any way, without the written permission of the Owner.
        </Paragraph>
        <H4 id="contacts">Contacts</H4>
        <Paragraph>
          All communications relating to the use of this Website must be sent
          using the contact information stated in this document.
        </Paragraph>
        <H4 id="severability">Severability</H4>
        <Paragraph>
          Should any provision of these Terms be deemed or become invalid or
          unenforceable under applicable law, the invalidity or unenforceability
          of such provision shall not affect the validity of the remaining
          provisions, which shall remain in full force and effect.
        </Paragraph>
      </Article>

      <H3>Definitions and legal references</H3>
      <Article>
        <H4>This Website (or this Application)</H4>
        <Paragraph>
          The property that enables the provision of the Service.
        </Paragraph>
        <H4>Agreement</H4>
        <Paragraph>
          Any legally binding or contractual relationship between the Owner and
          the User, governed by these Terms.
        </Paragraph>
        <H4>Owner (or We)</H4>
        <Paragraph>
          Indicates the natural person(s) or legal entity that provides this
          Website and/or the Service to Users.
        </Paragraph>
        <H4>Service</H4>
        <Paragraph>
          The service provided by this Website as described in these Terms and
          on this Website.
        </Paragraph>
        <H4>Terms</H4>
        <Paragraph>
          All provisions applicable to the use of this Website and/or the
          Service as described in this document, including any other related
          documents or agreements, and as updated from time to time.
        </Paragraph>
        <H4>User (or You)</H4>
        <Paragraph>
          Indicates any natural person or legal entity using this Website.
        </Paragraph>
      </Article>

      <Paragraph>Latest update: July 17, 2021</Paragraph>
    </div>
  </Container>
);

export default Terms;
