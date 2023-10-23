interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Business Owner', 'HR Manager', 'Payroll Administrator', 'Employee', 'Accountant'],
  tenantName: 'Team',
  applicationName: 'HR Information System',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Read user information',
    'Read team information',
    'Read employee information',
    'Read vacation information',
  ],
  ownerAbilities: ['Manage users', 'Manage teams', 'Manage employees', 'Manage payroll'],
  getQuoteUrl: 'https://app.roq.ai/proposal/bb2af897-a88d-467e-8c42-0071ae4d6a83',
};
