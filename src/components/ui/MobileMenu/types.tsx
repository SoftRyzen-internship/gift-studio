import { TContacts } from "../PhoneLink/types";

export type MobileMenuProps = {
  isMobile: boolean;
  contacts: TContacts;
  handleClick?: () => void;
  className?: string;
};
