import {
  DeleteOutline,
  InsertDriveFileOutlined,
  MailOutline,
  Photo,
  SendOutlined,
  StarOutline,
} from "@mui/icons-material";

export const SIDEBAR_DATA = [
  {
    name: "inbox",
    title: "Inbox",
    icon: Photo,
  },
  {
    name: "sent",
    title: "Sent",
    icon: SendOutlined,
  },
  {
    name: "draft",
    title: "Draft",
    icon: InsertDriveFileOutlined,
  },
  {
    name: "starred",
    title: "Starred",
    icon: StarOutline,
  },
  {
    name: "bin",
    title: "Bin",
    icon: DeleteOutline,
  },
  {
    name: "allMail",
    title: "All Mail",
    icon: MailOutline,
  },
];
