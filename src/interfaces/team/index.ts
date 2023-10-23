import { EmployeeInterface } from 'interfaces/employee';
import { TeamUserInterface } from 'interfaces/team-user';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface TeamInterface {
  id?: string;
  description?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  employee?: EmployeeInterface[];
  team_user?: TeamUserInterface[];
  user?: UserInterface;
  _count?: {
    employee?: number;
    team_user?: number;
  };
}

export interface TeamGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
