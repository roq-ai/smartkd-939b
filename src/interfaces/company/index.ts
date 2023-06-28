import { ManualInterface } from 'interfaces/manual';
import { ProblemFixInterface } from 'interfaces/problem-fix';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface CompanyInterface {
  id?: string;
  description?: string;
  image?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  manual?: ManualInterface[];
  problem_fix?: ProblemFixInterface[];
  user?: UserInterface;
  _count?: {
    manual?: number;
    problem_fix?: number;
  };
}

export interface CompanyGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  image?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
