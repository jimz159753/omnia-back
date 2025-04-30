export interface BookingResponse {
  status: 'success' | 'error';
  data: {
    id: number;
    uid: string;
    title: string;
    description: string | null;
    hosts: {
      id: number;
      name: string;
      email: string;
      username: string;
      timeZone: string;
    }[];
    status: 'accepted' | 'pending' | 'rejected' | 'cancelled';
    start: string;
    end: string;
    duration: number;
    eventTypeId: number;
    eventType: {
      id: number;
      slug: string;
    };
    meetingUrl: string;
    location: string;
    absentHost: boolean;
    createdAt: string;
    updatedAt: string;
    metadata: Record<string, unknown> | null;
    rating: number | null;
    icsUid: string;
    attendees: {
      name: string;
      email: string;
      timeZone: string;
      language: string;
      absent: boolean;
      phoneNumber: string | null;
    }[];
    bookingFieldsResponses: {
      email: string;
      attendeePhoneNumber: string | null;
      name: string;
      [key: string]: unknown;
    };
  };
}
