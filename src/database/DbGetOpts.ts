export default interface DbGetOpts {
  orderBy?: DbOrderBy | DbOrderBy[];
  where?: DbWhere | DbWhere[];
  limit?: number;
}

export interface DbOrderBy {
  field: string,
  direction?: DbOrderByDirection
}

export interface DbWhere {
  field: string;
  operator: DbWhereOperator;
  value: any;
}

type DbOrderByDirection = 'asc' | 'desc';
type DbWhereOperator = '<' | '<=' | '==' | '>=' | '>' | 'array-contains' | 
  'in' | 'array-contains-any';

export { DbOrderByDirection, DbWhereOperator };
