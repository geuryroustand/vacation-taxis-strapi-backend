import type { Schema, Attribute } from '@strapi/strapi';

export interface CardCard extends Schema.Component {
  collectionName: 'components_card_cards';
  info: {
    displayName: 'card';
    description: '';
  };
  attributes: {
    passenger: Attribute.String;
    suitcase: Attribute.String;
    cancellation: Attribute.String;
    flight: Attribute.String;
    noHidden: Attribute.String;
    trusted: Attribute.String;
    regularPrice: Attribute.String;
    discountedPrice: Attribute.String;
    selectedText: Attribute.String;
    oneWay: Attribute.String;
    roundTrip: Attribute.String;
    selectText: Attribute.String;
    upTo: Attribute.String;
  };
}

export interface ElementsShareRide extends Schema.Component {
  collectionName: 'components_elements_share_rides';
  info: {
    displayName: 'ShareRide';
  };
  attributes: {
    pickUp: Attribute.String;
    dropOff: Attribute.String;
    date: Attribute.Date;
    time: Attribute.Time;
    qtyOfTravelers: Attribute.Integer;
    price: Attribute.Integer;
  };
}

export interface FlightDetailFlightDetail extends Schema.Component {
  collectionName: 'components_flight_detail_flight_details';
  info: {
    displayName: 'flightDetail';
  };
  attributes: {
    arrivalAirline: Attribute.String;
    departureAirline: Attribute.String;
    flightNumber: Attribute.String;
  };
}

export interface GlobalAwards extends Schema.Component {
  collectionName: 'components_global_awards';
  info: {
    displayName: 'awards';
  };
  attributes: {
    awardHeading: Attribute.String;
    tripAdvisorHeading: Attribute.String;
  };
}

export interface GlobalBookingSearch extends Schema.Component {
  collectionName: 'components_global_booking_searches';
  info: {
    displayName: 'bookingSearch';
    description: '';
  };
  attributes: {
    inputPickUpPlaceHolder: Attribute.String;
    inputDropOffPlaceHolder: Attribute.String;
    passengers: Attribute.String;
    searchBtn: Attribute.String;
    isEmptyFeedbackPickUp: Attribute.String;
    isEmptyFeedbackDropOff: Attribute.String;
    pickUpText: Attribute.String;
    dateLabelArrival: Attribute.String;
    dateLabelDeparture: Attribute.String;
  };
}

export interface GlobalCopyright extends Schema.Component {
  collectionName: 'components_global_copyrights';
  info: {
    displayName: 'Copyright';
    description: '';
  };
  attributes: {
    copyright: Attribute.String;
    allRights: Attribute.String;
  };
}

export interface GlobalFaq extends Schema.Component {
  collectionName: 'components_global_faqs';
  info: {
    displayName: 'Faq';
    description: '';
  };
  attributes: {
    question: Attribute.String;
    answer: Attribute.Text;
  };
}

export interface GlobalFooter extends Schema.Component {
  collectionName: 'components_global_footer_s';
  info: {
    displayName: 'Footer ';
    description: '';
  };
  attributes: {
    followUs: Attribute.String;
    SocialLinks: Attribute.Component<'global.social-links', true>;
    CopyRight: Attribute.Component<'global.copyright', true>;
  };
}

export interface GlobalLink extends Schema.Component {
  collectionName: 'components_global_links';
  info: {
    displayName: 'link';
  };
  attributes: {
    label: Attribute.String;
    link: Attribute.String;
  };
}

export interface GlobalNavigation extends Schema.Component {
  collectionName: 'components_navigation_navigations';
  info: {
    displayName: 'Navigation';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    link: Attribute.String;
    hidden: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface GlobalSocialLinks extends Schema.Component {
  collectionName: 'components_global_social_links';
  info: {
    displayName: 'SocialLinks';
    description: '';
  };
  attributes: {
    platform: Attribute.String;
    link: Attribute.String;
    iconName: Attribute.String;
  };
}

export interface HeadingsHeadingOne extends Schema.Component {
  collectionName: 'components_headings_heading_ones';
  info: {
    displayName: 'HeadingOne';
  };
  attributes: {
    title: Attribute.String;
  };
}

export interface HeadingsHeadingTwo extends Schema.Component {
  collectionName: 'components_headings_heading_twos';
  info: {
    displayName: 'HeadingTwo';
  };
  attributes: {
    headingTwo: Attribute.String;
  };
}

export interface HeadingsParagraph extends Schema.Component {
  collectionName: 'components_headings_paragraphs';
  info: {
    displayName: 'Paragraph';
  };
  attributes: {
    paragraph: Attribute.Text;
  };
}

export interface HowItWorkHowItWork extends Schema.Component {
  collectionName: 'components_how_it_work_how_it_works';
  info: {
    displayName: 'HowItWork';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    iconName: Attribute.String;
    iconAlt: Attribute.String;
  };
}

export interface PassengerDetailPassengerDetail extends Schema.Component {
  collectionName: 'components_passenger_detail_passenger_details';
  info: {
    displayName: 'passengerDetail';
    description: '';
  };
  attributes: {
    firstName: Attribute.String;
    lastName: Attribute.String;
    email: Attribute.String;
    phoneNumberText: Attribute.String;
    firstNameInvalidFeedback: Attribute.String;
    lastNameInvalidFeedback: Attribute.String;
    emailInvalidFeedback: Attribute.String;
    emailPlacerHolder: Attribute.String;
  };
}

export interface PaymentPayment extends Schema.Component {
  collectionName: 'components_payment_payments';
  info: {
    displayName: 'payment';
  };
  attributes: {
    heading: Attribute.String;
    selectPayment: Attribute.String;
    paymentCardDesc: Attribute.String;
    paymentCashDesc: Attribute.String;
    paymentCash: Attribute.String;
    agreeLabel: Attribute.String;
    agreeFeedBack: Attribute.String;
    accepting: Attribute.String;
    terms: Attribute.String;
    and: Attribute.String;
    privacy: Attribute.String;
    pay: Attribute.String;
    book: Attribute.String;
  };
}

export interface PersonalInfoPersonalInfo extends Schema.Component {
  collectionName: 'components_personal_info_personal_infos';
  info: {
    displayName: 'PersonalInfo';
  };
  attributes: {
    firstName: Attribute.String;
    lastName: Attribute.String;
    email: Attribute.String;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 160;
      }>;
    metaImage: Attribute.Media;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    keywords: Attribute.Text;
    metaRobots: Attribute.String;
    structuredData: Attribute.JSON;
    metaViewport: Attribute.String;
    canonicalURL: Attribute.String;
  };
}

export interface TopLocationsTopLocations extends Schema.Component {
  collectionName: 'components_top_locations_top_locations';
  info: {
    displayName: 'TopLocations';
    description: '';
  };
  attributes: {
    locations: Attribute.String & Attribute.Required & Attribute.Unique;
    slug: Attribute.String & Attribute.Required;
    hiden: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface TrustedTrusted extends Schema.Component {
  collectionName: 'components_trusted_trusteds';
  info: {
    displayName: 'trusted';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    paragraph: Attribute.String;
    className: Attribute.String;
    svgName: Attribute.String;
    height: Attribute.Integer;
    width: Attribute.Integer;
    iconAlt: Attribute.String;
  };
}

export interface WayOneWay extends Schema.Component {
  collectionName: 'components_way_one_ways';
  info: {
    displayName: 'Way';
    description: '';
  };
  attributes: {
    oneWay: Attribute.String;
    return: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'card.card': CardCard;
      'elements.share-ride': ElementsShareRide;
      'flight-detail.flight-detail': FlightDetailFlightDetail;
      'global.awards': GlobalAwards;
      'global.booking-search': GlobalBookingSearch;
      'global.copyright': GlobalCopyright;
      'global.faq': GlobalFaq;
      'global.footer': GlobalFooter;
      'global.link': GlobalLink;
      'global.navigation': GlobalNavigation;
      'global.social-links': GlobalSocialLinks;
      'headings.heading-one': HeadingsHeadingOne;
      'headings.heading-two': HeadingsHeadingTwo;
      'headings.paragraph': HeadingsParagraph;
      'how-it-work.how-it-work': HowItWorkHowItWork;
      'passenger-detail.passenger-detail': PassengerDetailPassengerDetail;
      'payment.payment': PaymentPayment;
      'personal-info.personal-info': PersonalInfoPersonalInfo;
      'shared.meta-social': SharedMetaSocial;
      'shared.seo': SharedSeo;
      'top-locations.top-locations': TopLocationsTopLocations;
      'trusted.trusted': TrustedTrusted;
      'way.one-way': WayOneWay;
    }
  }
}
