import UserReportReason from "../enums/UserReportReason";

export default interface UserReport {
  id: string;
  gameId?: string;
  reporteeUserId?: string;
  reporteeHonor?: number;
  reporterUserId?: string;
  reporterHonor?: number;
  userReportReasons?: UserReportReason[];
  userReportText?: string;
}
