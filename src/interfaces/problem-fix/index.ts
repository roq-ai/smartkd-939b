import { FeedbackInterface } from 'interfaces/feedback';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface ProblemFixInterface {
  id?: string;
  description: string;
  solution: string;
  company_id: string;
  created_at?: any;
  updated_at?: any;
  feedback?: FeedbackInterface[];
  company?: CompanyInterface;
  _count?: {
    feedback?: number;
  };
}

export interface ProblemFixGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  solution?: string;
  company_id?: string;
}
