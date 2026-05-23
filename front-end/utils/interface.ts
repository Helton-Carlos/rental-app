export interface IMessage {
  status: boolean;
  title: string;
}

export interface IUser {
  id: string;
  email: string;
  role: 'admin' | 'basic' | 'premium';
}

export interface IAuthResponse {
  message: string;
  token: string;
  user: IUser;
}

export interface IContract {
  id: string;
  user_id: string;
  title: string;
  category: ContractCategory;
  status: ContractStatus;
  data: Record<string, unknown>;
  created_at: string;
  updated_at: string;
}

export interface IContractStats {
  total: number;
  active: number;
  pending: number;
}

export interface IApiResponse<T = unknown> {
  data: T | null;
  error: string | null;
  status: number;
}

export interface INavItem {
  name: string;
  path: string;
  icon: string;
}

export type ContractCategory =
  | 'residential'
  | 'commercial'
  | 'party_space'
  | 'vehicle'
  | 'product';

export type ContractStatus = 'active' | 'pending' | 'expired' | 'cancelled';

export type UserRole = 'admin' | 'basic' | 'premium';
