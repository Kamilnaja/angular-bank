import { Account } from './account.model';

export interface AccountsPayload {
  selectedAccount: Account;
  allAccounts: Account[];
}
