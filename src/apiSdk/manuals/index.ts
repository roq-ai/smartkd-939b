import axios from 'axios';
import queryString from 'query-string';
import { ManualInterface, ManualGetQueryInterface } from 'interfaces/manual';
import { GetQueryInterface } from '../../interfaces';

export const getManuals = async (query?: ManualGetQueryInterface) => {
  const response = await axios.get(`/api/manuals${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createManual = async (manual: ManualInterface) => {
  const response = await axios.post('/api/manuals', manual);
  return response.data;
};

export const updateManualById = async (id: string, manual: ManualInterface) => {
  const response = await axios.put(`/api/manuals/${id}`, manual);
  return response.data;
};

export const getManualById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/manuals/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteManualById = async (id: string) => {
  const response = await axios.delete(`/api/manuals/${id}`);
  return response.data;
};
