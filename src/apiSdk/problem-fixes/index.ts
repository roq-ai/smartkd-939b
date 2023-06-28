import axios from 'axios';
import queryString from 'query-string';
import { ProblemFixInterface, ProblemFixGetQueryInterface } from 'interfaces/problem-fix';
import { GetQueryInterface } from '../../interfaces';

export const getProblemFixes = async (query?: ProblemFixGetQueryInterface) => {
  const response = await axios.get(`/api/problem-fixes${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createProblemFix = async (problemFix: ProblemFixInterface) => {
  const response = await axios.post('/api/problem-fixes', problemFix);
  return response.data;
};

export const updateProblemFixById = async (id: string, problemFix: ProblemFixInterface) => {
  const response = await axios.put(`/api/problem-fixes/${id}`, problemFix);
  return response.data;
};

export const getProblemFixById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/problem-fixes/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteProblemFixById = async (id: string) => {
  const response = await axios.delete(`/api/problem-fixes/${id}`);
  return response.data;
};
