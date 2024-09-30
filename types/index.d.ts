declare type TtutRoomParams = {
  id: string;
};

declare type TsidebarData = {
  link: string;
  label: string;
  linkId: number;
  linkImg: React.ReactElement;
};

declare type Tsquaredata = {
  btnId: number;
  btnTitle: string;
  btnSub: string;
  btnImg: string;
  btnIcon: React.ReactElement;
};

declare type TreminderCard = {
  author: string; //this is user's email from Clerk
  reminderId: string; //generate this with nanoid
  title: string;
  startsAt: string;
  endsAt: string;
  detail: string;
  shareableLink: string;
  is_private: boolean;
};

declare type Totherremindercard = {
  allreminders: TreminderCard[];
};

// these are included within email sent as invite
declare type Tscheduled = {
  meetingLink: string; //base url/tutroom/id (generated via nanoid)
  entryId: string; //created via nanoid, will be attached to every email invite sent via nodemailer
};

declare type Tdeletereminderbtn = {
  reminderId: string;
};

declare type Tcalendertutdata = {
  author_id: string;
  date_of_tut: string;
  start_time: string;
  tut_id: string;
  invited_emails: string[];
  session_link: string;
  is_reminded: boolean;
};

declare type Tflowcontacts = {
  contact_id: string; // nanoid()
  created_by: string; //google ID of creator
  contact_email: string; //email address to be saved;
  contact_name: string;
};
