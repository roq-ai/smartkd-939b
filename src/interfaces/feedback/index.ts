import { UserInterface } from 'interfaces/user';
import { ProblemFixInterface } from 'interfaces/problem-fix';
import { GetQueryInterface } from 'interfaces';

export interface FeedbackInterface {
  id?: string;
  content: string;
  user_id: string;
  problem_fix_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  problem_fix?: ProblemFixInterface;
  _count?: {};
}

export interface FeedbackGetQueryInterface extends GetQueryInterface {
  id?: string;
  content?: string;
  user_id?: string;
  problem_fix_id?: string;
}
