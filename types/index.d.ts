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
