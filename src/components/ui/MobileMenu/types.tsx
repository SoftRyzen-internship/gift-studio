import { TContacts } from "../PhoneLink/types";

export type MobileMenuProps = {
  isMobile: boolean;
  handleClick?: () => void;
  contacts: TContacts;
  className?: string;
};
