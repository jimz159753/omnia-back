export interface IEventTypeResponse {
  status: string;
  data: {
    eventTypeGroups: EventTypeGroup[];
  };
}

interface EventTypeGroup {
  teamId: null;
  bookerUrl: string;
  membershipRole: null;
  profile: {
    slug: string;
    name: string;
    image: string;
  };
  eventTypes: {
    id: number;
    teamId: null;
    schedulingType: null;
    userId: number;
    metadata: {
      apps?: {
        giphy?: {
          enabled: boolean;
          thankYouPage: string;
        };
        stripe?: {
          enabled: boolean;
          credentialId: number;
          appCategories: string[];
          price: number;
          currency: string;
          paymentOption: string;
        };
      };
      multipleDuration?: number[];
    };
    description: string;
    hidden: boolean;
    slug: string;
    length: number;
    title: string;
    requiresConfirmation: boolean;
    position: number;
    offsetStart: number;
    profileId: null;
    eventName: string | null;
    parentId: null;
    timeZone: null;
    periodType: string;
    periodStartDate: null;
    periodEndDate: null;
    periodDays: number | null;
    periodCountCalendarDays: null;
    lockTimeZoneToggleOnBookingPage: boolean;
    requiresBookerEmailVerification: boolean;
    disableGuests: boolean;
    hideCalendarNotes: boolean;
    minimumBookingNotice: number;
    beforeEventBuffer: number;
    afterEventBuffer: number;
    seatsPerTimeSlot: null;
    onlyShowFirstAvailableSlot: boolean;
    seatsShowAttendees: boolean;
    seatsShowAvailabilityCount: boolean;
    scheduleId: null;
    price: number;
    currency: string;
    slotInterval: null;
    successRedirectUrl: null;
    isInstantEvent: boolean;
    aiPhoneCallConfig: null;
    assignAllTeamMembers: boolean;
    recurringEvent: null;
    locations: {
      type: string;
      address?: string;
      displayLocationPublicly?: boolean;
    }[];
    bookingFields: {
      name: string;
      type: string;
      sources: {
        id: string;
        type: string;
        label: string;
        fieldRequired?: boolean;
      }[];
      editable: string;
      required: boolean;
      defaultLabel?: string;
      defaultPlaceholder?: string;
      label?: string;
      hidden?: boolean;
      placeholder?: string;
      disableOnPrefill?: boolean;
      getOptionsAt?: string;
      optionsInputs?: {
        [key: string]: {
          type: string;
          required: boolean;
          placeholder: string;
        };
      };
      hideWhenJustOneOption?: boolean;
      views?: {
        id: string;
        label: string;
      }[];
      options?: {
        label: string;
        value: string;
      }[];
    }[];
    useEventTypeDestinationCalendarEmail: boolean;
    secondaryEmailId: null;
    bookingLimits: Record<string, unknown> | null;
    durationLimits: Record<string, unknown>;
    hashedLink: unknown[];
    children: unknown[];
    hosts: unknown[];
    safeDescription?: string;
    userIds: number[];
  }[];
  metadata: {
    membershipCount: number;
    readOnly: boolean;
  };
}
