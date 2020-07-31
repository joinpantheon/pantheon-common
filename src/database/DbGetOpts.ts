import { OrderByDirection, WhereFilterOp } from '@firebase/firestore-types';

export default interface DbGetOpts {
  orderBy?: DbOrderBy | DbOrderBy[];
  where?: DbWhere | DbWhere[];
  limit?: number;
}

export interface DbOrderBy {
  field: string,
  direction?: OrderByDirection
}

export interface DbWhere {
  field: string;
  operator: WhereFilterOp;
  value: any;
}
