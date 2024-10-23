import { Metadata } from "next";
import React from "react";

import { A } from "components/content/A/A";
import { Article } from "components/content/Article/Article";
import { Container } from "components/content/Container/Container";
import { H2 } from "components/content/H2/H2";
import { H3 } from "components/content/H3/H3";
import { H4 } from "components/content/H4/H4";
import { List, ListItem } from "components/content/List/List";
import { Paragraph } from "components/content/Paragraph/Paragraph";

export const metadata: Metadata = {
  title: "Privacy | The Sustainable List",
};

const Privacy = () => (
  <Container>
    <div>
      <H2>
        Privacy Policy of <strong>thesustainablelist.com</strong>
      </H2>
      <Article>
        <Paragraph>
          This Website collects some Personal Data from its Users.
        </Paragraph>
        <Paragraph>
          This document contains{" "}
          <A href="#california_info">
            a section dedicated to Californian consumers and their privacy
            rights
          </A>
          .
        </Paragraph>
        <Paragraph>
          This document can be printed for reference by using the print command
          in the settings of any browser.
        </Paragraph>
      </Article>

      <H3 id="owner_of_the_data">Owner and Data Controller</H3>
      <Article>
        <Paragraph>
          Marcel Kalveram <br />
          c/o The Sustainable List <br />
          Calle Sagunto 108-18 <br />
          46009 Valencia, España <br />
          VAT ID: ESY1711934N
        </Paragraph>
        <Paragraph>
          <strong>Owner contact email:</strong> marcel.kalveram@gmail.com
        </Paragraph>
      </Article>

      <H3 id="types_of_data">Types of Data collected</H3>
      <Article>
        <Paragraph>
          Among the types of Personal Data that this Website collects, by itself
          or through third parties, there are: Cookies; Usage Data; email
          address; various types of Data.
        </Paragraph>
        <Paragraph>
          Complete details on each type of Personal Data collected are provided
          in the dedicated sections of this privacy policy or by specific
          explanation texts displayed prior to the Data collection.
          <br />
          Personal Data may be freely provided by the User, or, in case of Usage
          Data, collected automatically when using this Website.
          <br />
          Unless specified otherwise, all Data requested by this Website is
          mandatory and failure to provide this Data may make it impossible for
          this Website to provide its services. In cases where this Website
          specifically states that some Data is not mandatory, Users are free
          not to communicate this Data without consequences to the availability
          or the functioning of the Service.
          <br />
          Users who are uncertain about which Personal Data is mandatory are
          welcome to contact the Owner.
          <br />
          Any use of Cookies – or of other tracking tools – by this Website or
          by the owners of third-party services used by this Website serves the
          purpose of providing the Service required by the User, in addition to
          any other purposes described in the present document and in the Cookie
          Policy, if available.
        </Paragraph>
        <Paragraph>
          Users are responsible for any third-party Personal Data obtained,
          published or shared through this Website and confirm that they have
          the third party&apos;s consent to provide the Data to the Owner.
        </Paragraph>
      </Article>

      <H3 id="place_of_processing">Mode and place of processing the Data</H3>
      <H4>Methods of processing</H4>
      <Article>
        <Paragraph>
          The Owner takes appropriate security measures to prevent unauthorized
          access, disclosure, modification, or unauthorized destruction of the
          Data.
          <br />
          The Data processing is carried out using computers and/or IT enabled
          tools, following organizational procedures and modes strictly related
          to the purposes indicated. In addition to the Owner, in some cases,
          the Data may be accessible to certain types of persons in charge,
          involved with the operation of this Website (administration, sales,
          marketing, legal, system administration) or external parties (such as
          third-party technical service providers, mail carriers, hosting
          providers, IT companies, communications agencies) appointed, if
          necessary, as Data Processors by the Owner. The updated list of these
          parties may be requested from the Owner at any time.
        </Paragraph>
        <H4>Legal basis of processing</H4>
        <Paragraph>
          The Owner may process Personal Data relating to Users if one of the
          following applies:
        </Paragraph>
        <List>
          <ListItem>
            Users have given their consent for one or more specific purposes.
            Note: Under some legislations the Owner may be allowed to process
            Personal Data until the User objects to such processing (“opt-out”),
            without having to rely on consent or any other of the following
            legal bases. This, however, does not apply, whenever the processing
            of Personal Data is subject to European data protection law;
          </ListItem>
          <ListItem>
            provision of Data is necessary for the performance of an agreement
            with the User and/or for any pre-contractual obligations thereof;
          </ListItem>
          <ListItem>
            processing is necessary for compliance with a legal obligation to
            which the Owner is subject;
          </ListItem>
          <ListItem>
            processing is related to a task that is carried out in the public
            interest or in the exercise of official authority vested in the
            Owner;
          </ListItem>
          <ListItem>
            processing is necessary for the purposes of the legitimate interests
            pursued by the Owner or by a third party.
          </ListItem>
        </List>
        <Paragraph>
          In any case, the Owner will gladly help to clarify the specific legal
          basis that applies to the processing, and in particular whether the
          provision of Personal Data is a statutory or contractual requirement,
          or a requirement necessary to enter into a contract.
        </Paragraph>
        <H4>Place</H4>
        <Paragraph>
          The Data is processed at the Owner&apos;s operating offices and in any
          other places where the parties involved in the processing are located.
          <br />
          Depending on the User&apos;s location, data transfers may involve
          transferring the User&apos;s Data to a country other than their own.
          To find out more about the place of processing of such transferred
          Data, Users can check the section containing details about the
          processing of Personal Data.
        </Paragraph>
        <Paragraph>
          Users are also entitled to learn about the legal basis of Data
          transfers to a country outside the European Union or to any
          international organization governed by public international law or set
          up by two or more countries, such as the UN, and about the security
          measures taken by the Owner to safeguard their Data.
          <br />
          If any such transfer takes place, Users can find out more by checking
          the relevant sections of this document or inquire with the Owner using
          the information provided in the contact section.
        </Paragraph>
        <H4>Retention time</H4>
        <Paragraph>
          Personal Data shall be processed and stored for as long as required by
          the purpose they have been collected for.
        </Paragraph>
        <Paragraph>Therefore:</Paragraph>
        <List>
          <ListItem>
            Personal Data collected for purposes related to the performance of a
            contract between the Owner and the User shall be retained until such
            contract has been fully performed.
          </ListItem>
          <ListItem>
            Personal Data collected for the purposes of the Owner’s legitimate
            interests shall be retained as long as needed to fulfill such
            purposes. Users may find specific information regarding the
            legitimate interests pursued by the Owner within the relevant
            sections of this document or by contacting the Owner.
          </ListItem>
        </List>
        <Paragraph>
          The Owner may be allowed to retain Personal Data for a longer period
          whenever the User has given consent to such processing, as long as
          such consent is not withdrawn. Furthermore, the Owner may be obliged
          to retain Personal Data for a longer period whenever required to do so
          for the performance of a legal obligation or upon order of an
          authority.
          <br />
          <br />
          Once the retention period expires, Personal Data shall be deleted.
          Therefore, the right of access, the right to erasure, the right to
          rectification and the right to data portability cannot be enforced
          after expiration of the retention period.
        </Paragraph>
      </Article>

      <H3 id="use_collected_data">The purposes of processing</H3>
      <Article>
        <Paragraph>
          The Data concerning the User is collected to allow the Owner to
          provide its Service, comply with its legal obligations, respond to
          enforcement requests, protect its rights and interests (or those of
          its Users or third parties), detect any malicious or fraudulent
          activity, as well as the following: Analytics, Managing contacts and
          sending messages, Contacting the User, Tag Management and Hosting and
          backend infrastructure.
        </Paragraph>
        <Paragraph>
          For specific information about the Personal Data used for each
          purpose, the User may refer to the section “Detailed information on
          the processing of Personal Data”.
        </Paragraph>
      </Article>

      <H3 id="data_processing_detailed_info">
        Detailed information on the processing of Personal Data
      </H3>
      <Article>
        <Paragraph>
          Personal Data is collected for the following purposes and using the
          following services:
        </Paragraph>
        <List>
          <ListItem>
            <h4>Contacting the User</h4>
            <p>
              <b>Mailing list or newsletter (this Website)</b>
            </p>
            <p>
              By registering on the mailing list or for the newsletter, the
              User’s email address will be added to the contact list of those
              who may receive email messages containing information of
              commercial or promotional nature concerning this Website. Your
              email address might also be added to this list as a result of
              signing up to this Website or after making a purchase.
            </p>

            <p>Personal Data processed: email address.</p>
            <p>
              Category of personal information collected according to CCPA:
              identifiers.
            </p>
          </ListItem>
          <ListItem>
            <h4>Hosting and backend infrastructure</h4>
            <p>
              This type of service has the purpose of hosting Data and files
              that enable this Website to run and be distributed as well as to
              provide a ready-made infrastructure to run specific features or
              parts of this Website.
            </p>
            <p>
              Some services among those listed below, if any, may work through
              geographically distributed servers, making it difficult to
              determine the actual location where the Personal Data are stored.
            </p>
            <p>
              <strong>Contentful (Contentful GmbH)</strong>
            </p>

            <p>
              Contentful is a hosting and backend service provided by Contentful
              GmbH.
            </p>

            <p>Personal Data processed: various types of Data.</p>
            <p>
              Place of processing: Germany –
              <A href="https://www.contentful.com/privacy/">Privacy Policy</A>.
            </p>
            <p>
              Category of personal information collected according to CCPA:
              internet information.
            </p>
          </ListItem>
        </List>
      </Article>

      <H3 id="rights_subjects">The rights of Users</H3>
      <Article>
        <Paragraph>
          Users may exercise certain rights regarding their Data processed by
          the Owner.
        </Paragraph>
        <Paragraph>
          In particular, Users have the right to do the following:
        </Paragraph>
        <List>
          <ListItem>
            <strong>Withdraw their consent at any time.</strong> Users have the
            right to withdraw consent where they have previously given their
            consent to the processing of their Personal Data.
          </ListItem>
          <ListItem>
            <strong>Object to processing of their Data.</strong> Users have the
            right to object to the processing of their Data if the processing is
            carried out on a legal basis other than consent. Further details are
            provided in the dedicated section below.
          </ListItem>
          <ListItem>
            <strong>Access their Data.</strong> Users have the right to learn if
            Data is being processed by the Owner, obtain disclosure regarding
            certain aspects of the processing and obtain a copy of the Data
            undergoing processing.
          </ListItem>
          <ListItem>
            <strong>Verify and seek rectification.</strong> Users have the right
            to verify the accuracy of their Data and ask for it to be updated or
            corrected.
          </ListItem>
          <ListItem>
            <strong>Restrict the processing of their Data.</strong> Users have
            the right, under certain circumstances, to restrict the processing
            of their Data. In this case, the Owner will not process their Data
            for any purpose other than storing it.
          </ListItem>
          <ListItem>
            <strong>
              Have their Personal Data deleted or otherwise removed.
            </strong>
            Users have the right, under certain circumstances, to obtain the
            erasure of their Data from the Owner.
          </ListItem>
          <ListItem>
            <strong>
              Receive their Data and have it transferred to another controller.
            </strong>
            Users have the right to receive their Data in a structured, commonly
            used and machine readable format and, if technically feasible, to
            have it transmitted to another controller without any hindrance.
            This provision is applicable provided that the Data is processed by
            automated means and that the processing is based on the User&apos;s
            consent, on a contract which the User is part of or on
            pre-contractual obligations thereof.
          </ListItem>
          <ListItem>
            <strong>Lodge a complaint.</strong> Users have the right to bring a
            claim before their competent data protection authority.
          </ListItem>
        </List>
        <h4>Details about the right to object to processing</h4>
        <Paragraph>
          Where Personal Data is processed for a public interest, in the
          exercise of an official authority vested in the Owner or for the
          purposes of the legitimate interests pursued by the Owner, Users may
          object to such processing by providing a ground related to their
          particular situation to justify the objection.
        </Paragraph>
        <Paragraph>
          Users must know that, however, should their Personal Data be processed
          for direct marketing purposes, they can object to that processing at
          any time without providing any justification. To learn, whether the
          Owner is processing Personal Data for direct marketing purposes, Users
          may refer to the relevant sections of this document.
        </Paragraph>
        <h4>How to exercise these rights</h4>
        <Paragraph>
          Any requests to exercise User rights can be directed to the Owner
          through the contact details provided in this document. These requests
          can be exercised free of charge and will be addressed by the Owner as
          early as possible and always within one month.
        </Paragraph>
      </Article>

      <H3 id="further_data_processing_info">
        Additional information about Data collection and processing
      </H3>
      <Article>
        <H4>Legal action</H4>
        <Paragraph>
          The User&apos;s Personal Data may be used for legal purposes by the
          Owner in Court or in the stages leading to possible legal action
          arising from improper use of this Website or the related Services.
          <br />
          The User declares to be aware that the Owner may be required to reveal
          personal data upon request of public authorities.
        </Paragraph>
        <H4>Additional information about User&apos;s Personal Data</H4>
        <Paragraph>
          In addition to the information contained in this privacy policy, this
          Website may provide the User with additional and contextual
          information concerning particular Services or the collection and
          processing of Personal Data upon request.
        </Paragraph>
        <H4>System logs and maintenance</H4>
        <Paragraph>
          For operation and maintenance purposes, this Website and any
          third-party services may collect files that record interaction with
          this Website (System logs) use other Personal Data (such as the IP
          Address) for this purpose.
        </Paragraph>
        <H4>Information not contained in this policy</H4>
        <Paragraph>
          More details concerning the collection or processing of Personal Data
          may be requested from the Owner at any time. Please see the contact
          information at the beginning of this document.
        </Paragraph>
        <H4>How “Do Not Track” requests are handled</H4>
        <Paragraph>
          This Website does not support “Do Not Track” requests.
          <br />
          To determine whether any of the third-party services it uses honor the
          “Do Not Track” requests, please read their privacy policies.
        </Paragraph>
        <H4>Changes to this privacy policy</H4>
        <Paragraph>
          The Owner reserves the right to make changes to this privacy policy at
          any time by notifying its Users on this page and possibly within this
          Website and/or - as far as technically and legally feasible - sending
          a notice to Users via any contact information available to the Owner.
          It is strongly recommended to check this page often, referring to the
          date of the last modification listed at the bottom. <br />
          <br />
          Should the changes affect processing activities performed on the basis
          of the User’s consent, the Owner shall collect new consent from the
          User, where required.
        </Paragraph>
      </Article>

      <H3 id="california_info">Information for Californian consumers</H3>
      <Article>
        <Paragraph>
          This part of the document integrates with and supplements the
          information contained in the rest of the privacy policy and is
          provided by the business running this Website and, if the case may be,
          its parent, subsidiaries and affiliates (for the purposes of this
          section referred to collectively as “we”, “us”, “our”).
        </Paragraph>
        <Paragraph>
          The provisions contained in this section apply to all Users who are
          consumers residing in the state of California, United States of
          America, according to &quot;The California Consumer Privacy Act of
          2018&quot; (Users are referred to below, simply as “you”, “your”,
          “yours”), and, for such consumers, these provisions supersede any
          other possibly divergent or conflicting provisions contained in the
          privacy policy.
        </Paragraph>
        <Paragraph>
          This part of the document uses the term “personal information“ as it
          is defined in The California Consumer Privacy Act (CCPA).
        </Paragraph>
        <H4>Categories of personal information collected, disclosed or sold</H4>
        <Paragraph>
          In this section we summarize the categories of personal information
          that we&apos;ve collected, disclosed or sold and the purposes thereof.
          <strong>
            You can read about these activities in detail in the section titled
            “Detailed information on the processing of Personal Data” within
            this document.
          </strong>
        </Paragraph>
        <H4>
          Information we collect: the categories of personal information we
          collect
        </H4>
        <Paragraph>
          We have collected the following categories of personal information
          about you: identifiers and internet information.
        </Paragraph>
        <Paragraph>
          We will not collect additional categories of personal information
          without notifying you.
        </Paragraph>
        <H4>
          How we collect information: what are the sources of the personal
          information we collect?
        </H4>
        <Paragraph>
          We collect the above mentioned categories of personal information,
          either directly or indirectly, from you when you use this Website.
        </Paragraph>
        <Paragraph>
          For example, you directly provide your personal information when you
          submit requests via any forms on this Website. You also provide
          personal information indirectly when you navigate this Website, as
          personal information about you is automatically observed and
          collected. Finally, we may collect your personal information from
          third parties that work with us in connection with the Service or with
          the functioning of this Website and features thereof.
        </Paragraph>
        <H4>
          How we use the information we collect: sharing and disclosing of your
          personal information with third parties for a business purpose
        </H4>
        <Paragraph>
          We may disclose the personal information we collect about you to a
          third party for business purposes. In this case, we enter a written
          agreement with such third party that requires the recipient to both
          keep the personal information confidential and not use it for any
          purpose(s) other than those necessary for the performance of the
          agreement.
        </Paragraph>
        <Paragraph>
          We may also disclose your personal information to third parties when
          you explicitly ask or authorize us to do so, in order to provide you
          with our Service.
        </Paragraph>
        <Paragraph>
          To find out more about the purposes of processing, please refer to the
          relevant section of this document.
        </Paragraph>
        <H4>Sale of your personal information</H4>
        <Paragraph>
          For our purposes, the word “sale” means any “selling, renting,
          releasing, disclosing, disseminating, making available, transferring
          or otherwise communicating orally, in writing, or by electronic means,
          a consumer&apos;s personal information by the business to
          <strong>
            another business or a third party, for monetary or other valuable
            consideration
          </strong>
          ”.
        </Paragraph>
        <Paragraph>
          This means that, for example, a sale can happen whenever an
          application runs ads, or makes statistical analyses on the traffic or
          views, or simply because it uses tools such as social network plugins
          and the like.
        </Paragraph>
        <H4>Your right to opt out of the sale of personal information</H4>
        <Paragraph>
          You have the right to opt out of the sale of your personal
          information. This means that whenever you request us to stop selling
          your data, we will abide by your request.
          <br />
          Such requests can be made freely, at any time, without submitting any
          verifiable request, simply by following the instructions below.
        </Paragraph>
        <H4>Instructions to opt out of the sale of personal information</H4>
        <Paragraph>
          If you’d like to know more, or exercise your right to opt out in
          regard to all the sales carried out by this Website, both online and
          offline, you can contact us for further information using the contact
          details provided in this document.
        </Paragraph>
        <H4>
          What are the purposes for which we use your personal information?
        </H4>
        <Paragraph>
          We may use your personal information to allow the operational
          functioning of this Website and features thereof (“business
          purposes”). In such cases, your personal information will be processed
          in a fashion necessary and proportionate to the business purpose for
          which it was collected, and strictly within the limits of compatible
          operational purposes.
        </Paragraph>
        <Paragraph>
          We may also use your personal information for other reasons such as
          for commercial purposes (as indicated within the section “Detailed
          information on the processing of Personal Data” within this document),
          as well as for complying with the law and defending our rights before
          the competent authorities where our rights and interests are
          threatened or we suffer an actual damage.
        </Paragraph>
        <Paragraph>
          We will not use your personal information for different, unrelated, or
          incompatible purposes without notifying you.
        </Paragraph>
      </Article>
      <Article>
        <H3>Your California privacy rights and how to exercise them</H3>
        <H4>The right to know and to portability</H4>
        <Paragraph>
          You have the right to request that we disclose to you:
        </Paragraph>
        <List>
          <ListItem>
            the categories and sources of the personal information that we
            collect about you, the purposes for which we use your information
            and with whom such information is shared;
          </ListItem>
          <ListItem>
            in case of sale of personal information or disclosure for a business
            purpose, two separate lists where we disclose:
            <ul>
              <li>
                for sales, the personal information categories purchased by each
                category of recipient; and
              </li>
              <li>
                for disclosures for a business purpose, the personal information
                categories obtained by each category of recipient.
              </li>
            </ul>
          </ListItem>
        </List>
        <Paragraph>
          The disclosure described above will be limited to the personal
          information collected or used over the past 12 months.
        </Paragraph>
        <Paragraph>
          If we deliver our response electronically, the information enclosed
          will be &quot;portable&quot;, i.e. delivered in an easily usable
          format to enable you to transmit the information to another entity
          without hindrance – provided that this is technically feasible.
        </Paragraph>
        <H4>The right to request the deletion of your personal information</H4>
        <Paragraph>
          You have the right to request that we delete any of your personal
          information, subject to exceptions set forth by the law (such as,
          including but not limited to, where the information is used to
          identify and repair errors on this Website, to detect security
          incidents and protect against fraudulent or illegal activities, to
          exercise certain rights etc.).
        </Paragraph>
        <Paragraph>
          If no legal exception applies, as a result of exercising your right,
          we will delete your personal information and direct any of our service
          providers to do so.
        </Paragraph>
        <H4>How to exercise your rights</H4>
        <Paragraph>
          To exercise the rights described above, you need to submit your
          verifiable request to us by contacting us via the details provided in
          this document.
        </Paragraph>
        <Paragraph>
          For us to respond to your request, it’s necessary that we know who you
          are. Therefore, you can only exercise the above rights by making a
          verifiable request which must:
        </Paragraph>
        <List>
          <ListItem>
            provide sufficient information that allows us to reasonably verify
            you are the person about whom we collected personal information or
            an authorized representative;
          </ListItem>
          <ListItem>
            describe your request with sufficient detail that allows us to
            properly understand, evaluate, and respond to it.
          </ListItem>
        </List>
        <Paragraph>
          We will not respond to any request if we are unable to verify your
          identity and therefore confirm the personal information in our
          possession actually relates to you.
        </Paragraph>
        <Paragraph>
          If you cannot personally submit a verifiable request, you can
          authorize a person registered with the California Secretary of State
          to act on your behalf.
        </Paragraph>
        <Paragraph>
          If you are an adult, you can make a verifiable request on behalf of a
          minor under your parental authority.
        </Paragraph>
        <Paragraph>
          You can submit a maximum number of 2 requests over a period of 12
          months.
        </Paragraph>
        <H4>How and when we are expected to handle your request</H4>
        <Paragraph>
          We will confirm receipt of your verifiable request within 10 days and
          provide information about how we will process your request.
        </Paragraph>
        <Paragraph>
          We will respond to your request within 45 days of its receipt. Should
          we need more time, we will explain to you the reasons why, and how
          much more time we need. In this regard, please note that we may take
          up to 90 days to fulfill your request.
        </Paragraph>
        <Paragraph>
          Our disclosure(s) will cover the preceding 12 month period.
        </Paragraph>
        <Paragraph>
          Should we deny your request, we will explain you the reasons behind
          our denial.
        </Paragraph>
        <Paragraph>
          We do not charge a fee to process or respond to your verifiable
          request unless such request is manifestly unfounded or excessive. In
          such cases, we may charge a reasonable fee, or refuse to act on the
          request. In either case, we will communicate our choices and explain
          the reasons behind it.
        </Paragraph>
      </Article>

      <H3 id="definitions_and_legal_references">
        Definitions and legal references
      </H3>

      <Article>
        <H4>Personal Data (or Data)</H4>
        <Paragraph>
          Any information that directly, indirectly, or in connection with other
          information — including a personal identification number — allows for
          the identification or identifiability of a natural person.
        </Paragraph>
        <H4>Usage Data</H4>
        <Paragraph>
          Information collected automatically through this Website (or
          third-party services employed in this Website), which can include: the
          IP addresses or domain names of the computers utilized by the Users
          who use this Website, the URI addresses (Uniform Resource Identifier),
          the time of the request, the method utilized to submit the request to
          the server, the size of the file received in response, the numerical
          code indicating the status of the server&apos;s answer (successful
          outcome, error, etc.), the country of origin, the features of the
          browser and the operating system utilized by the User, the various
          time details per visit (e.g., the time spent on each page within the
          Application) and the details about the path followed within the
          Application with special reference to the sequence of pages visited,
          and other parameters about the device operating system and/or the
          User&apos;s IT environment.
        </Paragraph>
        <H4>User</H4>
        <Paragraph>
          The individual using this Website who, unless otherwise specified,
          coincides with the Data Subject.
        </Paragraph>
        <H4>Data Subject</H4>
        <Paragraph>
          The natural person to whom the Personal Data refers.
        </Paragraph>
        <H4>Data Processor (or Data Supervisor)</H4>
        <Paragraph>
          The natural or legal person, public authority, agency or other body
          which processes Personal Data on behalf of the Controller, as
          described in this privacy policy.
        </Paragraph>
        <H4>Data Controller (or Owner)</H4>
        <Paragraph>
          The natural or legal person, public authority, agency or other body
          which, alone or jointly with others, determines the purposes and means
          of the processing of Personal Data, including the security measures
          concerning the operation and use of this Website. The Data Controller,
          unless otherwise specified, is the Owner of this Website.
        </Paragraph>
        <H4>This Website (or this Application)</H4>
        <Paragraph>
          The means by which the Personal Data of the User is collected and
          processed.
        </Paragraph>
        <H4>Service</H4>
        <Paragraph>
          The service provided by this Website as described in the relative
          terms (if available) and on this site/application.
        </Paragraph>
        <H4>European Union (or EU)</H4>
        <Paragraph>
          Unless otherwise specified, all references made within this document
          to the European Union include all current member states to the
          European Union and the European Economic Area.
        </Paragraph>
        <H4>Cookie</H4>
        <Paragraph>
          Cookies are Trackers consisting of small sets of data stored in the
          User&apos;s browser.
        </Paragraph>
        <H4>Tracker</H4>
        <Paragraph>
          Tracker indicates any technology - e.g Cookies, unique identifiers,
          web beacons, embedded scripts, e-tags and fingerprinting - that
          enables the tracking of Users, for example by accessing or storing
          information on the User’s device.
        </Paragraph>
        <hr />
        <H4>Legal information</H4>
        <Paragraph>
          This privacy statement has been prepared based on provisions of
          multiple legislations, including Art. 13/14 of Regulation (EU)
          2016/679 (General Data Protection Regulation).
        </Paragraph>
        <Paragraph>
          This privacy policy relates solely to this Website, if not stated
          otherwise within this document.
        </Paragraph>
      </Article>

      <Paragraph>Latest update: July 17, 2021</Paragraph>
    </div>
  </Container>
);

export default Privacy;
