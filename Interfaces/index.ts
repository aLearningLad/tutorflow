export interface Isidebar {
  slug?: string;
}

export interface Imodal {
  modalFor: string;
  btnIcon: React.ReactElement;
}

export interface Ipersoncard {
  inviteeList: string[];
  removeInvitee: (emailToRemove: string) => void;
  emailString: string;
}
