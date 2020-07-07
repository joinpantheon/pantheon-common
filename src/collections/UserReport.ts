import UserReportReason from "../enums/UserReportReason";

export default interface UserReport {
  id: string;
  gameId?: string;
  reporteeHonor?: number;
  reporteeUserId?: string;
  reporterHonor?: number;
  reporterUserId?: string;
  userReportReasons?: UserReportReason[];
  userReportText?: string;
}
