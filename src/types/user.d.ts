export type user = {
  id: number;
  username: string;
  email: string;
  name: string;
  is_active_user: boolean;
  last_login: Date;
  is_not_read_notif_count: number;
  is_supervisor: boolean;
  companies: company[];
  roles: role[];
  groups: group[];
};

type company = {
  company_id: number;
  company_name: string;
  profile_id: number;
  profile_is_active: boolean;
  is_active_company: boolean;
  abbreviation: string;
  email_address: string | null;
  NPWP: string | null;
  logo_url: string | null;
  role_template: any[] | null;
};

type role = any;

type group = {
  role: string;
  permission_level: string;
};
