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

declare type Treminderdetails = {
  reminderId: string; //generate this with nanoid
  title: string;
  startsAt: string;
  endsAt: string;
  detail: string;
  shareableLink: string;
  private: boolean;
};
